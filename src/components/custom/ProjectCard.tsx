import React from 'react'
import { cn } from "@/lib/utils";
import Image from 'next/image';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';
export default function ProjectCard({
    img,
    name,
    link,
    body,
    img2
  }: {
    img: string;
    name: string;
    link: string;
    body: string;
    img2: string;
  }) {
   
       return (
        <figure
        className={cn(
          "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
          // light styles
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          // dark styles
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
          "h-auto"
        )}
      >
        <div  className='flex flex-row w-full h-[7s0%]'>
        <Image src={`/assets/projects/${img2}`} alt={img2} width={300} height={150}/>
        {/* <blockquote className=" ms-1 text-left text-sm">{body}</blockquote> */}
        </div>
        {/* DETALLES */}
  
        <div className="flex flex-row items-center gap-2 mt-2">
          <img className="rounded-full" width="32" height="32" alt="" src={img} />
          <div className="flex flex-row justify-between w-full">
            {/* CLIENTE */}
            <figcaption className="text-sm font-medium dark:text-white">
              {name}
            </figcaption>
            {/* ENLACE */}
            {/* <p className="text-xs font-medium dark:text-white/40">{link}</p> */}
            <Link href={link} aria-disabled={link != 'none'? false : true} className={`${link != 'none'? ' ': 'pointer-events-none'}`} target='_blank' rel='noreferrer'>{link != 'none' ? <Eye/> : <EyeOff/>}</Link>
          </div>
        </div>
        <blockquote className="mt-1 ms-1 text-start text-gray-600 text-sm">{body}</blockquote> 
      </figure>
    );
}
