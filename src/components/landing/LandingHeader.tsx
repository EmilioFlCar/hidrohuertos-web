import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

function Header() {
  return (
    <header className="sticky top-0 z-10 border-b bg-white backdrop-blur supports-[backdrop-filter]:bg-white/40">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={40} height={40} />
          <span className="ml-3 text-2xl font-bold text-green-600">
            <span className="text-[#44aad8]">Hidro</span>
            <span className="text-hydrogreen">Huertos</span>
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#caracteristicas"
            className="text-sm font-medium text-gray-600 hover:text-hydrogreen"
          >
            Características
          </Link>
          <Link
            href="#como-funciona"
            className="text-sm font-medium text-gray-800 hover:text-hydrogreen"
          >
            Cómo funciona
          </Link>
          <Link
            href="#testimonios"
            className="text-sm font-medium text-gray-800 hover:text-hydrogreen"
          >
            Testimonios
          </Link>
          <Link
            href="#precios"
            className="text-sm font-medium text-gray-800 hover:text-hydrogreen"
          >
            Precios
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium text-gray-800 hover:text-hydrogreen"
          >
            FAQ
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          {/* <Link href="/dashboard" className="text-sm font-medium text-gray-800 hover:text-hydrogreen">
          Iniciar sesión
        </Link> */}
          <SignedOut>
            <SignInButton mode="modal" fallbackRedirectUrl={"/dashboard"} />
            <SignUpButton mode="modal" />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {/* <RegisterModal /> */}
        </div>
      </div>
    </header>
    // <header className="bg-white shadow-sm fixed w-full z-50">
    //   <div className="container mx-auto px-4">
    //     <div className="flex items-center justify-between h-20">
    //       <a href="/" className="flex items-center">
    //         <Image src="/logo.png" alt="logo" width={48} height={48} />
    //         <span className="ml-3 text-2xl font-bold text-green-600">
    //           <span className="text-[#44aad8]">Hidro</span>
    //           <span className="text-hydrogreen">Huertos</span>
    //         </span>
    //       </a>

    //       <nav className="hidden md:flex items-center space-x-8">
    //         <a
    //           href="#curso"
    //           className="text-gray-600 hover:text-green-600 font-medium"
    //         >
    //           Curso
    //         </a>
    //         <a
    //           href="#como-funciona"
    //           className="text-gray-600 hover:text-green-600 font-medium"
    //         >
    //           Nuestra app
    //         </a>
    //         <a
    //           href="#beneficios"
    //           className="text-gray-600 hover:text-green-600 font-medium"
    //         >
    //           Beneficios
    //         </a>
    //         {/* <a
    //           href="#testimonios"
    //           className="text-gray-600 hover:text-green-600 font-medium"
    //         >
    //           Testimonios
    //         </a> */}
    //         {/* <a href="#contacto" className="text-gray-600 hover:text-green-600 font-medium">Contacto</a>  */}
    //       </nav>

    //       <div className="flex items-center">
    //         <a
    //           href="#curso"
    //           className="hidden md:inline-flex items-center justify-center bg-green-600 text-white font-medium px-5 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors"
    //         >
    //           Curso gratuito
    //         </a>
    //         <button
    //           id="mobile-menu-button"
    //           className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
    //         >
    //           <RxHamburgerMenu className="w-6 h-6" />
    //         </button>
    //       </div>
    //     </div>

    //     {/* <!-- Mobile menu (hidden by default) --> */}
    //     <div id="mobile-menu" className="md:hidden hidden pb-4">
    //       <a
    //         href="#curso"
    //         className="block py-2 text-gray-600 hover:text-green-600 font-medium"
    //       >
    //         Curso
    //       </a>
    //       <a
    //         href="#como-funciona"
    //         className="block py-2 text-gray-600 hover:text-green-600 font-medium"
    //       >
    //         ¿Cómo funciona?
    //       </a>
    //       <a
    //         href="#beneficios"
    //         className="block py-2 text-gray-600 hover:text-green-600 font-medium"
    //       >
    //         Beneficios
    //       </a>
    //       <a
    //         href="#testimonios"
    //         className="block py-2 text-gray-600 hover:text-green-600 font-medium"
    //       >
    //         Testimonios
    //       </a>
    //       {/* <!-- <a href="#contacto" className="block py-2 text-gray-600 hover:text-green-600 font-medium">Contacto</a> --> */}
    //       <a
    //         href="#curso"
    //         className="mt-2 inline-flex items-center justify-center bg-green-600 text-white font-medium px-5 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors"
    //       >
    //         Curso gratuito
    //       </a>
    //     </div>
    //   </div>
    // </header>
  );
}

export default Header;
