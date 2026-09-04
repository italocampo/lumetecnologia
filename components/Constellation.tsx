"use client";

import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number; r: number };

/** Distância máxima, em px CSS, para dois nós se ligarem. */
const LINK = 130;
/** Raio de influência do cursor sobre o brilho dos nós. */
const HALO = 150;
/** Um nó a cada ~13.500 px² — denso o bastante para ler como rede. */
const AREA_PER_NODE = 13_500;
const MIN_NODES = 26;
const MAX_NODES = 90;

/**
 * Campo de nós conectados — a profundidade do espelho, no matiz da marca.
 *
 * O espelho puxava uma linha de cada partícula até o cursor, o que desenha um
 * leque girando atrás do conteúdo e rouba o olho da headline. Aqui as ligações
 * são entre vizinhos: o desenho é a rede, não o ponteiro. O cursor só clareia
 * quem está por perto — reage sem virar o assunto.
 *
 * Desenha no brilho do chevron (#a7cce4) com alfa baixo, e não em branco:
 * sobre o navy do ink, branco puro faria os nós lerem como poeira neutra em
 * cima da paleta, em vez de luz da própria marca. Só funciona sobre `bg-ink`.
 * Fica sob o conteúdo; quem usa precisa dar `relative` ao pai e ao conteúdo
 * que vem depois.
 */
export function Constellation({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    const host = canvas?.parentElement;
    if (!canvas || !ctx || !host) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let w = 0;
    let h = 0;
    let nodes: Node[] = [];
    let raf = 0;
    let running = false;

    /** Última posição do cursor em coordenadas de viewport; -1 = fora. */
    const pointer = { cx: -1, cy: -1 };

    const spawn = (): Node => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.13,
      vy: (Math.random() - 0.5) * 0.13,
      r: Math.random() * 1.1 + 0.5,
    });

    function fit() {
      const rect = host!.getBoundingClientRect();
      const nw = Math.max(1, rect.width);
      const nh = Math.max(1, rect.height);

      // Reposiciona proporcionalmente em vez de re-sortear: na barra de
      // endereço do mobile o resize dispara a cada scroll, e re-sortear
      // faria o campo inteiro piscar a cada gesto.
      if (w > 0 && h > 0 && nodes.length > 0) {
        const sx = nw / w;
        const sy = nh / h;
        for (const n of nodes) {
          n.x *= sx;
          n.y *= sy;
        }
      }

      w = nw;
      h = nh;

      // O canvas é esticado por CSS (inset-0); aqui só o buffer de pixels.
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = Math.round(w * dpr);
      canvas!.height = Math.round(h * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const target = Math.max(
        MIN_NODES,
        Math.min(MAX_NODES, Math.round((w * h) / AREA_PER_NODE)),
      );
      while (nodes.length < target) nodes.push(spawn());
      if (nodes.length > target) nodes.length = target;
    }

    function frame() {
      ctx!.clearRect(0, 0, w, h);

      // Cursor: uma leitura de layout por quadro, em vez de uma por evento
      // de pointermove.
      let px = -1e4;
      let py = -1e4;
      if (pointer.cx >= 0) {
        const rect = canvas!.getBoundingClientRect();
        px = pointer.cx - rect.left;
        py = pointer.cy - rect.top;
      }

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        // Reentra pelo lado oposto, com folga para não aparecer na borda.
        if (n.x < -20) n.x = w + 20;
        else if (n.x > w + 20) n.x = -20;
        if (n.y < -20) n.y = h + 20;
        else if (n.y > h + 20) n.y = -20;
      }

      ctx!.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]!;
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]!;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 > LINK * LINK) continue;
          // Some na distância máxima em vez de cortar duro.
          const t = 1 - d2 / (LINK * LINK);
          ctx!.strokeStyle = `rgba(167,204,228,${(t * 0.12).toFixed(3)})`;
          ctx!.beginPath();
          ctx!.moveTo(a.x, a.y);
          ctx!.lineTo(b.x, b.y);
          ctx!.stroke();
        }
      }

      for (const n of nodes) {
        const dx = n.x - px;
        const dy = n.y - py;
        const near = Math.max(0, 1 - (dx * dx + dy * dy) / (HALO * HALO));
        ctx!.fillStyle = `rgba(167,204,228,${(0.2 + near * 0.46).toFixed(3)})`;
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.r + near * 0.6, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    function loop() {
      frame();
      raf = requestAnimationFrame(loop);
    }

    function start() {
      if (running || reduced) return;
      running = true;
      raf = requestAnimationFrame(loop);
    }

    function stop() {
      running = false;
      cancelAnimationFrame(raf);
    }

    const onPointerMove = (e: PointerEvent) => {
      pointer.cx = e.clientX;
      pointer.cy = e.clientY;
    };
    const onPointerLeave = () => {
      pointer.cx = -1;
      pointer.cy = -1;
    };

    fit();
    // Um quadro imediato para a seção nunca aparecer com o campo vazio —
    // inclusive em prefers-reduced-motion, onde ele fica parado aqui.
    frame();

    const ro = new ResizeObserver(() => {
      fit();
      if (!running) frame();
    });
    ro.observe(host);

    // Fora da tela não há o que animar.
    const io = new IntersectionObserver(
      ([entry]) => (entry?.isIntersecting ? start() : stop()),
      { rootMargin: "120px" },
    );
    io.observe(host);

    host.addEventListener("pointermove", onPointerMove, { passive: true });
    host.addEventListener("pointerleave", onPointerLeave, { passive: true });

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      host.removeEventListener("pointermove", onPointerMove);
      host.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
