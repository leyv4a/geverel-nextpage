"use client";
import { contactForm } from "@/actions/contactActions";
import { useRef } from "react";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
      <form
      className="accent-black flex justify-center items-center  flex-col md:flex-row w-[100%]"
        ref={formRef}
        action={async (formData) => {
          const contactData = await contactForm(formData);
          //   const product = await createProduct(formData);
          console.log(contactData);
          formRef.current?.reset();
        }}
      >
     
      </form>
  );
}
