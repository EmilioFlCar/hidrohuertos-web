"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm transition-all duration-300">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <span className="text-xl font-bold tracking-tight text-green-600 sm:text-2xl">
            <span className="text-[#44aad8]">Hidro</span>
            <span className="text-hydrogreen">Huertos</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {[
            ["#caracteristicas", "Características"],
            ["#como-funciona", "Cómo funciona"],
            ["#testimonios", "Testimonios"],
            ["#precios", "Precios"],
            ["#faq", "FAQ"],
          ].map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-gray-700 hover:text-hydrogreen transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Auth & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <SignedOut>
            <div className="hidden sm:flex items-center gap-2">
              <SignInButton mode="modal" fallbackRedirectUrl={"/dashboard"}>
                <button className="px-4 py-2 text-sm font-medium text-hydrogreen hover:text-hydrogreen/80 transition-colors">
                  Iniciar sesión
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="px-4 py-2 text-sm font-medium text-white bg-hydrogreen rounded-md hover:bg-hydrogreen/90 transition-colors">
                  Registrarse
                </button>
              </SignUpButton>
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>

          <button
            className="md:hidden text-gray-600 hover:text-hydrogreen focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <IoMdClose size={26} />
            ) : (
              <RxHamburgerMenu size={26} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 py-4 border-t border-gray-100 bg-white animate-fade-in-down">
          <nav className="flex flex-col space-y-3 mb-4">
            {[
              ["#caracteristicas", "Características"],
              ["#como-funciona", "Cómo funciona"],
              ["#testimonios", "Testimonios"],
              ["#precios", "Precios"],
              ["#faq", "FAQ"],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-gray-700 hover:text-hydrogreen transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          <SignedOut>
            <div className="flex flex-col gap-2">
              <SignInButton mode="modal" fallbackRedirectUrl={"/dashboard"}>
                <button className="w-full px-4 py-2 text-sm font-medium text-hydrogreen hover:text-hydrogreen/80 transition-colors">
                  Iniciar sesión
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="w-full px-4 py-2 text-sm font-medium text-white bg-hydrogreen rounded-md hover:bg-hydrogreen/90 transition-colors">
                  Registrarse
                </button>
              </SignUpButton>
            </div>
          </SignedOut>
        </div>
      )}
    </header>
  );
}

export default Header;
