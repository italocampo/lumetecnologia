import { FadeIn } from "./FadeIn";

const CLIENTS = ["Dilady Lingerie", "Love Secret", "FC Motos"];

export function Clients() {
  // Triplicado para garantir loop contínuo sem gaps visíveis
  const loop = [...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <section
      id="clientes"
      className="py-24 sm:py-28 bg-ink text-paper overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <FadeIn>
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-[11px] tracking-[0.22em] text-white/50">
                  ⌘ CLIENTES
                </span>
                <span className="h-px w-12 bg-white/15" />
              </div>
              <h2 className="font-display text-[clamp(1.85rem,4vw,3.25rem)] font-semibold tracking-tight leading-[1.05] max-w-2xl">
                Empresas que já entregaram
                <br />
                <span className="text-white/55">
                  o atendimento para a Lume.
                </span>
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <p className="font-mono text-[12px] tracking-wide text-white/55 max-w-xs">
              De varejo a serviços, da indústria a concessionárias — a Lume se
              adapta ao vocabulário do seu negócio.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Marquee — pausa no hover */}
      <div
        className="relative group"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused] gap-12 sm:gap-20">
          {loop.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex items-center gap-5 shrink-0"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#d7ff1a]" />
              <span className="font-display text-2xl sm:text-4xl font-medium text-white/85 tracking-tight whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
