"use client";
import { contactForm } from "@/actions/contactActions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ContactSchema } from "@/lib/schemas/formSchemas";
import React, { useRef } from "react";
import { useToast } from "@/components/ui/use-toast";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [nameError, setNameError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [phoneError, setPhoneError] = React.useState("");
  const [messageError, setMessageError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const { toast } = useToast();

  const setErrorMessages = (
    issues: { path: (string | number)[]; message: string }[]
  ) => {
    issues.forEach((issue) => {
      if (issue.path[0] === "name") setNameError(issue.message);
      else if (issue.path[0] === "email") setEmailError(issue.message);
      else if (issue.path[0] === "phone") setPhoneError(issue.message);
      else if (issue.path[0] === "message") setMessageError(issue.message);
    });
  };

  const makeAContact = async (formData: FormData) => {
    setLoading(true);
    try {
      //reset form and errors
      formRef.current?.reset();
      setNameError("");
      setEmailError("");
      setPhoneError("");
      setMessageError("");

      //client side validation
      const result = ContactSchema.safeParse({
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        message: formData.get("message") as string,
      });

      //in case of error
      if (!result.success) {
        //We have to loop through the error.issues and set each error to each input
        setErrorMessages(result.error.issues);
        return;
      }

      //call the action
      const response = await contactForm(formData);

      if (!response.success && response.errors) {
        setErrorMessages(response.errors);
        return;
      }

      toast({
        title: "Formulario enviado correctamente!",
        description: `Tu mensaje ha sido enviado correctamente ${
          response.data?.name ?? ""
        }`,
        // duration: 5000,
      });
    } catch (e: any) {
      console.log(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        autoComplete="off"
        className="accent-black flex md:justify-start justify-center content-center md:items-start  flex-col md:flex-row w-[100%] "
        ref={formRef}
        action={makeAContact}
      >
        <div className="flex flex-col gap-2 mb-2 md:me-2 ">
          <Input
            type="text"
            placeholder="Nombre"
            name="name"
            required
            className={`${nameError ? "ring-2 ring-red-500" : ""}`}
          />
          <p className="text-red-500 -mt-2 text-xs">{nameError}</p>
          <Textarea
            placeholder="Escribe tu mensaje"
            name="message"
            required
            className={`resize-none ${
              messageError ? "ring-2 ring-red-500" : ""
            }`}
            rows={3}
          />
          <p className="text-red-500 -mt-2 text-xs">{messageError}</p>
        </div>
        <div className="flex flex-col gap-2 ">
          <Input
            type="email"
            placeholder="Correo electrónico"
            name="email"
            required
            className={emailError ? `ring-2 ring-red-500` : ``}
          />
          <p className="text-red-500 -mt-2 text-xs">{emailError}</p>
          <Input
            type="tel"
            placeholder="Teléfono"
            name="phone"
            required
            className={phoneError ? `ring-2 ring-red-500` : ``}
          />
          <p className="text-red-500 -mt-2 text-xs">{phoneError}</p>

          <Button disabled={loading} type="submit">
            {loading ? "Enviando..." : "Enviar"}
          </Button>
        </div>
      </form>
    </>
  );
}
