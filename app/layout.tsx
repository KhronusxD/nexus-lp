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
  icons: { icon: "/icon-192.png", apple: "/icon-192.png" },
  title: "Nexus — O Sistema Operacional Pessoal",
  description:
    "Abandone a fragmentação de dezenas de apps isolados. O Nexus conecta seus hábitos, projetos e agenda em uma estrutura única, onde o Jarbas — seu agente de IA — trabalha ativamente para garantir que você execute o que realmente importa.",
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
