"use server";

import { ContactSchema, QuoteSquema } from "@/lib/schemas/formSchemas";

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

  //mandar a la base de datos

  return {
    success: true,
    data: validatedData,
  }
};

export const getAQuote = async (formData: FormData) => {
  const quoteData = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    businessLine: formData.get("businessLine"),
    enterprise: formData.get("enterprise"),
    service: formData.get("service"),
    checkbox1: formData.get("checkbox1"),
    checkbox2: formData.get("checkbox2"),
    textarea: formData.get("textarea"),
    radiogroup1: formData.get("radioGroup")
  }

  const result = QuoteSquema.safeParse(quoteData);
  
  if (!result.success) {
    return {
      success: false,
      errors: result.error.issues
    }
  }

  //mandar a la base de datos

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