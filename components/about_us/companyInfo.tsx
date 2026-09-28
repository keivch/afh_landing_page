import Image from "next/image";
import Link from "next/link";

const pillars = [
  {
    title: "Misión",
    text: "Somos el aliado estratégico de nuestros clientes entregando montajes integrales y servicios de mantenimiento industrial acordes a sus especificaciones, con un equipo comprometido con la excelencia, el medio ambiente y el mejoramiento de la calidad, la seguridad y la salud en el trabajo.",
  },
  {
    title: "Visión",
    text: "En 2027, AFH Metalmecánicos S.A.S. busca ser reconocida en Colombia y Latinoamérica entre las mejores empresas de montajes integrales y mantenimiento industrial.",
  },
  {
    title: "Política de calidad",
    text: "Entregamos montajes y mantenimiento según la especificación del cliente. El mejoramiento continuo del sistema de gestión y el cumplimiento con nuestros grupos de interés sostienen ese compromiso.",
  },
];

export default function AboutUsComponent() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5f8f18]">
            Quiénes somos
          </p>
          <h2 className="mt-3 font-public-sans text-3xl font-bold text-[#0b2239] md:text-4xl">
            Taller en Palmira, montaje en la planta del cliente
          </h2>
          <p className="mt-4 leading-relaxed text-gray-600">
            AFH Metalmecánicos S.A.S. fabrica, monta y mantiene estructuras y
            equipos para ingenios, plantas de alimentos, constructoras y obras
            civiles del Valle del Cauca. El trabajo sale del taller y se entrega
            instalado, según la especificación de cada proyecto.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            La empresa está constituida desde 2017, con sede en la Carrera 13A
            #40-37 de Palmira.
          </p>
          <Link
            href="/galeria"
            className="mt-6 inline-flex font-semibold text-[#0b2239] underline-offset-4 hover:underline"
          >
            Ver trabajos realizados
          </Link>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="/estructura.jpg"
            alt="Estructura metálica fabricada e instalada por AFH Metalmecánicos"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mx-auto mt-14 grid max-w-7xl gap-5 px-6 md:grid-cols-3">
        {pillars.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-gray-200 bg-[#f7f8fa] p-6"
          >
            <h3 className="font-public-sans text-xl font-semibold text-[#0b2239]">
              {item.title}
            </h3>
            <p className="mt-3 leading-relaxed text-gray-600">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
