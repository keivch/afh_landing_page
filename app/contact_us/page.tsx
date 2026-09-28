import type { Metadata } from "next";
import { breadcrumbJsonLd } from "@/lib/site";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/footer";
import ContactForm from "@/components/contact_us/form";
import Contacts from "@/components/contact_us/contacts";
import Map from "@/components/ui/map";


export const metadata: Metadata = {
  title: "Contacto y cotizaciones",
  description:
    "Cotiza montajes, estructuras y mantenimiento industrial con AFH Metalmecánicos en Palmira. Teléfono, WhatsApp, correo y ubicación.",
  alternates: {
    canonical: "/contact_us",
  },
  openGraph: {
    title: "Contacto y cotizaciones | AFH Metalmecánicos",
    description:
      "Escríbenos para cotizar un montaje o mantenimiento industrial en Palmira y el Valle del Cauca.",
    url: "/contact_us",
    locale: "es_CO",
    type: "website",
  },
};

export default function ContactUsPage() {
  return (
    <div className="font-sans grid grid-rows gap-16">
      <Header />

      <section className="px-10 md:px-30 w-full" data-aos="fade-up">
        <h1 className="text-3xl font-bold mb-4 text-[#0b2239]">Estamos para ayudarte</h1>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Inicio", path: "/" },
              { name: "Contacto", path: "/contact_us" },
            ])
          ).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  );
}
