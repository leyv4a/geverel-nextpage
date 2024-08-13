import { z } from "zod";
export const contactFormSchema = z.object({
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