import React from "react";
import HeroImage from "../../../public/assets/hero-image.webp";
import Image from "next/image";
import { Button } from "../ui/button";
import { Rocket } from "lucide-react";
import Link from "next/link";
export default function Hero() {
  return (
    <>
      <main className="mt-20 container mx-auto flex flex-col lg:flex-row gap-2 min-h-full items-center">
        <article className="text-center w-full flex flex-col items-center">
          <h1 className="text-4xl -skew-y-3 rotate-2 font-b612 leading-6 bg-[#bababa] text-[#f2f2f2] py-2 md:w-1/2">
            Del boceto al click:
          </h1>
          <h2 className="text-5xl font-poppins leading-10 ">
            Convertimos tus ideas <br />
            en soluciones
            <span className="font-bold bg-gradient-to-r from-[#7e02b7]  text-transparent bg-clip-text to-[#c240ff] bg-300% animate-gradient">
              {" "}
              digitales
            </span>
          </h2>
          <h2 className="font-poppins text-2xl text-gray-600 mt-2 text-center">
            ¿Tienes una idea en mente?
            <br className="md:hidden" /> ¡La convertimos en realidad!
          </h2>
          <p className="text-gray-500 text-sm text-center">
            Somos una agencia de desarrollo y soluciones. Software, innovación y
            compromiso.
          </p>
          <Button
            size={"lg"}
            className="mt-5 bg-[#7e02b7] hover:bg-[#6e02a0] animate-pulse animate-twice animate-ease-linear"
            asChild
          >
            <Link href={"/cotizar"}>
              Cotizar
              <Rocket className="h-4 w-4 ms-3 " />
            </Link>
          </Button>
        </article>
        <aside className="w-full flex items-center justify-center">
          <Image
            width={500}
            src={HeroImage}
            alt="Software Developer"
            className="sm:my-5"
          />
        </aside>
      </main>
      <div className="absolute inset-0 flex items-end justify-end -z-10">
        <div className="w-[50%] h-[50%] rounded-full bg-gradient-to-r to-[#7e02b7] via-purple-400 from-white bg-300% blur-2xl opacity-20 animate-gradient transform -translate-y-1/2"></div>
      </div>
    </>
  );
}
