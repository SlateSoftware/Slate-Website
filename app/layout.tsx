import Nav from "@/components/Nav";
import "./globals.css";
import type { Metadata } from "next";
import { Viewport } from "next";

// Fonts (connects to tailwind config)

import { DM_Sans, DM_Mono } from "next/font/google";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: "400",
});

// Viewport & Metadata

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://slate-website0.vercel.app"),
  title: "Slate",
  description: "Sleek open source software.",
  keywords: [
    "Software",
    "Open source",
    "Desktop environment",
    "Linux",
    "Operating system",
    "KDE",
    "Slate Design one",
    "UI kit",
    "Free desktop environment",
    "Free",
    "React component kit",
    "Figma component kit",
    "UI designer",
    "UX designer",
    "Graphic designer",
    "Hiring",
    "Company",
    "Organization",
    "UI design",
  ],
  authors: [{ name: "dukc", url: "https://dukc.dev" }],
  creator: "dukc",
  publisher: "dukc",
  openGraph: {
    title: "Slate",
    description: "Sleek open source software.",
    url: "https://slate-website0.vercel.app",
    siteName: "Slate",
    images: [
      {
        url: "/seoCover.png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

// Layout

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmMono.variable}`}>
      <body className="bg-light-bg-flat p-16 flex flex-col gap-12">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
