import React, { useState } from "react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0])); // First item open by default

  const faqs = [
    {
      question: "¿Qué es la hidroponía?",
      answer:
        "La hidroponía es un método de cultivo de plantas sin suelo, donde las raíces reciben una solución nutritiva equilibrada disuelta en agua con todos los elementos químicos esenciales para el desarrollo de las plantas.",
    },
    {
      question: "¿Necesito experiencia previa para usar HidroHuertos?",
      answer:
        "No, HidroHuertos está diseñado tanto para principiantes como para cultivadores experimentados. Nuestras guías paso a paso te ayudarán a comenzar desde cero.",
    },
    {
      question: "¿Cuánto espacio necesito para un cultivo hidropónico?",
      answer:
        "Puedes comenzar con sistemas muy pequeños que ocupan menos de 1 metro cuadrado. La hidroponía es ideal para espacios reducidos como apartamentos.",
    },
    {
      question: "¿Qué plantas puedo cultivar con hidroponía?",
      answer:
        "Puedes cultivar una gran variedad de plantas: lechugas, espinacas, hierbas aromáticas, tomates cherry, fresas, pimientos y muchas más.",
    },
    {
      question: "¿Cuánta agua ahorro con la hidroponía?",
      answer:
        "Los sistemas hidropónicos utilizan hasta un 90% menos de agua que los cultivos tradicionales en tierra, ya que el agua se recircula y no se pierde por filtración o evaporación.",
    },
    {
      question: "¿Cómo me ayuda HidroHuertos con mis cultivos?",
      answer:
        "HidroHuertos te proporciona recordatorios personalizados, seguimiento del crecimiento, guías específicas para cada planta y una comunidad de apoyo para resolver dudas.",
    },
  ];

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section
      id="faq"
      className="w-full py-16 md:py-20 lg:py-24 bg-gradient-to-br from-green-50/50 via-white to-green-100/30 scroll-mt-[80px]"
    >
      <div className="container px-4 md:px-20 mx-auto max-w-4xl">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
          <div className="space-y-4">
            <div className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700 shadow-sm">
              Preguntas Frecuentes
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-gray-900">
              Resolvemos tus dudas sobre{" "}
              <span className="text-green-600">hidroponía</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 md:text-xl leading-relaxed">
              Encuentra respuestas a las preguntas más comunes sobre cultivos
              hidropónicos y cómo HidroHuertos puede ayudarte.
            </p>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openItems.has(index);

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left flex items-center justify-between py-6 px-6 hover:bg-green-50/50 transition-colors duration-200 focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${index}`}
                >
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-6 h-6 text-green-600 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                <div
                  id={`faq-content-${index}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pt-4 pb-6 bg-gradient-to-br from-green-50/30 to-transparent">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        {/* <div className="mt-12 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                ¿No encuentras tu respuesta?
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Nuestro equipo de expertos está aquí para ayudarte con cualquier
                consulta sobre hidroponía.
              </p>
              <button className="btn bg-gradient-to-r from-green-600 to-green-700 text-white border-0 hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Contactar Soporte
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default FAQ;
