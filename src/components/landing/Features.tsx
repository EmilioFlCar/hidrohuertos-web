import {
  FaSeedling,
  FaBell,
  FaBookOpen,
  FaUsers,
  FaStore,
  FaChalkboardTeacher,
  FaInfo,
} from "react-icons/fa";
import React from "react";

function Features() {
  const features = [
    {
      title: "Seguimiento de cultivos",
      description:
        "Monitorea el progreso de tus cultivos, recibe alertas de crecimiento y visualiza estadísticas en tiempo real.",
      icon: FaSeedling,
    },
    {
      title: "Recordatorios personalizados",
      description:
        "Configura alertas para cambiar el agua, añadir nutrientes o cosechar tus plantas en el momento óptimo.",
      icon: FaBell,
    },
    {
      title: "Biblioteca de cultivos",
      description:
        "Accede a información detallada sobre diferentes tipos de plantas y sus requisitos específicos para hidroponía.",
      icon: FaBookOpen,
    },
    {
      title: "Comunidad de cultivadores",
      description:
        "Conecta con otros entusiastas de la hidroponía, comparte experiencias y resuelve dudas en nuestra comunidad.",
      icon: FaUsers,
    },
    {
      title: "Marketplace verificado",
      description:
        "Encuentra todos los suministros que necesitas para tus cultivos hidropónicos en nuestro marketplace.",
      icon: FaStore,
    },
    {
      title: "Guías paso a paso",
      description:
        "Aprende a cultivar con hidroponía desde cero con nuestras guías detalladas y tutoriales en video.",
      icon: FaChalkboardTeacher,
    },
  ];
  return (
    <section
      id="caracteristicas"
      className="w-full py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-green-50"
    >
      <div className="container px-4 md:px-20 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
          <div className="space-y-4">
            <div className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-sm font-medium text-green-600 shadow-sm">
              Características
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Todo lo que necesitas para tus cultivos hidropónicos
            </h2>
            <p className="max-w-[900px] mx-auto text-gray-600 md:text-xl/relaxed lg:text-xl/relaxed xl:text-xl/relaxed">
              HidroHuertos te ofrece todas las herramientas para gestionar tus
              cultivos hidropónicos de manera eficiente y sencilla.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="flex flex-row gap-4 items-center">
                  <div className="flex p-3 items-center justify-center rounded-xl bg-green-100 shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <feature.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="mt-3 text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
