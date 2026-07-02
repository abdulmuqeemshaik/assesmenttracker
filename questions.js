// ════════════════════════════════════════════════════════════════
//  QUESTION BANK  — 40 questions, no API needed, instant load
// ════════════════════════════════════════════════════════════════
const QB = [

/* ── APTITUDE ──────────────────────────────────────────────── */
{cat:'Aptitude',diff:'easy',
 q:'A train travels 60 km in 45 minutes. What is its speed in km/h?',
 opts:['80 km/h','90 km/h','75 km/h','72 km/h'],ans:0,
 exp:'<strong>Speed = Distance ÷ Time.</strong> Convert 45 min to hours: 45/60 = 0.75 h. Speed = 60 ÷ 0.75 = <strong>80 km/h</strong>. Always convert minutes to hours before computing km/h.'},

{cat:'Aptitude',diff:'easy',
 q:'A shopkeeper buys for ₹400 and sells for ₹500. What is the profit %?',
 opts:['20%','25%','30%','15%'],ans:1,
 exp:'<strong>Profit% = (Profit ÷ CP) × 100.</strong> Profit = 500 − 400 = 100. (100 ÷ 400) × 100 = <strong>25%</strong>. Key formula: Profit% is always calculated on Cost Price.'},

{cat:'Aptitude',diff:'medium',
 q:'Two pipes fill a tank in 12 h and 18 h. Together, how long?',
 opts:['7.2 h','8 h','6.5 h','9 h'],ans:0,
 exp:'Combined rate = 1/12 + 1/18 = 3/36 + 2/36 = <strong>5/36 per hour</strong>. Time = 36/5 = <strong>7.2 hours</strong>. Tip: find LCM of 12 and 18 (= 36), use as total capacity.'},

{cat:'Aptitude',diff:'medium',
 q:'Average of 5 numbers is 40. Remove one, average becomes 35. Find the removed number.',
 opts:['50','55','60','65'],ans:2,
 exp:'Total of 5 = 5×40 = 200. Total of 4 = 4×35 = 140. Removed = 200 − 140 = <strong>60</strong>. The difference 200−140 is entirely due to the removed number.'},

{cat:'Aptitude',diff:'easy',
 q:'What is 15% of 240?',
 opts:['36','32','40','30'],ans:0,
 exp:'15% of 240 = (15/100)×240 = 36. <strong>Quick trick:</strong> 10% = 24, 5% = 12, so 15% = 24+12 = <strong>36</strong>.'},

{cat:'Aptitude',diff:'medium',
 q:'A can do a job in 10 days, B in 15 days. Both work 4 days, then A leaves. How many more days for B to finish?',
 opts:['5 days','6 days','7 days','8 days'],ans:0,
 exp:'Together rate = 1/10 + 1/15 = 1/6 per day. In 4 days they complete 4/6 = 2/3. Remaining = 1/3. B alone: (1/3)÷(1/15) = <strong>5 days</strong>.'},

{cat:'Aptitude',diff:'hard',
 q:'A sum doubles in 5 years at simple interest. In how many years will it become 4 times?',
 opts:['10 years','15 years','20 years','12.5 years'],ans:1,
 exp:'Doubles in 5 yrs → interest earned = P in 5 yrs → Rate = 20%/yr. To become 4P, interest needed = 3P. Time = 3P ÷ (P × 0.20) = <strong>15 years</strong>.'},

{cat:'Aptitude',diff:'easy',
 q:'Find the missing number: 2, 6, 12, 20, 30, ___',
 opts:['38','40','42','44'],ans:2,
 exp:'Differences: 4, 6, 8, 10, 12 (increasing by 2). Next = 30+12 = <strong>42</strong>. Pattern: n(n+1) series — 1×2, 2×3, 3×4, 4×5, 5×6, <strong>6×7=42</strong>.'},

{cat:'Aptitude',diff:'medium',
 q:'A clock shows 3:15. What is the angle between hour and minute hands?',
 opts:['0°','7.5°','15°','22.5°'],ans:1,
 exp:'Minute hand at 3:15 → 90°. Hour hand moves 0.5°/min: 3×30 + 15×0.5 = 90 + 7.5 = 97.5°. Angle between them = 97.5 − 90 = <strong>7.5°</strong>.'},

{cat:'Aptitude',diff:'medium',
 q:'A man rows downstream at 10 km/h and upstream at 4 km/h. Speed of current?',
 opts:['3 km/h','6 km/h','7 km/h','2 km/h'],ans:0,
 exp:'Current speed = (Downstream − Upstream) / 2 = (10 − 4) / 2 = <strong>3 km/h</strong>. Boat speed in still water = (10 + 4)/2 = 7 km/h.'},

{cat:'Aptitude',diff:'easy',
 q:'What is the LCM of 12, 18, and 24?',
 opts:['48','72','36','96'],ans:1,
 exp:'12 = 2²×3, 18 = 2×3², 24 = 2³×3. LCM = highest powers: 2³×3² = 8×9 = <strong>72</strong>. LCM is used in pipe, time, and work problems.'},

{cat:'Aptitude',diff:'hard',
 q:'In how many ways can the letters of "MISSISSIPPI" be arranged?',
 opts:['34650','69300','55440','27720'],ans:0,
 exp:'11 letters: M×1, I×4, S×4, P×2. Arrangements = 11! / (4! × 4! × 2!) = 39916800 / (24×24×2) = <strong>34650</strong>. Division removes duplicates caused by repeated letters.'},

{cat:'Aptitude',diff:'medium',
 q:'If 8 workers finish a job in 12 days, how many days for 16 workers?',
 opts:['4 days','6 days','8 days','3 days'],ans:1,
 exp:'Workers × Days = constant (total work). 8×12 = 96 units. 96 ÷ 16 = <strong>6 days</strong>. This is inverse proportion: more workers → fewer days.'},

/* ── VERBAL REASONING ────────────────────────────────────── */
{cat:'Verbal',diff:'easy',
 q:'Choose the word most similar in meaning to: BENEVOLENT',
 opts:['Malicious','Kind','Strict','Indifferent'],ans:1,
 exp:'<strong>Benevolent</strong> = well-meaning and kindly (Latin: bene = well, volens = wishing). Synonyms: generous, charitable, humane. Antonym: malevolent (wishing harm).'},

{cat:'Verbal',diff:'easy',
 q:'Complete the analogy: Doctor : Hospital :: Teacher : ___',
 opts:['Student','Book','School','Classroom'],ans:2,
 exp:'Relationship = professional to their workplace institution. Doctor works in a Hospital; Teacher works in a <strong>School</strong>. Classroom is a room inside a school, not the institution.'},

{cat:'Verbal',diff:'medium',
 q:'Find the odd one out: Rose · Lotus · Tulip · Mango · Lily',
 opts:['Rose','Mango','Tulip','Lily'],ans:1,
 exp:'Rose, Lotus, Tulip, Lily are all <strong>flowers</strong>. <strong>Mango</strong> is a fruit — it belongs to a completely different category (Mangifera indica tree). Odd one out is Mango.'},

{cat:'Verbal',diff:'easy',
 q:'Choose the correctly spelled word:',
 opts:['Accomodation','Acommodation','Accommodation','Acomodation'],ans:2,
 exp:'<strong>Accommodation</strong> — double "c" AND double "m". Memory trick: it has <em>room</em> for 2 C\'s and 2 M\'s, just like a hotel accommodates many guests. Common misspelling: single c or single m.'},

{cat:'Verbal',diff:'medium',
 q:'In a code, "MANGO" is written as "NBNHP". How is "APPLE" written?',
 opts:['BQQMF','BQPMF','BPQLF','ZOPLF'],ans:0,
 exp:'Each letter shifts +1: M→N, A→B, N→O, G→H, O→P. Apply to APPLE: A→B, P→Q, P→Q, L→M, E→F = <strong>BQQMF</strong>. Caesar cipher shifting by 1.'},

{cat:'Verbal',diff:'hard',
 q:'Statements: "All managers are leaders. Some leaders are visionaries. No visionary is complacent." Which is a definite conclusion?',
 opts:['All managers are visionaries','Some managers are visionaries','Some leaders are not complacent','All leaders are managers'],ans:2,
 exp:'Since "some leaders are visionaries" and "no visionary is complacent", those particular leaders (who are visionaries) are not complacent. So <strong>some leaders are not complacent</strong> is definitely true. Others cannot be confirmed.'},

{cat:'Verbal',diff:'easy',
 q:'Choose the antonym of: OBSCURE',
 opts:['Dark','Clear','Hidden','Vague'],ans:1,
 exp:'<strong>Obscure</strong> = not clear, hard to understand. Antonym = <strong>Clear</strong> (obvious, evident). Dark/Hidden/Vague are all synonyms of obscure, not antonyms.'},

{cat:'Verbal',diff:'medium',
 q:'Arrange into a paragraph: (P) He called a doctor. (Q) John felt unwell. (R) Doctor prescribed rest. (S) He had fever.',
 opts:['QPSR','QSPR','SPQR','PSQR'],ans:1,
 exp:'Logical flow: Q (felt unwell) → S (had fever — reason) → P (called doctor — action) → R (doctor prescribed — outcome). Order: <strong>QSPR</strong>. Always identify cause → effect chains.'},

{cat:'Verbal',diff:'medium',
 q:'Choose the sentence that uses "effect" correctly as a verb:',
 opts:[
   'The medicine will effect your mood.',
   'The new policy will effect a major change.',
   'How did the speech effected people?',
   'It had a effecting outcome.'
 ],ans:1,
 exp:'"Effect" as a verb (rare, formal) means "to bring about / cause." "Effect a change" = bring about a change. Usually <em>affect</em> is the verb and <em>effect</em> is the noun. Option B is the only correct formal usage here.'},

{cat:'Verbal',diff:'easy',
 q:'Identify the part of speech: "She runs <u>fast</u>."',
 opts:['Adjective','Noun','Adverb','Verb'],ans:2,
 exp:'"Fast" here tells us <em>how</em> she runs — it modifies the verb "runs" → it is an <strong>Adverb</strong>. Compare: "She is a <u>fast</u> runner" — here fast modifies the noun "runner" → Adjective.'},

{cat:'Verbal',diff:'medium',
 q:'Despite heavy rain, the team showed _____ determination.',
 opts:['wavering','resolute','feeble','reluctant'],ans:1,
 exp:'The sentence contrasts adversity (heavy rain) with strong will. <strong>Resolute</strong> = admirably firm and determined. Wavering/feeble/reluctant all suggest weakness — opposite of what the sentence implies.'},

{cat:'Verbal',diff:'hard',
 q:'Choose the word that does NOT belong: Simile, Metaphor, Synonym, Hyperbole, Alliteration',
 opts:['Simile','Synonym','Metaphor','Alliteration'],ans:1,
 exp:'Simile, Metaphor, Hyperbole, and Alliteration are all <strong>literary/rhetorical figures of speech</strong>. <strong>Synonym</strong> is a vocabulary/language concept (a word with the same meaning), not a figure of speech. Hence, Synonym is the odd one out.'},

/* ── CODING ───────────────────────────────────────────────── */
{cat:'Coding',diff:'easy',
 q:'What is the output of this Python code?',
 code:'x = [1, 2, 3]\ny = x\ny.append(4)\nprint(x)',
 opts:['[1, 2, 3]','[1, 2, 3, 4]','Error','[4]'],ans:1,
 exp:'<code>y = x</code> does <strong>not copy the list</strong> — both names point to the same object in memory. So appending to y also appends to x. Output: <strong>[1, 2, 3, 4]</strong>. To copy: <code>y = x.copy()</code> or <code>y = x[:]</code>.'},

{cat:'Coding',diff:'easy',
 q:'What is the time complexity of Binary Search on a sorted array of n elements?',
 opts:['O(n)','O(n²)','O(log n)','O(n log n)'],ans:2,
 exp:'Binary search halves the search space each step: n → n/2 → n/4 → 1. This takes at most log₂(n) steps. Time = <strong>O(log n)</strong>. Compare: Linear search = O(n). That is why sorted arrays + binary search is powerful.'},

{cat:'Coding',diff:'medium',
 q:'What does this JavaScript code output?',
 code:'console.log(typeof null)',
 opts:['"null"','"undefined"','"object"','"boolean"'],ans:2,
 exp:'This is a <strong>famous JavaScript bug</strong> from 1995 that was never fixed for backward compatibility. <code>typeof null</code> returns <strong>"object"</strong>. To correctly check for null use: <code>value === null</code> (strict equality).'},

{cat:'Coding',diff:'medium',
 q:'Which data structure uses LIFO (Last In, First Out)?',
 opts:['Queue','Stack','Heap','Linked List'],ans:1,
 exp:'A <strong>Stack</strong> = LIFO (like a stack of plates). A Queue = FIFO. Real-world stack uses: function call stack, undo/redo, browser back button, expression parsing. Operations: push (add) / pop (remove from top).'},

{cat:'Coding',diff:'hard',
 q:'What is the output of this code?',
 code:'def f(x, lst=[]):\n    lst.append(x)\n    return lst\n\nprint(f(1))\nprint(f(2))',
 opts:['[1] then [2]','[1] then [1, 2]','Error','[1] then [2, 2]'],ans:1,
 exp:'<strong>Mutable default arguments are created ONCE</strong> when the function is defined, not per call. The same list object is reused every call. Fix: <code>def f(x, lst=None): if lst is None: lst = []</code>. This is a classic Python gotcha.'},

{cat:'Coding',diff:'medium',
 q:'What is the worst-case time complexity of QuickSort?',
 opts:['O(n log n)','O(n)','O(n²)','O(log n)'],ans:2,
 exp:'Worst case = <strong>O(n²)</strong>, when pivot is always the min or max (e.g., already-sorted array with naive first-element pivot). Average case = O(n log n). Fix: use randomized pivot or median-of-three selection.'},

{cat:'Coding',diff:'easy',
 q:'What keyword handles exceptions in Python?',
 opts:['catch','except','handle','error'],ans:1,
 exp:'Python uses <code>try / except / else / finally</code>. Java and JavaScript use <code>try/catch</code>. <code>else</code> runs if no exception occurred; <code>finally</code> always runs. Example: <code>except ValueError as e: print(e)</code>.'},

{cat:'Coding',diff:'hard',
 q:'Which algorithm finds shortest path in a weighted graph with non-negative edges?',
 opts:['DFS','BFS','Dijkstra\'s','Bellman-Ford'],ans:2,
 exp:'<strong>Dijkstra\'s algorithm</strong> uses a min-priority queue to greedily expand the nearest unvisited node. Time: O((V+E) log V). Bellman-Ford handles negative weights O(VE). BFS only works for unweighted graphs.'},

{cat:'Coding',diff:'medium',
 q:'What is printed?',
 code:'for i in range(3):\n    pass\nprint(i)',
 opts:['2','3','NameError: i is not defined','0'],ans:0,
 exp:'In Python, loop variables are <strong>not scoped to the loop block</strong> — they persist after the loop. <code>range(3)</code> = 0,1,2. Last value assigned to <code>i</code> is <strong>2</strong>. In Java/C++, the loop variable would be out of scope after the loop.'},

{cat:'Coding',diff:'medium',
 q:'What is a "closure" in programming?',
 opts:[
   'A function that returns void',
   'A function that retains access to its enclosing scope even after that scope has returned',
   'A sealed class in OOP',
   'A method that closes a file handle'
 ],ans:1,
 exp:'A <strong>closure</strong> "closes over" variables from its surrounding lexical scope. The inner function remembers its environment. Used in: JavaScript event handlers, React hooks, Python decorators, currying. Classic example: <code>counter = make_counter()</code>.'},

{cat:'Coding',diff:'easy',
 q:'Which sort is best for nearly-sorted data?',
 opts:['Bubble Sort','Insertion Sort','Selection Sort','Merge Sort'],ans:1,
 exp:'<strong>Insertion Sort</strong> is O(n) on already-sorted data — it makes at most 1 comparison per element. It is <em>adaptive</em>: fewer inversions = faster. Merge Sort is always O(n log n) regardless of input order.'},

{cat:'Coding',diff:'hard',
 q:'What is the output of:',
 code:'print(0.1 + 0.2 == 0.3)',
 opts:['True','False','Error','None'],ans:1,
 exp:'<strong>False.</strong> Floating-point numbers are stored in binary (IEEE 754). 0.1 and 0.2 have no exact binary representation, so 0.1+0.2 = 0.30000000000000004 ≠ 0.3. Fix: <code>import math; math.isclose(0.1+0.2, 0.3)</code> or use the <code>decimal</code> module.'},

{cat:'Coding',diff:'medium',
 q:'What does O(1) space complexity mean?',
 opts:[
   'The algorithm uses one variable only',
   'The algorithm runs in constant time',
   'The algorithm uses a fixed amount of extra memory regardless of input size',
   'The algorithm has one loop'
 ],ans:2,
 exp:'<strong>O(1) space</strong> means the amount of extra memory used does not grow with input size — it is constant. The input itself is not counted. Example: in-place sorting uses O(1) extra space; merge sort uses O(n) extra space.'},

{cat:'Coding',diff:'hard',
 q:'What does this print?',
 code:'x = 5\ndef foo():\n    print(x)\n    x = 10\nfoo()',
 opts:['5','10','None','UnboundLocalError'],ans:3,
 exp:'Python sees <code>x = 10</code> inside <code>foo</code> and treats <code>x</code> as a <strong>local variable</strong> for the entire function. When <code>print(x)</code> runs, the local <code>x</code> exists but hasn\'t been assigned yet → <strong>UnboundLocalError</strong>. Fix: use <code>global x</code> or pass x as parameter.'},

{cat:'Coding',diff:'easy',
 q:'What is the output?',
 code:'print(len("Hello World"))',
 opts:['10','11','5','12'],ans:1,
 exp:'"Hello World" has: H-e-l-l-o (5) + space (1) + W-o-r-l-d (5) = <strong>11 characters</strong>. The space is a character and is counted. <code>len()</code> counts all characters including spaces.'},

/* ── APTITUDE (extra) ─────────────────────────────────────── */
{cat:'Aptitude',diff:'easy',
 q:'A number increased by 20% gives 150. Find the original number.',
 opts:['125','120','130','135'],ans:0,
 exp:'Let the number be x. x + 20% of x = 150 → 1.2x = 150 → x = <strong>125</strong>. Always convert "increased by" into a multiplier (1 + rate) before dividing.'},

{cat:'Aptitude',diff:'easy',
 q:'₹900 is divided among A, B, C in the ratio 2:3:4. Find C\'s share.',
 opts:['₹400','₹300','₹200','₹450'],ans:0,
 exp:'Total parts = 2+3+4 = 9. C\'s share = (4/9) × 900 = <strong>₹400</strong>. Always find total parts first, then multiply the fraction by the whole amount.'},

{cat:'Aptitude',diff:'medium',
 q:'A father is 3 times as old as his son. In 5 years, he will be 2.5 times as old. Find the son\'s current age.',
 opts:['15 years','10 years','12 years','20 years'],ans:0,
 exp:'Let son = x, father = 3x. In 5 yrs: 3x+5 = 2.5(x+5) → 3x+5 = 2.5x+12.5 → 0.5x = 7.5 → x = <strong>15</strong>. Set up both ages algebraically before applying the future condition.'},

{cat:'Aptitude',diff:'hard',
 q:'A is twice as efficient as B. Working together they finish a job in 6 days. How long would A alone take?',
 opts:['9 days','12 days','18 days','6 days'],ans:0,
 exp:'Let B\'s rate = x, A\'s rate = 2x. Combined = 3x = 1/6 → x = 1/18. A\'s rate = 2/18 = 1/9 → A alone takes <strong>9 days</strong>. Efficiency ratios convert directly into work-rate ratios.'},

{cat:'Aptitude',diff:'medium',
 q:'Find the missing number: 3, 7, 15, 31, 63, ___',
 opts:['127','120','125','130'],ans:0,
 exp:'Pattern: each term = previous × 2 + 1. 63×2+1 = <strong>127</strong>. Check: 3×2+1=7, 7×2+1=15, 15×2+1=31, 31×2+1=63 — confirms the rule.'},

{cat:'Aptitude',diff:'easy',
 q:'A bag has 4 red and 6 blue balls. What is the probability of drawing a red ball?',
 opts:['40%','60%','50%','25%'],ans:0,
 exp:'P(red) = favorable ÷ total = 4/10 = <strong>40%</strong>. Total balls = 4+6 = 10; only the red count goes in the numerator.'},

{cat:'Aptitude',diff:'easy',
 q:'Find the simple interest on ₹2000 at 5% per annum for 3 years.',
 opts:['₹300','₹250','₹350','₹400'],ans:0,
 exp:'SI = (P × R × T) / 100 = (2000 × 5 × 3) / 100 = <strong>₹300</strong>. Simple interest grows linearly — unlike compound interest, the base never changes.'},

{cat:'Aptitude',diff:'medium',
 q:'How many 3-letter arrangements can be made from the letters A, B, C, D, E without repetition?',
 opts:['60','120','10','20'],ans:0,
 exp:'This is a permutation: <sup>5</sup>P<sub>3</sub> = 5×4×3 = <strong>60</strong>. Order matters here (arrangements), so use permutations, not combinations.'},

/* ── VERBAL (extra) ───────────────────────────────────────── */
{cat:'Verbal',diff:'medium',
 q:'Choose the synonym of: EPHEMERAL',
 opts:['Permanent','Transient','Ancient','Robust'],ans:1,
 exp:'<strong>Ephemeral</strong> means lasting for a very short time. <strong>Transient</strong> shares this meaning (fleeting, brief). Permanent is its actual antonym.'},

{cat:'Verbal',diff:'easy',
 q:'Complete the analogy: Pen : Write :: Knife : ___',
 opts:['Sharpen','Cut','Kitchen','Blade'],ans:1,
 exp:'The relationship is tool → its primary function. A pen is used to write; a knife is used to <strong>cut</strong>. "Kitchen" and "Blade" describe the object, not its function.'},

{cat:'Verbal',diff:'easy',
 q:'Find the odd one out: Triangle · Wood · Square · Circle',
 opts:['Triangle','Wood','Square','Circle'],ans:1,
 exp:'Triangle, Square, and Circle are all <strong>shapes</strong>. <strong>Wood</strong> is a material, not a shape — it belongs to a completely different category.'},

{cat:'Verbal',diff:'medium',
 q:'Choose the grammatically correct sentence:',
 opts:[
   'Neither of the boys were present.',
   'Neither of the boys was present.',
   'Neither of the boy was present.',
   'Neither of boys was present.'
 ],ans:1,
 exp:'"Neither" is singular and takes a singular verb — <strong>"was"</strong>, not "were." "Neither of the boys <em>was</em> present" is correct subject-verb agreement.'},

{cat:'Verbal',diff:'easy',
 q:'What does the idiom "break the ice" mean?',
 opts:['To start a conversation','To end a fight','To destroy something','To feel cold'],ans:0,
 exp:'"Break the ice" means to <strong>ease initial tension and start a conversation</strong>, often in an awkward or unfamiliar social situation. It has nothing literal to do with ice.'},

{cat:'Verbal',diff:'hard',
 q:'If all Bloops are Razzies, and all Razzies are Lazzies, which must be true?',
 opts:['All Bloops are Lazzies','All Lazzies are Bloops','No Bloops are Lazzies','Cannot be determined'],ans:0,
 exp:'This is a transitive chain: Bloops ⊂ Razzies ⊂ Lazzies. Therefore <strong>all Bloops are Lazzies</strong> follows logically. The reverse (all Lazzies are Bloops) is not guaranteed.'},

{cat:'Verbal',diff:'medium',
 q:'Choose the antonym of: AMPLE',
 opts:['Scarce','Abundant','Large','Plenty'],ans:0,
 exp:'<strong>Ample</strong> means more than enough. Its opposite is <strong>Scarce</strong> (insufficient, in short supply). Abundant, Large, and Plenty are all synonyms of ample, not antonyms.'},

/* ── CODING (extra) ───────────────────────────────────────── */
{cat:'Coding',diff:'hard',
 q:'What is the output of this Python code?',
 code:'print(2 ** 3 ** 2)',
 opts:['512','64','81','72'],ans:0,
 exp:'The exponent operator <code>**</code> is <strong>right-associative</strong> in Python, so this evaluates as 2 ** (3 ** 2) = 2 ** 9 = <strong>512</strong>, not (2**3)**2 = 64.'},

{cat:'Coding',diff:'medium',
 q:'Which sorting algorithm is stable by default (equal elements keep their original relative order)?',
 opts:['QuickSort','HeapSort','Merge Sort','Selection Sort'],ans:2,
 exp:'<strong>Merge Sort</strong> is stable because it always takes from the left sub-array first when values are equal during the merge step. QuickSort, HeapSort, and Selection Sort are not stable by default.'},

{cat:'Coding',diff:'easy',
 q:'What does an SQL JOIN do?',
 opts:['Combines rows from two or more tables based on a related column','Deletes duplicate rows','Sorts a table alphabetically','Creates a new database'],ans:0,
 exp:'A <strong>JOIN</strong> combines rows from multiple tables using a shared key (e.g. matching an <code>orders.user_id</code> to <code>users.id</code>). Common types: INNER, LEFT, RIGHT, FULL JOIN.'},

{cat:'Coding',diff:'easy',
 q:'What is the time complexity of accessing an element in an array by its index?',
 opts:['O(1)','O(n)','O(log n)','O(n²)'],ans:0,
 exp:'Arrays store elements in contiguous memory, so the address of any index can be computed directly — <strong>O(1)</strong> constant time. This differs from a linked list, where access is O(n).'},

{cat:'Coding',diff:'medium',
 q:'What is the output of this code?',
 code:'print(bool(""))',
 opts:['True','False','Error','None'],ans:1,
 exp:'An empty string is one of Python\'s "falsy" values (along with 0, None, [], {}). <code>bool("")</code> evaluates to <strong>False</strong>. A non-empty string like <code>bool("a")</code> would be True.'},

{cat:'Coding',diff:'medium',
 q:'Which HTTP method is idempotent (repeating the same request has no additional effect)?',
 opts:['GET','POST','PATCH','CONNECT'],ans:0,
 exp:'<strong>GET</strong> is idempotent and safe — it only retrieves data and never changes server state, so repeating it is harmless. POST typically creates a new resource each time it is called.'},

];
