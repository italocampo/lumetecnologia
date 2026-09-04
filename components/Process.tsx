import { FadeIn } from "./FadeIn";
import { AyvoMark } from "./Logo";

type Step = {
  verb: string;
  desc: string;
};

const STEPS: Step[] = [
  {
    verb: "Entendemos",
    desc: "Mapeamos a operação como ela funciona hoje e identificamos onde ela trava.",
  },
  {
    verb: "Identificamos",
    desc: "Separamos o que vale automatizar, integrar ou deixar exatamente como está.",
  },
  {
    verb: "Construímos",
    desc: "Desenvolvemos a solução adequada ao negócio — nem a mais simples, nem a mais cara.",
  },
  {
    verb: "Integramos",
    desc: "Conectamos a solução aos sistemas e canais que a empresa já usa todos os dias.",
  },
  {
    verb: "Evoluímos",
    desc: "Acompanhamos o funcionamento e ajustamos conforme a operação muda.",
  },
];

export function Process() {
  return (
    <section id="como-funciona" className="relative py-24 sm:py-32 bg-paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn>
          <div className="mb-16 sm:mb-20 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.22em] text-smoke">
                <AyvoMark className="h-2.25 w-auto" />
                COMO FUNCIONA
              </span>
              <span className="h-px flex-1 bg-linear-to-r from-bone to-transparent" />
            </div>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold tracking-tight leading-[1.02]">
              Não começamos pela tecnologia.
              <br />
              <span className="text-smoke">Começamos pela sua operação.</span>
            </h2>
          </div>
        </FadeIn>

        {/*
          Trilho contínuo ligando as etapas: horizontal no desktop, vertical
          no mobile. É o que faz cinco blocos serem lidos como um processo e
          não como cinco features soltas.
        */}
        <div className="cine-track relative">
          <span
            aria-hidden
            className="pointer-events-none absolute left-[9px] top-2 bottom-2 w-px bg-linear-to-b from-bone via-bone to-transparent lg:left-0 lg:right-0 lg:top-[9px] lg:bottom-auto lg:h-px lg:w-auto lg:bg-linear-to-r lg:from-bone lg:via-bone lg:to-transparent"
          />

          {/*
            Trilho de progresso por cima do trilho apagado: cresce conforme a
            seção atravessa a tela, então o percurso se desenha enquanto o
            visitante percorre as etapas. Onde o navegador não anima por
            scroll, este span simplesmente não aparece (fica em scale 0 só
            sob a regra .cine-rail) — o trilho apagado abaixo continua
            sustentando a leitura sozinho.
          */}
          <span
            aria-hidden
            className="cine-rail pointer-events-none absolute left-[9px] top-2 bottom-2 w-px origin-top scale-y-0 bg-linear-to-b from-ink to-ink/15 lg:left-0 lg:right-0 lg:top-[9px] lg:bottom-auto lg:h-px lg:w-auto lg:origin-left lg:scale-y-100 lg:scale-x-0 lg:bg-linear-to-r lg:from-ink lg:to-ink/15"
          />

          <ol className="relative grid gap-10 lg:grid-cols-5 lg:gap-6">
            {STEPS.map((s, i) => (
              <FadeIn key={s.verb} delay={i * 80}>
                <li className="group relative flex gap-5 lg:block">
                  {/* Marcador sobre o trilho */}
                  {/*
                    O `group-hover` continua aqui de propósito: é o
                    comportamento de quem não tem animação por scroll. Onde
                    ela existe, a animação vence o hover na cascata e a etapa
                    passa a acender ao ser alcançada — que é melhor, porque
                    não depende de o visitante passar o mouse por cima.
                  */}
                  <span
                    aria-hidden
                    className="cine-step-ring relative z-10 mt-0.5 flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full border border-bone bg-paper transition-all duration-500 ease-out-expo group-hover:border-ink"
                  >
                    <span className="cine-step-dot h-1.5 w-1.5 rounded-full bg-ash transition-colors duration-500 group-hover:bg-ink" />
                  </span>

                  <div className="lg:mt-6 lg:pr-4">
                    <div className="cine-step-num font-mono text-[11px] tracking-[0.18em] text-ash mb-2 transition-colors duration-400 group-hover:text-smoke">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="font-display text-xl sm:text-[22px] font-semibold tracking-tight text-ink mb-2.5">
                      {s.verb}
                    </h3>
                    <p className="text-graphite text-[15px] leading-relaxed max-w-xs">
                      {s.desc}
                    </p>
                  </div>
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
