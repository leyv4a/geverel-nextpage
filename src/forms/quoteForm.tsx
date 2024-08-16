import { Input } from "@/components/ui/input";
import React from "react";

type Props = {};

export default function QuoteForm({}: Props) {
  return (
    <>
      <form 
      autoComplete="off"
      className="container mx-auto flex flex-col md:flex-row justify-center w-full">
        {/* ¡Formulario! */}
        {/* Client info section */}
        <div className="flex flex-col items-start gap-2 me-2 w-full">
          <h2 className="bg-primary text-white text-xl w-full text-center -mb-2">Datos del cliente</h2>
         <div className="flex flex-col md:flex-row gap-2 w-full">
          <Input type="text" placeholder="Nombre" name="name" className="rounded-none"/>
          <Input type="tel" placeholder="Telefono" name="phone" className="rounded-none" />
         </div>
         <div className="flex flex-col md:flex-row gap-2 w-full">
          <Input type="text" placeholder="Empresa" name="enterprise" className="rounded-none" />
         <Input type="text" placeholder="Giro" name="businessLine" className="rounded-none" />
         </div>
          <Input type="mail" placeholder="Correo" name="mail" className="rounded-none mb-2" />
        </div>

        {/* Project info section */}
        <div className="flex flex-col items-start gap-2 me-2 w-full">
          <h2 className="bg-primary text-white text-xl w-full text-center -mb-2">Datos del proyecto</h2>
          <div className="flex gap-2 w-full">
            <Input type="text" placeholder="Otro" name="otro"className="rounded-none" />
          </div>
        </div>
      </form>
    </>
  );
}
