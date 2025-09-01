import { Crop } from "@/store/cropStore";
import {
  calcularDiasRestantes,
  calcularProgresoPorNombre,
} from "@/utils/cropsUtils";
import React from "react";
import { FaLeaf } from "react-icons/fa";
import CropGrowthStages from "./CropGrowthStages";

interface CropProgressProps {
  crop: Crop | undefined;
}

function CropProgress({ crop }: CropProgressProps) {
  if (!crop) {
    return (
      <div className="flex flex-col rounded-lg border border-gray-200">
        <div className="p-6">
          <h2 className="text-xl font-semibold">Cultivo no encontrado</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col rounded-lg border border-gray-200">
      {/* <figure className="aspect-video">
        <img src="placeholder.svg" alt="imagen del cultivo" />
      </figure> */}
      <div className="p-6">
        <div className="flex items-center gap-2 pb-2 justify-between">
          <div className="flex items-center gap-2">
            <FaLeaf className="text-hydrogreen" size={24} />
            <h1 className="text-lg font-medium">Etapas del cultivo</h1>
          </div>
          <div>
            <h1 className="text-lg text-gray-500">
              {calcularDiasRestantes(crop.plant_type, crop.start_date)} días
              restantes
            </h1>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <CropGrowthStages
            initialDate={new Date(crop.start_date)}
            cropType={crop.plant_type}
          />
        </div>
      </div>
    </div>
  );
}

export default CropProgress;
