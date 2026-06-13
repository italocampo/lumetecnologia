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
    <section id="servicos" className="py-24 sm:py-32 bg-paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <div className="mb-16 sm:mb-20 max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-[11px] tracking-[0.22em] text-smoke">
              ⌘ SERVIÇOS
            </span>
            <span className="h-px flex-1 bg-bone" />
          </div>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold tracking-tight leading-[1.02]">
            Quatro maneiras de a Lume
            <br />
            <span className="text-smoke">trabalhar pelo seu negócio.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-bone border border-bone rounded-3xl overflow-hidden">
          {SERVICES.map((s) => (
            <article
              key={s.id}
              className="group bg-paper p-8 sm:p-10 lg:p-12 hover:bg-mist/60 transition-colors duration-300"
            >
              <header className="flex items-baseline justify-between mb-8">
                <span className="font-mono text-xs tracking-[0.18em] text-ash">
                  {s.kicker}
                </span>
                <code className="font-mono text-[11px] tracking-tight text-smoke bg-mist px-2.5 py-1 rounded-full">
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
                    <span
                      aria-hidden
                      className="mt-2 h-px w-3 shrink-0 bg-ink/70"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
