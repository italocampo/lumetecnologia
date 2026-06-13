import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
      <body>{children}</body>
    </html>
  );
}