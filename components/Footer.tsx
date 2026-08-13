import { Logo } from "./Logo";
import {
  CNPJ,
  EMAIL,
  INSTAGRAM_URL,
  NAV_LINKS,
  WHATSAPP_NUMBER,
} from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-paper border-t border-bone">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
          <div className="col-span-2 sm:col-span-2">
            <a
              href="#top"
              aria-label="Lume — início"
              className="group/logo inline-block rounded-md"
            >
              <Logo className="h-7 text-ink transition-opacity duration-300 group-hover/logo:opacity-70" />
            </a>
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
            links={NAV_LINKS.map((l) => ({ label: l.label, href: l.href }))}
          />

          <FooterColumn
            title="Contato"
            links={[
              {
                label: "WhatsApp",
                href: `https://wa.me/${WHATSAPP_NUMBER}`,
                external: true,
                event: "WhatsApp Click",
              },
              { label: "Email", href: `mailto:${EMAIL}` },
              {
                label: "Instagram",
                href: INSTAGRAM_URL,
                external: true,
              },
            ]}
          />
        </div>

        <div className="mt-14 pt-6 border-t border-bone flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-smoke">
          <span className="font-mono tracking-wide">
            © {year} LUME · TODOS OS DIREITOS RESERVADOS
          </span>
          <span className="font-mono tracking-wide">CNPJ {CNPJ}</span>
        </div>
      </div>
    </footer>
  );
}

type Link = {
  label: string;
  href: string;
  event?: string;
  external?: boolean;
};

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
              // Abas externas nunca recebem referência à window desta página.
              {...(l.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              data-umami-event={l.event}
              data-umami-event-location="footer"
              className="link-underline inline-block text-[14px] text-ink transition-colors duration-300 hover:text-smoke"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
