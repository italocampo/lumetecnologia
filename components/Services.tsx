import { FadeIn } from "./FadeIn";

type Service = {
  id: string;
  kicker: string;
  title: string;
  desc: string;
  bullets: string[];
  command: string;
};

const SERVICES: Service[] = [
  {
    id: "agentes-ia",
    kicker: "01",
    title: "Agentes de IA omnichannel",
    desc: "Atendimento humano em qualidade, máquina em escala. WhatsApp, Instagram e Telegram falando a sua língua e integrados aos seus sistemas.",
    bullets: [
      "WhatsApp, Instagram Direct, Telegram",
      "Integração com ERP, CRM e e-commerce",
      "Roteamento inteligente para humano quando preciso",
      "Memória por cliente, contexto preservado",
    ],
    command: "/atender clientes",
  },
  {
    id: "dados-wpp",
    kicker: "02",
    title: "Seus dados na palma da mão",
    desc: "Consulte faturamento, estoque, lucro e curvas ABC pelo WhatsApp. Sem dashboard, sem login — só perguntar.",
    bullets: [
      "Faturamento e ticket médio em tempo real",
      "Curva ABC, giro de estoque, ruptura",
      "Lucro, margem e prejuízo por canal/produto",
      "Projeções de desempenho com IA",
    ],
    command: "/consultar dados",
  },
  {
    id: "sistemas",
    kicker: "03",
    title: "Sistemas sob medida",
    desc: "Quando o software de prateleira não resolve o seu problema, a gente desenha do zero — com a sua operação no centro.",
    bullets: [
      "Plataformas internas e dashboards",
      "Integrações entre sistemas existentes",
      "Automações que cortam o trabalho manual",
      "Arquitetura pensada para crescer",
    ],
    command: "/construir plataforma",
  },
  {
    id: "web",
    kicker: "04",
    title: "Sites e e-commerces",
    desc: "Presença digital que vende. Rápida, responsiva, otimizada para conversão — e sem dor para você editar depois.",
    bullets: [
      "Landing pages e sites institucionais",
      "Lojas virtuais com checkout otimizado",
      "Performance, SEO e acessibilidade",
      "Painel de edição amigável",
    ],
    command: "/lançar online",
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-24 sm:py-32 bg-paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <FadeIn>
          <div className="mb-16 sm:mb-20 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[11px] tracking-[0.22em] text-smoke">
                ⌘ SERVIÇOS
              </span>
              <span className="h-px flex-1 bg-linear-to-r from-bone to-transparent" />
            </div>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold tracking-tight leading-[1.02]">
              Quatro maneiras de a Lume
              <br />
              <span className="text-smoke">trabalhar pelo seu negócio.</span>
            </h2>
          </div>
        </FadeIn>

        {/* Grid — as bordas são o próprio fundo, vistas pelo gap de 1px */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-bone border border-bone rounded-3xl overflow-hidden shadow-subtle">
          {SERVICES.map((s, i) => (
            <FadeIn key={s.id} delay={i * 90} className="h-full">
              <article className="group relative bg-paper p-8 sm:p-10 lg:p-12 h-full transition-colors duration-500 ease-out-quint hover:bg-mist/70">
                {/* Halo diagonal que acende no hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 ease-out-expo group-hover:opacity-100"
                  style={{
                    backgroundImage:
                      "radial-gradient(120% 90% at 100% 0%, rgba(10,10,10,0.05), transparent 60%)",
                  }}
                />

                <div className="relative">
                  <header className="flex items-baseline justify-between mb-8">
                    <span className="font-mono text-xs tracking-[0.18em] text-ash transition-colors duration-400 group-hover:text-smoke">
                      {s.kicker}
                    </span>
                    <code className="font-mono text-[11px] tracking-tight text-smoke bg-mist px-2.5 py-1 rounded-full transition-all duration-400 ease-out-quint group-hover:bg-ink group-hover:text-paper">
                      {s.command}
                    </code>
                  </header>

                  <h3 className="font-display text-2xl sm:text-[28px] font-semibold tracking-tight leading-tight mb-4">
                    {s.title}
                  </h3>

                  <p className="text-graphite leading-relaxed mb-7 max-w-md">
                    {s.desc}
                  </p>

                  <ul className="space-y-2.5">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-[14.5px] text-graphite"
                      >
                        {/* O traço cresce quando o card é focado pelo mouse */}
                        <span
                          aria-hidden
                          className="mt-2 h-px w-3 shrink-0 origin-left bg-ink/70 transition-transform duration-500 ease-out-expo group-hover:scale-x-150"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
