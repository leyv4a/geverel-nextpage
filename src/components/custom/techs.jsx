import React from "react";
import IconCloud from "@/components/magicui/icon-cloud";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";

export default function Techs() {
  const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];

  return (
    <>
      {/* <div style={{
        overflowX: 'hidden',
        width: '100%',
        backgroundColor: '#ffffff',
        backgroundImage: `linear-gradient(to right, #4f0473 1px, transparent 1px), linear-gradient(to bottom, #4f0473 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
        position: 'absolute',
        zIndex: -1,
        height: '100%',
        opacity :' 30%'
      }}>
      </div> */}
    <section className="relative h-[100vh] w-[50%]">
    <div className="relative h-[500px] w-full flex items-center justify-center ">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={1}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] -skew-y-12",
        )}
      />
      
     
    </div>
    asd
    </section>
      {/* <section className="container mx-auto flex flex-row md:flex-col gap-8 items-center font-poppins font-bold">
        <div className="text-5xl">
          Dominamos una amplia gama de tecnologías para adaptarnos a tus
          necesidades específicas.
        </div>
        <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden bg-transparent px-20 pb-20 pt-8 ">
          <IconCloud iconSlugs={slugs} />
        </div>
      </section> */}
    </>
  );
}
