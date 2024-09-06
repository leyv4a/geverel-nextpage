import Image from "next/image";
import React from "react";
import AnimatedIcon from "../../../public/GabrielAnimatedLogo2.gif";
import Gaby from "../../../public/Gabackground.jpg";
import { Button } from "@/components/ui/button";
import { CloudDownload, Target, Github, Linkedin  } from "lucide-react";
export default function GabrielLeyva() {
  return (
    <>
    {/* bg-[#7e02b7] hover:bg-[#7202a5] */}
      <header className="max-w-[70vw] min-w-[60vw] mx-auto py-5">
        <nav className=" flex justify-between">
          <Image
            width={40}
            className="rounded-md"
            src={AnimatedIcon}
            alt="Gabriel Leyva Icon"
            unoptimized
          />
          <div>
            <Button className="font-bold">
              <CloudDownload className="me-2 h-4 w-4" /> Download CV
            </Button>
          </div>
        </nav>
      </header>
      <main className="w-[70vw] mx-auto h-auto">
        <div className="flex flex-col md:flex-row gap-2 mb-2">
          <div className="md:w-[60%] min-h-[15rem] relative p-5 bg-white rounded-md flex flex-col items-start justify-end gap-2">
            <Image className="absolute rounded-md w-full h-full object-cover left-0 top-0 " src={Gaby} alt="Gabriel Leyva" />
            <div className="absolute  bg-gradient-to-t from-gray-900/50 to-transparent top-0 left-0 bottom-0 right-0 z-2"></div>
            <div className="absolute flex flex-col font-bold z-2 gap-2">
              <h2 className=" text-white text-start text-2xl leading-3">
                Gabriel Leyva Esquivel
              </h2>
              <p className="text-slate-100 text-start">Ingeniero de Software</p>
              <div className="flex gap-2">
              <Button className="hover:bg-green-600 bg-green-500 font-bold"><Target className="me-2 h-4 w-4"/> Looking for job</Button>
              <Button size="icon" className="text-white "><Github className="h-4 w-4"/></Button>
              <Button size="icon" className="text-white "><Linkedin className="h-4 w-4"/></Button>
            </div>
            </div>
          </div>
          <div className="md:w-[40%] flex gap-2 flex-col">
            <article className="p-5 bg-white rounded-md">
              <h2 className="font-bold">Sobre mi</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                efficitur urna ac diam eleifend, vitae condimentum ipsum
                bibendum. Nulla facilisi. Sed volutpat congue neque, ac
                consectetur erat.
              </p>
            </article>
            <div className="flex gap-2 w-full">
              <div className="w-full p-5 bg-white rounded-md">
                <h1 className="text-center font-bold text-7xl">
                  +1
                </h1>
                <p className="text-center text-[#1f2937]">
                  Años de experiencia
                </p>
              </div>
              <div className="w-full p-5 bg-white rounded-md">Ubi</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
