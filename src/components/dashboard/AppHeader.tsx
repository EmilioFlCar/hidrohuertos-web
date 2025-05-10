import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
  return (
    <header className="sticky top-0 z-10 border-b bg-white backdrop-blur supports-[backdrop-filter]:bg-white/40">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2 m-10">
          <Image src="/logo.png" alt="logo" width={40} height={40} />
          <span className=" text-2xl font-bold text-green-600">
            <span className="text-[#44aad8]">Hidro</span>
            <span className="text-hydrogreen">Huertos</span>
          </span>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/dashboard"
              className="text-sm font-medium text-gray-600 hover:text-hydrogreen"
            >
              Dashboard
            </Link>
            <Link
              href="/cultivos"
              className="text-sm font-medium text-gray-800 hover:text-hydrogreen"
            >
              Mis cultivos
            </Link>
            <Link
              href="/marketplace"
              className="text-sm font-medium text-gray-800 hover:text-hydrogreen"
            >
              Marketplace
            </Link>
          </nav>
        </div>
        <UserButton />
      </div>
    </header>
  );
}

export default Header;
