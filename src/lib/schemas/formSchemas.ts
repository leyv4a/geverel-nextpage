import { z } from "zod";
 export const ContactSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "El nombre debe tener al menos 2 caracteres",
    })
    .max(50, {
      message: "El nombre debe tener máximo 50 caracteres",
    }),
  email: z.string().email({
    message: "Ingrese un email válido",
  }),
  phone: z.string({
      message: "Ingrese un número de teléfono válido",
    }).length(10,{
      message: "El teléfono debe tener exactamente 10 caracteres",
    })
    .regex(/^\d+$/, {
      message: "El teléfono solo debe contener números",
    })
    .optional(),
  message: z
    .string()
    .min(10, {
      message: "El mensaje debe tener al menos 10 caracteres",
    })
    .max(500, {
      message: "El mensaje debe tener máximo 500 caracteres",
    }),
});