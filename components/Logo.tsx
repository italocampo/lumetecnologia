type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  ariaLabel?: string;
};

/**
 * Logo da Lume — glifo ⌘ (command) + wordmark "Lume".
 * Usa currentColor para herdar a cor do contexto (B&W em qualquer tema).
 */
export function Logo({
  className = "h-7",
  showWordmark = true,
  ariaLabel = "Lume",
}: LogoProps) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label={ariaLabel}
      role="img"
    >
      <CommandGlyph className="h-full w-auto" />
      {showWordmark && (
        <span className="font-display text-[1.05em] font-semibold tracking-tight leading-none">
          Lume
        </span>
      )}
    </span>
  );
}

function CommandGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
    </svg>
  );
}
