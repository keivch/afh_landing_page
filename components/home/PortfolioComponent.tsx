import Image from "next/image";

const projects = [
  {
    title: "Chimeneas industriales",
    description: "Construcción y montaje de chimeneas para planta industrial.",
    image: "/chimenea.jpg",
    alt: "Chimenea industrial fabricada y montada por AFH Metalmecánicos",
  },
  {
    title: "Cabezales para ingenios",
    description: "Cabezales a la medida para la operación de ingenios azucareros.",
    image: "/industrial.jpg",
    alt: "Cabezal metálico fabricado para un ingenio azucarero",
  },
  {
    title: "Estructuras para techos",
    description: "Estructura metálica fabricada en taller y montada en obra.",
    image: "/estructura.jpg",
    alt: "Estructura metálica de techo instalada en una planta industrial",
  },
  {
    title: "Rejillas metálicas",
    description: "Rejillas para pisos, pasarelas y zonas de proceso.",
    image: "/rejillas.jpg",
    alt: "Rejillas metálicas industriales fabricadas por AFH Metalmecánicos",
  },
  {
    title: "Pisos metalmecánicos",
    description: "Pisos y plataformas metálicas para circulación en planta.",
    image: "/pisos.jpg",
    alt: "Piso metalmecánico instalado en una instalación industrial",
  },
  {
    title: "Sinfines",
    description: "Sinfines fabricados según el material y el caudal de cada proceso.",
    image: "/sinfin.jpg",
    alt: "Sinfín metálico fabricado para transporte de material en planta",
  },
];

export default function PortfolioComponent() {
  return (
    <section id="portafolio" className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5f8f18]">
            Portafolio
          </p>
          <h2 className="mt-3 font-public-sans text-3xl font-bold text-[#0b2239] md:text-4xl">
            Trabajos de montaje y fabricación
          </h2>
          <p className="mt-4 text-gray-600">
            Una muestra de estructuras, equipos y elementos que salen del taller
            hacia la planta.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <div className="relative h-56">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-public-sans text-lg font-semibold text-[#0b2239]">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <a href="/galeria" className="font-semibold text-[#0b2239] underline-offset-4 hover:underline">
            Ver la galería completa
          </a>
        </div>
      </div>
    </section>
  );
}
