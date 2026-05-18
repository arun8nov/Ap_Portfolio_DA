# Portfolio Website

Vercel-compatible Next.js portfolio built from scratch.

## Run
npm install
npm run dev

## Assets (no copying)
- Images and resumes are served directly from the repository root folders using Next.js route handlers:
  - `/assets/images/*` → `Images/*`
  - `/assets/resumes/*` → `resumes/*`
- This avoids symlinks (which can fail on Vercel output) and still avoids duplicating files.
