"use client";

import { useEffect, useRef } from "react";

/**
 * Luz que segue o cursor sobre superfícies escuras.
 *
 * Se anexa ao elemento pai, como o Constellation — assim entra em qualquer
 * card já existente sem envolver nada em `<div>` novo e sem risco de mexer
 * no layout. O pai precisa ser `relative` e `overflow-hidden`.
 *
 * Custa uma leitura de layout por quadro, não por evento: `pointermove`
 * dispara dezenas de vezes por segundo e só guarda a coordenada; quem lê o
 * `getBoundingClientRect` é o rAF. Sem isso, cada movimento do mouse força
 * um reflow e o card engasga.
 *
 * Não roda em tela de toque: sem cursor não há luz para seguir, e o listener
 * só gastaria bateria.
 */
export function Spotlight() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    const host = el?.parentElement;
    if (!el || !host) return;

    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cx = 0;
    let cy = 0;
    let queued = false;
    let raf = 0;

    const apply = () => {
      queued = false;
      const r = host.getBoundingClientRect();
      el.style.setProperty("--sx", `${cx - r.left}px`);
      el.style.setProperty("--sy", `${cy - r.top}px`);
    };

    const onMove = (e: PointerEvent) => {
      cx = e.clientX;
      cy = e.clientY;
      if (queued) return;
      queued = true;
      raf = requestAnimationFrame(apply);
    };

    const onEnter = () => host.setAttribute("data-lit", "true");
    const onLeave = () => host.setAttribute("data-lit", "false");

    host.addEventListener("pointermove", onMove, { passive: true });
    host.addEventListener("pointerenter", onEnter, { passive: true });
    host.addEventListener("pointerleave", onLeave, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerenter", onEnter);
      host.removeEventListener("pointerleave", onLeave);
      host.removeAttribute("data-lit");
    };
  }, []);

  return <span ref={ref} aria-hidden className="cine-light" />;
}
