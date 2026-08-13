import { Terminal } from "./Terminal";
import { WHATSAPP_URL } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden"
    >
      {/* Grid de fundo — desvanece nas bordas com máscara radial */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_72%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #00000010 1px, transparent 1px), linear-gradient(to bottom, #00000010 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Spotlight — clareia o miolo e dá profundidade ao grid */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[70%] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 55% at 50% 18%, rgba(255,255,255,0.9), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Eyebrow — entra primeiro */}
        <div
          className="flex items-center justify-center gap-3 mb-8"
          style={{ animation: "fadeUp 0.7s var(--ease-out-expo) both" }}
        >
          <span className="h-px w-8 bg-linear-to-r from-transparent to-bone" />
          <span className="font-mono text-[11px] tracking-[0.24em] text-smoke">
            FORTALEZA · CEARÁ · DESDE 2022
          </span>
          <span className="h-px w-8 bg-linear-to-l from-transparent to-bone" />
        </div>

        {/* Headline */}
        <h1
          className="font-display text-center font-semibold tracking-tight text-ink text-[clamp(3rem,8vw,6.5rem)] leading-[0.93]"
          style={{ animation: "fadeUp 0.8s var(--ease-out-expo) 0.08s both" }}
        >
          Pergunte.
          <br />
          <span className="text-smoke">A Lume responde.</span>
        </h1>

        {/* Subtítulo */}
        <p
          className="mt-8 mx-auto max-w-xl text-center text-[17px] sm:text-[18px] leading-relaxed text-graphite"
          style={{ animation: "fadeUp 0.8s var(--ease-out-expo) 0.18s both" }}
        >
          Agentes de IA que atendem seus clientes e consultam os dados do seu
          negócio direto no WhatsApp.{" "}
          <span className="text-ink font-semibold">
            24h, 7 dias por semana.
          </span>
        </p>

        {/* CTAs */}
        <div
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
          style={{ animation: "fadeUp 0.8s var(--ease-out-expo) 0.28s both" }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-umami-event="WhatsApp Click"
            data-umami-event-location="hero"
            className={[
              "group relative inline-flex items-center gap-2 overflow-hidden rounded-full",
              "bg-ink text-paper px-6 py-3.5 text-sm font-medium",
              "transition-all duration-400 ease-out-quint",
              "hover:bg-graphite hover:shadow-float hover:-translate-y-0.5",
              "active:translate-y-0 active:scale-[0.98]",
            ].join(" ")}
          >
            {/* Brilho que atravessa o botão em loop lento */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-12 bg-linear-to-r from-transparent via-white/18 to-transparent animate-sheen"
            />
            <span className="relative">Começar com a Lume</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="relative transition-transform duration-400 ease-out-quint group-hover:translate-x-1"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>

          <a
            href="#servicos"
            className={[
              "group inline-flex items-center gap-2 rounded-full",
              "border border-bone bg-paper/80 backdrop-blur-sm text-ink px-6 py-3.5 text-sm font-medium",
              "transition-all duration-400 ease-out-quint",
              "hover:border-ink hover:bg-paper hover:shadow-subtle hover:-translate-y-0.5",
              "active:translate-y-0 active:scale-[0.98]",
            ].join(" ")}
          >
            Ver o que fazemos
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="text-ash transition-transform duration-400 ease-out-quint group-hover:translate-y-0.5"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Terminal */}
        <div
          className="mt-20 sm:mt-24"
          style={{ animation: "fadeUp 0.9s var(--ease-out-expo) 0.42s both" }}
        >
          <Terminal />
        </div>
      </div>
    </section>
  );
}
