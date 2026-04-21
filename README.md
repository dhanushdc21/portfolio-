# dhanush-portfolio

Personal portfolio website for **Dhanush D Chandran** — Platform & DevOps Engineer.

🔗 **Live site:** https://dhanushdchandran.vercel.app *(update after deploying)*

---

## Stack

Vanilla HTML · CSS · JavaScript — no frameworks, no build tools  
Fonts: JetBrains Mono + Syne via Google Fonts  
Hosted on: Vercel

---

## Project Structure

```
portfolio/
├── index.html              ← main entry point
├── assets/
│   ├── css/
│   │   └── style.css       ← all styles
│   ├── js/
│   │   └── main.js         ← interactivity + devtools easter egg
│   └── images/
│       └── photo.jpg       ← profile photo
├── vercel.json             ← vercel deployment config
├── .gitignore
└── README.md
```

---

## Local Development

No build step needed:

```bash
git clone https://github.com/dhanushdc21/portfolio.git
cd portfolio
npx serve .        # or just open index.html in a browser
```

---

## Deploy to Vercel

**Option 1 — Vercel CLI**
```bash
npm i -g vercel
vercel
```

**Option 2 — Dashboard**
1. Push this repo to GitHub
2. Go to vercel.com → New Project → Import your repo
3. Framework preset: **Other** (no build needed)
4. Click Deploy ✅

---

## Updating Your Photo

Replace `assets/images/photo.jpg` with your own photo.  
Keep the filename as `photo.jpg` — the code looks for that exact name.

---

## Easter Egg 🥚

Open DevTools → Console to find a hidden interactive terminal.  
Type `help()` in the console to see secret commands.
