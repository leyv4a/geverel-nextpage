import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gabriel Leyva - Geverel Software",
    description: "test",
    keywords: "leyv4a, gabriel leyva, gabriel, leyva, itson, desarrollo web, desarrollo móvil, geverel, software, sonora, guaymas, pagina web",
    authors: [{ name: 'Gabriel Leyva' }],
    openGraph: {
      title: "Gabriel Leyva - Geverel Software",
      description: "Desarrollador FullStack.",
      images: [
        {
          url: 'https://geverel.com/Gabackground.jpg',
          alt: 'Gabriel Leyva - Geverel Software',
        },
      ],
      url: 'https://www.geverel.com/leyv4a',
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: 'https://www.geverel.com/leyv4a',
    },
  };

export default function Leyv4aLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="bg-gray-100">{children}</div>
  );
}
