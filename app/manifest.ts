import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lume Tecnologia",
    short_name: "Lume",
    description:
      "IA, dados e automação para empresas. Atendimento, números e processos funcionando de forma inteligente.",
    lang: "pt-BR",
    start_url: "/",
    display: "standalone",
    background_color: "#fafafa",
    theme_color: "#0a0a0a",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
