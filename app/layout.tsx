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
const SITE_TITLE = "Nucly — Sistema Operacional de Energia Pessoal";
const SITE_DESCRIPTION =
  "Conecte hábitos, projetos e agenda em uma estrutura única — com Jarvis, seu agente de IA no app e no WhatsApp. Comece grátis, sem cartão.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: "Nucly",
  keywords: [
    "produtividade",
    "sistema operacional pessoal",
    "agente IA",
    "Jarvis",
    "WhatsApp",
    "hábitos",
    "projetos",
    "Google Calendar",
    "Notion alternativa",
  ],
  authors: [{ name: "Nucly" }],
  icons: { icon: "/icon-192.png", apple: "/icon-192.png" },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "Nucly",
    images: [
      {
        url: "/icon-192.png",
        width: 192,
        height: 192,
        alt: "Nucly — Sistema Operacional de Energia Pessoal",
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
  themeColor: "#0b0b0d",
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
      <body suppressHydrationWarning>
        {/* Ambient gradient background — cobre todas as páginas (home, termos, privacidade) */}
        <div className="nexus-ambient" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
