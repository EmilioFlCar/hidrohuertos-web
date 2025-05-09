import React from "react";
import { FaCheck, FaPlay } from "react-icons/fa";

function Course() {
  return (
    <section id="curso" className="py-20 bg-white scroll-mt-[80px]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-200 rounded-xl overflow-hidden aspect-video flex items-center justify-center">
            <button className="bg-green text-white rounded-full p-5 hover:bg-green transition-colors">
              <FaPlay className="w-8 h-8 text-hydrogreen" />
              <span className="sr-only">Reproducir video</span>
            </button>
          </div>
          <div>
            <span className="text-hydrogreen font-medium mb-2 block">
              CURSO EN HOTMART
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Aprende hidroponía desde cero
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              Nuestro curso completo está diseñado para principiantes que
              quieren aprender a cultivar sus propios alimentos en casa usando
              técnicas hidropónicas modernas.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <FaCheck className="w-5 h-5 mr-3 text-hydrogreen" />
                <span className="text-gray-700">
                  Ideal para principiantes sin experiencia previa
                </span>
              </li>
              <li className="flex items-start">
                <FaCheck className="w-5 h-5 mr-3 text-hydrogreen" />
                <span className="text-gray-700">
                  Aprende a configurar tu sistema hidropónico
                </span>
              </li>
              <li className="flex items-start">
                <FaCheck className="w-5 h-5 mr-3 text-hydrogreen" />
                <span className="text-gray-700">
                  Guía completa de nutrientes y soluciones
                </span>
              </li>
              <li className="flex items-start">
                <FaCheck className="w-5 h-5 mr-3 text-hydrogreen" />
                <span className="text-gray-700">
                  Acceso a nuestra comunidad de cultivadores
                </span>
              </li>
            </ul>
            <a
              href="#"
              className="inline-flex items-center justify-center bg-green text-white font-medium px-6 py-3 rounded-lg text-lg hover:bg-green-700 transition-colors"
            >
              Acceder al curso completo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Course;
