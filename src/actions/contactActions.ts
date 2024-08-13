"use server";

// import {randomUUID} from 'crypto'

export const contactForm = async (formData: FormData) => {

  const contactName = formData.get("name");
  const contactPhone = formData.get("phone");
  const contactEmail = formData.get("email");
  const contactMessage = formData.get("message");
  
  if (!contactName || !contactPhone || !contactEmail || !contactMessage) return;

  const contactData = {
    name: contactName,
    contact: contactPhone,
    email: contactEmail,
    message: contactMessage,
    timestamp: new Date().toISOString(),
    status: 'pending',
    // ip: req.ip,
    // id: randomUUID(),
  };


    console.log(contactData)
  return contactData
};