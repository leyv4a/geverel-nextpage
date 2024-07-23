import React from 'react'
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from 'next/image';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';
export default function ProjectCard({
    img,
    name,
    link,
    body,
  }: {
    img: string;
    name: string;
    link: string;
    body: string;
  }) {
   
       return (
        <figure
        className={cn(
          "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
          // light styles
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          // dark styles
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        )}
      >
        {/* DETALLES */}
        <blockquote className="my-2 text-sm">{body}</blockquote>
        <div className="flex flex-row items-center gap-2">
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
      </figure>
    );
}
