import About from "@/components/custom/about";
import Hero from "@/components/custom/hero";
import Techs from "@/components/custom/techs";
import SvgDivider from "@/components/custom/svg-shape-divider";

export default function Home() {
  return (
    <>
    <Hero/>
    <SvgDivider/>
    <About/>
    <Techs/>
    </>
  );
}
