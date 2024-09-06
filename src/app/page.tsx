import { Suspense } from 'react';
import About from "@/components/custom/about";
import Hero from "@/components/custom/hero";
import Techs from "@/components/custom/techs";
import SvgDivider from "@/components/custom/svg-shape-divider";
import Proyectos from "@/components/custom/proyectos";
import Footer from "@/components/custom/footer";

export default function Home() {
  return (
    <>
    <Hero />
    <SvgDivider />
    <Suspense fallback={<div className="w-screen h-screen text-center flex items-center justify-center">Loading About...</div>}>
      <About />
    </Suspense>
    <Suspense fallback={<div className="w-screen h-screen text-center flex items-center justify-center">Loading Techs...</div>}>
      <Techs />
    </Suspense>
    <Suspense fallback={<div className="w-screen h-screen text-center flex items-center justify-center">Loading Proyectos...</div>}>
      <Proyectos />
    </Suspense>
    <Footer />
  </>
  );
}
