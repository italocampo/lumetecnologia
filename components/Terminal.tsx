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
    a: [
      "Sim · 2 pedidos · R$ 248",
      "Última compra: 14:22  ·  forma: PIX",
    ],
  },
];

export function Terminal() {
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const current = QUERIES[index];
    if (!current) return;

    // limpa timeouts pendentes antes de iniciar um novo ciclo
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];

    setTyped("");
    setShowAnswer(false);

    // Typewriter da pergunta
    let charIdx = 0;
    const typingSpeed = 38;
    const tick = () => {
      charIdx += 1;
      setTyped(current.q.slice(0, charIdx));
      if (charIdx < current.q.length) {
        timeoutsRef.current.push(setTimeout(tick, typingSpeed));
      } else {
        // pequena pausa, mostra resposta
        timeoutsRef.current.push(
          setTimeout(() => setShowAnswer(true), 320)
        );
        // próxima consulta
        timeoutsRef.current.push(
          setTimeout(() => setIndex((i) => (i + 1) % QUERIES.length), 4200)
        );
      }
    };
    timeoutsRef.current.push(setTimeout(tick, 500));

    return () => {
      timeoutsRef.current.forEach(clearTimeout);
      timeoutsRef.current = [];
    };
  }, [index]);

  const current = QUERIES[index]!;

  return (
    <div className="relative w-full max-w-[640px] mx-auto">
      {/* Terminal */}
      <div className="relative rounded-2xl border border-bone bg-ink text-paper shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)] overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/8">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <div className="font-mono text-[10.5px] tracking-[0.18em] text-white/45">
            LUME · WHATSAPP
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d7ff1a] animate-pulse" />
            <span className="font-mono text-[10.5px] text-white/60">online</span>
          </div>
        </div>

        {/* Body */}
        <div className="px-5 sm:px-7 py-7 font-mono text-[13.5px] sm:text-[14.5px] leading-relaxed min-h-[280px]">
          {/* tag rotativa */}
          <div className="text-[10.5px] tracking-[0.22em] text-white/40 mb-4">
            {current.tag}
          </div>

          {/* Pergunta do usuário */}
          <div className="flex gap-3 items-start">
            <span className="text-white/40 select-none">▸</span>
            <p className="text-white/90">
              {typed}
              <span className="inline-block w-[7px] h-[1em] bg-white/80 ml-0.5 align-[-2px] [animation:blink_1s_steps(2)_infinite]" />
            </p>
          </div>

          {/* Resposta da Lume */}
          <div
            className={[
              "mt-5 pl-6 transition-all duration-500",
              showAnswer ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1",
            ].join(" ")}
            aria-live="polite"
          >
            <div className="flex items-center gap-2 mb-2.5 text-[10.5px] tracking-[0.22em] text-[#d7ff1a]">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
              </svg>
              LUME
            </div>
            {current.a.map((line, i) => (
              <p
                key={`${index}-${i}`}
                className={i === 0 ? "text-paper text-[15px] sm:text-base font-medium" : "text-white/65 mt-1"}
              >
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* Dots de paginação */}
        <div className="absolute bottom-3 right-4 flex gap-1.5">
          {QUERIES.map((_, i) => (
            <span
              key={i}
              className={[
                "h-1 rounded-full transition-all duration-300",
                i === index ? "w-5 bg-paper/80" : "w-1 bg-white/20",
              ].join(" ")}
              aria-hidden="true"
            />
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
