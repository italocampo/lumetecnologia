"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const WHATSAPP_URL = "https://wa.me/5585999999999?text=Ol%C3%A1%20Lume!"; // troque pelo número real

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-md bg-paper/75 border-b border-bone"
          : "bg-transparent",
      ].join(" ")}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" aria-label="Lume — início">
          <Logo className="h-6 text-ink" />
        </a>

        <ul className="hidden md:flex items-center gap-9 text-[13px] font-medium text-graphite">
          <li><a href="#servicos" className="hover:text-ink transition-colors">Serviços</a></li>
          <li><a href="#clientes" className="hover:text-ink transition-colors">Clientes</a></li>
          <li><a href="#sobre" className="hover:text-ink transition-colors">Sobre</a></li>
          <li><a href="#contato" className="hover:text-ink transition-colors">Contato</a></li>
        </ul>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-ink text-paper px-4 py-2 text-[13px] font-medium hover:bg-graphite transition-colors"
        >
          Falar com a Lume
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>
      </nav>
    </header>
  );
}
