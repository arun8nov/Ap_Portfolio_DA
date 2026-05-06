import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arunprakash B | Data Analyst Portfolio",
  description: "Professional portfolio showcasing data analytics projects, skills, and experience. Transforming data into actionable insights with Python, SQL, Power BI, and machine learning.",
  keywords: ["Data Analyst", "Python", "SQL", "Power BI", "Portfolio", "Data Science", "Analytics"],
  authors: [{ name: "Arunprakash B" }],
  openGraph: {
    title: "Arunprakash B | Data Analyst Portfolio",
    description: "Transforming data into decisions - Professional portfolio showcasing data analytics expertise",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arunprakash B | Data Analyst Portfolio",
    description: "Transforming data into decisions - Professional portfolio showcasing data analytics expertise",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
