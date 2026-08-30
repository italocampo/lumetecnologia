import { FadeIn } from "./FadeIn";

type Pillar = {
  id: string;
  title: string;
  desc: string;
};

/**
 * Só entram aqui recursos confirmados como existentes na infraestrutura.
 * Um claim de segurança não comprovável é passivo, não argumento de venda —
 * nada deve ser adicionado a esta lista sem verificação.
 */
const PILLARS: Pillar[] = [
  {
    id: "acesso",
    title: "Controle de acesso",
    desc: "Cada pessoa enxerga apenas o que o perfil dela permite. O acesso à informação acompanha a estrutura da empresa, não o contrário.",
  },
  {
    id: "isolamento",
    title: "Isolamento de dados",
    desc: "Os dados de cada cliente ficam separados dos demais. Nenhuma empresa alcança a informação de outra.",
  },
  {
    id: "auditoria",
    title: "Registro e auditoria",
    desc: "Toda consulta fica registrada: quem perguntou, o que perguntou e quando. O histórico é verificável.",
  },
  {
    id: "lgpd",
    title: "Adequação à LGPD",
    desc: "O tratamento de dados pessoais segue a Lei Geral de Proteção de Dados, com finalidade definida para cada uso.",
  },
];

export function Security() {
  return (
    <section
      id="seguranca"
      className="relative grain on-dark py-24 sm:py-32 bg-ink text-paper overflow-hidden"
    >
      {/* Luz rasante no topo — separa da seção clara anterior */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Coluna do argumento */}
          <FadeIn className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[11px] tracking-[0.22em] text-white/50">
                ⌘ SEGURANÇA
              </span>
              <span className="h-px w-12 bg-linear-to-r from-white/25 to-transparent" />
            </div>

            <h2 className="font-display text-[clamp(1.9rem,4vw,3.25rem)] font-semibold tracking-tight leading-[1.05] mb-7">
              Sua IA acessa dados
              <br />
              <span className="text-white/55">da sua empresa.</span>
            </h2>

            <p className="text-white/60 text-[16.5px] leading-relaxed max-w-md">
              Isso não é detalhe técnico — é responsabilidade. Confiar a
              operação a uma inteligência conectada aos seus números exige
              saber exatamente quem acessa o quê, e com qual registro.
            </p>
          </FadeIn>

          {/* Pilares */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
            {PILLARS.map((p, i) => (
              <FadeIn key={p.id} delay={i * 80} className="h-full">
                <div className="group h-full bg-ink p-7 sm:p-8 transition-colors duration-500 ease-out-quint hover:bg-white/[0.03]">
                  <div className="flex items-center gap-2.5 mb-4">
                    <span
                      aria-hidden
                      className="h-1.5 w-1.5 rounded-full bg-signal transition-transform duration-500 ease-spring group-hover:scale-150"
                    />
                    <h3 className="font-display text-[17px] sm:text-lg font-semibold tracking-tight text-paper">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-white/60 text-[14.5px] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
