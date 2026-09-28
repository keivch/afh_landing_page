import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/site";
import CallToAction from "@/components/layout/callToAction";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/Header";
import AboutUsComponent from "@/components/about_us/companyInfo";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Conoce AFH Metalmecánicos S.A.S., empresa de montajes y mantenimiento industrial en Palmira, Valle del Cauca, desde 2017.",
  alternates: {
    canonical: "/about_us",
  },
  openGraph: {
    title: "Sobre nosotros | AFH Metalmecánicos",
    description:
      "Historia, misión y valores de AFH Metalmecánicos, especialistas en montajes industriales en Palmira.",
    url: "/about_us",
    locale: "es_CO",
    type: "website",
  },
};

const values = [
  {
    image: "/flexibilidad.svg",
    title: "Flexibilidad",
    description:
      "Nos adaptamos al cambio del proyecto para cumplir lo que el cliente necesita.",
  },
  {
    image: "/respeto.svg",
    title: "Respeto",
    description: "Tratamos a las personas como nos gusta ser tratados.",
  },
  {
    image: "/tierra.svg",
    title: "Cuidado del entorno",
    description:
      "El avance de la obra tiene que convivir con el cuidado de los recursos.",
  },
  {
    image: "/transparencia.svg",
    title: "Transparencia",
    description: "Lo que hacemos en obra respalda lo que prometemos en la cotización.",
  },
  {
    image: "/responsabilidad.svg",
    title: "Responsabilidad",
    description:
      "Cada persona del equipo responde por su parte en la calidad del trabajo.",
  },
  {
    image: "/disponibilidad.svg",
    title: "Disponibilidad",
    description: "Atendemos los imprevistos de planta con disposición y seguimiento.",
  },
];

const objectives = [
  "Mantener una empresa financieramente estable y rentable.",
  "Sostener las ventas actuales y hacerlas crecer en los próximos cinco años.",
  "Conservar la infraestructura necesaria para entregar productos y servicios conformes.",
  "Mantener un equipo calificado, comprometido y motivado.",
];

const preview = [
  {
    src: "/galeria/fachada.jpg",
    alt: "Barandas de vidrio y estructura metálica en una obra residencial",
    title: "Barandas y cerramientos",
  },
  {
    src: "/galeria/vigas.jpg",
    alt: "Pérgola metálica y celosías instaladas en una terraza",
    title: "Pérgolas y celosías",
  },
  {
    src: "/estructura.jpg",
    alt: "Estructura metálica de techo para uso industrial",
    title: "Estructuras",
  },
];

export default function AboutUs() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Inicio", path: "/" },
              { name: "Sobre nosotros", path: "/about_us" },
            ])
          ).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main>
        <section className="bg-[#0b2239] text-white">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#98e73c]">
              La empresa
            </p>
            <h1 className="mt-3 max-w-3xl font-public-sans text-4xl font-bold leading-tight md:text-5xl">
              Sobre AFH Metalmecánicos
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-300">
              Montajes, estructuras y mantenimiento industrial desde Palmira
              para el Valle del Cauca.
            </p>
          </div>
        </section>

        <AboutUsComponent />

        <section className="w-full bg-[#f4f7f2] py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5f8f18]">
              Valores
            </p>
            <h2 className="mt-3 font-public-sans text-3xl font-bold text-[#0b2239] md:text-4xl">
              Cómo trabajamos con cada cliente
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value) => (
                <article
                  key={value.title}
                  className="rounded-2xl border border-gray-200 bg-white p-6"
                >
                  <img src={value.image} alt="" className="size-12" />
                  <h3 className="mt-4 font-public-sans text-xl font-semibold text-[#0b2239]">
                    {value.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-gray-600">{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full bg-white py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5f8f18]">
                Calidad
              </p>
              <h2 className="mt-3 font-public-sans text-3xl font-bold text-[#0b2239] md:text-4xl">
                Objetivos que sostienen la operación
              </h2>
            </div>
            <ol className="space-y-4">
              {objectives.map((objective, index) => (
                <li
                  key={objective}
                  className="flex gap-4 rounded-2xl border border-gray-200 p-5"
                >
                  <span className="font-public-sans text-lg font-bold text-[#5f8f18]">
                    0{index + 1}
                  </span>
                  <p className="leading-relaxed text-gray-700">{objective}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="w-full bg-[#f7f8fa] py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5f8f18]">
                  Trabajos
                </p>
                <h2 className="mt-3 font-public-sans text-3xl font-bold text-[#0b2239] md:text-4xl">
                  Una muestra de lo que sale a obra
                </h2>
              </div>
              <Link
                href="/galeria"
                className="font-semibold text-[#0b2239] underline-offset-4 hover:underline"
              >
                Abrir la galería
              </Link>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {preview.map((item) => (
                <Link key={item.src} href="/galeria" className="group block">
                  <div className="relative h-64 overflow-hidden rounded-2xl">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-3 font-semibold text-[#0b2239]">{item.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
