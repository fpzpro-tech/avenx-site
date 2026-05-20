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
  title: "AVENX — Ton coach calisthenics intelligent",
  description:
    "Des entraînements au poids du corps adaptés à ton niveau, ton matériel et ta progression. Calisthenics et street workout avec IA adaptative.",
  keywords: [
    "AVENX",
    "calisthenics",
    "street workout",
    "coach IA",
    "entraînement poids du corps",
  ],
  openGraph: {
    title: "AVENX — Ton coach calisthenics intelligent",
    description:
      "Programmes adaptés, progression intelligente, entraînements sans salle.",
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
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
