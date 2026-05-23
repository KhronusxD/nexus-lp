import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "./config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const SITE_TITLE = "Nexus — O Sistema Operacional Pessoal";
const SITE_DESCRIPTION =
  "Conecte hábitos, projetos e agenda em uma estrutura única — com Jarbas, seu agente de IA no app e no WhatsApp. Comece grátis, sem cartão.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: "Nexus",
  keywords: [
    "produtividade",
    "sistema operacional pessoal",
    "agente IA",
    "Jarbas",
    "WhatsApp",
    "hábitos",
    "projetos",
    "Google Calendar",
    "Notion alternativa",
  ],
  authors: [{ name: "Nexus" }],
  icons: { icon: "/icon-192.png", apple: "/icon-192.png" },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "Nexus",
    images: [
      {
        url: "/icon-192.png",
        width: 192,
        height: 192,
        alt: "Nexus — O Sistema Operacional Pessoal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/icon-192.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
