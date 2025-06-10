import React from "react";
import { useCropFormStore } from "../../../store/cropFormData";

function BasicsForm() {
  const { plantName, plantType, startDate, description, errors, setBasicInfo } =
    useCropFormStore();

  return (
    <div className="mt-4">
      <div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-semibold">
              Nombre de la planta
            </label>
            <input
              type="text"
              id="name"
              className={`input input-bordered w-full ${errors.plantName ? "input-error" : ""}`}
              placeholder="Ej: Tomate Cherry"
              value={plantName}
              onChange={(e) => setBasicInfo({ plantName: e.target.value })}
            />
            {errors.plantName && (
              <p className="text-red-500 text-xs mt-1">{errors.plantName}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="plantType" className="font-semibold">
              Tipo de planta
            </label>
            <select
              value={plantType}
              onChange={(e) => setBasicInfo({ plantType: e.target.value })}
              className={`select ${errors.plantType ? "select-error" : ""}`}
            >
              <option value="">Seleccionar tipo</option>
              <option>Lechuga</option>
              <option>Tomate</option>
              <option>Cilantro</option>
            </select>
            {errors.plantType && (
              <p className="text-red-500 text-xs mt-1">{errors.plantType}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-4">
          <label htmlFor="date" className="font-semibold">
            Fecha de inicio
          </label>
          <input
            type="date"
            className={`input w-full ${errors.startDate ? "input-error" : ""}`}
            placeholder="Seleccionar fecha"
            value={startDate}
            onChange={(e) => setBasicInfo({ startDate: e.target.value })}
          />
          {errors.startDate && (
            <p className="text-red-500 text-xs">{errors.startDate}</p>
          )}
        </div>
        <div className="flex flex-col gap-2 pt-4">
          <label htmlFor="description" className="font-semibold">
            Descripción (opcional)
          </label>
          <textarea
            className="textarea textarea-sm w-full"
            placeholder="Agrega notas o detalles sobre este cultivo"
            value={description}
            onChange={(e) => setBasicInfo({ description: e.target.value })}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default BasicsForm;
