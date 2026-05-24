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
  title: "AVENX — Trouve ton spot. Progresse. Reviens demain.",
  description:
    "Découvre les spots street workout autour de toi, entraîne-toi avec des séances adaptées et progresse avec un coach IA qui apprend de ton niveau.",
  keywords: [
    "AVENX",
    "street workout",
    "calisthenics",
    "spots",
    "coach IA",
    "communauté fitness",
  ],
  openGraph: {
    title: "AVENX — Trouve ton spot. Progresse. Reviens demain.",
    description:
      "Spots, séances adaptées et communauté street workout — le compagnon premium pour progresser dehors.",
    type: "website",
    locale: "fr_FR",
    siteName: "AVENX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-avenx-bg antialiased">{children}</body>
    </html>
  );
}
