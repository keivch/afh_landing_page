export const siteUrl = "https://afhmetalmecanico.com";

export const site = {
  name: "AFH Metalmecánicos",
  legalName: "AFH Metalmecánicos S.A.S.",
  url: siteUrl,
  email: "asistenteadm@afhmetalmecanico.com",
  nit: "901.054.805-2",
  foundingDate: "2017-02-08",
  phoneDisplay: "+57 311 616 7972",
  phoneTel: "+573116167972",
  landlineDisplay: "+57 602 287 2362",
  landlineTel: "+576022872362",
  whatsappUrl:
    "https://wa.me/573116167972?text=Hola%2C%20quiero%20cotizar%20un%20proyecto%20con%20AFH%20Metalmec%C3%A1nicos",
  streetAddress: "Carrera 13A #40-37",
  locality: "Palmira",
  region: "Valle del Cauca",
  postalCode: "763532",
  country: "CO",
  latitude: 3.536044,
  longitude: -76.288881,
  description:
    "Montajes metalmecánicos, estructuras, soldadura y mantenimiento industrial en Palmira, Cali y el Valle del Cauca. Cotiza con AFH Metalmecánicos S.A.S.",
  sameAs: [
    "https://www.facebook.com/afhmetalmecanicos",
    "https://www.instagram.com/afhmetalmecanicos",
  ],
};

export const cities = ["Palmira", "Cali", "Yumbo", "Jamundí", "Candelaria"];

export const services = [
  {
    name: "Montajes metalmecánicos",
    description:
      "Instalación de estructuras, equipos y líneas de proceso en planta, coordinada con la operación del cliente y entregada según especificación.",
  },
  {
    name: "Mantenimiento industrial",
    description:
      "Atención a maquinaria y equipos del sector agroindustrial e industrial, con foco en continuidad operativa y seguridad.",
  },
  {
    name: "Estructuras metálicas",
    description:
      "Fabricación y montaje de estructuras para techos, soportes, plataformas y obras de ingeniería.",
  },
  {
    name: "Soldadura industrial",
    description:
      "Soldadura para fabricar y reparar componentes que trabajan bajo carga y uso continuo en planta.",
  },
  {
    name: "Pisos, rejillas y cerramientos",
    description:
      "Rejillas, pisos industriales, barandas y elementos de seguridad para plantas y edificaciones.",
  },
  {
    name: "Equipos para ingenios",
    description:
      "Cabezales, sinfines, chimeneas y piezas a la medida para la industria azucarera del Valle del Cauca.",
  },
];

export const faqs = [
  {
    question: "¿Dónde está ubicada AFH Metalmecánicos?",
    answer:
      "Estamos en la Carrera 13A #40-37, Palmira, Valle del Cauca. Atendemos proyectos en Palmira, Cali, Yumbo, Jamundí, Candelaria y el resto del departamento.",
  },
  {
    question: "¿Qué servicios de metalmecánica ofrecen?",
    answer:
      "Hacemos montajes metalmecánicos, mantenimiento industrial, estructuras metálicas, soldadura, pisos y rejillas, y fabricación de equipos para ingenios y otras industrias.",
  },
  {
    question: "¿Trabajan con ingenios y empresas de alimentos?",
    answer:
      "Sí. Hemos trabajado con ingenios azucareros, empresas de alimentos y constructoras del Valle del Cauca, entre ellas Manuelita, María Luisa, Carmelita, Alquería y Solanillas.",
  },
  {
    question: "¿Cómo solicito una cotización?",
    answer:
      "Escríbenos por el formulario de contacto, al correo asistenteadm@afhmetalmecanico.com, al +57 311 616 7972 o por WhatsApp. Cuéntanos el alcance, el sitio y los plazos.",
  },
  {
    question: "¿Cuál es el horario de atención?",
    answer:
      "Atendemos de lunes a viernes de 8:00 a. m. a 6:00 p. m. y los sábados de 8:00 a. m. a 12:00 m.",
  },
];

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#negocio`,
    name: site.name,
    legalName: site.legalName,
    alternateName: ["AFH Metalmecanico", "AFH Metal Mecánicos", "AFH Metalmecánicos SAS"],
    url: site.url,
    image: `${site.url}/metal.jpg`,
    logo: `${site.url}/logo4.png`,
    description: site.description,
    telephone: site.phoneTel,
    email: site.email,
    foundingDate: site.foundingDate,
    taxID: site.nit,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.streetAddress,
      addressLocality: site.locality,
      addressRegion: site.region,
      postalCode: site.postalCode,
      addressCountry: site.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.latitude,
      longitude: site.longitude,
    },
    hasMap:
      "https://www.google.com/maps/search/?api=1&query=Afh+Metalmecanico+Cra.+13a+%2340-37+Palmira",
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
    currenciesAccepted: "COP",
    areaServed: cities.map((name) => ({
      "@type": "City",
      name,
      containedInPlace: { "@type": "State", name: site.region },
    })),
    sameAs: site.sameAs,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios metalmecánicos",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
          areaServed: site.region,
          provider: { "@id": `${site.url}/#negocio` },
        },
      })),
    },
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}
