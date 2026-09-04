import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

// O título carrega o posicionamento (IA + dados + automação) em vez de uma
// promessa genérica: é o que aparece na aba, no resultado de busca e no
// compartilhamento, e precisa responder "o que a AYVO faz" sozinho.
const TITLE = "AYVO · IA, dados e automação para empresas";
const DESCRIPTION =
  "IA, dados e automação para empresas. Atendimento que não para, seus números no WhatsApp e processos que rodam sozinhos. AYVO — Fortaleza, Ceará.";
const SOCIAL_TITLE = "AYVO · IA que entende seu negócio";
const SOCIAL_DESCRIPTION =
  "Atendimento, dados e processos transformados em operações inteligentes — integrados ao WhatsApp e aos sistemas que sua empresa já usa.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · AYVO",
  },
  description: DESCRIPTION,
  applicationName: "AYVO",
  keywords: [
    "IA para empresas",
    "inteligência artificial para negócios",
    "automação de processos",
    "agente de IA no WhatsApp",
    "consulta de dados por WhatsApp",
    "atendimento automatizado",
    "integração de sistemas",
    "sistemas sob medida",
    "Fortaleza",
    "Ceará",
  ],
  authors: [{ name: "AYVO", url: SITE_URL }],
  creator: "AYVO Tecnologia",
  publisher: "AYVO Tecnologia",
  alternates: { canonical: "/" },
  category: "technology",
  openGraph: {
    title: SOCIAL_TITLE,
    description: SOCIAL_DESCRIPTION,
    url: SITE_URL,
    siteName: "AYVO",
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
    { media: "(prefers-color-scheme: light)", color: "#f7fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#040c15" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

/**
 * Dados estruturados (schema.org) — ajudam o Google a mostrar a AYVO como
 * organização real: nome, CNPJ, localização, canais de contato e serviços.
 * Conteúdo 100% estático e controlado por nós.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: "AYVO Tecnologia",
  alternateName: "AYVO",
  url: SITE_URL,
  description: DESCRIPTION,
  slogan: "IA que entende seu negócio. Automação que faz ele funcionar.",
  foundingDate: FOUNDED_YEAR,
  founder: { "@type": "Person", name: "Ítalo Campos" },
  member: [
    { "@type": "Person", name: "Ítalo Campos", jobTitle: "Fundador" },
    { "@type": "Person", name: "Demetrius Linhares", jobTitle: "Sócio" },
  ],
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
    name: "Serviços AYVO",
    itemListElement: [
      "Atendimento com IA no WhatsApp, Instagram e Telegram",
      "Consulta de dados da empresa em linguagem natural",
      "Automação de processos e integração de sistemas",
      "Sistemas, plataformas e e-commerces sob medida",
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
        {/*
          Por padrão o navegador guarda a posição de rolagem e devolve o
          visitante nela ao recarregar — o que faz a página abrir no meio,
          com as animações de entrada do hero já perdidas. Desligamos essa
          restauração para todo reload começar do topo.

          Precisa ser um script inline no <head>: rodando dentro de um
          useEffect só valeria depois da hidratação, e o salto já teria
          acontecido na frente do visitante.

          Não afeta links de âncora (#servicos, #sobre): a rolagem até um
          fragmento é tratada à parte pelo navegador e continua funcionando.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `if("scrollRestoration"in history)history.scrollRestoration="manual"`,
          }}
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
      </body>
    </html>
  );
}
