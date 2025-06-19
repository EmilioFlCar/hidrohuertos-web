import {
  calcularDiasRestantes,
  calcularDiasTranscurridos,
  formatearFecha,
} from "@/utils/cropsUtils";
import React from "react";

function CropInformation({
  plant_type,
  system_type,
  start_date,
}: {
  plant_type: string;
  system_type: string;
  start_date: string;
}) {
  return (
    <div className="flex flex-col p-6 rounded-lg border border-gray-200 gap-2">
      <h2 className="text-2xl font-bold tracking-tight">
        Información del cultivo
      </h2>
      <div className="flex flex-col pb-2">
        <h3 className="text-sm font-medium text-gray-500">Tipo de cultivo:</h3>
        <p className="text-base">{plant_type}</p>
      </div>
      <div className="flex flex-col pb-2">
        <h3 className="text-sm font-medium text-gray-500">Tipo de sistema:</h3>
        <p className="text-base">{system_type}</p>
      </div>
      <div className="flex flex-col pb-2">
        <h3 className="text-sm font-medium text-gray-500">Fecha de inicio</h3>
        <p className="text-base">{formatearFecha(start_date)}</p>
      </div>
      <div className="flex flex-col pb-2">
        <h3 className="text-sm font-medium text-gray-500">
          Tiempo transcurrido:
        </h3>
        <p className="text-base">
          {calcularDiasTranscurridos(start_date)} días
        </p>
      </div>
      <div className="flex flex-col pb-2">
        <h3 className="text-sm font-medium text-gray-500">Tiempo restante:</h3>
        <p className="text-base">
          {calcularDiasRestantes(plant_type, start_date)} días
        </p>
      </div>
    </div>
  );
}

export default CropInformation;
