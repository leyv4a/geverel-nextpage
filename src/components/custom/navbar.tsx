"use client";
import Image from "next/image";
import LogoMobile from "../../../public/assets/geverel-icon.webp";
import Logo from "../../../public/assets/Geverel-Software.webp";
import { AlignJustify, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const navLinks = [
  { name: "Proyectos", route: "proyectos", isHome: true },
  { name: "Contacto", route: "contacto", isHome: true },
  { name: "Cotizar", route: "cotizar", isHome: false },
];

const Navbar: React.FC = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (window.location.pathname === "/") {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }, []);

  const handleScrollTo = (id: string) => {
    if (window.location.pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 500); // Ajusta el tiempo si es necesario
      setNavOpen(false);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setNavOpen(false);
    }
  };

  return (
    <>
      <nav className="flex w-full fixed top-0 backdrop-blur-xl bg-white/30 z-50 border-b items-center justify-between h-[4rem] px-4 md:px-20">
        <div className="flex items-center gap-12">
          <Link href="/">
            <Image
              className="md:hidden"
              width={40}
              src={LogoMobile}
              alt="Geverel Software"
            />
            <Image
              className="hidden md:block"
              width={100}
              src={Logo}
              alt="Geverel Software"
            />
          </Link>
          <div className="hidden lg:flex gap-12">
            {navLinks.map((link, index) =>
              link.isHome ? (
                <button
                  key={index}
                  className="font-medium hover:bg-gradient-to-r from-[#7e02b7] via-purple-700 hover:text-transparent bg-clip-text to-[#c240ff] bg-300% animate-gradient"
                  onClick={() => handleScrollTo(link.route)}
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  href={"/" + link.route}
                  className="font-medium hover:bg-gradient-to-r from-[#7e02b7] via-purple-700 hover:text-transparent bg-clip-text to-[#c240ff] bg-300% animate-gradient"
                  key={index}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
        </div>
        <div>
          <button onClick={() => setNavOpen(!isNavOpen)} className="lg:hidden">
            {isNavOpen ? <X /> : <AlignJustify />}
          </button>
        </div>
        <div
          className={`absolute md:hidden w-full z-50 top-[4rem] left-0 transition-all backdrop-blur-xl bg-white/30 overflow-hidden ${
            isNavOpen ? "h-screen opacity-100" : "h-[0] opacity-0"
          }`}
        >
          <div className="flex flex-col gap-8 w-full items-center mt-5 text-3xl">
            {navLinks.map((link, index) => (
              // <Link
              //   href={link.route}
              //   className="font-medium"
              //   key={index}
              //   onClick={() => {
              //     setNavOpen(false);
              //   }}
              // >
              //   {link.name}
              // </Link>
              link.isHome ? (
                <button
                  key={index}
                  className="font-medium hover:bg-gradient-to-r from-[#7e02b7] via-purple-700 hover:text-transparent bg-clip-text to-[#c240ff] bg-300% animate-gradient"
                  onClick={() => handleScrollTo(link.route)}
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  href={"/" + link.route}
                  className="font-medium hover:bg-gradient-to-r from-[#7e02b7] via-purple-700 hover:text-transparent bg-clip-text to-[#c240ff] bg-300% animate-gradient"
                  key={index}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
