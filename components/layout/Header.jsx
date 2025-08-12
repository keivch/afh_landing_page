"use client";

import { useState } from "react";
import Image from "next/image";
import ButtonCTA from '../ui/ButtonCTA'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="flex w-full items-center justify-between px-6 py-4 shadow border-b border-gray-100/10">
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
                <span className="cursor-pointer text-black font-normal hover:text-blue-600 font-public-sans">Inicio</span>
                <span className="cursor-pointer text-black font-normal hover:text-blue-600 font-public-sans">Sobre nosotros</span>
                <span className="cursor-pointer text-black font-normal hover:text-blue-600 font-public-sans">Contáctanos</span>
                <ButtonCTA text="Realizar cotización" link="" />
            </nav>

            <button
                className="md:hidden text-black"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                ☰
            </button>

            {isMenuOpen && (
                <div className="absolute top-16 right-0 bg-white shadow-lg rounded-md p-4 flex flex-col gap-4 w-48 md:hidden">
                    <span className="cursor-pointer text-black hover:text-blue-600">Inicio</span>
                    <span className="cursor-pointer text-black hover:text-blue-600">Sobre nosotros</span>
                    <span className="cursor-pointer text-black hover:text-blue-600">Contáctanos</span>
                    <ButtonCTA text="Realizar cotización" link="" />
                </div>
            )}
        </header>
    );
}
