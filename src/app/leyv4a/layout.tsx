import React from "react";
import { Metadata } from "next";

// export const metadata: Metadata = {
//     title: "Gabriel Leyva - Geverel Software",
//     description: "test",
//     keywords: "leyv4a, gabriel leyva, gabriel, leyva, itson, desarrollo web, desarrollo móvil, geverel, software,, sonora, guaymas, pagina web",
//     authors: [{ name: 'Gabriel Leyva' }],
    // openGraph: {
    //   title: "Geverel Software",
    //   description: "Geverel Software ofrece soluciones personalizadas de desarrollo de software para empresas de todos los tamaños. Contáctanos para impulsar la transformación digital de tu negocio.",
    //   images: [
    //     {
    //       url: 'https://geverel.com/assets/Geverel-Software.webp',
    //       alt: 'Geverel Software',
    //     },
    //   ],
    //   url: 'https://www.geverel.com/',
    //   type: 'website',
    // },
//     robots: {
//       index: true,
//       follow: true,
//     },
//     alternates: {
//       canonical: 'https://www.geverel.com/',
//     },
//   };

export default function Leyv4aLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="bg-gray-100">{children}</div>
  );
}
