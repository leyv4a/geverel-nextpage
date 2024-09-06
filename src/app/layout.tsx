import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";
import {poppins, b612, allan} from '@/lib/fonts';
import { Toaster } from "@/components/ui/toaster"


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Geverel Software - Convertimos tus ideas en soluciones digitales.",
  description: "Geverel Software ofrece soluciones personalizadas de desarrollo de software para empresas de todos los tamaños. Contáctanos para impulsar la transformación digital de tu negocio.",
  keywords: "desarrollo de software, software a medida, soluciones tecnológicas, consultoría tecnológica, desarrollo web, desarrollo móvil, geverel, software, geverel software, sonora, guaymas, pagina web",
  authors: [{ name: 'Geverel Software' }],
  openGraph: {
    title: "Geverel Software",
    description: "Geverel Software ofrece soluciones personalizadas de desarrollo de software para empresas de todos los tamaños. Contáctanos para impulsar la transformación digital de tu negocio.",
    images: [
      {
        url: 'https://geverel.com/assets/Geverel-Software.webp',
        alt: 'Geverel Software',
      },
    ],
    url: 'https://www.geverel.com/',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.geverel.com/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} ${b612} ${poppins} ${allan}`}>
      {children}
      <Toaster />
      </body>
    </html>
  );
}
