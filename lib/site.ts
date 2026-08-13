/**
 * Fonte única de verdade para dados públicos do site.
 * Evita URLs de contato duplicadas em 5 componentes — mudar o número
 * de WhatsApp aqui muda em todos os CTAs de uma vez.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://lumetecnologiabr.com.br";

export const SITE_DOMAIN = new URL(SITE_URL).host;

export const WHATSAPP_NUMBER = "5585994108087";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá Lume!",
)}`;

export const EMAIL = "lumetecnologia.br@gmail.com";
export const INSTAGRAM_URL = "https://instagram.com/lumetecnologia.br";

export const CNPJ = "65.967.246/0001-82";
export const FOUNDED_YEAR = "2022";

export const NAV_LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Clientes", href: "#clientes" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
] as const;
