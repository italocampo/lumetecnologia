"use client";

import { useEffect, useRef, useState } from "react";

/**
 * O vídeo de demonstração, com controle de pausa.
 *
 * Não usa `autoPlay`: são 0,9 MB, e a seção fica lá embaixo, depois de Cases.
 * Com autoplay o arquivo desceria no carregamento da página até para quem
 * nunca chega nela. Em vez disso, `preload="metadata"` traz só o primeiro
 * quadro — o suficiente para a moldura não abrir vazia — e o vídeo começa
 * quando entra na tela. Sai da tela, pausa: não gasta bateria rodando atrás.
 *
 * O botão não é enfeite: são 22s em loop, e conteúdo em movimento acima de
 * 5s precisa de um jeito de parar (WCAG 2.2.2). Quem pediu menos movimento
 * nunca vê o play automático, mas o botão continua valendo.
 */
export function ReelPlayer() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) void video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.35 },
    );

    io.observe(video);
    return () => io.disconnect();
  }, []);

  function toggle() {
    const video = ref.current;
    if (!video) return;
    if (video.paused) void video.play().catch(() => {});
    else video.pause();
  }

  return (
    <div className="group relative aspect-video w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-white/12 bg-graphite shadow-terminal">
      <video
        ref={ref}
        // A faixa não tem áudio — `muted` está aqui porque é o que os
        // navegadores exigem para deixar um vídeo tocar sem clique.
        muted
        loop
        playsInline
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        aria-label="Demonstração de atendimento com IA, automações e painéis da AYVO"
        className="h-full w-full object-cover"
      >
        <source src="/reel-ayvo.mp4" type="video/mp4" />
      </video>

      {/* Vinheta — assenta o vídeo na seção escura em vez de recortá-lo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 90% 80% at 50% 45%, transparent 55%, rgba(4,12,21,0.28) 100%)",
        }}
      />

      {/*
        Rótulo que muda com a ação, e não `aria-pressed`: isto é um botão de
        ação, não um interruptor de estado. Com os dois, o leitor de tela
        anunciaria "Pausar, não pressionado".
      */}
      <button
        type="button"
        onClick={toggle}
        className={[
          "absolute bottom-3 right-3 sm:bottom-4 sm:right-4",
          "inline-flex items-center gap-2 rounded-full",
          "border border-white/15 bg-ink/70 backdrop-blur-md",
          "px-3.5 py-2 text-[12px] font-medium text-paper",
          "transition-all duration-300 ease-out-quint",
          "hover:border-white/35 hover:bg-ink/85",
          // Some com o vídeo rodando, volta no hover da moldura e sempre que
          // recebe foco por teclado.
          playing
            ? "opacity-0 group-hover:opacity-100 focus-visible:opacity-100"
            : "opacity-100",
        ].join(" ")}
      >
        {playing ? (
          <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M7 4.5v15a1 1 0 0 0 1.54.84l11.5-7.5a1 1 0 0 0 0-1.68L8.54 3.66A1 1 0 0 0 7 4.5z" />
          </svg>
        )}
        {playing ? "Pausar" : "Reproduzir"}
      </button>
    </div>
  );
}
