import type { Metadata, Viewport } from "next";
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

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Lume · Tecnologia com propósito",
  description:
    "Agentes de IA que atendem seus clientes e consultam seus dados direto no WhatsApp. 24h, 7 dias por semana. Lume — Fortaleza, Ceará.",
  keywords: [
    "IA WhatsApp",
    "agente de IA",
    "automação empresarial",
    "atendimento omnichannel",
    "sistemas sob medida",
    "e-commerce",
    "Ceará",
    "Fortaleza",
  ],
  authors: [{ name: "Lume" }],
  openGraph: {
    title: "Lume · IA que conversa, sistemas que entregam",
    description:
      "Atendimento e dados do seu negócio, no WhatsApp, 24/7. Sistemas sob medida, sites e e-commerces.",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lume · IA que conversa, sistemas que entregam",
    description:
      "Atendimento e dados do seu negócio, no WhatsApp, 24/7. Sistemas sob medida, sites e e-commerces.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
