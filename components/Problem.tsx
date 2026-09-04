import { FadeIn } from "./FadeIn";
import { AyvoMark } from "./Logo";

type Gap = {
  id: string;
  title: string;
  desc: string;
};

/**
 * Gargalos, não serviços. A seção existe para o visitante se reconhecer
 * antes de saber o que a AYVO vende — é o "problema" da hierarquia
 * problema → solução → prova.
 */
const GAPS: Gap[] = [
  {
    id: "espera",
    title: "Cliente esperando resposta",
    desc: "As mensagens chegam a qualquer hora. A equipe responde no horário comercial. No intervalo entre as duas coisas mora a venda que esfriou.",
  },
  {
    id: "dado",
    title: "Dado que existe, mas não chega",
    desc: "A informação está no sistema. Chegar até ela depende de alguém parar o que está fazendo, abrir a plataforma e procurar.",
  },
  {
    id: "repeticao",
    title: "Trabalho manual que se repete",
    desc: "Copiar, conferir, lançar, avisar. Todo dia a mesma sequência, ocupando gente cara com tarefa barata.",
  },
  {
    id: "silos",
    title: "Sistemas que não se falam",
    desc: "Cada ferramenta guarda um pedaço da operação. Juntar os pedaços é trabalho humano — e é onde o erro aparece.",
  },
];

export function Problem() {
  return (
    <section
      id="problema"
      className="relative grain on-dark py-24 sm:py-32 bg-ink text-paper overflow-hidden"
    >
      {/* Luz rasante no topo — separa a seção escura do hero claro */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent"
      />

      {/* Glow inferior discreto — dá fundo à seção sem competir com o texto */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 45% at 50% 100%, rgba(167,204,228,0.065), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.22em] text-white/50">
                <AyvoMark className="h-2.25 w-auto" />
                O PROBLEMA
              </span>
              <span className="h-px w-12 bg-linear-to-r from-white/25 to-transparent" />
            </div>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold tracking-tight leading-[1.04]">
              Toda empresa tem um
              <br />
              <span className="text-white/55">limite operacional.</span>
            </h2>
            <p className="mt-7 text-white/60 text-[16.5px] leading-relaxed max-w-xl">
              Ele quase nunca aparece como crise. Aparece como atraso, como
              retrabalho, como uma resposta que não saiu. Normalmente assim:
            </p>
          </div>
        </FadeIn>

        {/*
          Régua editorial em vez de cards: cada item abre com um filete
          superior e alinha na mesma margem do título da seção. Cards com
          fundo próprio empurrariam o texto para dentro e reintroduziriam
          justamente a leitura de "catálogo de serviços" que a seção evita.
        */}
        <div className="mt-16 sm:mt-20 grid gap-x-14 gap-y-12 sm:grid-cols-2">
          {GAPS.map((g, i) => (
            <FadeIn key={g.id} delay={i * 90} className="h-full">
              <article className="group h-full border-t border-white/15 pt-7 transition-colors duration-500 ease-out-quint hover:border-white/40">
                <div className="flex items-baseline gap-4 mb-3.5">
                  <span className="font-mono text-[11px] tracking-[0.18em] text-white/30 transition-colors duration-400 group-hover:text-white/55">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-paper">
                    {g.title}
                  </h3>
                </div>
                <p className="text-white/60 leading-relaxed max-w-md">
                  {g.desc}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* Ponte para a seção de soluções */}
        <FadeIn delay={120}>
          <p className="mt-14 text-center font-display text-[19px] sm:text-[26px] font-medium tracking-tight leading-snug text-paper max-w-2xl mx-auto">
            Nenhum desses problemas se resolve{" "}
            <span className="text-white/45">contratando mais gente.</span>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
