import { Constellation } from "./Constellation";
import { FadeIn } from "./FadeIn";
import { AyvoMark } from "./Logo";
import { ReelPlayer } from "./ReelPlayer";

/**
 * O que aparece na demonstração. Os quatro são clientes que já estão em
 * Cases — a seção mostra a mesma operação em movimento, não uma lista nova.
 */
const SHOWN = [
  { client: "LCL Medical Center", note: "ERP e atendimento com IA" },
  { client: "Grupo Dilady", note: "Dados da operação por conversa" },
  { client: "GT Barbearia", note: "Agendamento no WhatsApp" },
  { client: "FC Motos", note: "Qualificação de lead" },
] as const;

/**
 * Demonstração em vídeo — entra logo depois de Cases porque é a mesma prova
 * em outro registro: lá descrito, aqui em movimento.
 *
 * Seção escura entre duas claras (Cases e Como funciona). A inversão de tom
 * é o que separa a prova do resto da leitura, o mesmo recurso que o card do
 * case em destaque já usa dentro de Cases.
 */
export function Reel() {
  return (
    <section
      id="projetos"
      className="relative grain on-dark py-24 sm:py-32 bg-ink text-paper overflow-hidden"
    >
      {/* Campo de nós — a profundidade do espelho, no matiz da marca */}
      <Constellation />

      {/* Luz rasante na borda superior, igual à do CTA final */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent"
      />

      {/* Clareia o miolo para o vídeo não flutuar sobre um fundo chapado */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 65% 50% at 50% 8%, rgba(167,204,228,0.07), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn>
          <div className="mb-12 sm:mb-14 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.22em] text-white/50">
                <AyvoMark className="h-2.25 w-auto" />
                EM FUNCIONAMENTO
              </span>
              <span className="h-px flex-1 bg-linear-to-r from-white/25 to-transparent" />
            </div>

            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold tracking-tight leading-[1.02]">
              Do atendimento ao sistema.
              <br />
              <span className="text-white/50">Tudo conectado.</span>
            </h2>

            <p className="mt-7 max-w-xl text-[16.5px] leading-relaxed text-white/60">
              Uma passagem pelo que já está no ar: conversas sendo respondidas,
              processos disparando sozinhos e número chegando pronto. É a mesma
              operação descrita nos cases — agora em movimento.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={90}>
          <ReelPlayer />
        </FadeIn>

        {/* Quem aparece na tela */}
        <div className="mt-6 grid gap-3 grid-cols-2 lg:grid-cols-4">
          {SHOWN.map((s, i) => (
            <FadeIn key={s.client} delay={140 + i * 70} className="h-full">
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition-colors duration-500 ease-out-quint hover:border-white/25">
                <div className="font-display text-[15px] font-semibold tracking-tight text-paper">
                  {s.client}
                </div>
                <div className="mt-1 text-[13px] leading-snug text-white/50">
                  {s.note}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/*
          Mesma ética da nota de Cases: o que está na tela é demonstração, e
          isso precisa estar escrito antes de alguém perguntar.
        */}
        <FadeIn delay={420}>
          <p className="mt-10 pt-8 border-t border-white/10 font-mono text-[11px] leading-relaxed tracking-[0.14em] text-white/30">
            AS CONVERSAS EXIBIDAS SÃO SIMULAÇÕES DEMONSTRATIVAS DE AUTOMAÇÕES E
            ATENDIMENTO COM IA.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
