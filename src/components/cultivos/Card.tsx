import React from "react";
import { FaEye } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";

function Card() {
  return (
    <div className="card bg-gray-50 w-64 border-gray-200 shadow border">
      <figure className="aspect-video">
        <img src="placeholder.svg" alt="Shoes" />
      </figure>
      <div className="card-body flex gap-y-4">
        <div className="flex flex-row justify-between">
          <div className="flex-col">
            <h2 className="card-title text-gray-900">Card Title</h2>
            <h2 className="card text-gray-500">Subtitle</h2>
          </div>
          <div className="flex items-center justify-center">
            <button className="btn btn-square btn-sm btn-ghost hover:bg-gray-100">
              <IoMdMore size={"24"} />
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div>
            <p>inicio: </p>
            <p>10/06/2025</p>
          </div>
          <div>
            <p>8 Días restantes</p>
          </div>
        </div>
        <div className="flex justify-center flex-col">
          <div className="flex flex-row pb-1 justify-between">
            <div>
              <p className="text-xs">Progreso: </p>
            </div>
            <div>
              <p className="text-xs font-bold">75%</p>
            </div>
          </div>
          <progress className="progress" value="75" max="100"></progress>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-wide bg-gray-50 hover:bg-gray-200 text-gray-600">
            <FaEye />
            Ver detalles
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
