"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/site";

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1));

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const toggleRef = useRef<HTMLButtonElement>(null);

  /* Estado de scroll + progresso de leitura, num único rAF por frame. */
  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      const y = window.scrollY;
      setScrolled(y > 12);

      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(y / scrollable, 1) : 0);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  /* Seção ativa — destaca o link da seção que ocupa o miolo da viewport. */
  useEffect(() => {
    const sections = SECTION_IDS.map((id) =>
      document.getElementById(id),
    ).filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    // Guardamos o estado de todas as seções, e não só das que dispararam o
    // callback: sem isso, ao voltar ao topo (onde nenhuma seção cruza a faixa)
    // o último link visitado ficaria destacado para sempre.
    const ratios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          ratios.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0);
        }

        let best: string | null = null;
        let bestRatio = 0;
        for (const [id, ratio] of ratios) {
          if (ratio > bestRatio) {
            best = id;
            bestRatio = ratio;
          }
        }
        setActive(best);
      },
      // Faixa central da tela: a seção "vence" quando cruza o meio.
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const close = useCallback(() => setOpen(false), []);

  /* Drawer aberto: trava o scroll (sem pulo de layout) e escuta Escape. */
  useEffect(() => {
    if (!open) return;

    const { body } = document;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    const prevOverflow = body.style.overflow;
    const prevPadding = body.style.paddingRight;
    body.style.overflow = "hidden";
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPadding;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  return (
    <div>
      <header
        className={[
          "fixed top-0 inset-x-0 z-50",
          "transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ease-out-expo",
          // Com o drawer aberto o header precisa ser opaco: translúcido, ele
          // deixaria o overlay escuro atravessar e apareceria uma emenda
          // cinza contra o painel branco logo abaixo.
          open
            ? "bg-paper border-b border-bone shadow-subtle"
            : scrolled
              ? "bg-paper/72 backdrop-blur-xl backdrop-saturate-150 border-b border-bone/80 shadow-subtle"
              : "bg-transparent border-b border-transparent",
        ].join(" ")}
      >
        <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
          <a
            href="#top"
            aria-label="Lume — início"
            onClick={close}
            className="group/logo rounded-md"
          >
            <Logo className="h-6 text-ink transition-opacity duration-300 group-hover/logo:opacity-70" />
          </a>

          {/* Links desktop — pílula deslizante marca a seção ativa */}
          <ul className="hidden md:flex items-center gap-1 text-[13px] font-medium">
            {NAV_LINKS.map((l) => {
              const id = l.href.slice(1);
              const isActive = active === id;
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    aria-current={isActive ? "location" : undefined}
                    className={[
                      "relative inline-flex items-center rounded-full px-3.5 py-2",
                      "transition-colors duration-300 ease-out-quint",
                      isActive
                        ? "text-ink"
                        : "text-smoke hover:text-ink hover:bg-mist/70",
                    ].join(" ")}
                  >
                    <span className="relative z-10">{l.label}</span>
                    <span
                      aria-hidden
                      className={[
                        "absolute inset-0 rounded-full bg-mist",
                        "transition-all duration-400 ease-out-expo",
                        isActive
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-90",
                      ].join(" ")}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            {/* CTA desktop */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-umami-event="WhatsApp Click"
              data-umami-event-location="nav-desktop"
              className={[
                "hidden md:inline-flex group items-center gap-2 rounded-full",
                "bg-ink text-paper px-4 py-2 text-[13px] font-medium",
                "transition-all duration-300 ease-out-quint",
                "hover:bg-graphite hover:shadow-raised hover:-translate-y-px",
                "active:translate-y-0 active:scale-[0.98]",
              ].join(" ")}
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
                aria-hidden="true"
                className="transition-transform duration-300 ease-out-quint group-hover:translate-x-0.5"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>

            {/* Hambúrguer mobile */}
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg transition-colors duration-300 hover:bg-mist active:scale-95"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              aria-controls="menu-mobile"
            >
              <span
                aria-hidden
                className={[
                  "block h-px w-5 bg-ink transition-transform duration-400 ease-out-expo",
                  open ? "translate-y-1.75 rotate-45" : "",
                ].join(" ")}
              />
              <span
                aria-hidden
                className={[
                  "block h-px w-5 bg-ink transition-all duration-300 ease-out-expo",
                  open ? "opacity-0 scale-x-50" : "",
                ].join(" ")}
              />
              <span
                aria-hidden
                className={[
                  "block h-px w-5 bg-ink transition-transform duration-400 ease-out-expo",
                  open ? "-translate-y-1.75 -rotate-45" : "",
                ].join(" ")}
              />
            </button>
          </div>
        </nav>

        {/* Progresso de leitura — fio de 2px na base da nav */}
        <div
          aria-hidden
          className={[
            "absolute bottom-0 left-0 h-0.5 w-full origin-left bg-ink",
            "transition-opacity duration-500",
            scrolled ? "opacity-100" : "opacity-0",
          ].join(" ")}
          style={{ transform: `scaleX(${progress})` }}
        />
      </header>

      {/* Drawer mobile */}
      <div
        id="menu-mobile"
        className={[
          "fixed inset-0 z-40 md:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
        aria-hidden={!open}
      >
        {/* Overlay */}
        <button
          type="button"
          tabIndex={-1}
          aria-label="Fechar menu"
          onClick={close}
          className={[
            "absolute inset-0 w-full bg-ink/45 backdrop-blur-sm",
            "transition-opacity duration-500 ease-out-expo",
            open ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />

        {/* Panel */}
        <div
          className={[
            // Opaco de propósito: com fundo translúcido, 5% da headline do
            // hero (que é enorme) atravessa o painel e briga com os itens do
            // menu. Sem translucidez o blur também deixa de ser necessário —
            // uma camada de composição a menos no mobile.
            "absolute top-16 inset-x-0 bg-paper border-b border-bone",
            "px-6 py-8 shadow-float",
            "transition-all duration-500 ease-out-expo",
            open
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 blur-sm",
          ].join(" ")}
        >
          <ul className="flex flex-col gap-1 mb-8">
            {NAV_LINKS.map((l, i) => (
              <li
                key={l.href}
                className="transition-all duration-500 ease-out-expo"
                style={{
                  transitionDelay: open ? `${80 + i * 55}ms` : "0ms",
                  opacity: open ? 1 : 0,
                  transform: open ? "translateY(0)" : "translateY(10px)",
                }}
              >
                <a
                  href={l.href}
                  onClick={close}
                  tabIndex={open ? 0 : -1}
                  className="group flex items-center justify-between py-3.5 text-[17px] font-medium text-ink border-b border-bone/60 transition-colors duration-300 hover:text-smoke"
                >
                  {l.label}
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="text-ash transition-transform duration-300 ease-out-quint group-hover:translate-x-1"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            tabIndex={open ? 0 : -1}
            data-umami-event="WhatsApp Click"
            data-umami-event-location="nav-mobile"
            className="flex items-center justify-center gap-2 rounded-full bg-ink text-paper px-6 py-3.5 text-sm font-medium transition-transform duration-300 ease-out-quint active:scale-[0.98]"
            style={{
              transitionDelay: open ? `${80 + NAV_LINKS.length * 55}ms` : "0ms",
              opacity: open ? 1 : 0,
            }}
          >
            Falar com a Lume
          </a>
        </div>
      </div>
    </div>
  );
}
