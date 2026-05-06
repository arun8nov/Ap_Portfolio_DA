# Arunprakash B | Data Analyst Portfolio

A premium, modern portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion. Designed to showcase data analytics expertise with smooth animations and a professional dark theme.

## 🚀 Features

- **Modern UI/UX**: Apple/Tesla-level design with glassmorphism and gradient aesthetics
- **Smooth Animations**: Powered by Framer Motion for seamless transitions
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Dark Theme**: Elegant dark theme with beautiful gradients
- **Interactive Components**: Animated skill bars, project cards, and timeline
- **Contact Form**: Integrated with Google Sheets for lead capture
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Fast Performance**: Optimized with Next.js 14 and Turbopack

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel

## 📁 Project Structure

```
portfolio-website/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with fonts and metadata
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   └── api/                 # API routes
├── components/              # React components
│   ├── sections/           # Page sections
│   ├── ui/                 # Reusable UI components
│   └── layout/             # Layout components
├── lib/                    # Utilities and data
│   ├── data.ts            # Content data
│   ├── google-sheets.ts   # Google Sheets integration
│   └── utils.ts           # Utility functions
├── public/                 # Static assets
│   └── images/            # Images and logos
└── package.json           # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_GOOGLE_SHEETS_URL=your-google-apps-script-url
NEXT_PUBLIC_GITHUB_URL=https://github.com/arun8nov
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/arun8nov
```

### Google Sheets Integration

1. **Create Google Apps Script**
   - Open your Google Sheet
   - Go to Extensions → Apps Script
   - Add the following code:

   ```javascript
   function doPost(e) {
     try {
       var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("DA Portfolio");
       var data = JSON.parse(e.postData.contents);
       sheet.appendRow([data.name, data.email, data.message, new Date()]);
       return ContentService.createTextOutput(JSON.stringify({status: "success"}))
         .setMimeType(ContentService.MimeType.JSON);
     } catch (error) {
       return ContentService.createTextOutput(JSON.stringify({status: "error", message: error.toString()}))
         .setMimeType(ContentService.MimeType.JSON);
     }
   }
   ```

2. **Deploy as Web App**
   - Click Deploy → New deployment
   - Select type: Web app
   - Execute as: Me
   - Who has access: Anyone
   - Copy the web app URL

3. **Add URL to environment variables**
   - Paste the URL in `NEXT_PUBLIC_GOOGLE_SHEETS_URL`

### Customizing Content

Edit `lib/data.ts` to update:
- Personal information
- Skills and expertise
- Projects and case studies
- Work experience
- Value propositions

## 🎨 Customization

### Colors

Edit `app/globals.css` to customize the color scheme:

```css
:root {
  --primary: #3b82f6;
  --secondary: #8b5cf6;
  --accent: #06b6d4;
  /* ... more colors */
}
```

### Fonts

The project uses Geist Sans and Geist Mono fonts. To change fonts, edit `app/layout.tsx`:

```typescript
import { YourFont } from "next/font/google";

const yourFont = YourFont({
  variable: "--font-your-font",
  subsets: ["latin"],
});
```

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` directory.

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Add environment variables
   - Deploy

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile (320px - 768px)
- Tablet (768px - 1024px)
- Desktop (1024px+)

## 🎯 Performance Optimization

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- CSS-in-JS with Tailwind CSS
- Minimized bundle size
- Fast initial page load

## 🔍 SEO

The website includes:
- Meta tags for search engines
- Open Graph tags for social sharing
- Twitter Card tags
- Structured data (JSON-LD)
- Semantic HTML

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Arunprakash B**
- LinkedIn: [linkedin.com/in/arun8nov](https://linkedin.com/in/arun8nov)
- GitHub: [github.com/arun8nov](https://github.com/arun8nov)
- Email: arunbabuprakash@gmail.com

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- Lucide React for beautiful icons

---

Built with ❤️ using Next.js and Tailwind CSS
