import { FaPlay } from "react-icons/fa";
import React from "react";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-hydrogreen">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('/placeholder.svg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-hydrogreen"></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Cultiva en casa con hidroponía sin complicaciones
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Nuestro kit + app te guían paso a paso para cultivar tus propios
            alimentos de forma fácil, sostenible y sin ensuciar.
          </p>
          <a
            href="#curso"
            className="inline-flex items-center justify-center bg-white text-hydrogreen font-medium px-8 py-4 rounded-full text-lg shadow-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105"
          >
            Ver curso gratuito
            <FaPlay />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
