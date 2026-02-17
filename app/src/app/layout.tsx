import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import PrivacyGuard from "@/components/Guardian/PrivacyGuard";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OuiRise // AU Enhanced Operations",
  description: "Full-stack web development with automation and systems integration. The alternative to Big Tech.",
  keywords: ["OuiRise", "Web Development", "Automation", "Systems Integration", "Cloud Infrastructure", "Full Stack"],
  authors: [{ name: "8K" }],
  openGraph: {
    title: "OuiRise // AU Enhanced Operations",
    description: "The alternative to Big Tech",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-void text-fog min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
        <PrivacyGuard />
      </body>
    </html>
  );
}
