import Image from "next/image";
import React from "react";
import AnimatedIcon from "../../../public/GabrielAnimatedLogo2.gif";
import { Button } from "@/components/ui/button";
import { CloudDownload } from 'lucide-react';
export default function GabrielLeyva() {
  return (
    <>
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
          <Button className="bg-[#7e02b7] hover:bg-[#7202a5] font-bold" >
            <CloudDownload className="me-2 h-4 w-4"/> Download CV</Button>
        </div>
      </nav>
    </header>
      <main className="w-[70vw] mx-auto h-auto">
          <div className="flex flex-col md:flex-row gap-2">
            <div className="md:w-[60%] p-5 bg-white rounded-md">
              YO
            </div>
            <div className="md:w-[40%] flex gap-2 flex-col">
              <div className="p-5 bg-white rounded-md">
                Sobre mi
              </div>
              <div className="flex gap-2 w-full">
                <div className="w-full p-5 bg-white rounded-md">Experiencia</div>
                <div className="w-full p-5 bg-white rounded-md">Ubi</div>
              </div>
            </div>
          </div>
      </main>
    </>
  );
}
