# Khai (Daniel) Tran — Portfolio v2 (deploy bundle)

Static site. No build step. Upload the whole folder as-is.

## Contents
- `index.html` — entry point (redirects to the portfolio)
- `Portfolio-v2.dc.html` — the site
- `support.js` — runtime (must sit next to the HTML)
- `uploads/` — all images / videos used by the site (60 files)
- `vercel.json` — no-cache headers for HTML + support.js

## Deploy

**Vercel (drag & drop)**
1. vercel.com → Add New → Project → deploy the folder directly (or drag it onto the dashboard).
2. Framework preset: **Other**. Build command: none. Output directory: `./`
3. Domain: point `khaidanieltran.com` at the project in Settings → Domains.

**Vercel CLI**
```
cd deploy-v2
vercel --prod
```

**Netlify / any static host** — drop the folder in; root must contain `index.html`.

## After deploying
- Hard-refresh (Ctrl/Cmd+Shift+R) — old builds cache aggressively.
- Check the Pipeline & Tooling section (between About and Also Built): Master Panel HUD hover, Preset Manager loupe (hover on desktop, tap on phone), Deep Collect video.

## Notes
- Fonts load from Google Fonts; showreel + project videos from YouTube — the site needs internet.
- Contact form posts to Web3Forms; the access key is in `Portfolio-v2.dc.html`.
- File names in `uploads/` contain spaces — keep them exactly as-is when uploading.
