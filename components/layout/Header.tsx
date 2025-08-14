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
      className="size-6"
    >
      <path
        fillRule="evenodd"
        d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <header className="flex w-full max-w-full overflow-x-hidden items-center justify-between px-6 py-4 shadow border-b border-gray-100/10">
      <div className="flex items-center gap-3">
        <Image
          src="/logo.png"
          width={50}
          height={50}
          alt="Logo de la empresa"
        />
        <span className="font-bold text-lg text-black font-public-sans">
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
          <span className="cursor-pointer text-black font-normal hover:text-blue-600 font-public-sans transition-transform duration-100 hover:-translate-y-1">
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
          <span className="cursor-pointer text-black font-normal hover:text-blue-600 font-public-sans transition-transform duration-100 hover:-translate-y-1">
            Sobre nosotros
          </span>
        </Link>

        <Link
          href={{
            pathname: "/contact_us",
            query: { name: "contact_us" },
          }}
          className="cursor pointer transition-transform duration-100 hover:-translate-y-1"
        >
          <span className="text-black font-normal hover:text-blue-600 font-public-sans transition-transform duration-100 hover:-translate-y-1">
            Contáctanos
          </span>
        </Link>
        <ButtonCTA text="Realizar cotización" link="" />
      </nav>

      <button
        className="md:hidden text-black"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {menuIcon}
      </button>

      {isMenuOpen && (
        <div className="absolute top-16 right-0 bg-white shadow-lg rounded-md p-4 flex flex-col gap-4 w-48 max-w-[90vw] md:hidden z-50">

          <Link
            href={{
              pathname: "/",
              query: { name: "home" },
            }}
          >
            <span className="text-black font-normal hover:text-blue-600 font-public-sans transition-transform duration-100 hover:-translate-y-1">
              Inicio
            </span>
          </Link>
          <Link
            href={{
              pathname: "/about_us",
              query: { name: "about_us" },
            }}
          >
            <span className="text-black font-normal hover:text-blue-600 font-public-sans transition-transform duration-100 hover:-translate-y-1">
              Sobre nosotros
            </span>
          </Link>
          <Link
            href={{
              pathname: "/contact_us",
              query: { name: "contact_us" },
            }}
          >
            <span className="text-black font-normal hover:text-blue-600 font-public-sans transition-transform duration-100 hover:-translate-y-1">
              Contáctanos
            </span>
          </Link>
          <ButtonCTA text="Cotización" link="/contact_us" />
        </div>
      )}
    </header>
  );
}
