import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/footer";
import ContactForm from "@/components/contact_us/form";
import Contacts from "@/components/contact_us/contacts";
import Map from "@/components/ui/map";


export const metadata: Metadata = {
  title: "Contáctanos | AFH Metalmecánicos - Valle del Cauca, Colombia",
  description:
    "Contacta AFH Metalmecánicos en Valle del Cauca, Colombia. Consultas, cotizaciones y servicios en procesos metalmecánicos. Servicios en Cali, Palmira, Yumbo, Jamundí, Candelaria y toda la región. Teléfono, email y ubicación.",
  keywords: [
    "AFH Metalmecánicos contacto",
    "contacto metalmecánica Valle del Cauca",
    "servicios metalmecánicos Cali",
    "cotización metalmecánica Palmira",
    "fabricación industrial Yumbo",
    "procesos metalmecánicos Jamundí",
    "teléfono AFH Metalmecánicos",
    "dirección metalmecánica Candelaria",
    "servicios industriales Cali",
    "mecanizado Palmira",
    "soldadura Yumbo",
    "mantenimiento Jamundí",
    "reparación Candelaria"
  ],
  openGraph: {
    title: "Contáctanos | AFH Metalmecánicos - Valle del Cauca, Colombia",
    description:
      "Comunícate con AFH Metalmecánicos para soluciones personalizadas en procesos y fabricación metalmecánica en Valle del Cauca, Colombia. Servicios en Cali, Palmira, Yumbo, Jamundí, Candelaria y toda la región.",
    url: "https://www.afhmetalmecanicos.com/contact_us",
    siteName: "AFH Metalmecánicos",
    type: "website",
    images: [
      {
        url: "https://www.afhmetalmecanicos.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Contacto AFH Metalmecánicos Valle del Cauca",
      },
    ],
    locale: "es_CO",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contáctanos | AFH Metalmecánicos",
    description: "Contacta AFH Metalmecánicos para soluciones en procesos metalmecánicos en Valle del Cauca, Colombia.",
    images: ["https://www.afhmetalmecanicos.com/logo.png"],
  },
  alternates: {
    canonical: "https://www.afhmetalmecanicos.com/contact_us",
  },
};

export default function ContactUsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AFH Metalmecánicos",
    alternateName: "AFH Metal Mecánicos",
    image: "https://www.afhmetalmecanicos.com/logo.png",
    "@id": "https://www.afhmetalmecanicos.com",
    url: "https://www.afhmetalmecanicos.com",
    telephone: "+57 3116167972",
    email: "asisasistenteadm@afhmetalmecanico.com",
    description: "AFH Metalmecánicos es una empresa especializada en procesos metalmecánicos, fabricación industrial, soldadura y mantenimiento en Valle del Cauca, Colombia. Servicios en Cali, Palmira, Yumbo, Jamundí, Candelaria y toda la región.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle 30 #25-15",
      addressLocality: "Palmira",
      addressRegion: "Valle del Cauca",
      postalCode: "763533",
      addressCountry: "CO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "3.5393",
      longitude: "-76.3036"
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "12:00",
      },
    ],
    priceRange: "$$",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    currenciesAccepted: "COP",
    sameAs: [
      "https://www.facebook.com/afhmetalmecanicos",
      "https://www.instagram.com/afhmetalmecanicos",
      "https://www.linkedin.com/company/afhmetalmecanicos",
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "3.4516",
        longitude: "-76.5320"
      },
      geoRadius: "200000"
    },
    areaServed: [
      {
        "@type": "City",
        name: "Cali",
        containedInPlace: {
          "@type": "State",
          name: "Valle del Cauca"
        }
      },
      {
        "@type": "City", 
        name: "Palmira",
        containedInPlace: {
          "@type": "State",
          name: "Valle del Cauca"
        }
      },
      {
        "@type": "City",
        name: "Yumbo", 
        containedInPlace: {
          "@type": "State",
          name: "Valle del Cauca"
        }
      },
      {
        "@type": "City",
        name: "Jamundí",
        containedInPlace: {
          "@type": "State", 
          name: "Valle del Cauca"
        }
      },
      {
        "@type": "City",
        name: "Candelaria",
        containedInPlace: {
          "@type": "State",
          name: "Valle del Cauca"
        }
      }
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios Metalmecánicos",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fabricación Industrial"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mecanizado de Precisión"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Soldadura Industrial"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mantenimiento Industrial"
          }
        }
      ]
    }
  };

  return (
    <div className="font-sans grid grid-rows gap-16">
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
