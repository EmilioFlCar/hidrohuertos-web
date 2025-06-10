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
    <header className="sticky top-0 z-10 border-b bg-white backdrop-blur supports-[backdrop-filter]:bg-white/40">
      <div className="container flex h-16 items-center justify-between py-4 px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={40} height={40} />
          <span className="text-xl sm:text-2xl font-bold text-green-600">
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
          <SignedOut>
            <div className="hidden sm:block">
              <SignInButton mode="modal" fallbackRedirectUrl={"/dashboard"} />
            </div>
            <div className="hidden sm:block">
              <SignUpButton mode="modal" />
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>

          <button
            className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <IoMdClose size={24} />
            ) : (
              <RxHamburgerMenu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4 px-4 border-t border-gray-100 bg-white">
          <nav className="flex flex-col space-y-4 mb-4">
            <Link
              href="#caracteristicas"
              className="text-sm font-medium text-gray-600 hover:text-hydrogreen py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Características
            </Link>
            <Link
              href="#como-funciona"
              className="text-sm font-medium text-gray-800 hover:text-hydrogreen py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cómo funciona
            </Link>
            <Link
              href="#testimonios"
              className="text-sm font-medium text-gray-800 hover:text-hydrogreen py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonios
            </Link>
            <Link
              href="#precios"
              className="text-sm font-medium text-gray-800 hover:text-hydrogreen py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Precios
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-gray-800 hover:text-hydrogreen py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
          </nav>

          <SignedOut>
            <div className="flex flex-col space-y-2">
              <div className="w-full">
                <SignInButton mode="modal" fallbackRedirectUrl={"/dashboard"} />
              </div>
              <div className="w-full">
                <SignUpButton mode="modal" />
              </div>
            </div>
          </SignedOut>
        </div>
      )}
    </header>
  );
}

export default Header;
