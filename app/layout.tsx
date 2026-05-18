import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Arunprakash B | Data Analyst Portfolio',
  description: 'Premium data analyst portfolio for Arunprakash B — analytics, dashboards, storytelling, and impact-driven projects.',
  metadataBase: new URL('https://your-domain.com'),
  openGraph: {
    title: 'Arunprakash B | Data Analyst Portfolio',
    description: 'Data analyst portfolio with analytics storytelling, modern visuals, and strategic project case studies.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arunprakash B | Data Analyst Portfolio',
    description: 'A premium data analyst portfolio focused on business impact and data storytelling.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
