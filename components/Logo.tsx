type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  ariaLabel?: string;
};

/**
 * Logo da AYVO — o monograma "A" + wordmark "AYVO".
 * Usa currentColor para herdar a cor do contexto (B&W em qualquer tema).
 *
 * O wordmark é caixa alta, e por isso leva tracking positivo: o negativo que
 * servia a um nome de caixa mista fecha o espaço entre versais e faz as
 * hastes do A, Y e V colidirem nos tamanhos pequenos da nav.
 */
export function Logo({
  className = "h-7",
  showWordmark = true,
  ariaLabel = "AYVO",
}: LogoProps) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label={ariaLabel}
      role="img"
    >
      {/*
        72% da altura do lockup, e não 100%: o glifo antigo (⌘) era um traço
        aberto e podia ocupar a caixa inteira sem pesar. Este é sólido — na
        altura cheia teria mais que o dobro da tinta do wordmark e leria como
        um símbolo com uma legenda ao lado, não como uma marca só. A 72% os
        dois se equilibram, que é a proporção do lockup original da marca.
      */}
      <AyvoMark className="h-[72%] w-auto" />
      {showWordmark && (
        <span className="font-display text-[1.05em] font-semibold tracking-[0.06em] leading-none">
          AYVO
        </span>
      )}
    </span>
  );
}

/**
 * O "A" da AYVO: duas lâminas em Λ a 30°, com o ápice partido por uma fresta
 * paralela às hastes, e um chevron solto na contraforma.
 *
 * Exportado à parte porque também é o marcador dos eyebrows de seção, onde
 * antes ficava o ⌘ solto. Ali entra em 9px, na altura da caixa alta do rótulo.
 *
 * São três paths separados de propósito. A fresta e o vão em volta do chevron
 * são o desenho da marca — fundir tudo num path só exigiria regra de
 * preenchimento par-ímpar e deixaria os buracos à mercê da ordem dos
 * subpaths. Separados, cada peça é uma forma simples e opaca.
 *
 * As diagonais seguem dois ângulos, e só dois: 30° nas arestas externas e na
 * fresta, 45° na contraforma e no chevron. É o que mantém a marca legível a
 * 17px na nav — em ângulos livres, as hastes viram cinza no antialiasing.
 */
export function AyvoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 73.4"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      {/* Lâmina esquerda — sobe até o ápice e desce inteira até a base */}
      <path d="M43.88 0L60.37 0Q64.88 0 62.63 3.9L43.71 36.67Q43.54 36.96 43.29 37.21L7.86 72.64Q7.1 73.4 6.02 73.4L3.55 73.4Q0 73.4 1.77 70.33L41.63 1.3Q42.38 0 43.88 0Z" />
      {/* Lâmina direita — a ponta nasce abaixo, do outro lado da fresta */}
      <path d="M67.25 16.68L98.48 70.76Q100 73.4 96.95 73.4L94.98 73.4Q93.9 73.4 93.14 72.64L54.8 34.3Q53.39 32.89 54.39 31.16L62.75 16.68Q65 12.78 67.25 16.68Z" />
      {/* Chevron interno — solto na contraforma, sem tocar as lâminas */}
      <path d="M45.33 54.5L54.67 54.5Q55.5 54.5 56.09 55.09L71.38 70.38Q73.5 72.5 70.5 72.5L68.33 72.5Q67.5 72.5 66.91 71.91L51.41 56.41Q50 55 48.59 56.41L33.09 71.91Q32.5 72.5 31.67 72.5L29.5 72.5Q26.5 72.5 28.62 70.38L43.91 55.09Q44.5 54.5 45.33 54.5Z" />
    </svg>
  );
}
