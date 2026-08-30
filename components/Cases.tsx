import { FadeIn } from "./FadeIn";
import { whatsappUrl } from "@/lib/site";

type Case = {
  id: string;
  client: string;
  segment: string;
  problem: string;
  solution: string;
  /**
   * Resultados qualitativos, verificáveis na operação do cliente.
   * Sem números até que existam métricas medidas e autorizadas — um
   * percentual inventado aqui destrói exatamente a autoridade que a
   * seção existe para construir.
   */
  results: string[];
};

/** Case principal — melhor tradução do posicionamento atual: IA + dados + WhatsApp. */
const FEATURED: Case = {
  id: "dilady",
  client: "Grupo Dilady",
  segment: "Varejo de moda íntima",
  problem:
    "Acompanhar a operação exigia abrir o sistema. Faturamento, estoque e desempenho de produto estavam registrados, mas chegar em qualquer um deles significava parar o que estava sendo feito, entrar na plataforma e procurar. A informação existia; o acesso a ela é que era caro.",
  solution:
    "Inteligência conectada aos dados da empresa e ao WhatsApp. A gestão pergunta em português — faturamento do dia, curva ABC, ruptura de estoque — e recebe a resposta na mesma conversa que já usa o dia inteiro, sem abrir o sistema e sem pedir relatório para ninguém.",
  results: [
    "Consulta de dados sem acessar o sistema diretamente",
    "Informação disponível fora do horário comercial",
    "Acompanhamento da operação de qualquer lugar",
    "Menos pedidos de relatório circulando pela equipe",
  ],
};

const CASES: Case[] = [
  {
    id: "fc-motos",
    client: "FC Motos",
    segment: "Concessionária de motos",
    problem:
      "O primeiro contato do cliente chega pelo WhatsApp — fora do horário, no fim de semana, no meio do atendimento de outra pessoa.",
    solution:
      "Agente de IA respondendo dúvidas sobre modelos, condições e disponibilidade, e qualificando o interesse antes de passar o contato para a equipe de vendas.",
    results: [
      "Atendimento fora do horário comercial",
      "Cliente qualificado antes de chegar no vendedor",
      "Nenhuma mensagem sem resposta",
    ],
  },
  {
    id: "gt-barbearia",
    client: "GT Barbearia",
    segment: "Serviços",
    problem:
      "Agendar dependia de conversa: consultar horário, confirmar, remarcar. Tudo passando por quem estava atendendo na cadeira.",
    solution:
      "Atendimento automatizado no WhatsApp para agendamento, confirmação e dúvidas frequentes, conectado à agenda da barbearia.",
    results: [
      "Agendamento sem interromper o atendimento",
      "Confirmação automática de horário",
      "Cliente marcando a qualquer hora",
    ],
  },
  {
    id: "love-secret",
    client: "Love Secret",
    segment: "Varejo",
    problem:
      "Dúvida de produto, prazo e pagamento chegando o dia inteiro — e sempre as mesmas, ocupando o tempo de quem deveria estar vendendo.",
    solution:
      "IA de atendimento e relacionamento nos canais onde o cliente já está, resolvendo o recorrente e encaminhando para a equipe o que exige uma pessoa.",
    results: [
      "Perguntas repetitivas resolvidas sem intervenção",
      "Equipe concentrada no que gera venda",
      "Presença nos canais que o cliente já usa",
    ],
  },
];

export function Cases() {
  return (
    <section id="cases" className="relative py-24 sm:py-32 bg-mist">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <FadeIn>
          <div className="mb-14 sm:mb-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[11px] tracking-[0.22em] text-smoke">
                ⌘ CASES
              </span>
              <span className="h-px flex-1 bg-linear-to-r from-bone to-transparent" />
            </div>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold tracking-tight leading-[1.02]">
              Empresas que já operam
              <br />
              <span className="text-smoke">com a Lume por perto.</span>
            </h2>
          </div>
        </FadeIn>

        {/* ── Case em destaque ─────────────────────────────
            Card escuro dentro de seção clara: a inversão de tom é o que
            estabelece a hierarquia sem precisar de selo "destaque". */}
        <FadeIn>
          <article className="relative grain on-dark rounded-3xl bg-ink text-paper overflow-hidden shadow-float">
            {/* Luz rasante no topo do card */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/25 to-transparent"
            />
            {/* Glow signal — mesmo vocabulário do CTA final */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse 55% 45% at 85% 0%, rgba(215,255,26,0.06), transparent 70%)",
              }}
            />

            <div className="relative p-8 sm:p-12 lg:p-14">
              <header className="flex flex-wrap items-baseline gap-x-5 gap-y-2 mb-10 pb-8 border-b border-white/10">
                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
                  {FEATURED.client}
                </h3>
                <span className="font-mono text-[11px] tracking-[0.18em] text-white/45">
                  {FEATURED.segment.toUpperCase()}
                </span>
              </header>

              <div className="grid gap-10 lg:gap-12 lg:grid-cols-3">
                <CaseBlock label="Problema" dark>
                  <p className="text-white/60 leading-relaxed">
                    {FEATURED.problem}
                  </p>
                </CaseBlock>

                <CaseBlock label="Solução" dark>
                  <p className="text-white/85 leading-relaxed">
                    {FEATURED.solution}
                  </p>
                </CaseBlock>

                <CaseBlock label="Resultado" dark>
                  <ul className="space-y-3">
                    {FEATURED.results.map((r) => (
                      <li key={r} className="flex items-start gap-3">
                        <span
                          aria-hidden
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal"
                        />
                        <span className="text-paper leading-relaxed">{r}</span>
                      </li>
                    ))}
                  </ul>
                </CaseBlock>
              </div>
            </div>
          </article>
        </FadeIn>

        {/* ── Demais cases ────────────────────────────── */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {CASES.map((c, i) => (
            <FadeIn key={c.id} delay={i * 90} className="h-full">
              <article className="group h-full flex flex-col rounded-3xl border border-bone bg-paper p-8 sm:p-9 transition-all duration-500 ease-out-quint hover:border-ash/60 hover:shadow-raised hover:-translate-y-1">
                <header className="mb-7 pb-6 border-b border-bone">
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
                    {c.client}
                  </h3>
                  <span className="mt-1.5 block font-mono text-[10.5px] tracking-[0.18em] text-smoke">
                    {c.segment.toUpperCase()}
                  </span>
                </header>

                <div className="flex flex-col gap-6 grow">
                  <CaseBlock label="Problema">
                    <p className="text-graphite text-[15px] leading-relaxed">
                      {c.problem}
                    </p>
                  </CaseBlock>

                  <CaseBlock label="Solução">
                    <p className="text-graphite text-[15px] leading-relaxed">
                      {c.solution}
                    </p>
                  </CaseBlock>

                  <CaseBlock label="Resultado">
                    <ul className="space-y-2.5">
                      {c.results.map((r) => (
                        <li key={r} className="flex items-start gap-3">
                          <span
                            aria-hidden
                            className="mt-2 h-px w-3 shrink-0 origin-left bg-ink/70 transition-transform duration-500 ease-out-expo group-hover:scale-x-150"
                          />
                          <span className="text-[15px] text-ink leading-relaxed">
                            {r}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CaseBlock>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* Nota de transparência + CTA */}
        <FadeIn delay={120}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-bone">
            <p className="font-mono text-[11px] leading-relaxed tracking-[0.14em] text-smoke max-w-md text-center sm:text-left">
              RESULTADOS DESCRITOS QUALITATIVAMENTE.
              <br className="hidden sm:block" /> MÉTRICAS NUMÉRICAS APENAS
              QUANDO MEDIDAS E AUTORIZADAS PELO CLIENTE.
            </p>
            <a
              href={whatsappUrl("especialista")}
              target="_blank"
              rel="noopener noreferrer"
              data-umami-event="WhatsApp Click"
              data-umami-event-location="cases"
              className="group shrink-0 inline-flex items-center gap-2 rounded-full bg-ink text-paper px-6 py-3.5 text-sm font-medium transition-all duration-400 ease-out-quint hover:bg-graphite hover:shadow-float hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
            >
              Quero um resultado assim
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
                className="transition-transform duration-400 ease-out-quint group-hover:translate-x-1"
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

/** Rótulo + conteúdo de um dos três momentos do case. */
function CaseBlock({
  label,
  dark = false,
  children,
}: {
  label: string;
  dark?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div
        className={[
          "flex items-center gap-2.5 mb-3.5 font-mono text-[10.5px] tracking-[0.22em]",
          dark ? "text-white/40" : "text-smoke",
        ].join(" ")}
      >
        <span
          aria-hidden
          className={[
            "h-px w-4",
            dark ? "bg-white/25" : "bg-bone",
          ].join(" ")}
        />
        {label.toUpperCase()}
      </div>
      {children}
    </div>
  );
}
