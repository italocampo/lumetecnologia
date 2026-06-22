import { FadeIn } from "./FadeIn";

const FACTS = [
  { k: "Fundada em", v: "2022" },
  { k: "Sede", v: "Fortaleza, CE" },
  { k: "Fundador", v: "Italo Campos" },
  { k: "Especialidade", v: "IA & Automação" },
];

export function About() {
  return (
    <section id="sobre" className="py-24 sm:py-32 bg-paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Coluna texto */}
          <div className="lg:col-span-7">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[11px] tracking-[0.22em] text-smoke">
                  ⌘ SOBRE
                </span>
                <span className="h-px w-12 bg-bone" />
              </div>

              <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold tracking-tight leading-[1.05] mb-8">
                Tecnologia cearense
                <br />
                <span className="text-smoke">construída para resolver.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={100}>
              <div className="space-y-5 text-graphite text-[16.5px] leading-relaxed max-w-2xl">
                <p>
                  A Lume nasceu em 2022, em Fortaleza, das mãos de{" "}
                  <span className="text-ink font-medium">Italo Campos</span>,
                  ainda na graduação em Análise e Desenvolvimento de Sistemas. A
                  ideia era simples e impopular na época: trazer agentes de IA
                  úteis de verdade para o WhatsApp do empresário brasileiro —
                  aquele que ainda tira pedido, fecha estoque e responde cliente
                  no mesmo aparelho.
                </p>
                <p>
                  Hoje, a Lume conversa, consulta, calcula e entrega. Atende
                  seus clientes, lê seus dados, sugere decisões. Trabalha 24
                  horas, 7 dias por semana, sem pausa para o café — porque o seu
                  negócio também não pausa.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Coluna fatos */}
          <FadeIn delay={180} className="lg:col-span-5">
            <aside className="lg:pl-8 lg:border-l border-bone">
              <div className="font-mono text-[11px] tracking-[0.22em] text-smoke mb-7">
                FICHA TÉCNICA
              </div>
              <dl className="divide-y divide-bone">
                {FACTS.map((f, i) => (
                  <div
                    key={f.k}
                    className="flex items-baseline justify-between py-4 gap-6 group"
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <dt className="font-mono text-[12px] tracking-wide text-smoke uppercase">
                      {f.k}
                    </dt>
                    <dd className="font-display text-lg sm:text-xl font-medium text-ink text-right">
                      {f.v}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* Assinatura sutil */}
              <div className="mt-10 pt-6 border-t border-bone flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d7ff1a]" />
                <span className="font-mono text-[11px] tracking-[0.18em] text-smoke">
                  FORTALEZA · CE · BRASIL
                </span>
              </div>
            </aside>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
