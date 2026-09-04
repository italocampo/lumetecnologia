import { FadeIn } from "./FadeIn";
import { whatsappUrl } from "@/lib/site";

type Solution = {
  id: string;
  kicker: string;
  verb: string;
  /** A promessa — o que o empresário ganha, em uma frase. */
  promise: string;
  desc: string;
  /** Benefícios, não tecnologia: o que muda na operação. */
  bullets: string[];
  command: string;
};

const SOLUTIONS: Solution[] = [
  {
    id: "atender",
    kicker: "01",
    verb: "Atender",
    promise: "Seu cliente recebe resposta mesmo quando sua equipe está offline.",
    desc: "Atendimento, triagem e relacionamento acontecendo no WhatsApp, no Instagram e no Telegram — com o contexto de cada cliente preservado de uma conversa para a outra.",
    bullets: [
      "Resposta imediata, a qualquer hora do dia",
      "Triagem antes de a conversa chegar na equipe",
      "Histórico do cliente lembrado a cada contato",
      "Passa para uma pessoa quando o assunto pede",
    ],
    command: "/atender",
  },
  {
    id: "entender",
    kicker: "02",
    verb: "Entender",
    promise: "Pergunte ao seu negócio o que está acontecendo.",
    desc: "Inteligência conectada aos dados da empresa. Faturamento, vendas, estoque e indicadores consultados em português, na mesma conversa que você já usa o dia inteiro.",
    bullets: [
      "Faturamento, ticket médio e vendas do dia",
      "Estoque, ruptura e giro de produto",
      "Resultado por canal, produto ou período",
      "Sem relatório, sem dashboard, sem login",
    ],
    command: "/entender",
  },
  {
    id: "automatizar",
    kicker: "03",
    verb: "Automatizar",
    promise: "Elimine tarefas repetitivas da operação.",
    desc: "Processos, integrações e rotinas que hoje dependem de alguém lembrar de fazer passam a acontecer sozinhos — no horário certo, do mesmo jeito, todos os dias.",
    bullets: [
      "Rotinas manuais rodando sem intervenção",
      "Sistemas diferentes trabalhando juntos",
      "Menos retrabalho e menos erro de digitação",
      "Sua equipe cuidando do que exige gente",
    ],
    command: "/automatizar",
  },
  {
    id: "construir",
    kicker: "04",
    verb: "Construir",
    promise: "Quando sua operação precisa de algo específico, nós construímos.",
    desc: "Nem toda operação cabe num software de prateleira. Quando o seu problema é próprio, a solução também é: sistemas, plataformas, lojas e sites desenhados a partir da sua realidade.",
    bullets: [
      "Plataformas e painéis internos",
      "Lojas virtuais e sites que vendem",
      "Integração com o que a empresa já usa",
      "Arquitetura pensada para crescer junto",
    ],
    command: "/construir",
  },
];

export function Solutions() {
  return (
    <section id="solucoes" className="relative py-24 sm:py-32 bg-paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <FadeIn>
          <div className="mb-16 sm:mb-20 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[11px] tracking-[0.22em] text-smoke">
                ⌘ SOLUÇÕES
              </span>
              <span className="h-px flex-1 bg-linear-to-r from-bone to-transparent" />
            </div>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold tracking-tight leading-[1.02]">
              Quatro coisas que a AYVO
              <br />
              <span className="text-smoke">resolve na sua operação.</span>
            </h2>
          </div>
        </FadeIn>

        {/* Grid — as bordas são o próprio fundo, vistas pelo gap de 1px */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-bone border border-bone rounded-3xl overflow-hidden shadow-subtle">
          {SOLUTIONS.map((s, i) => (
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
                      {s.kicker} — {s.verb.toUpperCase()}
                    </span>
                    <code className="font-mono text-[11px] tracking-tight text-smoke bg-mist px-2.5 py-1 rounded-full transition-all duration-400 ease-out-quint group-hover:bg-ink group-hover:text-paper">
                      {s.command}
                    </code>
                  </header>

                  {/* A promessa vem antes da explicação: é o que o
                      empresário precisa ler se ler só uma linha. */}
                  <h3 className="font-display text-2xl sm:text-[28px] font-semibold tracking-tight leading-tight mb-4">
                    {s.promise}
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

        {/* CTA de meio de página — o visitante convencido aqui não deveria
            ter de rolar até o rodapé para encontrar como falar com a AYVO. */}
        <FadeIn delay={120}>
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <p className="text-graphite text-[15.5px]">
              Não sabe em qual dessas o seu problema se encaixa?
            </p>
            <a
              href={whatsappUrl("especialista")}
              target="_blank"
              rel="noopener noreferrer"
              data-umami-event="WhatsApp Click"
              data-umami-event-location="solucoes"
              className="group inline-flex items-center gap-2 rounded-full border border-bone bg-paper px-5 py-3 text-sm font-medium text-ink transition-all duration-400 ease-out-quint hover:border-ink hover:shadow-subtle hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
            >
              Falar com um especialista
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
                className="text-ash transition-transform duration-400 ease-out-quint group-hover:translate-x-1"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
