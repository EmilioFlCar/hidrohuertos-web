import React from "react";
import { FaCalendar, FaCheck } from "react-icons/fa";
import { parseISO, addDays, format } from "date-fns";
import { es } from "date-fns/locale";
import cultivos from "@/data/cultivos_aeroponicos.json";

interface Etapa {
  nombre: string;
  inicio: number;
  fin: number;
  descripcion?: string;
  fechaInicio: Date;
  fechaFin: Date;
}

function calcularEtapasConFechas(cropType: string, initialDate: Date): Etapa[] {
  const cultivo = cultivos.find(
    (c) => c.nombre.toLowerCase() === cropType.toLowerCase(),
  );

  if (!cultivo) return [];

  return cultivo.etapas.map((etapa) => {
    const diasInicio = Math.floor(etapa.inicio * cultivo.tiempo_cosecha_dias);
    const diasFin = Math.floor(etapa.fin * cultivo.tiempo_cosecha_dias);

    return {
      ...etapa,
      fechaInicio: addDays(initialDate, diasInicio + 1),
      fechaFin: addDays(initialDate, diasFin + 1),
    };
  });
}

function CropGrowthStages({
  initialDate,
  cropType,
}: {
  initialDate: Date;
  cropType: string;
}) {
  const etapas = calcularEtapasConFechas(cropType, initialDate);

  return (
    <div className="pt-2">
      {/* <h3 className="font-medium mb-3">Etapas de crecimiento</h3> */}
      <div className="relative">
        <div className="absolute left-3 top-1 h-[85%] w-px bg-green-200"></div>
        <ol className="space-y-6">
          {etapas.map((etapa, index) => {
            const hoy = new Date();
            const completada = hoy >= etapa.fechaFin;
            const enCurso = hoy >= etapa.fechaInicio && hoy < etapa.fechaFin;

            return (
              <li key={index} className="relative pl-8">
                <div
                  className={`absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border ${
                    completada
                      ? "border-hydrogreen bg-hydrogreen text-white"
                      : enCurso
                        ? "border-hydrogreen bg-white"
                        : "border-muted bg-white"
                  }`}
                >
                  {completada ? (
                    <FaCheck className="h-3 w-3" />
                  ) : (
                    <span className="text-xs">{index + 1}</span>
                  )}
                </div>
                <div>
                  <h4
                    className={`font-medium ${
                      completada || enCurso
                        ? "text-green-600 text-lg"
                        : "text-base"
                    }`}
                  >
                    {etapa.nombre}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {etapa.descripcion || "Etapa de crecimiento de la planta."}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    <FaCalendar className="inline mr-1 h-3 w-3 text-gray-400" />
                    {`${format(etapa.fechaInicio, "dd 'de' MMMM 'de' yyyy", { locale: es })} - ${format(etapa.fechaFin, "dd 'de' MMMM 'de' yyyy", { locale: es })}`}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default CropGrowthStages;
