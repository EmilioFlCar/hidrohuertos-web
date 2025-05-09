import React from "react";
import {
  FaBell,
  FaCalendarAlt,
  FaCheckCircle,
  FaLeaf,
  FaUserCheck,
} from "react-icons/fa";

function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 bg-green-50 scroll-mt-[80px]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Así funcionará nuestra app
          </h2>
          <p className="text-xl text-gray-600">
            Nuestra app te guiará desde el inicio hasta la cosecha, con
            recordatorios, recomendaciones y seguimiento personalizado.
            <br />
            <span className="font-bold">
              ¡Apúntate para ser de los primeros en usarla!
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Paso 1 */}
          <div className="text-center">
            <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <FaUserCheck className="w-10 h-10 text-hydrogreen" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">
              Crea tu perfil o escanea tu kit
            </h3>
            <p className="text-gray-600">
              Regístrate en segundos o escanea el código QR de tu kit
              HidroHuertos para empezar
            </p>
          </div>

          {/* <!-- Paso 2 --> */}
          <div className="text-center">
            <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <FaLeaf className="w-10 h-10 text-hydrogreen" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Elige tu cultivo</h3>
            <p className="text-gray-600">
              Selecciona entre una variedad de plantas y vegetales
            </p>
          </div>

          {/* <!-- Paso 3 --> */}
          <div className="text-center">
            <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <FaCalendarAlt className="w-10 h-10 text-hydrogreen" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">
              Sigue el calendario inteligente
            </h3>
            <p className="text-gray-600">
              Recibe instrucciones personalizadas para tu cultivo
            </p>
          </div>

          {/* <!-- Paso 4 --> */}
          <div className="text-center">
            <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <FaBell className="w-10 h-10 text-hydrogreen" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">
              Recibe alertas y recomendaciones
            </h3>
            <p className="text-gray-600">
              Notificaciones sobre cuidados y mantenimiento
            </p>
          </div>

          {/* <!-- Paso 5 --> */}
          <div className="text-center">
            <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <FaCheckCircle className="w-10 h-10 text-hydrogreen" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">
              ¡Cosecha con éxito!
            </h3>
            <p className="text-gray-600">
              Disfruta de tus alimentos frescos cultivados en casa
            </p>
          </div>
        </div>
        <div className="mt-8 items-center text-center">
          <a
            href="#pre-registro"
            className="inline-block bg-hydrogreen text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition duration-300"
          >
            Quiero probar la app antes que nadie 🌱🚀
          </a>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
