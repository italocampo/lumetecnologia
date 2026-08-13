import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

/** Origem do Umami self-hosted — única origem externa que o site consome. */
const ANALYTICS_ORIGIN = "https://analytics.lumetecnologiabr.com.br";

/**
 * `upgrade-insecure-requests` só entra quando o deploy declara explicitamente
 * uma origem https. Sem essa trava, rodar `next build && next start` local
 * (http://localhost) faz o navegador reescrever CSS, JS e fontes para https e
 * a página carrega sem estilo nenhum — o Easypanel define a env, o seu
 * terminal não. Se alguém esquecer de configurá-la em produção, perde-se
 * apenas essa diretiva de defesa em profundidade; o HSTS continua obrigando
 * https no navegador.
 */
const declaresHttpsOrigin =
  process.env.NEXT_PUBLIC_SITE_URL?.startsWith("https://") ?? false;

/**
 * Content-Security-Policy.
 *
 * O site é 100% estático (sem formulários, sem input de usuário renderizado,
 * sem `dangerouslySetInnerHTML`), então optamos por manter a geração estática
 * em vez de trocá-la por CSP com nonce via middleware — que forçaria render
 * dinâmico a cada request. `'unsafe-inline'` em script-src é necessário para o
 * bootstrap inline do Next; todo o resto fica fechado, o que ainda barra o
 * cenário realista de risco: exfiltração para domínio desconhecido
 * (connect-src), carregamento de script de terceiro (script-src), embed em
 * iframe (frame-ancestors) e sequestro de <base> (base-uri).
 */
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval' " : ""}${ANALYTICS_ORIGIN}`,
  "style-src 'self' 'unsafe-inline'",
  // next/font/google baixa as fontes em build → servidas por 'self'
  "font-src 'self' data:",
  "img-src 'self' data: blob:",
  `connect-src 'self' ${ANALYTICS_ORIGIN}${isDev ? " ws: wss:" : ""}`,
  "media-src 'self'",
  "manifest-src 'self'",
  "worker-src 'self' blob:",
  "object-src 'none'",
  "base-uri 'none'",
  "form-action 'self'",
  "frame-src 'none'",
  "frame-ancestors 'none'",
  ...(declaresHttpsOrigin ? ["upgrade-insecure-requests"] : []),
].join("; ");

/** Desliga APIs de navegador que o site simplesmente não usa. */
const permissionsPolicy = [
  "accelerometer=()",
  "autoplay=()",
  "camera=()",
  "display-capture=()",
  "encrypted-media=()",
  "fullscreen=(self)",
  "geolocation=()",
  "gyroscope=()",
  "magnetometer=()",
  "microphone=()",
  "midi=()",
  "payment=()",
  "usb=()",
  "xr-spatial-tracking=()",
  "browsing-topics=()",
  "interest-cohort=()",
].join(", ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  // 2 anos, subdomínios inclusos (analytics já é HTTPS) e elegível a preload
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" }, // legado, redundante com frame-ancestors
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: permissionsPolicy },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
  { key: "Origin-Agent-Cluster", value: "?1" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        // Fontes self-hosted precisam ser legíveis cross-origin pelo proxy.
        // O Cache-Control desses assets já é definido pelo próprio Next.
        source: "/_next/static/media/:path*",
        headers: [
          { key: "Cross-Origin-Resource-Policy", value: "cross-origin" },
        ],
      },
    ];
  },

  async rewrites() {
    return [
      // O Next ignora diretórios com ponto em `app/`; expomos a rota real
      // no caminho canônico da RFC 9116.
      { source: "/.well-known/security.txt", destination: "/security-txt" },
    ];
  },
};

export default nextConfig;
