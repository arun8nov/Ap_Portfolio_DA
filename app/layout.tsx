import type { Metadata } from "next";
import "./globals.css";


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
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
