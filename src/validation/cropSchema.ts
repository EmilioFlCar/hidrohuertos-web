import { z } from "zod";
const today = new Date();
today.setHours(0, 0, 0, 0);

export const cropSchema = z.object({
  plantName: z.string().min(1, "El nombre de la planta es requerido"),
  plantType: z.string().min(1, "El tipo de planta es requerido"),
  startDate: z.preprocess(
    (val) => (typeof val === "string" ? new Date(val) : val),
    z
      .date({ required_error: "La fecha de inicio es requerida" })
      .min(today, "La fecha debe ser hoy o una fecha futura"),
  ),
  // description: z.string().min(1, "La descripción es requerida"),
  systemType: z.string().min(1, "El tipo de sistema es requerido"),
  targetPh: z
    .number({
      required_error: "El pH objetivo es requerido",
      invalid_type_error: "El pH debe ser un número",
    })
    .min(1, "El pH debe ser mayor a 0"),
  autoReminders: z.boolean({
    required_error: "Este campo es requerido",
    invalid_type_error: "Debe ser verdadero o falso",
  }),
  waterChangeFrequency: z
    .string()
    .min(1, "La frecuencia de cambio de agua es requerida"),
  nutrientsFrequency: z
    .string()
    .min(1, "La frecuencia de nutrientes es requerida"),
  phCheckFrequency: z
    .string()
    .min(1, "La frecuencia de chequeo de pH es requerida"),
});
