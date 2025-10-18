"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import ButtonCTA from "../ui/ButtonCTA";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-6 text-[#98e73c]"
    >
      <path
        fillRule="evenodd"
        d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <header className="flex w-full max-w-full bg-[#0b2239] overflow-x-hidden items-center justify-between px-6 py-4 shadow border-b border-gray-100/10">
      <div className="flex items-center gap-4">
        <Image
          src="/logo4.png"
          width={80}
          height={80}
          alt="Logo de la empresa"
          className="rounded-lg"
        />
        <span className="font-bold text-xl text-white font-public-sans">
          AFH Metalmecánicos
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-6">
        <Link
          href={{
            pathname: "/",
            query: { name: "home" },
          }}
          className="cursor pointer transition-transform duration-100 hover:-translate-y-1"
        >
          <span className="cursor-pointer text-white font-normal hover:text-[#98e73c] font-public-sans transition-transform duration-100 hover:-translate-y-1">
            Inicio
          </span>
        </Link>
        <Link
          href={{
            pathname: "/about_us",
            query: { name: "about_us" },
          }}
          className="cursor pointer transition-transform duration-100 hover:-translate-y-1"
        >
          <span className="cursor-pointer text-white font-normal hover:text-[#98e73c] font-public-sans transition-transform duration-100 hover:-translate-y-1">
            Sobre nosotros
          </span>
        </Link>
        <Link
          href={{
            pathname: "/galeria",
            query: { name: "galeria" },
          }}
          className="cursor pointer transition-transform duration-100 hover:-translate-y-1"
        >
          <span className="cursor-pointer text-white font-normal hover:text-[#98e73c] font-public-sans transition-transform duration-100 hover:-translate-y-1">
            Nuestra Galería
          </span>
        </Link>

        <Link
          href={{
            pathname: "/contact_us",
            query: { name: "contact_us" },
          }}
          className="cursor pointer transition-transform duration-100 hover:-translate-y-1"
        >
          <span className="text-white font-normal hover:text-[#98e73c] font-public-sans transition-transform duration-100 hover:-translate-y-1">
            Contáctanos
          </span>
        </Link>
        <ButtonCTA text="Realizar cotización" link="/contact_us" />
      </nav>

      <button
        className="md:hidden text-black"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {menuIcon}
      </button>

      {isMenuOpen && (
        <div className="absolute top-20 right-4 bg-[#0b2239] shadow-xl rounded-lg p-6 flex flex-col gap-4 w-56 max-w-[90vw] md:hidden z-50 border border-gray-600">

          <Link
            href={{
              pathname: "/",
              query: { name: "home" },
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="text-white font-normal hover:text-[#98e73c] font-public-sans transition-colors duration-200 block py-2">
              Inicio
            </span>
          </Link>
          <Link
            href={{
              pathname: "/about_us",
              query: { name: "about_us" },
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="text-white font-normal hover:text-[#98e73c] font-public-sans transition-colors duration-200 block py-2">
              Sobre nosotros
            </span>
          </Link>
          <Link
            href={{
              pathname: "/contact_us",
              query: { name: "contact_us" },
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="text-white font-normal hover:text-[#98e73c] font-public-sans transition-colors duration-200 block py-2">
              Contáctanos
            </span>
          </Link>
          <div className="pt-2">
            <ButtonCTA text="Cotización" link="/contact_us" />
          </div>
        </div>
      )}
    </header>
  );
}
