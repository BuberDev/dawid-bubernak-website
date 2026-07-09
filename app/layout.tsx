import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin", "latin-ext"],
});

const siteUrl = "https://dawidbubernak.pl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dawid Bubernak — Fullstack Developer AI & Blockchain",
    template: "%s — Dawid Bubernak",
  },
  description:
    "Dawid Bubernak — fullstack developer z Katowic. Od 7 lat buduję produkty na pograniczu sztucznej inteligencji, blockchainu i nowoczesnych stron internetowych.",
  keywords: [
    "Dawid Bubernak",
    "fullstack developer",
    "programista AI",
    "blockchain developer",
    "tworzenie stron internetowych",
    "Katowice",
    "Next.js",
    "smart kontrakty",
  ],
  authors: [{ name: "Dawid Bubernak" }],
  creator: "Dawid Bubernak",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: siteUrl,
    siteName: "Dawid Bubernak",
    title: "Dawid Bubernak — Fullstack Developer AI & Blockchain",
    description:
      "Buduję produkty na pograniczu sztucznej inteligencji, blockchainu i nowoczesnych stron internetowych.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dawid Bubernak — Fullstack Developer AI & Blockchain",
    description:
      "Buduję produkty na pograniczu sztucznej inteligencji, blockchainu i nowoczesnych stron internetowych.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#08090d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
