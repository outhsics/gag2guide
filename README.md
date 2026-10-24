# GAG2Guide — Grow a Garden 2 Guide

Unofficial fan guide for Roblox's Grow a Garden 2: **codes / pets / mutations / weather / eggs / crops / gear / guide**.
Live: https://outhsics.github.io/gag2guide/

## Stack
Next.js 14 (App Router, `output: export`) → GitHub Pages (gh-pages branch, basePath `/gag2guide`).

## Develop
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export → out/
./deploy.sh        # build + push gh-pages & main
```

## Content rules
All game data comes from the community wiki snapshot in `../03-关卡3-素材/wiki/` (Sep 2026) — no invented facts. Update that snapshot, then edit `src/data/content.js`.

## Notes
- Cloudflare Pages (gag2guide.pages.dev) is prepared as a second channel: run `npx wrangler login` once, then change deploy.sh's push target.
- See `../04-关卡6-复盘/复盘表.md` for the full playbook retrospective.
