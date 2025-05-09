import React from "react";
import { FaBuilding, FaSeedling } from "react-icons/fa";
import { IoIosWater } from "react-icons/io";
import { MdOutlinePhoneIphone } from "react-icons/md";

function Benefits() {
  return (
    <section id="beneficios" className="py-20 bg-white scroll-mt-[80px]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Beneficios de HidroHuertos
          </h2>
          <p className="text-xl text-gray-600">
            Descubre por qué miles de personas están cambiando a la hidroponía
            con nuestra solución
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-green-50 p-6 rounded-xl">
            <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <FaBuilding className="w-8 h-8 text-hydrogreen" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Ahorra espacio
            </h3>
            <p className="text-gray-600">
              Cultiva en espacios reducidos como balcones o interiores
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl">
            <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <IoIosWater className="w-8 h-8 text-hydrogreen" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Sin tierra</h3>
            <p className="text-gray-600">
              Cultivo limpio sin necesidad de tierra, ideal para interiores
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl">
            <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <MdOutlinePhoneIphone className="w-8 h-8 text-hydrogreen" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Guiado por app{" "}
            </h3>
            <p className="text-gray-600">
              Instrucciones paso a paso y seguimiento en tiempo real
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl">
            <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <FaSeedling className="w-8 h-8 text-hydrogreen" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Ideal para principiantes
            </h3>
            <p className="text-gray-600">
              No se necesita experiencia previa en jardinería
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
