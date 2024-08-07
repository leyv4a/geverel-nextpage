import About from "@/components/custom/about";
import Hero from "@/components/custom/hero";
import Techs from "@/components/custom/techs";
import SvgDivider from "@/components/custom/svg-shape-divider";
import Proyectos from "@/components/custom/proyectos";
import Footer from "@/components/custom/contacto";

export default function Home() {
  return (
    <>
      <Hero />
      <SvgDivider />
      <About />
      <Techs />
      <Proyectos />
      <Footer/>
    </>
  );
}
