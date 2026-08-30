"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Retrato com degradação elegante.
 *
 * O monograma fica sempre no fundo e a foto é sobreposta; se o arquivo ainda
 * não existe em /public, o `onError` derruba a imagem e o monograma
 * permanece. Assim a seção pode ir ao ar antes das fotos ficarem prontas
 * sem nunca mostrar ícone de imagem quebrada.
 */
export function FounderPhoto({
  src,
  initials,
  name,
}: {
  src: string;
  initials: string;
  name: string;
}) {
  const [hasPhoto, setHasPhoto] = useState(true);

  return (
    <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl border border-bone bg-mist">
      {/* Monograma — placeholder e fallback ao mesmo tempo */}
      <span
        aria-hidden
        className="absolute inset-0 grid place-items-center font-display text-[clamp(2.5rem,7vw,3.75rem)] font-semibold tracking-tight text-ash/70 select-none"
      >
        {initials}
      </span>

      {hasPhoto && (
        <Image
          src={src}
          alt={`Retrato de ${name}`}
          fill
          sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 90vw"
          className="relative object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
          onError={() => setHasPhoto(false)}
        />
      )}
    </div>
  );
}
