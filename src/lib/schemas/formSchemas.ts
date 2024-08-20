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
  phone: z
    .string({
      message: "Ingrese un número de teléfono válido",
    })
    .length(10, {
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

export const QuoteSquema = z.object({
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
  phone: z
    .string({
      message: "Ingrese un número de teléfono válido",
    })
    .length(10, {
      message: "El teléfono debe tener exactamente 10 caracteres",
    })
    .regex(/^\d+$/, {
      message: "El teléfono solo debe contener números",
    })
    .optional(),
  enterprise: z
    .string()
    .min(3, {
      message: "El nombre de la empresa debe tener al menos 3 caracteres",
    })
    .max(500, {
      message: "El nombre de la empresa debe tener máximo 40 caracteres",
    }),
  businessLine: z
    .string()
    .min(3, {
      message: "el giro del negocio debe tener al menos 3 caracteres",
    })
    .max(30, {
      message: "El giro del negocio debe tener máximo 30 caracteres",
    }),
  service: z
    .string()
    .min(3, {
      message: "Debes elegir un servicio",
    })
    .max(15, {
      message: "Debes elegir un servicio",
    }).optional(),
    checkbox1:z .array(z.string())
    .optional()
    .refine((value) => value?.length === 0 || (value?.length ?? 0), {
      message: "Debe seleccionar al menos una opción",
    }),
    checkbox2: z
    .array(z.string())
    .optional()
    .refine((value) => value?.length === 0 || (value?.length ?? 0), {
      message: "Debe seleccionar al menos una opción",
    }),
    radiogroup1: z.string().optional(),
    textarea: z.string().optional()
});
