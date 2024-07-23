import React from "react";
import IconCloud from "@/components/magicui/icon-cloud";
import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";

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
 <section className="relative min-h-screen w-full mt-5">
  <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
    <div className="container mx-auto flex flex-col lg:flex-row gap-8 items-center font-poppins mt-5 font-bold z-20">
      
      <h2 className="text-2xl md:text-6xl font-bold leading-6  bg-gradient-to-r from-[#000000] via-[#000000]  text-transparent bg-clip-text to-[#c240ff] bg-300% animate-gradient text-center">
        Dominamos una amplia gama de tecnologías para adaptarnos a tus necesidades específicas.
      </h2>

      <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden bg-transparent px-20 pb-20 pt-8 z-30">
        <IconCloud iconSlugs={slugs} />
      </div>
    </div>

    <DotPattern
      className="absolute inset-0 z-10 mask-image-radial-gradient-300px-circle-at-center-white-transparent"
    />
  </div>
</section>
    </>
  );
}
