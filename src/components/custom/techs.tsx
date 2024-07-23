import React from "react";
import IconCloud from "@/components/magicui/icon-cloud";
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
    "java",
    "spring",
    "springboot",
  ];

  return (
    <>
    <div className="h-[10rem] bg-gradient-to-t from-[#f2f2f2] to-transparent opacity-50"></div>
      <section className="relative w-full">
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background ">
          <div className="container mx-auto flex flex-col lg:flex-row gap-3 items-center font-poppins mt-5 font-bold z-20">
            <h2 className="text-2xl md:text-6xl font-bold leading-6  bg-gradient-to-r from-[#000000] via-[#000000]text-transparent bg-clip-text to-[#c240ff] bg-300% animate-gradient text-center">
              Dominamos una amplia gama de tecnologías para adaptarnos a tus
              necesidades específicas.
            </h2>

            <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden bg-transparent px-20 pb-20 pt-8 z-30">
              <IconCloud iconSlugs={slugs} />
            </div>
          </div>
          <DotPattern className="absolute inset-0 z-10 mask-image-radial-gradient-300px-circle-at-center-white-transparent" />
        </div>
      </section>
    </>
  );
}
