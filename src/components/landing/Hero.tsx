import { FaArrowRight, FaCheck, FaPlay } from "react-icons/fa";
import React from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { SignUpButton } from "@clerk/nextjs";
import Image from "next/image";

function Hero() {
  return (
    <section className="w-full py-24 md:py-32 xl:py-24 bg-gradient-to-br from-white via-green-50/30 to-green-100/20">
      <div className="container px-4 md:px-20 mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-6xl xl:text-6xl/none">
                Cultiva tus propios alimentos en casa con hidroponía
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-[600px]">
                HidroHuertos te ayuda a cultivar alimentos frescos y saludables
                sin tierra, ahorrando agua y espacio. Monitorea tus cultivos,
                recibe recordatorios y aprende con nuestra comunidad.
              </p>
            </div>

            <div className="flex flex-row gap-2">
              {/* <SignUpButton mode="modal">
                <button className="btn px-4 py-2 text-sm font-medium text-white bg-hydrogreen rounded-md hover:bg-hydrogreen/90 transition-colors">
                  Registrarse
                </button>
              </SignUpButton> */}
              <Link href="#como-funciona">
                <button className="btn">
                  ¿Cómo funciona?
                  <FaArrowRight className="ml-2 h-4 w-4" />
                </button>
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <FaCheck className="h-4 w-4 text-green-600" />
                <span>Sin tierra</span>
              </div>
              <div className="flex items-center gap-1">
                <FaCheck className="h-4 w-4 text-green-600" />
                <span>90% menos agua</span>
              </div>
              <div className="flex items-center gap-1">
                <FaCheck className="h-4 w-4 text-green-600" />
                <span>Cultivo 40% más rápido</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={"/torre.png"}
              alt="Cultivo hidropónico"
              width={400}
              height={400}
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
