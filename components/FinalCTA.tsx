const WHATSAPP_URL = "https://wa.me/5585994108087?text=Ol%C3%A1%20Lume!";
const EMAIL = "lumetecnologia.br@gmail.com ";

export function FinalCTA() {
  return (
    <section
      id="contato"
      className="relative py-28 sm:py-36 bg-ink text-paper overflow-hidden"
    >
      {/* glow muito sutil */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(215,255,26,0.10), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="h-px w-10 bg-white/15" />
          <span className="font-mono text-[11px] tracking-[0.22em] text-white/50">
            VAMOS COMEÇAR
          </span>
          <span className="h-px w-10 bg-white/15" />
        </div>

        <h2 className="font-display text-[clamp(2.25rem,6vw,5rem)] font-semibold tracking-tight leading-[0.98]">
          Sua empresa precisa
          <br />
          <span className="text-white/55">estar disponível 24/7.</span>
          <br />A Lume já está.
        </h2>

        <p className="mt-8 mx-auto max-w-xl text-white/65 text-[16.5px] leading-relaxed">
          Conte para a gente o que sua operação precisa. Em uma conversa rápida
          desenhamos o caminho — IA, sistema, site ou tudo junto.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full bg-paper text-ink px-7 py-4 text-sm font-semibold hover:bg-white transition-all"
          >
            <WhatsappIcon />
            Falar pelo WhatsApp
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-medium hover:border-white/60 transition-colors"
          >
            {EMAIL}
          </a>
        </div>

        <div className="mt-12 font-mono text-[11px] tracking-[0.2em] text-white/35">
          ⌘ RESPOSTA EM ATÉ 24H ÚTEIS
        </div>
      </div>
    </section>
  );
}

function WhatsappIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
    </svg>
  );
}
