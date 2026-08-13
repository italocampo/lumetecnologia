import { EMAIL, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

/**
 * RFC 9116 — canal declarado para relato de vulnerabilidades.
 * Servido em `/.well-known/security.txt` via rewrite (next.config.ts), porque
 * o Next ignora diretórios iniciados com ponto dentro de `app/`.
 *
 * `Expires` precisa ser uma data futura para o arquivo valer; é calculada
 * em build time (1 ano), então cada deploy renova o documento.
 */
export function GET() {
  const expires = new Date();
  expires.setUTCFullYear(expires.getUTCFullYear() + 1);

  const body = [
    `Contact: mailto:${EMAIL}`,
    `Expires: ${expires.toISOString()}`,
    "Preferred-Languages: pt-BR, en",
    `Canonical: ${SITE_URL}/.well-known/security.txt`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
