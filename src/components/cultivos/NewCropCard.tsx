import React from "react";
import { FaPlus } from "react-icons/fa";
import NewCropModal from "./NewCropModal";

function NewCropCard() {
  return (
    <div className="card bg-gray-50 w-64 shadow-sm flex-col items-center justify-center p-6 border-dashed">
      <div className=" flex flex-col items-center justify-center text-center">
        <div className="mb-4 rounded-full bg-green-100 p-3">
          <FaPlus className="h-6 w-6 text-green-600" />
        </div>
        <h3 className=" text-gray-900 text-lg">Añadir nuevo cultivo</h3>
        <p className="text-gray-700 pb-4">
          Registra tu nuevo cultivo hidropónico
        </p>
        <div className="card-actions">
          <NewCropModal />
        </div>
      </div>
    </div>
  );
}

export default NewCropCard;
