import { FadeIn } from "./FadeIn";
import { AyvoMark } from "./Logo";
import { FounderPhoto } from "./FounderPhoto";
import { FOUNDED_YEAR, PEOPLE } from "@/lib/site";

const FACTS = [
  { k: "Fundada em", v: FOUNDED_YEAR },
  { k: "Sede", v: "Fortaleza, CE" },
  ...PEOPLE.map((p) => ({ k: p.role, v: p.name })),
  { k: "Foco", v: "IA, dados e automação" },
];

export function About() {
  return (
    <section id="sobre" className="relative py-24 sm:py-32 bg-paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Coluna texto */}
          <div className="lg:col-span-7">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.22em] text-smoke">
                  <AyvoMark className="h-2.25 w-auto" />
                  SOBRE
                </span>
                <span className="h-px w-12 bg-linear-to-r from-bone to-transparent" />
              </div>

              <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold tracking-tight leading-[1.05] mb-8">
                Tecnologia cearense
                <br />
                <span className="text-smoke">construída para resolver.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={120}>
              <div className="space-y-5 text-graphite text-[16.5px] leading-relaxed max-w-2xl">
                <p>
                  A AYVO nasceu em 2022, em Fortaleza, das mãos de{" "}
                  <span className="text-ink font-medium">Ítalo Campos</span>,
                  ainda na graduação em Análise e Desenvolvimento de Sistemas. A
                  ideia era simples e impopular na época: trazer inteligência
                  artificial útil de verdade para o WhatsApp do empresário
                  brasileiro — aquele que ainda tira pedido, fecha estoque e
                  responde cliente no mesmo aparelho.
                </p>
                <p>
                  De lá para cá a empresa deixou de ser apenas sobre
                  atendimento. Hoje a AYVO conecta dados, automatiza processos e
                  constrói o que a operação precisa — com um critério que não
                  mudou:{" "}
                  <span className="text-ink font-medium">
                    tecnologia só vale quando resolve um problema real do
                    negócio.
                  </span>
                </p>
                <p>
                  A operação é conduzida por Ítalo Campos e seu sócio,{" "}
                  <span className="text-ink font-medium">
                    Demetrius Linhares
                  </span>
                  . De Fortaleza, para empresas de todo o Brasil.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Coluna fatos */}
          <FadeIn delay={200} variant="right" className="lg:col-span-5">
            <aside className="lg:pl-8 lg:border-l border-bone">
              <div className="font-mono text-[11px] tracking-[0.22em] text-smoke mb-7">
                FICHA TÉCNICA
              </div>

              <dl className="divide-y divide-bone">
                {FACTS.map((f) => (
                  <div
                    key={f.k}
                    className="group flex items-baseline justify-between gap-6 py-4"
                  >
                    <dt className="font-mono text-[12px] tracking-wide text-smoke uppercase transition-colors duration-400 group-hover:text-graphite">
                      {f.k}
                    </dt>
                    <dd className="font-display text-lg sm:text-xl font-medium text-ink text-right transition-transform duration-500 ease-out-quint group-hover:-translate-x-0.5">
                      {f.v}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* Assinatura sutil */}
              <div className="mt-10 pt-6 border-t border-bone flex items-center gap-3">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inset-0 rounded-full bg-signal animate-halo" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-signal" />
                </span>
                <span className="font-mono text-[11px] tracking-[0.18em] text-smoke">
                  FORTALEZA · CE · BRASIL
                </span>
              </div>
            </aside>
          </FadeIn>
        </div>

        {/* ── Quem responde pela AYVO ──────────────────────
            Rostos e nomes: o visitante precisa perceber que existe gente
            respondendo pela entrega, não uma marca sem dono. */}
        <div className="mt-20 sm:mt-24 pt-14 border-t border-bone">
          <FadeIn>
            <div className="font-mono text-[11px] tracking-[0.22em] text-smoke mb-10">
              QUEM RESPONDE PELA AYVO
            </div>
          </FadeIn>

          <div className="grid gap-10 sm:grid-cols-2 lg:gap-14 max-w-4xl">
            {PEOPLE.map((p, i) => (
              <FadeIn key={p.name} delay={i * 110}>
                <article className="group flex flex-col gap-6 sm:flex-row sm:items-start">
                  <div className="w-40 sm:w-36 lg:w-40 shrink-0">
                    <FounderPhoto
                      src={p.photo}
                      initials={p.initials}
                      name={p.name}
                    />
                  </div>

                  <div className="sm:pt-1">
                    <h3 className="font-display text-xl sm:text-[22px] font-semibold tracking-tight text-ink">
                      {p.name}
                    </h3>
                    <div className="mt-1.5 font-mono text-[11px] tracking-[0.18em] text-smoke">
                      {p.role.toUpperCase()} · AYVO
                    </div>
                    <p className="mt-4 text-graphite text-[15px] leading-relaxed">
                      {p.bio}
                    </p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
