
import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/forms/contactForm";


export default function Footer() {
  

  const year: Date = new Date();

  return (
    <>
      <section
        id="contacto"
        className="my-10 flex flex-col md:flex-row gap-8  font-poppins  container mx-auto max-w-screen"
      >
        <aside className="flex flex-col md:w-[50%]  gap-6 justify-center caret-[#7e02b7]">
          <h2 className="text-center md:text-start text-xl md:text-4xl font-semibold bg-gradient-to-r from-[#000000] via-[#000000] text-transparent bg-clip-text to-[#c240ff] bg-300% animate-gradient">
            Contactanos
          </h2>
          {/* <ContactForm form={form} onSubmit={onSubmit}/> */}
          <ContactForm/>
          <p className="text-xs md:max-w-[70%] text-center md:text-start">
            Al hacer uso de este formulario, estás aceptando nuestra política de
            privacidad y nuestros términos de servicio.
          </p>
        </aside>
        <article className="md:w-1/2 font-poppins hidden md:flex items-center justify-center "> 
            <h2 className="absolute z-10 text-center font-b612 md:text-3xl text-2xl lg:text-5xl xl:text-6xl -skew-y-6 ]">
             #DelBocetoAlClick
            </h2>
            <Image className="relative -z-50" src={'/assets/rocket.svg'} width={800} height={350} alt="Rocket launching" fetchPriority="low"/>
        </article>
      </section>
      <hr />
      <div className="container mx-auto my-10 flex justify-between ">
        <h2 className="text-start">
          &copy; Geverel Software {year.getFullYear()}
        </h2>
        <div className="flex gap-2">
          <Link
            className="hover:text-slate-700"
            href={"https://facebook.com/geverelsoftware"}
            rel="noreferrer"
            target="_blank"
            aria-label="Perfil de Facebook"
          >
            <Facebook />
          </Link>
          <Link
            className="hover:text-slate-700"
            href={"https://instagram.com/geverelsoftware"}
            rel="noreferrer"
            target="_blank"
            aria-label="Perfil de Instagram"
          >
            <Instagram />
          </Link>
        </div>
      </div>
    </>
  );
}
