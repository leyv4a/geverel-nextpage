"use client";
import { contactForm } from "@/actions/contactActions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useRef } from "react";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = React.useState(false);

  return (
    <>
      {/* <h2 className={error ? `opacity-100` : `opacity-0`}>Error</h2> */}
      <form
        className="accent-black flex md:justify-start justify-center content-center md:items-start  flex-col md:flex-row w-[100%] "
        ref={formRef}
        action={async (formData) => {
          const contactData = await contactForm(formData);
          console.log(contactData);
          formRef.current?.reset();
        }}
      >
        <div className="flex flex-col gap-2 mb-2 md:me-2 ">
          <Input type="text" placeholder="Nombre" name="name" required />
          <Textarea placeholder="Escribe tu mensaje" name="message" required className="resize-none" rows={3} />
        </div>
        <div className="flex flex-col gap-2 ">
          <Input
            type="email"
            placeholder="Correo electrónico"
            name="email"
            required
          />
          <Input type="tel" placeholder="Teléfono" name="phone" required />

          <Button type="submit">Enviar</Button>
        </div>
      </form>
    </>
  );
}
