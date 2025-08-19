import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/footer";
import CallToAction from "@/components/layout/callToAction";
import ContactForm from "@/components/contact_us/form";
import Contacts from "@/components/contact_us/contacts";
import Map from "@/components/ui/map";
import Form from "@/components/contact_us/form";
import Head from "next/head";


export const metadata: Metadata = {
  title: "Contáctanos | AFH Metalmecánicos",
  description:
    "Ponte en contacto con AFH Metalmecánicos para consultas, cotizaciones y servicios en procesos metalmecánicos. Atención personalizada para proyectos industriales.",
  keywords: [
    "AFH Metalmecánicos",
    "contacto metalmecánica",
    "servicios metalmecánicos",
    "cotización metalmecánica",
    "fabricación industrial",
    "procesos metalmecánicos Colombia",
  ],
  openGraph: {
    title: "Contáctanos | AFH Metalmecánicos",
    description:
      "Comunícate con AFH Metalmecánicos para soluciones personalizadas en procesos y fabricación metalmecánica.",
    url: "https://www.afhmetalmecanicos.com/contact_us",
    type: "website",
    images: [
      {
        url: "/contact-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Contacto AFH Metalmecánicos",
      },
    ],
  },
};

export default function ContactUsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AFH Metalmecánicos",
    image: "https://www.afhmetalmecanicos.com/logo.png",
    "@id": "https://www.afhmetalmecanicos.com",
    url: "https://www.afhmetalmecanicos.com",
    telephone: "+57-300-000-0000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle 123 #45-67",
      addressLocality: "Bogotá",
      addressRegion: "Cundinamarca",
      postalCode: "110111",
      addressCountry: "CO",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/afhmetalmecanicos",
      "https://www.instagram.com/afhmetalmecanicos",
      "https://www.linkedin.com/company/afhmetalmecanicos",
    ],
  };

  return (
    <div className="font-sans grid grid-rows gap-16">
      <Head>
        {/* SEO básico */}
        <title>AFH Metalmecánicos - Soluciones en Metales de Precisión</title>
        <meta
          name="Contactanos"
          content="Metodos de contacto para AFH Metalmecánicos, incluyendo dirección, teléfono y correo electrónico."
        />
        <meta name="keywords" content="AFH Metalmecánicos, metalmecánica, metales de precisión, ingeniería, fabricación" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.midominio.com/" />

        {/* Favicon */}
        <link rel="icon" href="/logo.png" />

        {/* Open Graph / Redes sociales */}
        <meta property="og:title" content="AFH Metalmecánicos - Soluciones en Metales de Precisión" />
        <meta property="og:description" content="Expertos en metales de precisión para la industria. Conoce nuestros servicios." />
        <meta property="og:image" content="https://www.midominio.com/logo.png" />
        <meta property="og:url" content="https://www.midominio.com/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AFH Metalmecánicos - Soluciones en Metales de Precisión" />
        <meta name="twitter:description" content="Expertos en metales de precisión para la industria. Conoce nuestros servicios." />
        <meta name="twitter:image" content="https://www.midominio.com/logo.png" />
      </Head>
      <Header />

      <section className="px-10 md:px-30 w-full" data-aos="fade-up">
        <h2 className="text-2xl font-bold mb-4">Estamos para ayudarte</h2>
        <p className="mb-4 text-gray-700">
          Si necesitas más información sobre nuestros servicios de procesos
          metalmecánicos o deseas solicitar una cotización, completa el
          siguiente formulario o utiliza nuestros canales de contacto.
        </p>
      </section>
      <div data-aos="zoom-in">
        <ContactForm />
      </div>
      <div data-aos="zoom-in">
        <Contacts />
      </div>
      <div data-aos="zoom-in">
        <Map />
      </div>
      <Footer />

      {/* Datos estructurados */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
}
