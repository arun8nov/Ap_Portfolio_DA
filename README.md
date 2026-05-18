# Arunprakash B | Data Analyst Portfolio

A premium, modern portfolio website built with Next.js, Tailwind CSS, and Framer Motion. This setup is ready for deployment on Vercel.

## Tech Stack
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion

## Local Development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the dev server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000`.

## Environment Variables
Create `.env.local`:

```env
GOOGLE_SHEETS_URL=https://script.google.com/macros/s/your-app-script-id/exec
```

> `GOOGLE_SHEETS_URL` is required for the contact form API route (`app/api/contact/route.ts`).

## Vercel Deployment (Publish)

### Option A: Deploy from GitHub (Recommended)
1. Push this repo to GitHub.
2. In Vercel, click **Add New Project** and import the repository.
3. Keep **Framework Preset = Next.js** (auto-detected).
4. Add this environment variable in Vercel Project Settings:
   - `GOOGLE_SHEETS_URL`
5. Deploy.

### Option B: Vercel CLI
1. Install CLI:
   ```bash
   npm i -g vercel
   ```
2. Login:
   ```bash
   vercel login
   ```
3. Deploy:
   ```bash
   vercel --prod
   ```
4. Add `GOOGLE_SHEETS_URL` when prompted (or from dashboard after deployment).

## Build Check
```bash
npm run build
```

## Notes
- Root `vercel.json` is intentionally minimal so Vercel uses standard Next.js detection/build.
- `.gitignore` now ignores nested `node_modules` directories to prevent accidental commits.
