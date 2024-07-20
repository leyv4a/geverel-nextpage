"use client";
import Image from "next/image";
import LogoMobile from "../../../public/assets/geverel-icon.webp";
import Logo from "../../../public/assets/Geverel-Software.webp";
import { AlignJustify, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Proyectos", route: "/proyectos" },
  { name: "Contacto", route: "/contacto"  },
  { name: "Cotizar", route: "/cotizar"  },
];

export default function Navbar() {
  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <nav className="flex w-full border-b items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20 " >
      <div className="flex items-center gap-12">
       <Link href={'/'}>
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
        {navLinks.map((link, index) => (
            <Link href={link.route} className="font-medium" key={index}>{link.name}</Link>
        ))}
      </div>
      </div>
      <div>
        <button onClick={() => setNavOpen(!isNavOpen)} className="lg:hidden">
          {!isNavOpen ? <AlignJustify /> : <X />}
        </button>
      </div>
    </nav>
  );
}
