import { Terminal } from "./Terminal";

const WHATSAPP_URL = "https://wa.me/5585994108087?text=Ol%C3%A1%20Lume!";

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden"
    >
      {/* Grid background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_72%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #00000010 1px, transparent 1px), linear-gradient(to bottom, #00000010 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Eyebrow — entra primeiro */}
        <div
          className="flex items-center justify-center gap-3 mb-8"
          style={{ animation: "heroFadeUp 0.6s ease-out both" }}
        >
          <span className="h-px w-8 bg-bone" />
          <span className="font-mono text-[11px] tracking-[0.24em] text-smoke">
            FORTALEZA · CEARÁ · DESDE 2022
          </span>
          <span className="h-px w-8 bg-bone" />
        </div>

        {/* Headline — maior, mais bold, mais impacto */}
        <h1
          className="font-display text-center font-semibold tracking-tight text-ink text-[clamp(3rem,8vw,6.5rem)] leading-[0.93]"
          style={{ animation: "heroFadeUp 0.6s ease-out 0.1s both" }}
        >
          Pergunte.
          <br />
          <span className="text-smoke">A Lume responde.</span>
        </h1>

        {/* Subtítulo */}
        <p
          className="mt-8 mx-auto max-w-xl text-center text-[17px] sm:text-[18px] leading-relaxed text-graphite"
          style={{ animation: "heroFadeUp 0.6s ease-out 0.2s both" }}
        >
          Agentes de IA que atendem seus clientes e consultam os dados do seu
          negócio direto no WhatsApp.{" "}
          <span className="text-ink font-semibold">24h, 7 dias por semana.</span>
        </p>

        {/* CTAs */}
        <div
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
          style={{ animation: "heroFadeUp 0.6s ease-out 0.3s both" }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-ink text-paper px-6 py-3.5 text-sm font-medium hover:bg-graphite transition-all duration-300"
          >
            Começar com a Lume
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center gap-2 rounded-full border border-bone bg-paper text-ink px-6 py-3.5 text-sm font-medium hover:border-ink transition-colors duration-300"
          >
            Ver o que fazemos
          </a>
        </div>

        {/* Terminal */}
        <div
          className="mt-20 sm:mt-24"
          style={{ animation: "heroFadeUp 0.7s ease-out 0.45s both" }}
        >
          <Terminal />
        </div>

      </div>

      {/* Keyframes da animação de entrada — inline style tag */}
      <style>{`
        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}