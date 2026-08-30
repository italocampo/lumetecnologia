import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solutions } from "@/components/Solutions";
import { Cases } from "@/components/Cases";
import { Process } from "@/components/Process";
import { Security } from "@/components/Security";
import { About } from "@/components/About";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

/**
 * Ordem das seções = hierarquia da informação:
 * problema → solução → prova → processo → confiança → quem somos → conversão.
 *
 * A demonstração de consulta vive dentro do Hero, e não como seção própria:
 * é o que sustenta a promessa do H1 na primeira dobra, e repeti-la mais
 * abaixo enfraqueceria as duas aparições.
 */
export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solutions />
        <Cases />
        <Process />
        <Security />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
