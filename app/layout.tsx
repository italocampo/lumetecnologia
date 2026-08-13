import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import {
  CNPJ,
  EMAIL,
  FOUNDED_YEAR,
  INSTAGRAM_URL,
  SITE_URL,
  WHATSAPP_NUMBER,
} from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const TITLE = "Lume · Tecnologia com propósito";
const DESCRIPTION =
  "Agentes de IA que atendem seus clientes e consultam seus dados direto no WhatsApp. 24h, 7 dias por semana. Lume — Fortaleza, Ceará.";
const SOCIAL_TITLE = "Lume · IA que conversa, sistemas que entregam";
const SOCIAL_DESCRIPTION =
  "Atendimento e dados do seu negócio, no WhatsApp, 24/7. Sistemas sob medida, sites e e-commerces.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · Lume",
  },
  description: DESCRIPTION,
  applicationName: "Lume",
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
  authors: [{ name: "Lume", url: SITE_URL }],
  creator: "Lume Tecnologia",
  publisher: "Lume Tecnologia",
  alternates: { canonical: "/" },
  category: "technology",
  openGraph: {
    title: SOCIAL_TITLE,
    description: SOCIAL_DESCRIPTION,
    url: SITE_URL,
    siteName: "Lume",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SOCIAL_TITLE,
    description: SOCIAL_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Impede que o Safari/Chrome mobile transformem telefone e e-mail em links
  // automáticos com estilo próprio, quebrando o design.
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

/**
 * Dados estruturados (schema.org) — ajudam o Google a mostrar a Lume como
 * organização real: nome, CNPJ, localização, canais de contato e serviços.
 * Conteúdo 100% estático e controlado por nós.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: "Lume Tecnologia",
  alternateName: "Lume",
  url: SITE_URL,
  description: DESCRIPTION,
  foundingDate: FOUNDED_YEAR,
  founder: { "@type": "Person", name: "Italo Campos" },
  taxID: CNPJ,
  email: EMAIL,
  telephone: `+${WHATSAPP_NUMBER}`,
  sameAs: [INSTAGRAM_URL, `https://wa.me/${WHATSAPP_NUMBER}`],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Fortaleza",
    addressRegion: "CE",
    addressCountry: "BR",
  },
  areaServed: { "@type": "Country", name: "Brasil" },
  knowsLanguage: ["pt-BR"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços Lume",
    itemListElement: [
      "Agentes de IA omnichannel",
      "Consulta de dados por WhatsApp",
      "Sistemas sob medida",
      "Sites e e-commerces",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Handshake com o Umami antecipado — economiza ~100ms no 1º evento */}
        <link
          rel="preconnect"
          href="https://analytics.lumetecnologiabr.com.br"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Atalho de teclado: primeiro Tab da página pula a navegação */}
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-paper"
        >
          Pular para o conteúdo
        </a>

        {children}

        <script
          type="application/ld+json"
          // Conteúdo estático definido acima; sem entrada de usuário.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Script
          defer
          src="https://analytics.lumetecnologiabr.com.br/script.js"
          data-website-id="b187b60f-36f5-465e-ac80-b26ebf79df94"
          strategy="afterInteractive"
          crossOrigin="anonymous"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </body>
    </html>
  );
}
