import React from "react";
import Link from "next/link";
import { FaArrowLeft, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { IoWaterOutline } from "react-icons/io5";
import { Crop } from "@/store/cropStore";

interface CropDetailHeaderProps {
  crop: Crop | undefined;
}

function CropDetailHeader({ crop }: CropDetailHeaderProps) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
      <div className="flex items-center gap-4">
        <Link href="/cultivos" className="flex-shrink-0">
          <button className="btn btn-square bg-gray-50 hover:bg-gray-200 text-gray-900 border-gray-300 shadow-none">
            <FaArrowLeft size={16} />
          </button>
        </Link>
        <div className="flex-grow">
          <h1 className="text-2xl sm:text-3xl font-bold text-black">
            {crop?.plant_name || "Cultivo no encontrado"}
          </h1>
          <div className="flex flex-wrap items-center gap-2 mt-1">
            <div className="rounded-2xl border border-gray-200 px-2 py-0.5">
              <h2 className="font-bold text-xs">{crop?.plant_type}</h2>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-green-100 flex items-center px-2 py-0.5">
              <IoWaterOutline size={14} />
              <h2 className="font-bold text-xs pl-1">{crop?.system_type}</h2>
            </div>
            <p className="text-gray-500 text-sm">Inicio: {crop?.start_date}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center lg:justify-start gap-2 flex-shrink-0">
        <button className="btn bg-gray-50 hover:bg-gray-200 text-gray-900 border-gray-300 shadow-none">
          <FaRegEdit size={19} />
          Editar
        </button>
        <button className="btn btn-md bg-[#F05656] hover:bg-red-600 text-white">
          <FaRegTrashAlt />
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default CropDetailHeader;
