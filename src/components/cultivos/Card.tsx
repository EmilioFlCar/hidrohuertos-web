import { Crop } from "@/store/cropStore";
import {
  calcularDiasRestantes,
  calcularProgresoPorNombre,
  formatearFecha,
} from "@/utils/cropsUtils";
import Link from "next/link";
import React from "react";
import { FaCalendar, FaClock, FaEye } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";

function Card({ crop }: { crop: Crop }) {
  const diasRestantes = calcularDiasRestantes(crop.plant_type, crop.start_date);
  const progreso = calcularProgresoPorNombre(crop.plant_type, crop.start_date);

  return (
    <div className="card bg-gray-50 w-64 border-gray-200 shadow border">
      <figure className="aspect-video">
        <img src="placeholder.svg" alt="imagen del cultivo" />
      </figure>
      <div className="card-body flex gap-y-4">
        <div className="flex flex-row justify-between">
          <div className="flex-col">
            <h2 className="card-title text-gray-900">{crop.plant_name}</h2>
            <h2 className="card text-gray-500">{crop.plant_type}</h2>
          </div>
          <div className="flex items-center justify-center">
            <button className="btn btn-square btn-sm btn-ghost hover:bg-gray-100">
              <IoMdMore size={"24"} />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-y-2 text-sm">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-x-2">
              <FaCalendar size={"14"} color={"#6b7280"} />
              <p className="text-xs text-gray-500">Plantado: </p>
            </div>
            <div className="flex flex-col">
              <p className="text-xs">{formatearFecha(crop.start_date)}</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-x-2">
              <FaClock size={"14"} color={"#6b7280"} />
              <p className="text-xs text-gray-500">Cosecha: </p>
            </div>
            <div className="flex flex-col">
              <p className="text-xs">{diasRestantes} días</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-col">
          <div className="flex flex-row pb-1 justify-between">
            <div>
              <p className="text-xs">Progreso: </p>
            </div>
            <div>
              <p className="text-xs font-bold">
                {(progreso * 100).toFixed(2)}%
              </p>
            </div>
          </div>
          <progress
            className="progress"
            value={(progreso * 100).toFixed(2)}
            max="100"
          ></progress>
        </div>
        <Link href={`/cultivos/detalles/${crop.id}`}>
          <div className="card-actions justify-end">
            <button className="btn btn-wide bg-gray-50 hover:bg-gray-200 text-gray-600">
              <FaEye />
              Ver detalles
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Card;
