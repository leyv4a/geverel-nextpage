"use client";
import { contactForm } from "@/actions/contactActions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ContactSchema } from "@/lib/schemas/formSchemas";
import React, { useRef } from "react";
import { useToast } from "@/components/ui/use-toast"


export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [nameError, setNameError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [phoneError, setPhoneError] = React.useState("");
  const [messageError, setMessageError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const { toast } = useToast()

  const makeAContact = async (formData: FormData) => {
    setLoading(true);
    
    //reset form and errors
    formRef.current?.reset();
    setNameError("");
    setEmailError("");
    setPhoneError("");
    setMessageError("");
    
    //client side validation
    const result = ContactSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    });
    //in case of error
    if (!result.success) {
      //We have to loop through the error.issues and set each error to each input
      result.error.issues.forEach((issue) => {
        //set each error to each input
        if (issue.path[0] == "name") setNameError(issue.message);
        else if (issue.path[0] == "email") setEmailError(issue.message);
        else if (issue.path[0] == "phone") setPhoneError(issue.message);
        else if (issue.path[0] == "message") setMessageError(issue.message);
      });
      setLoading(false);
      return;
    }

    //call the action
    const response = await contactForm(formData);

    if (!response.success) {
      response.errors?.forEach((error: any) => {
        if (error.path[0] === "name") setNameError(error.message);
        if (error.path[0] === "email") setEmailError(error.message);
        if (error.path[0] === "phone") setPhoneError(error.message);
        if (error.path[0] === "message") setMessageError(error.message);
      });
    }
    
    toast({
      title: 'Formulario enviado correctamente!',
      description:  `Tu mensaje ha sido enviado correctamente ${response.data?.name}`  
      // duration: 5000,
    })
    setLoading(false);
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
            className={`${
              nameError ? 'ring-2 ring-red-500' : ''
            }`}
          />
          <p className="text-red-500 -mt-2 text-xs">{nameError}</p>
          <Textarea
            placeholder="Escribe tu mensaje"
            name="message"
            required
            className={`resize-none ${
              messageError ? 'ring-2 ring-red-500' : ''
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

          <Button disabled={loading} type="submit">{loading ? 'Enviando...' : 'Enviar'}</Button>
        </div>
      </form>
    </>
  );
}
