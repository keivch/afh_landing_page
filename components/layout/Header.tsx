"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import { site } from "@/lib/site";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/about_us", label: "Sobre nosotros" },
  { href: "/galeria", label: "Galería" },
  { href: "/contact_us", label: "Contacto" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      <div className="hidden bg-[#071525] text-sm text-gray-300 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <p>
            {site.streetAddress}, {site.locality}, {site.region}
          </p>
          <a href={`tel:${site.phoneTel}`} className="inline-flex items-center gap-2 hover:text-[#98e73c]">
            <Phone className="size-3.5" aria-hidden />
            {site.phoneDisplay}
          </a>
        </div>
      </div>
      <header className="border-b border-white/10 bg-[#0b2239]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo4.png"
              width={64}
              height={64}
              alt="Logo de AFH Metalmecánicos"
              className="rounded-lg"
              priority
            />
            <span className="font-public-sans text-lg font-bold text-white">
              AFH Metalmecánicos
            </span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Principal">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-public-sans text-sm text-white transition hover:text-[#98e73c]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact_us"
              className="rounded-lg bg-[#98e73c] px-4 py-2 text-sm font-semibold text-[#0b2239] transition hover:bg-[#81d323]"
            >
              Cotizar
            </Link>
          </nav>

          <button
            type="button"
            className="text-[#98e73c] md:hidden"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav
            className="flex flex-col gap-1 border-t border-white/10 px-6 py-4 md:hidden"
            aria-label="Móvil"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="py-2 text-white hover:text-[#98e73c]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact_us"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 w-fit rounded-lg bg-[#98e73c] px-4 py-2 text-sm font-semibold text-[#0b2239]"
            >
              Cotizar
            </Link>
          </nav>
        )}
      </header>
    </div>
  );
}
