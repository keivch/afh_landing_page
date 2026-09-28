"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Factory,
  HardHat,
  MapPin,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/footer";
import CallToAction from "@/components/layout/callToAction";
import ClientsComponent from "@/components/home/ClientsComponent";
import PortfolioComponent from "@/components/home/PortfolioComponent";
import FaqSection from "@/components/home/FaqSection";
import { cities, services, site } from "@/lib/site";

const serviceIcons = [HardHat, Wrench, Building2, Factory, ShieldCheck, Factory];

const steps = [
  {
    step: "01",
    title: "Cuéntanos el proyecto",
    text: "Alcance, sitio, plazos y referencias. Con eso armamos la visita.",
  },
  {
    step: "02",
    title: "Visita y cotización",
    text: "Revisamos la obra y te entregamos una propuesta clara, sin letra pequeña.",
  },
  {
    step: "03",
    title: "Fabricación y montaje",
    text: "Producimos en taller y montamos en planta con el equipo de AFH.",
  },
  {
    step: "04",
    title: "Entrega y soporte",
    text: "Cerramos el trabajo según especificación y seguimos disponibles para mantenimiento.",
  },
];

export default function HomeClient() {
  return (
    <>
      <Header />
      <main>
        <section className="relative isolate min-h-[88vh] w-full overflow-hidden bg-[#0b2239]">
          <Image
            src="/afh1.jpeg"
            alt="Montaje de estructura metálica realizado por AFH Metalmecánicos en el Valle del Cauca"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071525]/95 via-[#0b2239]/85 to-[#0b2239]/35" />
          <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-6 pb-16 pt-28 md:pb-20">
            <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#98e73c]">
              <MapPin className="size-3.5" aria-hidden />
              Palmira · Valle del Cauca · Desde 2017
            </p>
            <h1 className="max-w-4xl font-public-sans text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Montajes y mantenimiento industrial para la industria del Valle
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg">
              {site.legalName} fabrica, monta y mantiene estructuras, equipos y
              soluciones metalmecánicas en {site.locality}, Cali, Yumbo, Jamundí
              y Candelaria.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact_us"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#98e73c] px-6 py-3 font-semibold text-[#0b2239] shadow-lg transition hover:bg-[#81d323]"
              >
                Solicitar cotización
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-white/70 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-[#0b2239]"
              >
                Escribir por WhatsApp
              </a>
            </div>
            <dl className="mt-12 grid max-w-3xl grid-cols-3 gap-3 border-t border-white/15 pt-6 text-white">
              <div>
                <dt className="text-[11px] uppercase tracking-wider text-gray-300 sm:text-xs">Experiencia</dt>
                <dd className="mt-1 text-base font-bold leading-tight sm:text-2xl">Desde 2017</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-wider text-gray-300 sm:text-xs">Cobertura</dt>
                <dd className="mt-1 text-base font-bold leading-tight sm:text-2xl">Valle del Cauca</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-wider text-gray-300 sm:text-xs">Atención</dt>
                <dd className="mt-1 text-base font-bold leading-tight sm:text-2xl">Lun a sáb</dd>
              </div>
            </dl>
          </div>
        </section>

        <section id="servicios" className="w-full bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5f8f18]">
                Servicios
              </p>
              <h2 className="mt-3 font-public-sans text-3xl font-bold text-[#0b2239] md:text-4xl">
                Metalmecánica para planta, obra y mantenimiento
              </h2>
              <p className="mt-4 leading-relaxed text-gray-600">
                Acompañamos a ingenios, plantas de alimentos y constructoras
                desde la fabricación en taller hasta el montaje en sitio.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = serviceIcons[index] ?? Wrench;
                return (
                  <article
                    key={service.name}
                    className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#98e73c] hover:shadow-lg"
                  >
                    <div className="flex size-11 items-center justify-center rounded-xl bg-[#0b2239] text-[#98e73c]">
                      <Icon className="size-5" aria-hidden />
                    </div>
                    <h3 className="mt-5 font-public-sans text-xl font-semibold text-[#0b2239]">
                      {service.name}
                    </h3>
                    <p className="mt-2 leading-relaxed text-gray-600">{service.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="w-full bg-[#f4f7f2] py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/estructura.jpg"
                alt="Estructura metálica fabricada e instalada por AFH Metalmecánicos"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5f8f18]">
                Cómo trabajamos
              </p>
              <h2 className="mt-3 font-public-sans text-3xl font-bold text-[#0b2239] md:text-4xl">
                Un proceso corto, de la visita a la entrega
              </h2>
              <ol className="mt-8 space-y-6">
                {steps.map((item) => (
                  <li key={item.step} className="flex gap-4">
                    <span className="font-public-sans text-lg font-bold text-[#98e73c]">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="font-semibold text-[#0b2239]">{item.title}</h3>
                      <p className="mt-1 text-gray-600">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <ClientsComponent />
        <PortfolioComponent />

        <section className="w-full bg-[#0b2239] py-16 text-white md:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="font-public-sans text-3xl font-bold md:text-4xl">
              Cobertura en el Valle del Cauca
            </h2>
            <p className="mt-4 max-w-2xl text-gray-300">
              El taller está en Palmira y los montajes salen a planta en los
              municipios donde opera la industria de la región.
            </p>
            <ul className="mt-8 flex flex-wrap gap-3">
              {cities.map((city) => (
                <li
                  key={city}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium"
                >
                  {city}
                </li>
              ))}
              <li className="rounded-full bg-[#98e73c] px-4 py-2 text-sm font-semibold text-[#0b2239]">
                Todo el Valle del Cauca
              </li>
            </ul>
          </div>
        </section>

        <FaqSection />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
