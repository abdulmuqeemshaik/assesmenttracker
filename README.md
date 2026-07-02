# Adaptive Assessment Engine (v3.0)

A self-contained quiz app (Aptitude / Verbal / Coding) with charts, a PDF report export,
local history tracking, keyboard/screen-reader accessibility, and a responsive mobile layout.

## What's new in v3.0

- **61 questions** (up from 40), ~20 per category.
- **No fake login.** The old demo username/password screen implied real security it
  didn't have. It's now a simple name-entry step, clearly labeled as local-only
  personalization — no account, no password, nothing sent to a server.
- **Local history & stats**, via `localStorage`: best score, average score, and your
  last 5 attempts appear on the start screen. Data never leaves your browser and can
  be cleared anytime with the "Clear History" button.
- **Fully responsive.** Single-column layout, larger tap targets, and reflowed buttons
  below 640px width.
- **Accessible by keyboard and screen reader:** every category card, quiz option, and
  review row is focusable and operable with Enter/Space; answers are announced via
  `aria-live`; correct/incorrect answers are marked with a ✓/✗ icon, not color alone;
  visible focus outlines throughout.
- **Graceful CDN failure handling.** If Chart.js or jsPDF can't load (offline, blocked
  network, ad-blocker), the app shows a clear inline message instead of a silently
  broken results screen, and the PDF button explains itself instead of throwing an
  error.

All of the above was verified with an automated headless-browser test (login → quiz →
results → charts → PDF → keyboard navigation → mobile viewport) before delivery.

## Why your original file probably failed to host

Your file was named **`INDEX.html`** (uppercase). GitHub Pages only auto-serves a file
named exactly **`index.html`** (all lowercase) at the root of the repo/branch. Linux-based
servers (which GitHub Pages uses) are case-sensitive, so `INDEX.html` is treated as a
completely different, non-default file — the site loads a blank 404 instead. That single
naming issue is the most common cause of "my HTML won't host on GitHub Pages."

This package fixes that, and also splits the one giant file into separate CSS/JS files
so it's easier to maintain and debug going forward.

## File structure

```
index.html      → page markup only, links to the files below
style.css       → all styling
questions.js    → the 40-question question bank (data only)
app.js          → app logic (state, rendering, scoring, charts, PDF export, login)
```

Chart.js and jsPDF are still loaded from their CDNs via `<script>` tags in `index.html`,
same as your original.

## How to publish on GitHub Pages

1. Create a new repository on GitHub (e.g. `assessment-engine`).
2. Add these four files (`index.html`, `style.css`, `questions.js`, `app.js`) to the
   **root** of the repo — don't put them in a subfolder unless you adjust the paths.
3. Commit and push:
   ```bash
   git init
   git add index.html style.css questions.js app.js README.md
   git commit -m "Initial commit: Adaptive Assessment Engine"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
4. On GitHub: go to **Settings → Pages**.
5. Under "Build and deployment" → Source, choose **Deploy from a branch**.
6. Branch: `main`, folder: `/ (root)` → **Save**.
7. Wait ~1 minute, then your site will be live at:
   `https://<your-username>.github.io/<your-repo>/`

## Entry screen (not a login)

The app asks for a name before starting. This is **not authentication** — there's no
password and no server. It exists purely to label your local history entries and
personalize the greeting. If you need real user accounts, you'll need to add a backend
(e.g. Firebase Auth, Supabase, or your own API) — this static site can't do that on its
own.

## Notes / things you may want to change

- Update the `<title>` in `index.html` if you want a different browser-tab title.
- Add more questions by appending objects to the `QB` array in `questions.js`.
- If you rename any file, update the matching `<link>`/`<script src>` in `index.html`.
