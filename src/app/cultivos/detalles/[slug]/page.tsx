"use client";

import CropDetailHeader from "@/components/cultivos/CropDetails/CropDetailHeader";
import CropInformation from "@/components/cultivos/CropDetails/CropInformation";
import CropProgress from "@/components/cultivos/CropDetails/CropProgress";
import { useCropStore } from "@/store/cropStore";
import React from "react";

function Page({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = React.use(params);
  const { crops } = useCropStore();

  const crop = crops.find((crop) => crop.id === resolvedParams.slug);

  return (
    <div className="flex flex-col px-4 sm:px-6 md:px-9 py-4 sm:py-8 w-full h-full min-h-screen">
      <CropDetailHeader crop={crop} />
      <div className="grid grid-cols-1 md:grid-cols-3 pt-4 gap-6">
        <div className="col-span-1 md:col-span-2">
          <CropProgress crop={crop} />
        </div>
        <div className="col-span-1 order-first md:order-last">
          <CropInformation
            plant_type={crop?.plant_type || "Cultivo no encontrado"}
            system_type={crop?.system_type || "Sistema no encontrado"}
            start_date={crop?.start_date || "Fecha no encontrada"}
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
