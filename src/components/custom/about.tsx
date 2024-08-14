import Image from "next/image";
import QualitySoftware from '../../../public/assets/quality-software.webp'

export default function About() {
  return (
    <>
    <section className="mt-2 mb-[3rem] container mx-auto flex flex-col gap-8 items-center">
      {/* <div className="flex items-center justify-center gap-2 "> */}
        <article className="text-center w-full flex flex-col items-center">
          <h3 className="text-2xl md:text-6xl font-bold leading-6 bg-gradient-to-r from-[#000000] via-[#000000]  text-transparent bg-clip-text to-[#c240ff] bg-300% animate-gradient">
            Consideramos escalabilidad, eficiencia y proyección a largo plazo en
            nuestra arquitectura.
          </h3>
          <h4 className="text-sm md:text-2xl mt-5 text-gray-600 leading-5">
            Nos esforzamos por optimizar recursos y adaptarnos a las demandas
            del mercado en constante cambio. Nuestras soluciones flexibles están
            diseñadas para crecer junto con nuestros clientes y sus necesidades.
          </h4>
        </article>
      {/* </div> */}
      <Image src={QualitySoftware} width={500} alt="Software de calidad." loading="lazy" fetchPriority="low"/>
      <article className="text-center w-full flex flex-col items-center">
          <h3 className="text-2xl md:text-6xl font-bold leading-6  bg-gradient-to-r from-[#000000] via-[#000000]  text-transparent bg-clip-text to-[#c240ff] bg-300% animate-gradient">
          Nuestra misión es simple.
          </h3>
          <h4 className="text-sm md:text-2xl mt-5 text-gray-600 leading-5">
          Aprovechamos el poder de la tecnología para ayudar a nuestros clientes a alcanzar sus objetivos comerciales y maximizar su impacto en el mundo digital. Nos esforzamos por ofrecer soluciones creativas y personalizadas que impulsen el éxito de cada proyecto que emprendemos.
          </h4>
        </article>
    </section>


    </>
  );
}
