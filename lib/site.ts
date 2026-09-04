/**
 * Fonte única de verdade para dados públicos do site.
 * Evita URLs de contato duplicadas em 5 componentes — mudar o número
 * de WhatsApp aqui muda em todos os CTAs de uma vez.
 */

/**
 * Assinatura da marca — acompanha o wordmark no rodapé e no card social.
 * Fica aqui, e não solta em cada componente, porque é o tipo de frase que
 * muda por decisão de marca e precisa mudar nos dois lugares ao mesmo tempo.
 */
export const TAGLINE = "Inteligência que transforma";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ayvotecnologia.com.br";

export const SITE_DOMAIN = new URL(SITE_URL).host;

export const WHATSAPP_NUMBER = "5585994108087";

/**
 * Mensagem que já vai escrita na conversa quando o visitante clica num CTA.
 *
 * Um WhatsApp que abre vazio transfere para o lead o trabalho de explicar o
 * que quer — e é onde a maioria desiste. Cada origem abre a conversa já
 * dizendo de onde veio e o que procura, o que também dá ao comercial o
 * contexto do lead antes da primeira resposta.
 *
 * Sobre `source=website`: o wa.me descarta qualquer parâmetro além de `text`,
 * então não há como carregar UTM até a conversa. A origem do clique fica
 * marcada em cada CTA por `data-umami-event-location`.
 *
 * Hoje nada lê esses atributos: o Umami self-hosted foi cancelado e o site
 * está sem analytics. Os marcadores ficaram de propósito — são inertes, e
 * evitam ter que reinstrumentar sete componentes no dia em que entrar
 * qualquer instância nova.
 */
export const WHATSAPP_MESSAGES = {
  default:
    "Olá, AYVO! Quero conhecer melhor as soluções de IA e automação para minha empresa.",
  especialista:
    "Olá, AYVO! Gostaria de falar com um especialista sobre IA e automação para minha empresa.",
  diagnostico:
    "Olá, AYVO! Queria entender o que dá para automatizar na minha operação.",
} as const;

export type WhatsappContext = keyof typeof WHATSAPP_MESSAGES;

export function whatsappUrl(context: WhatsappContext = "default"): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGES[context],
  )}`;
}

/** Atalho para o caso mais comum — mantém os componentes legíveis. */
export const WHATSAPP_URL = whatsappUrl();

export const EMAIL = "contato@ayvotecnologia.com.br";
export const INSTAGRAM_URL = "https://instagram.com/ayvotecnologia";

export const CNPJ = "65.967.246/0001-82";
export const FOUNDED_YEAR = "2022";

/**
 * Sócios da AYVO. `photo` aponta para /public — enquanto o arquivo não
 * existir, o componente cai no monograma (ver components/Founders.tsx).
 */
export const PEOPLE = [
  {
    name: "Ítalo Campos",
    role: "Fundador",
    initials: "IC",
    photo: "/italo.jpg",
    bio: "Fundou a AYVO em 2022, ainda na graduação em Análise e Desenvolvimento de Sistemas. Cuida da arquitetura e da inteligência por trás de cada entrega.",
  },
  {
    name: "Demetrius Linhares",
    role: "Sócio",
    initials: "DL",
    photo: "/demetrius.jpg",
    bio: "Sócio da AYVO. Atua no desenvolvimento de sistemas sob medida, ERPs e integrações — a parte da entrega que precisa ser construída do zero.",
  },
] as const;

export const NAV_LINKS = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Cases", href: "#cases" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
] as const;
