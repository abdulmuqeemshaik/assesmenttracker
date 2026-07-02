// app.js — Adaptive Assessment Engine core logic

// ════════════════════════════════════════════════════════════════
//  STATE
// ════════════════════════════════════════════════════════════════
const state = {
  category:'all', total:10,
  questions:[], index:0, history:[],
  timerSec:0, timerRef:null, answered:false,
  userName:''
};

const STORAGE_KEY = 'assessmentEngine.history';
const NAME_KEY = 'assessmentEngine.userName';

// ════════════════════════════════════════════════════════════════
//  STORAGE HELPERS  (all data stays in this browser only)
// ════════════════════════════════════════════════════════════════
function safeGetJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    console.warn('Storage read failed for', key, e);
    return fallback;
  }
}
function safeSetJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (e) {
    console.warn('Storage write failed for', key, e);
    return false;
  }
}
function getAttempts() { return safeGetJSON(STORAGE_KEY, []); }
function saveAttempt(record) {
  const attempts = getAttempts();
  attempts.unshift(record);
  safeSetJSON(STORAGE_KEY, attempts.slice(0, 20)); // keep last 20
}
function clearHistory() {
  try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
  renderStatsAndHistory();
}

// ════════════════════════════════════════════════════════════════
//  ENTRY / GUEST NAME
//  Note: this is NOT authentication. There is no password and no
//  server. It only personalizes the greeting and labels local
//  history entries with a name.
// ════════════════════════════════════════════════════════════════
function doLogin() {
  const input = document.getElementById('login-user');
  const name = input.value.trim();
  const err = document.getElementById('login-error');

  if (!name) {
    err.style.display = 'block';
    const box = document.querySelector('.login-box');
    box.style.animation = 'shake .3s ease';
    setTimeout(() => { box.style.animation = ''; }, 300);
    input.focus();
    return;
  }

  err.style.display = 'none';
  state.userName = name;
  safeSetJSON(NAME_KEY, name);

  const screen = document.getElementById('login-screen');
  screen.style.animation = 'loginOut .4s ease forwards';
  setTimeout(() => screen.remove(), 400);

  renderStatsAndHistory();
}

// ════════════════════════════════════════════════════════════════
//  SETUP (category / count pickers — accessible radiogroups)
// ════════════════════════════════════════════════════════════════
function selectCat(cat, el) {
  document.querySelectorAll('.cat-card').forEach(c => {
    c.classList.remove('selected');
    c.setAttribute('aria-checked', 'false');
  });
  el.classList.add('selected');
  el.setAttribute('aria-checked', 'true');
  state.category = cat;
}
function catKey(evt, cat, el) {
  if (evt.key === 'Enter' || evt.key === ' ') {
    evt.preventDefault();
    selectCat(cat, el);
  }
}
function selectCount(n, el) {
  document.querySelectorAll('.qbtn').forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-checked', 'false');
  });
  el.classList.add('active');
  el.setAttribute('aria-checked', 'true');
  state.total = n;
}

// ════════════════════════════════════════════════════════════════
//  STATS + HISTORY PANEL  (start screen)
// ════════════════════════════════════════════════════════════════
function renderStatsAndHistory() {
  const attempts = getAttempts();
  const statsBox = document.getElementById('user-stats');
  const panel = document.getElementById('history-panel');
  const list = document.getElementById('history-list');

  if (attempts.length === 0) {
    statsBox.classList.add('hidden');
    panel.classList.add('hidden');
    return;
  }

  const scores = attempts.map(a => a.score);
  const best = Math.max(...scores);
  const avg = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);

  statsBox.classList.remove('hidden');
  statsBox.innerHTML = `
    <div class="stat-chip"><div class="stat-chip-val">${attempts.length}</div><div class="stat-chip-label">Attempts</div></div>
    <div class="stat-chip"><div class="stat-chip-val">${best}%</div><div class="stat-chip-label">Best Score</div></div>
    <div class="stat-chip"><div class="stat-chip-val">${avg}%</div><div class="stat-chip-label">Average</div></div>`;

  panel.classList.remove('hidden');
  list.innerHTML = attempts.slice(0, 5).map(a => `
    <div class="history-item">
      <span class="history-item-left">${escH(a.date)} &nbsp;·&nbsp; ${escH(a.category)} &nbsp;·&nbsp; ${a.correct}/${a.total} correct</span>
      <span class="history-item-score">${a.score}%</span>
    </div>`).join('');
}

// ════════════════════════════════════════════════════════════════
//  START
// ════════════════════════════════════════════════════════════════
function startAssessment() {
  const catMap = {aptitude:'Aptitude',verbal:'Verbal',coding:'Coding'};
  let pool = state.category==='all' ? QB : QB.filter(q=>q.cat===catMap[state.category]);
  pool = [...pool].sort(()=>Math.random()-.5);
  state.questions = pool.slice(0, Math.min(state.total, pool.length));
  state.total = state.questions.length;
  state.index = 0; state.history = []; state.timerSec = 0; state.answered = false;

  document.getElementById('start-screen').classList.add('hidden');
  document.getElementById('assessment-screen').classList.remove('hidden');

  const cl = {all:'MIXED',aptitude:'APTITUDE',verbal:'VERBAL',coding:'CODING'};
  document.getElementById('cat-tag').innerText = cl[state.category];

  clearInterval(state.timerRef);
  state.timerRef = setInterval(()=>{
    state.timerSec++;
    const m=String(Math.floor(state.timerSec/60)).padStart(2,'0');
    const s=String(state.timerSec%60).padStart(2,'0');
    document.getElementById('timer').innerText=m+':'+s;
  },1000);

  renderQuestion();
}

// ════════════════════════════════════════════════════════════════
//  RENDER QUESTION
// ════════════════════════════════════════════════════════════════
function renderQuestion() {
  const q = state.questions[state.index];
  state.answered = false;
  const pct = state.index/state.total*100;
  document.getElementById('prog-fill').style.width = pct + '%';
  document.getElementById('prog-track').setAttribute('aria-valuenow', Math.round(pct));
  document.getElementById('progress-text').innerText=`Q ${state.index+1} / ${state.total}`;

  const L=['A','B','C','D'];
  const optHTML = q.opts.map((o,i)=>`
    <div class="opt" id="opt${i}" role="radio" aria-checked="false" tabindex="0"
         onclick="handleAnswer(${i})" onkeydown="optKey(event,${i})">
      <span class="opt-label">${L[i]}</span>
      <span class="opt-text">${escH(o)}</span>
      <span class="opt-icon" aria-hidden="true"></span>
    </div>`).join('');

  const codeHTML = q.code ? `<div class="code-block">${escH(q.code)}</div>` : '';

  document.getElementById('q-card').innerHTML = `
    <div style="margin-bottom:14px;">
      <span class="diff-badge ${q.diff}">${q.diff.toUpperCase()}</span>
      <span class="topic-badge">${q.cat}</span>
    </div>
    <div id="question-text">${escH(q.q)}</div>
    ${codeHTML}
    <div class="opts" role="radiogroup" aria-label="Answer options">${optHTML}</div>
    <div id="exp-area" aria-live="polite"></div>
    <div class="next-row">
      <button class="btn-next" id="btn-next" onclick="nextQuestion()">Next Question →</button>
    </div>`;

  // Move focus to the question for screen-reader / keyboard users
  const qCard = document.getElementById('q-card');
  qCard.setAttribute('tabindex', '-1');
  qCard.focus({preventScroll:true});
}

function escH(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}

function optKey(evt, i) {
  if (evt.key === 'Enter' || evt.key === ' ') {
    evt.preventDefault();
    handleAnswer(i);
  }
}

// ════════════════════════════════════════════════════════════════
//  HANDLE ANSWER
// ════════════════════════════════════════════════════════════════
function handleAnswer(chosen) {
  if (state.answered) return;
  state.answered = true;
  const q = state.questions[state.index];
  const correct = chosen === q.ans;

  document.querySelectorAll('.opt').forEach(o=>{
    o.classList.add('disabled');
    o.onclick=null;
    o.setAttribute('tabindex','-1');
  });
  document.getElementById('opt'+chosen).classList.add(correct?'correct':'incorrect');
  document.getElementById('opt'+chosen).setAttribute('aria-checked','true');
  if (!correct) document.getElementById('opt'+q.ans).classList.add('correct');

  state.history.push({correct,cat:q.cat,diff:q.diff,q:q.q,chosen,ans:q.ans,opts:q.opts,exp:q.exp});

  document.getElementById('exp-area').innerHTML=`
    <div class="exp-box">
      <div class="exp-header">💡 Explanation</div>
      <div class="exp-body">${q.exp}</div>
    </div>`;

  const nb=document.getElementById('btn-next');
  nb.style.display='block';
  nb.innerText = state.index+1>=state.total ? 'View Results →' : 'Next Question →';
  nb.focus();
}

// ════════════════════════════════════════════════════════════════
//  NEXT
// ════════════════════════════════════════════════════════════════
function nextQuestion() {
  state.index++;
  if (state.index>=state.total) { clearInterval(state.timerRef); showResults(); }
  else renderQuestion();
}

// ════════════════════════════════════════════════════════════════
//  RESULTS
// ════════════════════════════════════════════════════════════════
function showResults() {
  document.getElementById('assessment-screen').classList.add('hidden');
  document.getElementById('results-screen').classList.remove('hidden');

  const h=state.history;
  const correct=h.filter(x=>x.correct).length;
  const score=Math.round(correct/state.total*100);
  const mins=Math.floor(state.timerSec/60), secs=state.timerSec%60;

  document.getElementById('score-badge').innerText=score+'%';
  document.getElementById('results-meta').innerHTML=`
    <div class="rmeta"><div class="rmeta-val g">${correct}</div><div class="rmeta-label">Correct</div></div>
    <div class="rmeta"><div class="rmeta-val r">${state.total-correct}</div><div class="rmeta-label">Incorrect</div></div>
    <div class="rmeta"><div class="rmeta-val o">${score}%</div><div class="rmeta-label">Score</div></div>
    <div class="rmeta"><div class="rmeta-val" style="color:var(--blue)">${mins}m ${secs}s</div><div class="rmeta-label">Time</div></div>`;

  // persist this attempt locally
  const cl = {all:'Mixed',aptitude:'Aptitude',verbal:'Verbal',coding:'Coding'};
  saveAttempt({
    date: new Date().toLocaleDateString(undefined, {month:'short', day:'numeric', year:'numeric'}),
    category: cl[state.category] || 'Mixed',
    correct, total: state.total, score
  });

  renderCharts(h, score);
  renderReview(h);
}

function chartsAvailable() { return typeof Chart !== 'undefined'; }
function pdfAvailable() { return typeof window.jspdf !== 'undefined'; }

function renderCharts(h, score) {
  const fallback = document.getElementById('chart-fallback');
  const grid = document.getElementById('charts-grid');

  if (!chartsAvailable()) {
    // CDN blocked or offline — degrade gracefully instead of a silent broken screen
    fallback.classList.remove('hidden');
    grid.classList.add('hidden');
    return;
  }
  fallback.classList.add('hidden');
  grid.classList.remove('hidden');

  const cats=['Aptitude','Verbal','Coding'];
  const catStats=cats.map(c=>{
    const qs=h.filter(x=>x.cat===c);
    return {cat:c,total:qs.length,correct:qs.filter(x=>x.correct).length};
  }).filter(c=>c.total>0);

  const orange='#ffa116',green='#00b8a3',red='#ef4743';
  const muted='#3a3a3a',text='#9a9a9a';
  Chart.defaults.color=text; Chart.defaults.borderColor=muted;

  new Chart(document.getElementById('scorePie'),{
    type:'doughnut',
    data:{labels:['Correct','Incorrect'],datasets:[{data:[score,100-score],backgroundColor:[orange,'#2a2a2a'],borderWidth:0,hoverOffset:4}]},
    options:{cutout:'70%',plugins:{legend:{position:'bottom',labels:{color:text,boxWidth:11,padding:14}}}}
  });

  new Chart(document.getElementById('accuracyChart'),{
    type:'line',
    data:{labels:h.map((_,i)=>'Q'+(i+1)),
      datasets:[{label:'',data:h.map(x=>x.correct?1:0),borderColor:green,
        backgroundColor:'rgba(0,184,163,0.07)',
        pointBackgroundColor:h.map(x=>x.correct?green:red),
        pointRadius:5,pointBorderColor:'transparent',tension:.35,fill:true}]},
    options:{scales:{y:{display:false,grid:{display:false}},
      x:{ticks:{color:text,font:{family:"'JetBrains Mono'",size:10}},grid:{color:muted}}},
      plugins:{legend:{display:false}}}
  });

  new Chart(document.getElementById('categoryChart'),{
    type:'bar',
    data:{labels:catStats.map(c=>c.cat),
      datasets:[
        {label:'Correct',data:catStats.map(c=>c.correct),backgroundColor:green,borderRadius:4,borderWidth:0},
        {label:'Wrong',data:catStats.map(c=>c.total-c.correct),backgroundColor:red,borderRadius:4,borderWidth:0}
      ]},
    options:{scales:{x:{stacked:true,ticks:{color:text},grid:{display:false}},
      y:{stacked:true,ticks:{color:text},grid:{color:muted}}},
      plugins:{legend:{labels:{color:text,boxWidth:11}}}}
  });

  const easy=h.filter(x=>x.diff==='easy'),med=h.filter(x=>x.diff==='medium'),hard=h.filter(x=>x.diff==='hard');
  new Chart(document.getElementById('diffChart'),{
    type:'bar',
    data:{labels:['Easy','Medium','Hard'],
      datasets:[
        {label:'Correct',data:[easy.filter(x=>x.correct).length,med.filter(x=>x.correct).length,hard.filter(x=>x.correct).length],backgroundColor:green,borderRadius:4,borderWidth:0},
        {label:'Wrong',data:[easy.filter(x=>!x.correct).length,med.filter(x=>!x.correct).length,hard.filter(x=>!x.correct).length],backgroundColor:red,borderRadius:4,borderWidth:0}
      ]},
    options:{scales:{x:{stacked:true,ticks:{color:text},grid:{display:false}},
      y:{stacked:true,ticks:{color:text},grid:{color:muted}}},
      plugins:{legend:{labels:{color:text,boxWidth:11}}}}
  });
}

function renderReview(h) {
  const L=['A','B','C','D'];
  document.getElementById('review-list').innerHTML=h.map((item,i)=>`
    <div class="review-item" role="button" tabindex="0" aria-expanded="false" id="ri${i}"
         onclick="toggleReview(${i})" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();toggleReview(${i})}">
      <div class="ri-top">
        <span class="ri-num">Q${i+1}</span>
        <span class="ri-status ${item.correct?'c':'w'}">${item.correct?'✓ Correct':'✗ Wrong'}</span>
        <span style="font-family:var(--mono);font-size:.68rem;color:var(--t2);background:var(--bg3);padding:2px 8px;border-radius:3px;">${item.cat}</span>
        <span style="font-family:var(--mono);font-size:.65rem;color:var(--t3);">${item.diff}</span>
      </div>
      <div class="ri-q">${escH(item.q)}</div>
      <div class="ri-detail" id="rd${i}">
        <div style="margin-bottom:10px;">
          ${item.opts.map((o,oi)=>`<div style="padding:4px 0;color:${oi===item.ans?'var(--green)':oi===item.chosen&&!item.correct?'var(--red)':'var(--t3)'};">
            ${L[oi]}. ${escH(o)}${oi===item.ans?' &nbsp;← correct answer':''}${oi===item.chosen&&!item.correct?' &nbsp;← your answer':''}
          </div>`).join('')}
        </div>
        <div style="padding-top:10px;border-top:1px solid var(--border);line-height:1.7;">${item.exp}</div>
      </div>
    </div>`).join('');
}

function toggleReview(i){
  const detail = document.getElementById('rd'+i);
  const row = document.getElementById('ri'+i);
  const open = detail.classList.toggle('open');
  row.setAttribute('aria-expanded', open ? 'true' : 'false');
}

// ════════════════════════════════════════════════════════════════
//  PDF
// ════════════════════════════════════════════════════════════════
function exportPDF(){
  if (!pdfAvailable()) {
    alert('The PDF export library could not load (offline or the CDN is blocked). Please check your connection and try again.');
    return;
  }
  const {jsPDF}=window.jspdf; const doc=new jsPDF();
  const h=state.history;
  const correct=h.filter(x=>x.correct).length;
  const score=Math.round(correct/state.total*100);
  doc.setFontSize(18); doc.setTextColor(255,161,22);
  doc.text('Assessment Report',20,22);
  doc.setTextColor(200,200,200); doc.setFontSize(11);
  doc.text(`Score: ${score}%  |  ${correct}/${state.total} correct  |  Time: ${Math.floor(state.timerSec/60)}m ${state.timerSec%60}s`,20,32);
  let y=46;
  h.forEach((item,i)=>{
    if(y>260){doc.addPage();y=20;}
    doc.setFontSize(10);
    doc.setTextColor(...(item.correct?[0,184,163]:[239,71,67]));
    doc.text(`Q${i+1} [${item.cat}] ${item.correct?'CORRECT':'WRONG'}`,20,y); y+=6;
    doc.setTextColor(220,220,220);
    const ql=doc.splitTextToSize(item.q,165); doc.text(ql,20,y); y+=ql.length*5+3;
    doc.setTextColor(150,150,150);
    const el=doc.splitTextToSize(item.exp.replace(/<[^>]*>/g,''),165);
    doc.text(el,20,y); y+=el.length*5+10;
  });
  doc.save('assessment_report.pdf');
}

if (!pdfAvailable()) {
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn-pdf');
    if (btn) btn.title = 'PDF library unavailable offline — will retry when online';
  });
}

// ════════════════════════════════════════════════════════════════
//  RESTART  (soft reset — keeps name + history, no full reload)
// ════════════════════════════════════════════════════════════════
function restart() {
  document.getElementById('results-screen').classList.add('hidden');
  document.getElementById('start-screen').classList.remove('hidden');
  renderStatsAndHistory();
}

// ════════════════════════════════════════════════════════════════
//  INIT
// ════════════════════════════════════════════════════════════════
(function init() {
  document.querySelector('.cat-card.all').classList.add('selected');

  const savedName = safeGetJSON(NAME_KEY, '');
  if (savedName) {
    document.getElementById('login-user').value = savedName;
  }
})();
