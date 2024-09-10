import Image from "next/image";
import React from "react";
import AnimatedIcon from "../../../public/GabrielBlackLogoAnimated.gif";
import Gaby from "../../../public/Gabackground.jpg";
import Memogi from "../../../public/toilet.png";
import Map from "../../../public/UbiMaps.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CloudDownload,
  Target,
  Github,
  Linkedin,
  Flame,
  ArrowUpRight,
  BriefcaseBusiness,
  Smile,
  SquareArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import { IconSlug } from "@/lib/types";
import Marquee from "@/components/magicui/marquee";
export default function GabrielLeyva() {
  return (
    <>
      {/* bg-[#7e02b7] hover:bg-[#7202a5] */}
      <header className="w-[95vw] md:w-[70vw] mx-auto py-5  inset-x-0 top-0 backdrop-blur-sm sticky z-10">
        <nav className=" flex justify-between">
          <Image
            width={50}
            className="rounded-md bg-[#18181b]"
            src={AnimatedIcon}
            alt="Gabriel Leyva Icon"
            unoptimized
          />
          <div>
            <Link href={"toilet.png"} download={"Gabriel_Leyva_CV"}>
              <Button className="font-bold font-monserrat">
                <CloudDownload className="me-2 h-4 w-4" /> Descargar CV
              </Button>
            </Link>
          </div>
        </nav>
      </header>
      <main className="w-[95vw] md:w-[70vw] mx-auto h-auto font-montserrat">
        <div className="flex flex-col md:flex-row gap-2 my-3">
          <div className="md:w-[70%] min-h-[15rem] relative p-5 bg-white rounded-md flex flex-col items-start justify-end gap-2">
            <Image
              className="absolute rounded-md w-full h-full object-cover left-0 top-0 "
              src={Gaby}
              alt="Gabriel Leyva"
            />
            <div className="absolute rounded-md  bg-gradient-to-t from-gray-900/50 to-transparent top-0 left-0 bottom-0 right-0 z-2"></div>
            <div className="absolute flex flex-col font-bold z-2 gap-2">
              <h2 className=" text-white text-start text-2xl leading-3 ">
                Gabriel Leyva Esquivel
              </h2>
              <p className="text-slate-100 text-start">
                Estudiante de Ingenieria en Software
              </p>
              <div className="flex gap-2">
                <Button className="hover:bg-green-500 cursor-default bg-green-500 font-bold">
                  <Target className="me-2 h-4 w-4" /> Looking for job
                </Button>
                <Link href={"https://github.com/leyv4a"} target="_blank">
                  <Button size="icon" className="text-white ">
                    <Github className="h-4 w-4" />
                  </Button>
                </Link>
                <Link
                  href={"https://www.linkedin.com/in/leyv4a/"}
                  target="_blank"
                >
                  <Button size="icon" className="text-white ">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          {/* SOBRE MI */}
          <div className="md:w-[40%] flex gap-2 flex-col">
            <article className="p-5 bg-white rounded-md">
              <h2 className="font-bold">Sobre mi</h2>
              <p className="font-montserrat text-sm text-gray-700">
                Soy una persona que toma la iniciativa y en quien se puede
                confiar, con una pasión por la resolución de problemas y una
                capacidad comprobada para destacar en entornos colaborativos.
                Ansioso por contribuir a proyectos multidisciplinarios y
                aprovechar fuertes habilidades de comunicación para facilitar la
                comprensión y resolución efectiva de problemas.
              </p>
            </article>
            <div className="flex gap-2 w-full">
              <div className="w-full p-5 bg-white rounded-md">
                <h1 className="text-center text-gray-800 font-bold text-7xl">
                  +1
                </h1>
                <p className="text-center text-[#1f2937]">
                  Años de experiencia
                </p>
              </div>
              {/* UBICACION */}
              <div className="relative w-full p-5 flex items-center justify-center bg-white rounded-md">
                <Image
                  src={Map}
                  alt="Ubicacion"
                  width={500}
                  className="absolute rounded-md w-full h-full object-cover left-0 top-0 "
                />
                <div className="w-20 h-20 bg-[#98d0ff] absolute z-1 animate-pulse rounded-full bg-opacity-30 border-2 border-white"></div>
                <Image
                  src={Memogi}
                  width={60}
                  alt="Myself"
                  className="absolute z-4 rotate-12"
                />
                <p className="z-2 absolute text-center text-white inset-x-0 bottom-0">
                  De Guaymas, Sonora
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <section className="w-[95vw] md:w-[70vw] mx-auto mt-12 h-auto font-montserrat">
        <h2 className="text-2xl text-center font-bold italic">Proyectos</h2>
        <p className="text-center text-gray-800 mb-12">
          Aqui hay algunos proyectos en los que he trabajado.
        </p>
        <div className="flex flex-col md:flex-row gap-5 mt-5 w-full">
          {/* IZQUIERDA */}
          <div className="flex flex-col gap-4 w-full md:w-1/2 ">
            <ProjectCard
              xl
              isLatest
              title={"Gevpoint"}
              description="Punto de Venta con IoT y Hardware Externo"
              tools="ElectronForge React.js Tailwind.css Node.js Express.js SQLite SerialPort"
              source="/assets/projects/gevpoint2.png"
            />
            <ProjectCard
              isLaboral
              title="Geverel Software"
              description="Landing Page y Cotizador"
              tools="TypeScript Next.js Framer-Motion PostgreSQL Zod Tailwind.css"
              link="https://geverel.com"
              source="/assets/projects/geverel.png"
            />
            <ProjectCard
              xs
              title="Sistema de control de placas"
              description="Proyecto escolar"
              tools="Java JavaSwing MySQL Hibernate"
              source="/assets/projects/placas.png"
            />
          </div>

          {/* DERECHA */}
          <div className="flex flex-col gap-2 w-full md:w-1/2">
            <ProjectCard
              isLaboral
              title="NailArtist Aplicacion de citas"
              description="Aplicacion de citas"
              tools="JavaScript React.js Framer-Motion PostgreSQL Formik Tailwind.css"
              source="/assets/projects/citas.png"
              xs
            />
            <ProjectCard
              isLaboral
              xl
              title={"Serconomar"}
              description="Landing page y Bolsa de trabajo"
              tools="JavaScript React.js Vite.js Axios i18next Formik Google-Recaptcha Tailwind.css"
              link="https://serconomar.com"
              source="/assets/projects/serconomar.webp"
            />
            <ProjectCard
              xs
              isLaboral
              title={"Fruteria Taky"}
              description="Punto de venta y CRM"
              tools="JavaScript Electron.js React.js Vite.js Recharts Node.js Express.js Bootstrap"
              source="/assets/projects/gevpoint.webp"
            />
          </div>
        </div>
      </section>
      <section className="w-[95vw] md:w-[70vw] mx-auto mt-12 h-auto font-montserrat">
        <h2 className="text-2xl text-center font-bold italic">Tecnologias</h2>
        <p className="text-center text-gray-800 mb-12">
          Aqui hay algunas tecnologias con las que he trabajado.
        </p>
        <div className="bg-white rounded-md w-full h-36 mb-2 flex items-center  ">
          <Marquee pauseOnHover className="[--duration:20s] flex ">
            {Object.keys(iconUrls).map((slug) => (
              <div key={slug} className="flex ">
                <Image
                  title={`${slug.charAt(0).toUpperCase()+slug.slice(1)}`}
                  src={iconUrls[slug as IconSlug]}
                  alt={`${slug.charAt(0).toUpperCase()+slug.slice(1)}`}
                  width={slug == "java" ? 50 : 60} // Ajusta el ancho según tus necesidades
                  height={60} // Ajusta la altura según tus necesidades
                  className="object-contain grayscale hover:grayscale-0 me-10 "
                />
              </div>
            ))}
          </Marquee>
        </div>
      </section>
      <section className="w-[95vw] md:w-[70vw] mx-auto mt-12 h-auto font-montserrat">
        <h2 className="text-2xl text-center font-bold italic">Experiencia</h2>
        <p className="text-center text-gray-800 mb-12">
          He trabajado en los siguientes lugares
        </p>
        <div className="w-full flex flex-col md:flex-row gap-12">
          <PlaceCard
            name="Serconomar"
            title="https://serconomar.com/LogoSerChico.png"
            position="Tecnico de Sistemas"
            time="Jun 2023 - Present"
            image="https://serconomar.com/procesos/centrifuga.png"
            link="https://serconomar.com"
          />
          <PlaceCard
            isLogoVertical
            name="Geverel"
            title="https://www.geverel.com/assets/Geverel-Software.webp"
            position="Freelance FullStack Developer"
            time="Nov 2023 - Present"
            link="https://geverel.com"
            image="https://media.licdn.com/dms/image/v2/D4D12AQFGIri5qr90xg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1675976120880?e=1731542400&v=beta&t=5749VAJ3TCqwaMRsUpxPyI-ue3FdXLdS23bpM3swDQA"
          />
        </div>
      </section>
      <section className="w-[95vw] md:w-[70vw] mx-auto mt-12 h-auto font-montserrat ">
        <div className="bg-white rounded-md flex h-36 w-full justify-between items-center p-10">
            <div className="w-1/2 flex flex-col justify-center  text-gray-400 font-medium">
              <p>
                &copy; 2024 Gabriel Leyva Esquivel.
              </p>
              {/* <p className="md:block hidden">Made with ❤️ and Next.js.</p> */}
              {/* <p className="md:block hidden">Made with &#129293; and Next.js.</p> */} {/* White heart */}
              {/* <p className="md:block hidden">Made with &#128150; and Next.js.</p> */} {/* Sparkling heart */}
              <p className="md:block hidden">Made with &#128420; and Next.js.</p> {/* Black heart */}
            </div>
            <div className="w-1/2 flex  flex-col text-right text-gray-400 font-medium">
              <div className="flex justify-end">
              <Link href={"https://github.com/leyv4a"} target="_blank">
                  <Button size="icon" className="text-gray-400 shadow-none hover:text-gray-800 bg- hover:bg-">
                    <Github className="h-4 w-4" />
                  </Button>
                </Link>
                <Link
                  href={"https://www.linkedin.com/in/leyv4a/"}
                  target="_blank"
                >
                  <Button size="icon" className="text-gray-400 hover:text-gray-800 shadow-none bg- hover:bg-">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </Link>
                </div>
              <p className="md:block hidden">Last update : September 09, 2024</p>
            </div>
        </div>
      </section>
    </>
  );
}

const iconUrls: Record<IconSlug, string> = {
  nextjs: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
  spring: "https://cdn.worldvectorlogo.com/logos/spring-3.svg",
  java: "https://cdn.worldvectorlogo.com/logos/jee-3.svg",
  typescript: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
  javascript: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg",
  react: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
  mysql: "https://cdn.worldvectorlogo.com/logos/mysql-2.svg",
  tailwind: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
  electron: "https://cdn.worldvectorlogo.com/logos/electron-1.svg",
};

type ProjectCardProps = {
  isLaboral?: boolean;
  isLatest?: boolean;
  title: string;
  description: string;
  tools: string;
  link?: string;
  source?: string;
  xl?: boolean;
  xs?: boolean;
};

function ProjectCard({
  isLaboral,
  isLatest,
  title,
  description,
  tools,
  link,
  source,
  xl,
  xs,
}: ProjectCardProps) {
  const baseHeight = "md:min-h-[200px]";
  const xlHeight = "md:min-h-[300px]";
  const xsHeight = "md:min-h-[194px]";

  // Lógica para determinar la altura
  const heightClass = xl ? xlHeight : xs ? xsHeight : baseHeight;
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <div className="text-gray-300">
            {isLaboral ? (
              <p className="flex items-center gap-3">
                <BriefcaseBusiness />
                Experiencia laboral
              </p>
            ) : (
              <p className="flex items-center gap-3">
                <Smile />
                Experiencia personal
              </p>
            )}
          </div>
          <div className="flex gap-5">
            {isLatest ? (
              <Badge
                className="hover:bg- cursor-default"
                variant={"destructive"}
              >
                <Flame className="size-4 me-1" />
                Proyecto nuevo
              </Badge>
            ) : (
              ""
            )}
            {link ? (
              <Link
                className={`flex items-center border-gray-400 transition-all ease-in text-gray-400 hover:bg-gray-400 hover:text-white border-2 p-1 rounded-full`}
                target="_blank"
                href={`${link || "/leyv4a"}`}
              >
                <ArrowUpRight className="size-4" />
              </Link>
            ) : (
              <div className="flex items-center border-gray-400 transition-all ease-in text-gray-400 border-2 p-1 rounded-full cursor-pointer">
                <ArrowUpRight className="size-4" />
              </div>
            )}
          </div>
        </CardTitle>
        <CardDescription id="acaa" className="flex flex-col gap-0">
          <span className="text-2xl font-bold text-foreground lh-none">
            {title}
          </span>
          <span className="text-slate-700 ">{description}</span>
          <span className="text-foreground">{tools}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className={`overflow-hidden md:relative ${heightClass}`}>
        <Image
          className={`hover:scale-105 transition-all ease-in  translate-x-14 rounded-md md:absolute ${
            xl ? "bottom-0 right-0 object-fill" : ""
          }`}
          src={`${source}`}
          width={700}
          height={700}
          alt={title}
        />
      </CardContent>
      {/* <CardFooter>
                  <p>Card Footer</p>
                </CardFooter> */}
    </Card>
  );
}

type PlaceCardProps = {
  name: string;
  title: string;
  position: string;
  time: string;
  image?: string;
  link?: string;
  isLogoVertical?: boolean;
};
function PlaceCard({
  name,
  title,
  position,
  time,
  image,
  link,
  isLogoVertical,
}: PlaceCardProps) {
  return (
    <>
      <div className="relative min-h-[300px] md:min-h-[600px] min-w-[90%] md:min-w-[50%] flex flex-col bg-white overflow-hidden  rounded-md">
        <Image
          src={`${image}`}
          alt={`${name} imagen`}
          width={1000}
          height={1000}
          className="absolute z-2 w-full h-full object-cover transition-all ease-in rounded-md left-0 top-0 hover:scale-105 brightness-50"
        />

        <article className="absolute left-0 top-0 w-full h-full flex text-center items-center justify-between flex-col px-10 py-10">
          <div>
            <Image
              src={`${title}`}
              width={170}
              height={170}
              className={`mx-auto mb-5 
    `}
              // ${isLogoVertical ? 'size-10': 'w-30 h-30'}
              alt="Serconomar"
            />
            <h3 className="text-white font-semibold mt-1">{position}</h3>
            <p className="text-white font-medium">{time}</p>
          </div>
          <Button
            asChild
            className="bg-blue-700 hover:bg-blue-800 font-semibold flex items-center"
          >
            <Link href={`${link}`} target="_blank">
              Visitar {name} <SquareArrowUpRight className="ms-2 size-4" />
            </Link>
          </Button>
        </article>
      </div>
    </>
  );
}
