import type { Metadata } from "next";
import CallToAction from "@/components/layout/callToAction";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/Header";
import Card from "@/components/ui/Card";
import AboutUsComponent from "@/components/about_us/companyInfo";
import Image from "next/image";
import ImageCarousel from "@/components/layout/carrrousel";


export const metadata: Metadata = {
  title: "Sobre Nosotros | AFH Metalmecánicos",
  description:
    "En AFH Metalmecánicos nos especializamos en procesos metalmecánicos de alta precisión, ofreciendo calidad, innovación y soluciones personalizadas para la industria.",
  keywords: [
    "procesos metalmecánicos",
    "mecanizado de precisión",
    "soldadura industrial",
    "fabricación metalmecánica",
    "AFH Metalmecánicos",
  ],
  openGraph: {
    title: "Sobre Nosotros | AFH Metalmecánicos",
    description:
      "Conoce más sobre AFH Metalmecánicos, nuestra historia, valores y compromiso con la industria metalmecánica.",
    url: "https://tudominio.com/sobre-nosotros",
    siteName: "AFH Metalmecánicos",
    images: [
      {
        url: "/metal.jpg",
        width: 1200,
        height: 630,
        alt: "Procesos metalmecánicos de alta precisión en AFH Metalmecánicos",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
};

export default function aboutUs() {
  const values = [
    {
      icon: "",
      image: "/flexibilidad.svg",
      title: "Flexibilidad",
      description:
        "Nos adaptamos a los cambios para garantizar el éxito de nuestros clientes y de nuestra empresa.",
    },
    {
      icon: "",
      image: "/respeto.svg",
      title: "Respeto",
      description:
        "Regla de oro: tratamos a los demás como nos gusta ser tratados.",
    },
    {
      icon: "",
      image: "/tierra.svg",
      title: "Preservación del medio ambiente",
      description:
        "El mundo es nuestro hogar. No hay verdadero progreso si no cuidamos nuestros recursos naturales.",
    },
    {
      icon: "",
      image: "/transparencia.svg",
      title: "Transparencia",
      description: "Nuestro accionar respalda nuestra filosofía de servicio.",
    },
    {
      icon: "",
      image: "/responsabilidad.svg",
      title: "Responsabilidad",
      description:
        "Somos conscientes del importante papel que cada integrante tiene dentro de la organización. ",
    },
    {
      icon: "",
      image: "/disponibilidad.svg",
      title: "Disponibilidad",
      description:
        "¡Nos encanta lo que hacemos y atendemos los contratiempos con la mejor actitud!",
    },
  ];

  const values2 = [
    {
      icon: "",
      image: "",
      title: "Mantener una empresa financieramente estable y rentable.",
      description: "",
    },
    {
      icon: "",
      image: "",
      title:
        "Mantener las ventas actuales y aumentarlas porcentualmente en los próximos 5 años",
      description: "",
    },
    {
      icon: "",
      image: "",
      title:
        "Mantener la infraestructura necesaria para la operación de nuestros procesos y lograr la conformidad de los productos y servicios entregados",
      description: "",
    },
    {
      icon: "",
      image: "",
      title:
        "Mantener un grupo de trabajo calificado, comprometido y motivado.",
      description: "",
    },
  ];
  return (
    <>
      {/* Datos estructurados para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "AFH Metalmecánicos",
            url: "https://tudominio.com",
            logo: "https://tudominio.com/logo.png",
            description:
              "Empresa especializada en procesos metalmecánicos de alta precisión.",
            sameAs: [
              "https://www.facebook.com/afhmetalmecanicos",
              "https://www.linkedin.com/company/afhmetalmecanicos",
            ],
          }),
        }}
      />

      <Header />

      <main className="font-sans grid grid-rows items-center justify-items-center gap-16">
        <section className="m-5" data-aos="zoom-in">
          <h1 className="text-3xl font-bold text-center mb-6">
            Sobre AFH Metalmecánicos
          </h1>
          <AboutUsComponent />
        </section>
        <section className="m-5" data-aos="zoom-in">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Objetivos estratégicos de calidad
          </h2>
          <Card items={values2} title={""} />
        </section>

        <section className="w-full px-10 md:px-35" data-aos="fade-up">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Nuestra Galería
          </h2>
          <ImageCarousel/>
        </section>

        <section className="m-5" data-aos="zoom-in">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Nuestros Valores
          </h2>
          <Card items={values} title={""} />
        </section>

        <section className="m-3" data-aos="zoom-in">
          <CallToAction />
        </section>
      </main>
      <Footer />
    </>
  );
}
