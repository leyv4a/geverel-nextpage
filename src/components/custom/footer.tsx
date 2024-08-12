"use client";

import { Facebook, Instagram } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import Link from "next/link";
import SvgDivider from "./svg-shape-divider";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "El nombre debe tener al menos 2 caracteres",
    })
    .max(50, {
      message: "El nombre debe tener máximo 50 caracteres",
    }),
  phone: z
    .string()
    .min(10, {
      message: "El teléfono debe tener al menos 10 caracteres",
    })
    .max(10, {
      message: "El teléfono debe tener máximo 10 caracteres",
    }),
  email: z
    .string()
    .min(5, {
      message: "El email debe tener al menos 5 caracteres",
    })
    .max(50, {
      message: "El email debe tener máximo 50 caracteres",
    }),
  message: z
    .string()
    .min(10, {
      message: "El mensaje debe tener al menos 10 caracteres",
    })
    .max(500, {
      message: "El mensaje debe tener máximo 500 caracteres",
    }),
});

export default function Footer() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const year: Date = new Date();

  return (
    <>
      <section
        id="contacto"
        className="my-10 flex flex-col md:flex-row gap-8  font-poppins  container mx-auto max-w-screen"
      >
        <aside className="flex flex-col md:w-1/2 gap-6 justify-center caret-[#7e02b7]">
          <h2 className="text-center md:text-start text-xl md:text-4xl font-semibold bg-gradient-to-r from-[#000000] via-[#000000] text-transparent bg-clip-text to-[#c240ff] bg-300% animate-gradient">
            Contactanos
          </h2>
          <Form {...form}>
            <form
              autoComplete="off"
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col md:flex-row gap-4 items-center md:items-start justify-center md:justify-start w-full "
            >
              <div className="flex flex-col  h-full justify-between ">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormMessage className="" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefono</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Correo</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col sm:gap-0 gap-4 justify-between h-full ">
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensaje</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={5}
                          className="resize-none "
                          placeholder=""
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}/>
                <Button type="submit">Enviar</Button>
              </div>
            </form>
          </Form>
          <p className="text-xs md:max-w-[70%] text-center md:text-start">
            Al hacer uso de este formulario, estás aceptando nuestra política de
            privacidad y nuestros términos de servicio.
          </p>
        </aside>
        <article className="md:w-1/2 font-poppins hidden md:flex items-center justify-center ">
            <h2 className="absolute z-10 text-center font-b612 text-6xl -skew-y-6 ]">
             #DelBocetoAlClick
            </h2>
            <Image className="relative -z-50" src={'/assets/rocket.svg'} width={800} height={350} alt="Rocket launching"/>
        </article>
      </section>
      <hr />
      <div className="container mx-auto my-10 flex justify-between ">
        <h2 className="text-start">
          &copy; Geverel Software {year.getFullYear()}
        </h2>
        <div className="flex gap-2">
          <Link
            className="hover:text-slate-700"
            href={"https://facebook.com/geverelsoftware"}
            rel="noreferrer"
            target="_blank"
            aria-label="Perfil de Facebook"
          >
            <Facebook />
          </Link>
          <Link
            className="hover:text-slate-700"
            href={"https://instagram.com/geverelsoftware"}
            rel="noreferrer"
            target="_blank"
            aria-label="Perfil de Instagram"
          >
            <Instagram />
          </Link>
        </div>
      </div>
    </>
  );
}
