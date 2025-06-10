import React from "react";
import Link from "next/link";
import { FaArrowLeft, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { IoWaterOutline } from "react-icons/io5";

function CropDetailHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
      <Link href="/cultivos">
        <button className="btn btn-square bg-gray-50 hover:bg-gray-200 text-gray-900 border-gray-300 shadow-none">
          <FaArrowLeft size={16} color="black" />
        </button>
      </Link>
      <div className="flex flex-col w-full gap-2">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Info*/}
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-black">
              Tomate 1
            </h1>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <div className="rounded-2xl border border-gray-200 px-2 py-0.5">
                <h1 className="font-bold text-xs">Tomate</h1>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-green-100 flex items-center px-2 py-0.5">
                <IoWaterOutline size={14} />
                <h1 className="font-bold text-xs pl-1">NFT</h1>
              </div>
              <p className="text-gray-500 text-sm">Inicio: 10/06/2025</p>
            </div>
          </div>

          {/* Botones */}
          <div className="flex gap-2">
            <button className="btn bg-gray-50 hover:bg-gray-200 text-gray-900 border-gray-300 shadow-none">
              <FaRegEdit size={19} color="black" />
              Editar
            </button>
            <button className="btn btn-md bg-[#F05656] text-white">
              <FaRegTrashAlt color="white" />
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CropDetailHeader;
