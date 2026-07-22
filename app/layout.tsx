import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PrepWise AI | AI Placement Preparation Platform",
  description:
    "An AI-powered placement preparation platform built for KJ Somaiya College of Engineering. Featuring adaptive assessments, resume ATS analysis, AI mock interviews, and verifiable certificates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="bg-brand-bg text-brand-dark min-h-screen antialiased selection:bg-brand-blue selection:text-white">
        {children}
      </body>
    </html>
  );
}
