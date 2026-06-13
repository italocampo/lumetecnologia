import { Terminal } from "./Terminal";

const WHATSAPP_URL = "https://wa.me/5585999999999?text=Ol%C3%A1%20Lume!";

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.4] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #00000008 1px, transparent 1px), linear-gradient(to bottom, #00000008 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="h-px w-8 bg-bone" />
          <span className="font-mono text-[11px] tracking-[0.24em] text-smoke">
            FORTALEZA · CEARÁ · DESDE 2026
          </span>
          <span className="h-px w-8 bg-bone" />
        </div>

        {/* Headline */}
        <h1 className="font-display text-center font-semibold tracking-tight text-ink text-[clamp(2.5rem,7vw,5.75rem)] leading-[0.96]">
          Pergunte.
          <br />
          <span className="text-smoke">A Lume responde.</span>
        </h1>

        {/* Sub */}
        <p className="mt-7 mx-auto max-w-2xl text-center text-[17px] sm:text-lg leading-relaxed text-graphite">
          Agentes de IA que atendem seus clientes e consultam os dados do seu negócio
          direto no WhatsApp. <span className="text-ink font-medium">24h, 7 dias por semana.</span>
        </p>

        {/* CTAs */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-ink text-paper px-6 py-3.5 text-sm font-medium hover:bg-graphite transition-all"
          >
            Começar com a Lume
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center gap-2 rounded-full border border-bone bg-paper text-ink px-6 py-3.5 text-sm font-medium hover:border-ink transition-colors"
          >
            Ver o que fazemos
          </a>
        </div>

        {/* Terminal signature */}
        <div className="mt-20 sm:mt-24">
          <Terminal />
        </div>
      </div>
    </section>
  );
}
