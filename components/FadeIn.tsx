"use client";

import { useEffect, useRef, useState } from "react";

type Variant = "up" | "left" | "right" | "scale";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  /** Atraso da entrada, em ms — para escalonar itens de uma mesma grade. */
  delay?: number;
  /** Direção do movimento de entrada. */
  variant?: Variant;
  /** Fração do elemento visível para disparar (0–1). */
  threshold?: number;
}

const HIDDEN: Record<Variant, string> = {
  up: "opacity-0 translate-y-6 blur-[3px]",
  left: "opacity-0 -translate-x-6 blur-[3px]",
  right: "opacity-0 translate-x-6 blur-[3px]",
  scale: "opacity-0 scale-[0.97] blur-[3px]",
};

const SHOWN = "opacity-100 translate-y-0 translate-x-0 scale-100 blur-0";

export function FadeIn({
  children,
  className = "",
  delay = 0,
  variant = "up",
  threshold = 0.12,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Quem pediu menos movimento vê o conteúdo já posicionado.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    // Elemento já visível no primeiro paint (ex.: acima da dobra) não deve
    // esperar um evento de scroll que talvez nunca venha.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        window.setTimeout(() => setVisible(true), delay);
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <div
      ref={ref}
      data-revealed={visible}
      className={[
        "will-reveal transition-all duration-900 ease-out-expo",
        visible ? SHOWN : HIDDEN[variant],
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
