"use server";
import pool from "@/lib/db";
import { ContactSchema, QuoteSquema } from "@/lib/schemas/formSchemas";

export const contactForm = async (formData: FormData) => {
  const contactData = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const result = ContactSchema.safeParse(contactData);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.issues,
    };
  }

  const validatedData = {
    ...result.data,
    timestamp: new Date().toISOString(),
    status: "pending",
  };

  //mandar a la base de datos

  const client = await pool.connect();
  try {
    const query = `
      INSERT INTO contacts (name, phone, email, message, status, timestamp)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `;
    const values = [
      validatedData.name,
      validatedData.phone,
      validatedData.email,
      validatedData.message,
      validatedData.status,
      validatedData.timestamp,
    ];

    const res = await client.query(query, values);

    return {
      success: true,
      data: res.rows[0],
    };
  } catch (error) {
    console.error("Database insert error", error);
    return {
      success: false,
      error: "Failed to save contact information",
    };
  } finally {
    client.release();
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
    // checkbox1: formData.get("checkbox1"),
    // checkbox2: formData.get("checkbox2"),
    checkbox1: formData.get("checkbox1")
      ? JSON.parse(formData.get("checkbox1") as string)
      : [],
    checkbox2: formData.get("checkbox2")
      ? JSON.parse(formData.get("checkbox2") as string)
      : [], 
    textarea: formData.get("textarea"),
    radiogroup1: formData.get("radiogroup1"),
  };

  const result = QuoteSquema.safeParse(quoteData);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.issues,
    };
  }

  const validatedData = {
    ...result.data,
    timestamp: new Date().toISOString(),
    status: "pending",
    // ip: req.ip,
    // id: randomUUID(),
  };

  const client = await pool.connect();
  try {
    const query = `INSERT INTO quotes (name, email,phone, business_line, enterprise, service, checkbox1, checkbox2, textarea, radiogroup1,timestamp) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    `;
    const values = [
      validatedData.name,
      validatedData.email,
      validatedData.phone,
      validatedData.businessLine,
      validatedData.enterprise,
      validatedData.service,
      validatedData.checkbox1 || "",
      validatedData.checkbox2 || "",
      validatedData.textarea || "",
      validatedData.radiogroup1 || "",
      validatedData.timestamp,
    ];

    const res = await client.query(query, values);

    return {
      success: true,
      data: res.rows[0],
    };
  } catch (error) {
    return {
      success: false,
      error: "Failed to save contact information",
    };
  } finally {
    client.release();
  }
};
