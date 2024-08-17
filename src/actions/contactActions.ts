"use server";

import { ContactSchema } from "@/lib/schemas/formSchemas";

// import {randomUUID} from 'crypto'

export const contactForm = async (formData: FormData) => {

  const contactData = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email:  formData.get("email"),
    message: formData.get("message"),
  };
  
  const result = ContactSchema.safeParse(contactData);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.issues
    }
  }


  const validatedData = {
   ...result.data,
    timestamp: new Date().toISOString(),
    status: 'pending',
    // ip: req.ip,
    // id: randomUUID(),
  };

  return {
    success: true,
    data: validatedData,
  }
};

export const getAQuote = async (formData: FormData) => {

};