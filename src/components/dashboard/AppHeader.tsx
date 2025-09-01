"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 shadow bg-white backdrop-blur supports-[backdrop-filter]:bg-white/40">
      <div className="container flex h-16 items-center justify-between  sm:px-6">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={40} height={40} />
          <span className="text-xl sm:text-2xl font-bold text-green-600">
            <span className="text-[#44aad8]">Hidro</span>
            <span className="text-hydrogreen">Huertos</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/dashboard"
            className="text-sm font-medium text-gray-800 hover:text-hydrogreen"
          >
            Dashboard
          </Link>
          <Link
            href="/cultivos"
            className="text-sm font-medium text-gray-800 hover:text-hydrogreen"
          >
            Mis cultivos
          </Link>
          {/* <Link
            href="/marketplace"
            className="text-sm font-medium text-gray-800 hover:text-hydrogreen"
          >
            Marketplace
          </Link> */}
        </nav>

        <div className="flex items-center gap-4">
          <UserButton />
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
        <div className="md:hidden py-4 px-6 border-t border-gray-100 bg-white">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/dashboard"
              className="text-sm font-medium text-gray-600 hover:text-hydrogreen py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              href="/cultivos"
              className="text-sm font-medium text-gray-800 hover:text-hydrogreen py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Mis cultivos
            </Link>
            <Link
              href="/marketplace"
              className="text-sm font-medium text-gray-800 hover:text-hydrogreen py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Marketplace
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
