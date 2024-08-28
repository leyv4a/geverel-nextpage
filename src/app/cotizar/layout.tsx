
import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "../globals.css";
import Navbar from "../../components/custom/navbar";
import {poppins, b612, allan} from '@/lib/fonts';
import { Toaster } from "@/components/ui/toaster"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Cotización",
    description: "Solicita una cotización personalizada de Geverel Software para tus necesidades de desarrollo de software. ¡Contáctanos hoy mismo para empezar tu proyecto!",
    keywords: "cotización de software, solicitud de presupuesto, desarrollo de software a medida",
    authors: [{ name: 'Geverel Software' }],
    openGraph: {
      title: "Cotización",
      description: "Solicita una cotización personalizada de Geverel Software para tus necesidades de desarrollo de software. ¡Contáctanos hoy mismo para empezar tu proyecto!",
      url: 'https://www.geverel.com/cotizar',
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: 'https://www.geverel.com/cotizar',
    },
  };
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body className={`${inter.className} ${b612} ${poppins} ${allan}`}>
        <Navbar/>
        {children}
        <Toaster />
        </body>
      </html>
    );
  }