import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/about_us", label: "Sobre nosotros" },
  { href: "/galeria", label: "Galería" },
  { href: "/contact_us", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-[#071525] px-6 py-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="mb-4 flex items-center gap-3">
            <Image
              src="/logo4.png"
              width={48}
              height={48}
              alt="Logo de AFH Metalmecánicos"
              className="rounded-lg"
            />
            <span className="font-public-sans text-xl font-bold">{site.legalName}</span>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-gray-300">
            Montajes metalmecánicos, estructuras, soldadura y mantenimiento
            industrial en Palmira y el Valle del Cauca.
          </p>
          <p className="mt-3 text-sm text-gray-400">NIT {site.nit}</p>
          <div className="mt-5 flex gap-4 text-sm">
            <a
              href={site.sameAs[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#98e73c]"
            >
              Facebook
            </a>
            <a
              href={site.sameAs[1]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#98e73c]"
            >
              Instagram
            </a>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#98e73c]">
            Enlaces
          </h2>
          <ul className="space-y-2 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-gray-300 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#98e73c]">
            Contacto
          </h2>
          <address className="space-y-2 text-sm not-italic text-gray-300">
            <p>
              <a href={`tel:${site.phoneTel}`} className="hover:text-white">
                {site.phoneDisplay}
              </a>
            </p>
            <p>
              <a href={`tel:${site.landlineTel}`} className="hover:text-white">
                {site.landlineDisplay}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </p>
            <p>
              {site.streetAddress}
              <br />
              {site.locality}, {site.region}
              <br />
              Colombia
            </p>
          </address>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-white/10 pt-6 text-sm text-gray-400 md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} {site.legalName} Todos los derechos reservados.</p>
        <p>Palmira, Valle del Cauca, Colombia</p>
      </div>
    </footer>
  );
}
