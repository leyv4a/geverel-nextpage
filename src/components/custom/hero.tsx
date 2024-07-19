import React from "react";
import { Card, CardContent } from "../ui/card";
import HeroImage from '../../../public/assets/hero-image.webp'
import Image from "next/image";
export default function Hero() {
  return (
    <main className="w-full my-10 sm:my-5 md:my-0">
      <section className="flex flex-col lg:flex-row gap-2 min-h-full items-center">
        <article className="text-center w-full flex flex-col items-center">
          <h1 className="text-4xl -skew-y-3 rotate-2 font-b612 leading-6 bg-slate-200 py-2 md:w-1/2">
            Del boceto al click:
          </h1>
          <h2 className="text-5xl font-poppins leading-10 ">
            Convertimos tus ideas <br/>
            en soluciones
            <span className="font-bold bg-gradient-to-r from-[#7e02b7]  text-transparent bg-clip-text to-[#c240ff] bg-300% animate-gradient">
              {" "}
              digitales
            </span>
          </h2>
        </article>
        <aside className="w-full flex items-center justify-center">
          {/* <Card className="w-[80%]"> */}
            {/* <CardContent> */}
              {/* <HeroImage/> */}
              <Image width={500} src={HeroImage} alt="Software Developer" className="sm:my-5"/>
            {/* </CardContent> */}
          {/* </Card> */}
        </aside>
      </section>
    </main>
  );
}
