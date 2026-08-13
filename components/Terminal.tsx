"use client";

import { useEffect, useRef, useState } from "react";

type QA = {
  q: string;
  a: string[];
  tag: string;
};

const QUERIES: QA[] = [
  {
    tag: "FATURAMENTO",
    q: "qual o faturamento de hoje?",
    a: [
      "R$ 47.382,00",
      "↗ +12,4% vs ontem  ·  142 vendas  ·  ticket médio R$ 333",
    ],
  },
  {
    tag: "CURVA ABC",
    q: "curva abc dos produtos",
    a: [
      "A · 12 SKUs · 68% da receita",
      "B · 34 SKUs · 22% da receita",
      "C · 89 SKUs · 10% da receita",
    ],
  },
  {
    tag: "ESTOQUE",
    q: "estoque em nível crítico",
    a: [
      "7 SKUs abaixo do mínimo:",
      "Camisa P (3)  ·  Calça M (5)  ·  Vestido G (2)",
      "Reposição sugerida: R$ 8.420",
    ],
  },
  {
    tag: "PROJEÇÃO",
    q: "fechamento previsto do mês",
    a: [
      "R$ 1.420.000  ·  faixa: 1.38M – 1.46M",
      "↗ +8,2% acima da meta  ·  confiança 92%",
    ],
  },
  {
    tag: "CLIENTE",
    q: "a maria já comprou hoje?",
    a: ["Sim · 2 pedidos · R$ 248", "Última compra: 14:22  ·  forma: PIX"],
  },
];

const TYPING_SPEED = 38;
const ANSWER_DELAY = 320;
/** Tempo de leitura da resposta antes de girar para a próxima consulta. */
const CYCLE_DURATION = 2800;

export function Terminal() {
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [paused, setPaused] = useState(false);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  /* Digitação da pergunta atual. Só depende de `index`, para que pausar no
     hover não reinicie o texto do zero. */
  useEffect(() => {
    const current = QUERIES[index];
    if (!current) return;

    const timeouts = timeoutsRef.current;
    timeouts.forEach(clearTimeout);
    timeouts.length = 0;

    setTyped("");
    setShowAnswer(false);

    // Quem pediu menos movimento recebe a consulta inteira, sem digitação.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyped(current.q);
      setShowAnswer(true);
      return;
    }

    let charIdx = 0;
    const tick = () => {
      charIdx += 1;
      setTyped(current.q.slice(0, charIdx));

      if (charIdx < current.q.length) {
        timeouts.push(setTimeout(tick, TYPING_SPEED));
        return;
      }
      timeouts.push(setTimeout(() => setShowAnswer(true), ANSWER_DELAY));
    };
    timeouts.push(setTimeout(tick, 500));

    return () => {
      timeouts.forEach(clearTimeout);
      timeouts.length = 0;
    };
  }, [index]);

  /* Avanço do carrossel — separado da digitação para que hover/foco possam
     congelar a leitura sem cortar a animação no meio. */
  useEffect(() => {
    if (!showAnswer || paused) return;
    const id = setTimeout(
      () => setIndex((i) => (i + 1) % QUERIES.length),
      CYCLE_DURATION,
    );
    return () => clearTimeout(id);
  }, [showAnswer, paused, index]);

  const current = QUERIES[index]!;

  return (
    <div className="relative w-full max-w-[640px] mx-auto">
      {/* Reflexo sob o terminal — sugere superfície, não sombra */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-8 -bottom-6 h-24 -z-10 blur-2xl opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 100% at 50% 0%, rgba(10,10,10,0.22), transparent 70%)",
        }}
      />

      <div
        className="group relative grain rounded-2xl border border-white/10 bg-ink text-paper shadow-terminal overflow-hidden transition-transform duration-700 ease-out-expo hover:-translate-y-1"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        {/* Brilho de topo — luz raspando a borda superior, estilo vidro */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/25 to-transparent"
        />

        {/* Top bar */}
        <div className="relative flex items-center justify-between px-4 py-2.5 border-b border-white/10">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15 transition-colors duration-500 group-hover:bg-white/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15 transition-colors duration-500 delay-75 group-hover:bg-white/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15 transition-colors duration-500 delay-150 group-hover:bg-white/25" />
          </div>

          <div className="font-mono text-[10.5px] tracking-[0.18em] text-white/45">
            LUME · WHATSAPP
          </div>

          <div className="flex items-center gap-1.5">
            {/* Ponto "online" com halo que se expande — mais vivo que um pulse */}
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 rounded-full bg-signal animate-halo" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-signal" />
            </span>
            <span className="font-mono text-[10.5px] text-white/60">
              online
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="relative px-5 sm:px-7 py-7 font-mono text-[13.5px] sm:text-[14.5px] leading-relaxed min-h-[280px]">
          {/* Tag rotativa — reanimada a cada consulta via key */}
          <div
            key={`tag-${index}`}
            className="text-[10.5px] tracking-[0.22em] text-white/40 mb-4"
            style={{ animation: "fadeUp 0.5s var(--ease-out-expo) both" }}
          >
            {current.tag}
          </div>

          {/* Pergunta do usuário */}
          <div className="flex gap-3 items-start">
            <span className="text-white/40 select-none" aria-hidden>
              ▸
            </span>
            <p className="text-white/90">
              {typed}
              <span
                aria-hidden
                className="inline-block w-[7px] h-[1em] bg-white/80 ml-0.5 align-[-2px] animate-blink"
              />
            </p>
          </div>

          {/* Resposta da Lume */}
          <div
            className={[
              "mt-5 pl-6 transition-all duration-700 ease-out-expo",
              showAnswer
                ? "opacity-100 translate-y-0 blur-0"
                : "opacity-0 translate-y-2 blur-[2px]",
            ].join(" ")}
            aria-live="polite"
          >
            <div className="flex items-center gap-2 mb-2.5 text-[10.5px] tracking-[0.22em] text-signal">
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
              </svg>
              LUME
            </div>

            {current.a.map((line, i) => (
              <p
                key={`${index}-${i}`}
                className={
                  i === 0
                    ? "text-paper text-[15px] sm:text-base font-medium"
                    : "text-white/65 mt-1"
                }
                style={
                  showAnswer
                    ? {
                        animation: `fadeUp 0.6s var(--ease-out-expo) ${i * 90}ms both`,
                      }
                    : undefined
                }
              >
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* Paginação — vira controle real, não só indicador */}
        <div className="absolute bottom-3 right-4 flex gap-1.5">
          {QUERIES.map((q, i) => (
            <button
              key={q.tag}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ver consulta: ${q.tag.toLowerCase()}`}
              aria-current={i === index}
              className="on-dark group/dot flex h-4 items-center rounded-full px-0"
            >
              <span
                aria-hidden
                className={[
                  "h-1 rounded-full transition-all duration-500 ease-out-expo",
                  i === index
                    ? "w-5 bg-paper/80"
                    : "w-1 bg-white/20 group-hover/dot:bg-white/45",
                ].join(" ")}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Legenda */}
      <p className="mt-4 text-center font-mono text-[11px] tracking-[0.16em] text-smoke">
        CONSULTAS REAIS QUE A LUME RESPONDE NO WHATSAPP
      </p>
    </div>
  );
}
