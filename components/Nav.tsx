"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const WHATSAPP_URL = "https://wa.me/5585994108087?text=Ol%C3%A1%20Lume!";

const NAV_LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Clientes", href: "#clientes" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div>
      <header
        className={[
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled || open
            ? "backdrop-blur-md bg-paper/85 border-b border-bone"
            : "bg-transparent",
        ].join(" ")}
      >
        <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
          <a
            href="#top"
            aria-label="Lume — início"
            onClick={() => setOpen(false)}
          >
            <Logo className="h-6 text-ink" />
          </a>

          {/* Links desktop */}
          <ul className="hidden md:flex items-center gap-9 text-[13px] font-medium text-graphite">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-ink transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {/* CTA desktop */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex group items-center gap-2 rounded-full bg-ink text-paper px-4 py-2 text-[13px] font-medium hover:bg-graphite transition-colors"
            >
              Falar com a Lume
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-x-0.5"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>

            {/* Hambúrguer mobile */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg hover:bg-mist transition-colors"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
            >
              <span
                className={[
                  "block h-px w-5 bg-ink transition-all duration-300",
                  open ? "translate-y-[7px] rotate-45" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "block h-px w-5 bg-ink transition-all duration-300",
                  open ? "opacity-0" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "block h-px w-5 bg-ink transition-all duration-300",
                  open ? "-translate-y-[7px] -rotate-45" : "",
                ].join(" ")}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Drawer mobile */}
      <div
        className={[
          "fixed inset-0 z-40 md:hidden transition-all duration-300",
          open ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
      >
        {/* Overlay */}
        <div
          className={[
            "absolute inset-0 bg-ink/30 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          ].join(" ")}
          onClick={() => setOpen(false)}
        />

        {/* Panel */}
        <div
          className={[
            "absolute top-16 inset-x-0 bg-paper border-b border-bone px-6 py-8 transition-all duration-300",
            open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2",
          ].join(" ")}
        >
          <ul className="flex flex-col gap-1 mb-8">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-[17px] font-medium text-ink border-b border-bone/60 hover:text-smoke transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 rounded-full bg-ink text-paper px-6 py-3.5 text-sm font-medium"
          >
            Falar com a Lume
          </a>
        </div>
      </div>
    </div>
  );
}
