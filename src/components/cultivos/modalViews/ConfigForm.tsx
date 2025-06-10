"use client";
import React, { useEffect } from "react";
import HydroSystemButton from "../config/hydro-sys-button";
import { useCropFormStore } from "../../../store/cropFormData";

function ConfigForm() {
  const { systemType, targetPh, setConfigInfo, errors } = useCropFormStore();

  const handleSystemSelect = (systemName: string) => {
    setConfigInfo({ systemType: systemName });
  };

  const system = [
    {
      nombre: "Kratky",
      descripcion:
        "Sistema pasivo sin bombas, ideal para cultivos de rápido crecimiento como lechugas. No requiere cambios de agua si se calcula bien la solución.",
    },
    {
      nombre: "Aeroponía",
      descripcion:
        "Raíces suspendidas en el aire y rociadas con nutrientes. Alta eficiencia y oxigenación, ideal para cultivos exigentes como tomates o fresas.",
    },
    {
      nombre: "NFT",
      descripcion:
        "Película de nutrientes fluye por un canal en el que las raíces están parcialmente expuestas. Bueno para plantas pequeñas y de raíz poco profunda.",
    },
    {
      nombre: "DWC",
      descripcion:
        "Raíces sumergidas en agua oxigenada con bomba de aire. Sistema activo, estable y fácil de mantener para muchos tipos de cultivos.",
    },
  ];

  return (
    <div className="mt-4">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tipo de sistema
          </label>
          <div className="flex flex-wrap gap-2">
            {system.map((sys) => (
              <HydroSystemButton
                key={sys.nombre}
                title={sys.nombre}
                description={sys.descripcion}
                isActive={systemType === sys.nombre}
                onSelect={handleSystemSelect}
              />
            ))}
          </div>
          {errors.systemType && (
            <p className="text-red-500 text-xs">{errors.systemType}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            pH objetivo
          </label>
          <input
            type="number"
            step="0.1"
            placeholder="6.0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 text-sm"
            value={targetPh}
            onChange={(e) =>
              setConfigInfo({ targetPh: parseFloat(e.target.value) })
            }
          />
        </div>
      </div>
    </div>
  );
}

export default ConfigForm;
