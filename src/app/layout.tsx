import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
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
  title: "Pandit Madhav Prasad Smarak Sikshan Sansthan | Tradition Meets Technology",
  description: "Experience the future of education at Pandit Madhav Prasad Smarak Sikshan Sansthan. A blend of traditional values and modern technology, preparing students for a global future.",
  keywords: ["school", "education", "technology", "tradition", "smart learning", "India", "Pandit Madhav Prasad"],
  authors: [{ name: "Pandit Madhav Prasad Smarak Sikshan Sansthan" }],
  openGraph: {
    title: "Pandit Madhav Prasad Smarak Sikshan Sansthan",
    description: "Where mornings begin with hope and curiosity turns into creativity.",
    url: "https://pmpsss.edu.in",
    siteName: "PMPSSS",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pandit Madhav Prasad Smarak Sikshan Sansthan",
    description: "Building character, resilience, and values.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-100 selection:bg-blue-500 selection:text-white`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
