# Portfolio Website

Vercel-compatible Next.js portfolio built from scratch.

## Run locally
1. npm install
2. npm run dev

## Deploy on Vercel
- Framework preset: **Next.js**
- Root directory: repository root
- Build command: `npm run build`
- Output directory: `.next` (set in `vercel.json`)

## Assets (no copying)
- Images and resumes are served directly from repository root folders using route handlers:
  - `/assets/images/*` → `Images/*`
  - `/assets/resumes/*` → `resumes/*`
- No symlinks are used.
- `vercel.json` includes `Images/**` and `resumes/**` in the relevant serverless functions so files are available at runtime without static export copying.
