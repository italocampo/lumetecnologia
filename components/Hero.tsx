import { Terminal } from "./Terminal";
import { WHATSAPP_URL } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden"
    >
      {/* Grid de fundo — plano mais distante, deriva devagar no scroll */}
      <div
        aria-hidden
        className="cine-drift-slow absolute inset-0 -z-10 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_72%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #040c1512 1px, transparent 1px), linear-gradient(to bottom, #040c1512 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Spotlight — plano à frente da grade; deriva mais rápido, e é a
          diferença entre os dois ritmos que lê como profundidade */}
      <div
        aria-hidden
        className="cine-drift-fast absolute inset-x-0 top-0 -z-10 h-[70%] pointer-events-none"
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
          {/* Tracking menor no mobile: em 0.24em a linha não cabia em 390px
              e quebrava em duas, deixando os filetes laterais órfãos. */}
          <span className="font-mono whitespace-nowrap text-[10px] tracking-[0.14em] text-smoke sm:text-[11px] sm:tracking-[0.24em]">
            FORTALEZA · CEARÁ · DESDE 2022
          </span>
          <span className="h-px w-8 bg-linear-to-l from-transparent to-bone" />
        </div>

        {/*
          O H1 carrega o posicionamento (IA + automação para negócios), que é
          o que precisa ser lido em 10 segundos e o que o Google indexa.
          "Pergunte. A AYVO responde." não se perdeu: virou a chamada da
          demonstração, logo acima do terminal, onde a frase descreve
          literalmente o que está acontecendo na tela.
        */}
        <h1
          className="font-display text-center font-semibold tracking-tight text-ink text-[clamp(2.1rem,4.9vw,4.1rem)] leading-[1.04] sm:leading-[1.0]"
          style={{ animation: "fadeUp 0.8s var(--ease-out-expo) 0.08s both" }}
        >
          IA que entende seu negócio.
          <br />
          <span className="text-smoke">
            Automação que faz ele funcionar.
          </span>
        </h1>

        {/* Subtítulo */}
        <p
          className="mt-8 mx-auto max-w-2xl text-center text-[17px] sm:text-[18px] leading-relaxed text-graphite"
          style={{ animation: "fadeUp 0.8s var(--ease-out-expo) 0.18s both" }}
        >
          Transformamos atendimento, dados e processos em{" "}
          <span className="text-ink font-semibold">
            operações inteligentes
          </span>{" "}
          — integradas ao WhatsApp e aos sistemas que sua empresa já usa.
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
            <span className="relative">Quero conhecer a AYVO</span>
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
            href="#solucoes"
            className={[
              "group inline-flex items-center gap-2 rounded-full",
              "border border-bone bg-paper/80 backdrop-blur-sm text-ink px-6 py-3.5 text-sm font-medium",
              "transition-all duration-400 ease-out-quint",
              "hover:border-ink hover:bg-paper hover:shadow-subtle hover:-translate-y-0.5",
              "active:translate-y-0 active:scale-[0.98]",
            ].join(" ")}
          >
            Ver o que resolvemos
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

        {/* Demonstração — a frase de marca introduz o que a tela mostra */}
        <div
          className="mt-20 sm:mt-24"
          style={{ animation: "fadeUp 0.9s var(--ease-out-expo) 0.42s both" }}
        >
          <p className="mb-7 text-center font-display text-[19px] sm:text-[22px] font-medium tracking-tight text-ink">
            Pergunte. <span className="text-smoke">A AYVO responde.</span>
          </p>
          <Terminal />
        </div>
      </div>
    </section>
  );
}
