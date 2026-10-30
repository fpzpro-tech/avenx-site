import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "AVENX : les spots de street workout et ceux qui s'y entraînent",
  description:
    "Trouve les spots de street workout autour de toi, suis les séances de tes potes, gagne de l'XP et grimpe au classement de ton spot.",
  keywords: [
    "AVENX",
    "street workout",
    "calisthenics",
    "spots",
    "communauté street workout",
    "classement",
  ],
  openGraph: {
    title: "AVENX : le spot est à deux rues, ta team aussi",
    description:
      "Les spots de street workout autour de toi, le fil de tes potes, l'XP et le classement de ton spot.",
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
    <html lang="fr" className={`${archivo.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
