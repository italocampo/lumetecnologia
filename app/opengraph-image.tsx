import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Lume · IA que entende seu negócio. Automação que faz ele funcionar.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "1200px",
        height: "630px",
        background: "#0a0a0a",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow verde-sinal no topo */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "300px",
          background:
            "radial-gradient(ellipse at center, rgba(215,255,26,0.12) 0%, transparent 70%)",
          display: "flex",
        }}
      />

      {/* Glow verde-sinal no rodapé */}
      <div
        style={{
          position: "absolute",
          bottom: "-60px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "200px",
          background:
            "radial-gradient(ellipse at center, rgba(215,255,26,0.08) 0%, transparent 70%)",
          display: "flex",
        }}
      />

      {/* Grid sutil de fundo */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.06,
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          display: "flex",
        }}
      />

      {/* Conteúdo central */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
          gap: "0px",
        }}
      >
        {/* Logo — glifo ⌘ + wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            marginBottom: "40px",
          }}
        >
          {/* Dot verde-sinal */}
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#d7ff1a",
              display: "flex",
            }}
          />
          <span
            style={{
              fontSize: "18px",
              letterSpacing: "0.22em",
              color: "rgba(255,255,255,0.5)",
              fontWeight: 400,
              textTransform: "uppercase",
            }}
          >
            LUME · FORTALEZA · CE
          </span>
        </div>

        {/* Headline principal */}
        <div
          style={{
            // 56px em vez de 80: a headline nova é bem mais longa e, no
            // corpo anterior, a segunda linha estourava os 1200px do card.
            fontSize: "56px",
            fontWeight: 700,
            color: "#fafafa",
            letterSpacing: "-0.03em",
            lineHeight: 1.12,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <span>IA que entende seu negócio.</span>
          <span style={{ color: "rgba(255,255,255,0.45)" }}>
            Automação que faz ele funcionar.
          </span>
        </div>

        {/* Subtítulo */}
        <div
          style={{
            marginTop: "32px",
            fontSize: "22px",
            color: "rgba(255,255,255,0.55)",
            textAlign: "center",
            maxWidth: "680px",
            lineHeight: 1.5,
            display: "flex",
          }}
        >
          Atendimento, dados e processos · integrados ao WhatsApp
        </div>

        {/* URL */}
        <div
          style={{
            marginTop: "48px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              height: "1px",
              width: "40px",
              background: "rgba(255,255,255,0.2)",
              display: "flex",
            }}
          />
          <span
            style={{
              fontSize: "15px",
              letterSpacing: "0.18em",
              color: "#d7ff1a",
              fontWeight: 500,
            }}
          >
            lumetecnologiabr.com.br
          </span>
          <div
            style={{
              height: "1px",
              width: "40px",
              background: "rgba(255,255,255,0.2)",
              display: "flex",
            }}
          />
        </div>
      </div>
    </div>,
    { ...size },
  );
}
