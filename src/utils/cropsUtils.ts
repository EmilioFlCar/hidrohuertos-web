import { differenceInCalendarDays, parseISO } from "date-fns";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import cultivos from "@/data/cultivos_aeroponicos.json";

export function formatearFecha(fechaISO: string): string {
  const fecha = parseISO(fechaISO);
  return format(fecha, "d 'de' MMMM 'de' yyyy", { locale: es });
}

// Días restantes hasta cosecha
export function calcularDiasRestantes(
  tipoCultivo: string,
  fechaInicio: string,
): number {
  const cultivo = cultivos.find(
    (c) => c.nombre.toLowerCase() === tipoCultivo.toLowerCase(),
  );

  if (!cultivo) {
    console.warn(`No se encontró el cultivo: ${tipoCultivo}`);
    return 0;
  }

  const inicio = parseISO(fechaInicio);
  const hoy = new Date();
  const diasTranscurridos = differenceInCalendarDays(hoy, inicio);

  return Math.max(cultivo.tiempo_cosecha_dias - diasTranscurridos, 0);
}

// Progreso como número entre 0 y 1
export function calcularProgresoPorNombre(
  tipoCultivo: string,
  fechaInicio: string,
): number {
  const cultivo = cultivos.find(
    (c) => c.nombre.toLowerCase() === tipoCultivo.toLowerCase(),
  );

  if (!cultivo) {
    console.warn(`Cultivo no encontrado: ${tipoCultivo}`);
    return 0;
  }

  const inicio = parseISO(fechaInicio);
  const hoy = new Date();
  const diasTranscurridos = differenceInCalendarDays(hoy, inicio);

  const progreso = diasTranscurridos / cultivo.tiempo_cosecha_dias;
  const prev = Math.min(Math.max(progreso, 0), 1);
  return (prev * 100).toFixed(0); // Asegura que el valor esté entre 0 y 1
}

export function calcularDiasTranscurridos(fechaInicio: string): number {
  const hoy = new Date();
  const inicio = parseISO(fechaInicio);
  const diasTranscurridos = differenceInCalendarDays(hoy, inicio);
  return diasTranscurridos;
}
