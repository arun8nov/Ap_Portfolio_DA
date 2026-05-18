# Portfolio Website

Vercel-compatible Next.js portfolio built from scratch.

## Run locally
1. `npm install`
2. `npm run dev`

## Deploy on Vercel
- Framework preset: **Next.js**
- Root directory: repository root
- Build command: `npm run build`
- Output directory: `.next` (from `vercel.json`)

## Assets (no copying)
- Images and resumes are served directly from repository root folders using route handlers:
  - `/assets/images/*` → `Images/*`
  - `/assets/resumes/*` → `resumes/*`
- No symlinks are used.
- `vercel.json` includes `Images/**` and `resumes/**` in relevant functions so files are available at runtime without static export copying.

## Troubleshooting: `404 DEPLOYMENT_NOT_FOUND`
If you see:

- `404: NOT_FOUND`
- `Code: DEPLOYMENT_NOT_FOUND`

this is usually **not a build-code failure**. It means the deployment URL is missing, deleted, expired, or belongs to a different team/account.

### Fix checklist
1. Open your Vercel dashboard and confirm the project exists in the active team/account.
2. Trigger a **new deployment** from the latest commit.
3. Use the **new deployment URL** shown in the Deployments tab (do not reuse an old invalid URL).
4. Ensure your custom domain (if any) is attached to this project and DNS is healthy.
5. If deploying from CLI, run `vercel --prod` from this repo root while logged into the correct account/team.
