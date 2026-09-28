import Link from "next/link";
import { site } from "@/lib/site";

export default function CallToAction() {
  return (
    <section className="w-full bg-[#0b2239] text-white">
      <div className="mx-auto max-w-4xl px-6 py-16 text-center md:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#98e73c]">
          Cotizaciones
        </p>
        <h2 className="mt-3 font-public-sans text-3xl font-bold md:text-5xl">
          ¿Listo para cotizar tu proyecto?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-300">
          Cuéntanos el alcance, el sitio y los plazos. Respondemos con una
          propuesta para montaje, fabricación o mantenimiento industrial.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/contact_us"
            className="inline-flex items-center justify-center rounded-lg bg-[#98e73c] px-6 py-3 font-semibold text-[#0b2239] transition hover:bg-[#81d323]"
          >
            Solicitar cotización
          </Link>
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-[#0b2239]"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
