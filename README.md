# Lume — Site institucional

Landing one-page institucional da Lume, construída em **Next.js 15 + TypeScript + Tailwind v4**, com identidade B&W minimalista e elemento de assinatura próprio (terminal ao vivo simulando consultas que a IA responde no WhatsApp).

## 🧱 Stack

- Next.js 15 (App Router, React 19)
- TypeScript em modo `strict`
- Tailwind CSS v4 (CSS-first config em `app/globals.css`)
- Fontes: Geist Sans + Geist Mono (via `next/font/google`, zero-runtime)
- Zero dependências de animação — tudo em React puro + CSS

Nenhum banco de dados é necessário. O contato é feito via link WhatsApp e e-mail. Se no futuro você quiser captar leads no banco, adicionamos uma rota `app/api/lead/route.ts` + Prisma/Postgres.

## ▶️ Rodar localmente

```bash
pnpm install        # ou: npm install / yarn
pnpm dev            # http://localhost:3000
```

## 📦 Build de produção

```bash
pnpm build
pnpm start          # serve em :3000
```

## 🚀 Deploy na sua VPS

Recomendado rodar com PM2 + Nginx reverso. Versão enxuta:

```bash
# Na VPS
git clone <seu-repo> /var/www/lume
cd /var/www/lume
pnpm install --prod=false
pnpm build

# PM2
pm2 start "pnpm start" --name lume
pm2 save
pm2 startup
```

Nginx (snippet):

```nginx
server {
  server_name lume.com.br www.lume.com.br;

  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```

Depois rode `certbot --nginx -d lume.com.br -d www.lume.com.br` para HTTPS.

## ✏️ O que trocar antes de subir

Busque por estes pontos no projeto e atualize:

| Onde | O quê |
|------|-------|
| `components/Nav.tsx` | `WHATSAPP_URL` — coloque o número real |
| `components/Hero.tsx` | `WHATSAPP_URL` |
| `components/FinalCTA.tsx` | `WHATSAPP_URL` e `EMAIL` |
| `components/Footer.tsx` | links de WhatsApp, e-mail, redes sociais, CNPJ |
| `app/layout.tsx` | metadados Open Graph (imagem de preview) |

> Dica: extraia essas constantes para `lib/config.ts` quando ficarem em mais lugares.

## 🗂️ Estrutura

```
lume-site/
├── app/
│   ├── globals.css        ← tokens Tailwind v4 + base
│   ├── layout.tsx         ← fontes Geist + metadados SEO
│   └── page.tsx           ← composição da landing
├── components/
│   ├── Logo.tsx           ← ⌘ + wordmark em SVG
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── Terminal.tsx       ← signature: typewriter com consultas reais
│   ├── Services.tsx
│   ├── Clients.tsx
│   ├── About.tsx
│   ├── FinalCTA.tsx
│   └── Footer.tsx
├── public/                ← favicon e imagens estáticas (adicionar)
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── package.json
```

## 🎨 Decisões de design

- **B&W estrito**: tinta `#0A0A0A`, papel `#FAFAFA`, grafite `#161616`, fumo `#737373`, osso `#E5E5E5`.
- **Único ponto de cor**: o verde-sinal `#D7FF1A` aparece *só* em indicadores de status (online, pulse, glow do CTA final). Funciona como "luz" — referência ao nome _Lume_.
- **Tipografia**: Geist Sans (display + body) + Geist Mono (códigos, eyebrows, tags). A mono dialoga diretamente com o glifo ⌘ do logo.
- **Signature element**: o terminal no hero rotaciona 5 consultas reais (`faturamento`, `curva-abc`, `estoque`, `projeção`, `cliente`). Mostra o produto fazendo, não falando.
- **Sem dependência de animação**: tudo via CSS keyframes e setTimeout — bundle minúsculo.

## 🔧 Próximos passos sugeridos

1. Adicionar `app/sitemap.ts` e `app/robots.ts` (SEO).
2. Trocar o número de WhatsApp e CNPJ pelos reais.
3. Adicionar `public/favicon.ico` e `public/og-image.png` (1200×630).
4. Se quiser captar leads em banco: rota API + Prisma + Postgres na VPS.
5. Plug de analytics leve (Umami self-hosted ou Plausible).
