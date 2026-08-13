import { FadeIn } from "./FadeIn";

const CLIENTS = ["FC Motos", "GT Barbearia", "Dilady Lingerie", "Love Secret"];

/**
 * A animação `marquee` desloca a faixa em -50%. Para o ponto de emenda cair
 * exatamente sobre um item idêntico, o número de cópias precisa ser par —
 * quatro garantem isso e ainda largura suficiente para telas largas.
 * O espaçamento vem de padding no próprio item (e não de `gap`), senão a
 * metade da faixa cairia no meio de um vão e o loop saltaria.
 */
const COPIES = 4;

export function Clients() {
  const loop = Array.from({ length: COPIES }, () => CLIENTS).flat();

  return (
    <section
      id="clientes"
      className="relative grain on-dark py-24 sm:py-28 bg-ink text-paper overflow-hidden"
    >
      {/* Luz rasante no topo — separa a seção escura da anterior */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <FadeIn>
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-[11px] tracking-[0.22em] text-white/50">
                  ⌘ CLIENTES
                </span>
                <span className="h-px w-12 bg-linear-to-r from-white/25 to-transparent" />
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

          <FadeIn delay={140} variant="right">
            <p className="font-mono text-[12px] leading-relaxed tracking-wide text-white/55 max-w-xs">
              De varejo a serviços, da indústria a concessionárias — a Lume se
              adapta ao vocabulário do seu negócio.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Marquee — pausa no hover, desvanece nas bordas */}
      <div
        className="relative group"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {loop.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="group/item flex items-center gap-5 shrink-0 pr-12 sm:pr-20"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-signal transition-transform duration-500 ease-spring group-hover/item:scale-150" />
              <span className="font-display text-2xl sm:text-4xl font-medium text-white/85 tracking-tight whitespace-nowrap transition-colors duration-500 group-hover/item:text-paper">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
