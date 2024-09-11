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
            <Link href={"CV_Gabriel_Leyva_E.pdf"} download={"Gabriel_Leyva_CV"}>
              <Button className="font-bold font-monserrat">
                <CloudDownload className="me-2 h-4 w-4" /> <span className="me-1 hidden md:block">Descargar</span> CV
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
              source="/assets/projects/placasitson.png"
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
              {/* <p className="md:block hidden">Made with &#128420; and Next.js.</p>  */}{/* Black heart */}
               <p className="md:flex items-center hidden">Made with <span className="mx-1 "><HeartIconSvg/></span> and Next.js.</p> {/* Black heart */}
              
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
                className="hover:bg- cursor-default "
                variant={"destructive"}
              >
                <Flame className="size-4 me-1" />
                <span className="hidden md:block me-1">Proyecto</span> <span className="uppercase md:lowercase">n</span>uevo
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
              <div className="flex items-center border-gray-200 transition-all ease-in text-gray-200 border-2 p-1 rounded-full cursor-pointer">
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


const HeartIconSvg = () => (
  // <svg
  //   height="15px"
  //   width="15px"
  //   version="1.1"
  //   id="_x32_"
  //   xmlns="http://www.w3.org/2000/svg"
  //   xmlnsXlink="http://www.w3.org/1999/xlink"
  //   viewBox="0 0 512 512"
  //   xmlSpace="preserve"
  //   fill="#9ca3af"
  // >
  //   <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
  //   <g
  //     id="SVGRepo_tracerCarrier"
  //     strokeLinecap="round"
  //     strokeLinejoin="round"
  //   ></g>
  //   <g id="SVGRepo_iconCarrier">
  //     <style type="text/css">
  //       {`.st0{fill:#9ca3af;}`}
  //     </style>
  //     <g>
  //       <path
  //         className="st0"
  //         d="M435.924,97.105c-4.452-7.72-10.798-14.374-16.971-18.044c-4.12-2.479-7.996-3.6-11.311-3.6 
  //         c-2.652,0.016-5.036,0.615-7.743,2.242c-40.553,24.793-74.005,55.727-98.546,90.127c-24.557,34.392-40.217,72.217-45.427,110.918 
  //         c-0.813,5.992-6.322,10.183-12.306,9.378c-5.999-0.797-10.19-6.307-9.393-12.298c5.739-42.593,22.915-83.734,49.302-120.722 
  //         c13.79-19.292,30.105-37.462,48.623-54.149c-6.882-14.019-3.631-28.504,3.363-41.875c3.67-7.017,7.562-13.442,10.285-19.844 
  //         c-0.118-0.323-0.402-0.868-0.892-1.562c-1.042-1.5-3.039-3.561-5.636-5.581c-5.21-4.088-12.787-8.059-19.568-10.332 
  //         c-4.492-1.539-8.699-2.297-11.051-2.258l-0.671,0.008c-0.379,0.718-0.828,1.594-1.318,2.589c-1.002,2.044-2.233,4.586-3.623,7.324 
  //         c-2.85,5.487-6.338,11.801-11.162,17.413c-3.228,3.726-7.12,7.286-12.353,9.614c-2.96,1.318-6.402,2.163-9.985,2.139 
  //         c-18.456,0.079-27.627-17.192-29.798-33.089c-0.378-2.826-0.544-5.289-0.544-7.396c0-0.656,0-1.232,0-1.752 
  //         c0.008-1.76-0.087-2.66-0.158-2.936c-0.102-0.293,0.016-0.158-0.386-0.734c-0.285-0.379-0.861-1.01-1.903-1.871 
  //         c-1.279-1.105-3.994-2.478-7.672-3.362c-3.655-0.9-8.186-1.373-12.843-1.366c-4.184,0-8.477,0.364-12.361,1.018 
  //         c-21.391,3.544-17.057,17.113-17.057,34.708c0,4.278-0.174,9.108-0.727,14.516c-0.592,6.165-2.162,11.911-4.451,17.208 
  //         c-2.274,5.288-5.257,10.087-8.659,14.563c-6.797,8.936-15.18,16.593-24.099,24.676c-17.855,16.141-38.014,33.831-54.386,63.408 
  //         c-38.851,70.306-31.329,152.912,8.865,220.747c22.772,38.536,55.111,72.525,92.44,93.254C220.729,504.012,247.772,512,276.054,512 
  //         c11.706,0,23.649-1.366,35.79-4.294c12.795-3.52,26.064-11.398,38.685-23.104c12.684-11.722,24.663-27.201,34.908-45.292 
  //         c20.523-36.184,34.021-82.778,33.974-130.313c0-36.641-7.949-73.763-26.491-107.674c-2.534,2.85-4.957,5.81-7.23,8.904 
  //         c-5.825,7.948-10.728,16.734-14.256,26.814c-2.004,5.714-8.252,8.722-13.952,6.71c-5.706-1.989-8.706-8.225-6.709-13.94 
  //         c4.294-12.322,10.324-23.097,17.282-32.545c6.955-9.456,14.816-17.618,22.868-24.864c16.095-14.484,32.971-25.527,45.222-35.662 
  //         c2.463-2.06,4.057-4.294,5.193-6.93c1.106-2.644,1.689-5.746,1.689-9.259C443.091,113.46,440.47,104.809,435.924,97.105z"
  //       ></path>
  //       <polygon className="st0" points="262.075,0.048 262.059,0 262.067,0.032 "></polygon>
  //       <path
  //         className="st0"
  //         d="M90.843,74.412c2.43,4.933,5.098,10.696,7.601,17.026c3.717,9.378,7.119,19.962,8.659,31.006 
  //         c6.748-7.168,13.426-13.49,19.678-19.174c8.628-7.862,16.387-14.658,22.458-21.068c-2.731-2.526-5.037-5.352-7.223-8.422 
  //         c-5.06-7.151-9.519-15.605-13.766-23.325c-2.518-4.626-4.934-8.904-7.128-12.33c-0.663-0.189-1.839-0.394-3.394-0.386 
  //         c-2.439-0.008-5.715,0.481-9.401,1.76c-3.678,1.279-7.767,3.355-11.966,6.512c-5.352,4.002-8.407,7.507-10.025,10.08 
  //         c-1.594,2.597-1.807,4.168-1.815,5.067c0,0.726,0.142,1.137,0.316,1.484C86.257,65.413,88.427,69.502,90.843,74.412z"
  //       ></path>
  //       <polygon className="st0" points="443.012,64 442.87,63.874 442.886,63.898 "></polygon>
  //     </g>
  //   </g>
  // </svg>
//   <svg
//   width="20px"
//   height="20px"
//   viewBox="0 0 36 36"
//   xmlns="http://www.w3.org/2000/svg"
//   xmlnsXlink="http://www.w3.org/1999/xlink"
//   aria-hidden="true"
//   role="img"
//   preserveAspectRatio="xMidYMid meet"
//   fill=""
//   stroke=""
// >
//   <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
//   <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
//   <g id="SVGRepo_iconCarrier">
//     <path
//       fill="#9ca3af"
//       d="M33.629 16.565l-.092 1.608l-.041.814c-.02.265-.092.529-.142.794l-.285 1.598c-.153.519-.326 1.028-.499 1.547c-.743 2.025-1.791 4.029-3.246 5.698a23.476 23.476 0 0 1-5.006 4.396c-1.903 1.221-3.867 2.167-6.126 2.859l-.385.121l-.427-.142c-1.526-.499-2.798-1.099-4.101-1.832c-1.272-.722-2.503-1.536-3.612-2.524l-.835-.732l-.784-.794c-.529-.519-.987-1.109-1.455-1.689a20.511 20.511 0 0 1-2.3-3.826c-.611-1.353-1.109-2.768-1.404-4.213c-.071-.366-.183-.722-.224-1.089l-.132-1.089c-.071-.733-.193-1.435-.153-2.279c.061-1.618.56-3.175 1.313-4.508a14.016 14.016 0 0 1 2.849-3.48l3.46-3.053l-1.669 4.174c-.57 1.435-.845 3.134-.193 4.202c.315.529.885.814 1.587.824c.733 0 1.475-.203 1.872-.692c.407-.478.438-1.231.183-1.954c-.326-.753-.631-1.77-.59-2.696c0-.946.275-1.893.753-2.717c.488-.824 1.19-1.496 1.984-1.994l1.028-.641l-.285 1.19c-.295 1.221-.081 2.503.733 3.287c.804.784 2.076 1.058 3.103.794c1.028-.275 1.72-1.109 1.76-2.025c.081-.946-.417-2.015-1.058-3.002L16.932 0l3.887 1.628c1.089.448 2.167.956 3.185 1.669c1.007.712 2.004 1.608 2.686 2.788c.712 1.16 1.007 2.584.977 3.836c0 .315-.02.621-.041.926c-.041.305-.051.55-.122.936c-.122.682-.305 1.19-.458 1.709c-.315.997-.519 2.025-.295 2.564c.132.509 1.292.906 2.147.794c.916-.092 1.77-.733 2.371-1.577c.6-.855.916-1.923 1.079-2.981l.132-.834l.295.763c.549 1.383.864 2.859.854 4.344z"
//     />
//     <path
//       fill="#9ca3af"
//       d="M33.146 16.503c-.001-1.463.068-2.222-.507-3.52c-.393 3.824-3.228 5.144-5.792 4.23c-2.402-.857-.783-4.198-.664-5.793c.202-2.703-.01-5.796-5.919-8.369c2.455 3.903.284 6.327-1.993 6.475c-2.526.164-4.84-1.804-3.986-4.997c-2.765 1.693-2.846 4.543-1.993 6.386c.89 1.921-.036 3.518-2.206 3.695c-2.426.199-3.773-2.158-2.531-5.913c-2.151 2.104-3.676 4.837-3.449 7.805C5.142 30.035 17.841 33.93 17.841 33.93s15.319-3.757 15.305-17.427z"
//     />
//     <path
//       fill="#ffffff"
//       d="M30.935 19.489a7.234 7.234 0 0 0-7.233-7.234a7.22 7.22 0 0 0-5.878 3.027a7.22 7.22 0 0 0-5.877-3.027a7.234 7.234 0 0 0-7.234 7.234c0 .566.072 1.114.195 1.643c1.004 6.24 7.943 12.824 12.915 14.632c4.972-1.808 11.911-8.391 12.914-14.631a7.074 7.074 0 0 0 .198-1.644z"
//     />
//     <path
//       fill="#9ca3af"
//       d="M24.312 31.553s1.426-2.769 1.319-5.645c-.038-1.024-.327-2.019-.736-2.958c-.958-2.196-2.806-7.706 1.147-10.661c0 0-.755 1.269-.085 3.581c.265.915.761 1.741 1.35 2.49c1.36 1.732 4.219 6.501-.484 10.948l-2.511 2.245zm-7.659 3.728s-1.581-1.515-2.421-3.652c-.299-.761-.406-1.58-.406-2.398c-.001-1.911-.409-6.529-4.242-7.427c0 0 .957.687 1.205 2.591c.098.753-.001 1.516-.192 2.251c-.441 1.701-.972 5.909 3.886 7.659l2.17.976z"
//     />
//   </g>
// </svg>
<svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#9ca3af" stroke="#9ca3af">
  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
  <g id="SVGRepo_iconCarrier">
    <title>Corazón</title>
    <g id="shape" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
      <g id="heart" fill="#9ca3af">
        <path d="M12,20 C9.79485241,19.5208288 3,15.7600002 3,9 C3,6.23857625 5.23857625,4 8,4 C9.63559896,4 11.0877712,4.7853431 12,5.99951255 C12.9122288,4.7853431 14.364401,4 16,4 C18.7614237,4 21,6.23857625 21,9 C21,15.7600002 14.2051476,19.5208288 12,20 Z" id="Shape"></path>
      </g>
    </g>
  </g>
</svg>


);

