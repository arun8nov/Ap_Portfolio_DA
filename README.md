# Arunprakash B — Data Analyst Portfolio

A premium portfolio website built with Next.js, Tailwind CSS, TypeScript, and Framer Motion.

## What is included

- Modern dark theme with glassmorphism styling
- Animated hero, skills orbit, scroll storytelling, and project cards
- Responsive layout for mobile, tablet, and desktop
- Contact form integrated with Google Sheets via a Google Apps Script proxy
- Downloadable resume placeholder
- SEO metadata and Vercel-ready configuration

## Project structure

- `app/` – Next.js App Router pages and global styles
- `components/` – Reusable UI sections
- `lib/` – Portfolio data, projects, skills, timeline content
- `public/images/` – Profile and logo assets
- `app/api/contact/route.ts` – Contact form proxy endpoint

## Setup

1. Install dependencies

```bash
cd "c:\Users\arun.prakash\Downloads\Vs Folders\Ap_Portfolio_DA"
npm install
```

2. Create a `.env.local` file in the project root with:

```env
GOOGLE_SHEETS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

3. Run the development server

```bash
npm run dev
```

4. Open the site at `http://localhost:3000`

## Google Sheets setup

1. Open Google Sheets and create a spreadsheet named `DA Portfolio`.
2. Add columns in the first row: `Name`, `Email`, `Message`.
3. Open `Extensions` → `Apps Script`.
4. Replace the default code with the script below:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('DA Portfolio');
  const body = JSON.parse(e.postData.contents);

  if (!body.name || !body.email || !body.message) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: 'Missing fields' }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  sheet.appendRow([body.name, body.email, body.message]);

  return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

5. Deploy the script as a web app:
   - `Deploy` → `New deployment`
   - Select `Web app`
   - Execute as: `Me`
   - Who has access: `Anyone`
6. Copy the web app URL and add it to `.env.local` as `GOOGLE_SHEETS_SCRIPT_URL`.

## Deployment to Vercel

1. Push this repository to GitHub.
2. Create a Vercel project linked to the repo.
3. Set the environment variable in Vercel:

```text
GOOGLE_SHEETS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

4. Deploy.

## Notes

- Replace `public/resume.pdf` with the final PDF resume file.
- The contact form uses a `website` honeypot field for spam prevention.
- Project cards link to GitHub repositories and can be extended with LinkedIn references.

## Recommended next steps

- Add actual project screenshots to `public/images/`
- Replace resume placeholder with a polished PDF
- Add a real domain in `metadataBase` inside `app/layout.tsx`
- Add analytics tracking and performance monitoring for production
