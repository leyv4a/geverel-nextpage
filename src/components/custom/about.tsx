export default function About() {
  return (
    <section className="mt-2 container mx-auto flex flex-col lg:flex-row gap-2 items-center">
      <div className="flex items-center justify-center gap-2 bg-purple-200">
        <article className="text-center w-full flex flex-col items-center">
          <h3 className="text-2xl md:text-6xl font-bold leading-6 ">
            Consideramos escalabilidad, eficiencia y proyección a largo plazo en
            nuestra arquitectura.
          </h3>
          <h4 className="text-sm md:text-2xl mt-2">
            Nos esforzamos por optimizar recursos y adaptarnos a las demandas
            del mercado en constante cambio. Nuestras soluciones flexibles están
            diseñadas para crecer junto con nuestros clientes y sus necesidades.
          </h4>
        </article>
      </div>
    </section>
  );
}
