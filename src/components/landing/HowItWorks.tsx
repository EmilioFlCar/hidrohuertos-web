import Link from "next/link";
import React from "react";
import {
  FaBell,
  FaCalendarAlt,
  FaCheckCircle,
  FaLeaf,
  FaArrowRight,
  FaUserCheck,
  FaUserPlus,
  FaSeedling,
  FaChartLine,
} from "react-icons/fa";

function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Crea tu cuenta fácilmente",
      description:
        "Regístrate en HidroHuertos en pocos pasos. Solo necesitas un correo y una contraseña para comenzar a cultivar sin complicaciones.",
      icon: FaUserPlus,
      color: "bg-green-100 text-green-600",
    },
    {
      number: 2,
      title: "Escanea tu kit o agrega tu planta",
      description:
        "Escanea el código QR incluido en tu kit para registrar automáticamente tus cultivos o agrégalos manualmente si prefieres hacerlo por tu cuenta.",
      icon: FaSeedling,
      color: "bg-green-200 text-green-700",
    },
    {
      number: 3,
      title: "Sigue las recomendaciones y monitorea",
      description:
        "Recibe recordatorios inteligentes para cada etapa del cultivo, sigue guías personalizadas y observa el progreso de tus plantas en tiempo real.",
      icon: FaChartLine,
      color: "bg-green-100 text-green-600",
    },
  ];

  return (
    <section
      id="como-funciona"
      className="w-full py-16 md:py-20 lg:py-24 bg-gradient-to-br from-green-50/50 via-white to-green-100/30"
    >
      <div className="container px-4 md:px-20 mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
          <div className="space-y-4">
            <div className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700 shadow-sm">
              Cómo funciona
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-gray-900">
              Comienza tu huerto hidropónico en{" "}
              <span className="text-green-600">3 simples pasos</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 md:text-xl leading-relaxed">
              Cultivar con hidroponía nunca ha sido tan fácil. Te guiamos en
              cada paso del proceso con herramientas inteligentes y
              personalizadas.
            </p>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.number}
                className="group relative flex flex-col items-center text-center p-6 lg:p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Connection Line (Desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-12 w-12 h-0.5 bg-gradient-to-r from-green-200 to-green-300 transform -translate-y-1/2 z-0" />
                )}

                <div className="relative z-10 mb-6">
                  <div
                    className={`flex h-20 w-20 items-center justify-center rounded-full ${step.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white text-sm font-bold shadow-md">
                    {step.number}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-50/50 to-green-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

        {/* Mobile Connection Lines */}
        <div className="md:hidden flex justify-center mb-8">
          <div className="flex space-x-4">
            {steps.slice(0, -1).map((_, index) => (
              <div
                key={index}
                className="w-8 h-0.5 bg-gradient-to-r from-green-200 to-green-300"
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="#registro">
            <button className="group bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold text-lg flex items-center gap-3">
              Comenzar ahora
              <FaArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
          <p className="text-gray-500 text-sm md:text-base">
            ¡Es completamente gratuito!
          </p>
        </div>

        {/* Additional Benefits */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: FaCheckCircle,
              text: "Sin experiencia previa",
              color: "text-green-600",
            },
            {
              icon: FaBell,
              text: "Recordatorios inteligentes",
              color: "text-green-700",
            },
            {
              icon: FaCalendarAlt,
              text: "Cronograma personalizado",
              color: "text-green-600",
            },
            {
              icon: FaLeaf,
              text: "Cultivos orgánicos",
              color: "text-green-700",
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <benefit.icon className={`h-5 w-5 ${benefit.color}`} />
              <span className="text-sm font-medium text-gray-700">
                {benefit.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
