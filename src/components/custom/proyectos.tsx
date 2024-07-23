import Marquee from "@/components/magicui/marquee";
import ProjectCard from "./ProjectCard";

export default function Proyectos() {
    const reviews = [
        {
            name: "Jack",
            username: "@jack",
            body: "I've never seen anything like this before. It's amazing. I love it.",
            img: "https://avatar.vercel.sh/jack",
          },
          {
            name: "Jill",
            username: "@jill",
            body: "I don't know what to say. I'm speechless. This is amazing.",
            img: "https://avatar.vercel.sh/jill",
          },
          {
            name: "John",
            username: "@john",
            body: "I'm at a loss for words. This is amazing. I love it.",
            img: "https://avatar.vercel.sh/john",
          },
          {
            name: "Jane",
            username: "@jane",
            body: "I'm at a loss for words. This is amazing. I love it.",
            img: "https://avatar.vercel.sh/jane",
          },
          {
            name: "Jenny",
            username: "@jenny",
            body: "I'm at a loss for words. This is amazing. I love it.",
            img: "https://avatar.vercel.sh/jenny",
          },
          {
            name: "James",
            username: "@james",
            body: "I'm at a loss for words. This is amazing. I love it.",
            img: "https://avatar.vercel.sh/james",
          }]

        const firstRow = reviews.slice(0, reviews.length / 2);
        const secondRow = reviews.slice(reviews.length / 2);
  return (
    <>
      <div className="h-[10rem] bg-gradient-to-b from-[#f2f2f2] to-transparent opacity-50"></div>
      <section className="mt-2 mb-[3rem] container mx-auto flex flex-col gap-8 items-center font-poppins text-center">
        <h2 className=" text-2xl md:text-6xl font-semibold bg-gradient-to-r from-[#000000] via-[#000000]text-transparent bg-clip-text to-[#c240ff] bg-300% animate-gradient">Nuestro trabajo</h2>
        <h3 className="text-gray-600 text-2xl ">
          Desarrollo web, aplicaciones web, desarrollo de proyectos a medida,
          integraciones, mantenimiento y soporte, capacitación y asesoramiento.
        </h3>
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ProjectCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ProjectCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
      </section>
    </>
  );
}
