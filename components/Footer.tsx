import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-paper border-t border-bone">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
          <div className="col-span-2 sm:col-span-2">
            <Logo className="h-7 text-ink" />
            <p className="mt-5 text-[14px] text-graphite max-w-xs leading-relaxed">
              Agentes de IA, sistemas e sites que trabalham 24/7 pelo seu
              negócio.
            </p>
            <p className="mt-6 font-mono text-[11px] tracking-[0.18em] text-smoke">
              FORTALEZA · CE · BRASIL
            </p>
          </div>

          <FooterColumn
            title="Navegar"
            links={[
              { label: "Serviços", href: "#servicos" },
              { label: "Clientes", href: "#clientes" },
              { label: "Sobre", href: "#sobre" },
              { label: "Contato", href: "#contato" },
            ]}
          />

          <FooterColumn
            title="Contato"
            links={[
              { label: "WhatsApp", href: "https://wa.me/5585994108087" },
              { label: "Email", href: "mailto:lumetecnologia.br@gmail.com" },
              {
                label: "Instagram",
                href: "https://instagram.com/lumetecnologia.br",
              },
            ]}
          />
        </div>

        <div className="mt-14 pt-6 border-t border-bone flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-smoke">
          <span className="font-mono tracking-wide">
            © {year} LUME · TODOS OS DIREITOS RESERVADOS
          </span>
          <span className="font-mono tracking-wide">
            CNPJ 65.967.246/0001-82
          </span>
        </div>
      </div>
    </footer>
  );
}

type Link = { label: string; href: string };

function FooterColumn({ title, links }: { title: string; links: Link[] }) {
  return (
    <div>
      <h3 className="font-mono text-[11px] tracking-[0.22em] text-smoke mb-5">
        {title.toUpperCase()}
      </h3>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-[14px] text-ink hover:text-smoke transition-colors"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
