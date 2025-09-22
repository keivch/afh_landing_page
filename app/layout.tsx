import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script"; // Para inyectar JSON-LD

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Metadata para SEO global
export const metadata: Metadata = {
  title: "AFH Metalmecánicos - Soluciones en Procesos Metalmecánicos | Valle del Cauca, Colombia",
  description:
    "AFH Metalmecánicos en Valle del Cauca, Colombia. Especialistas en procesos metalmecánicos, fabricación industrial, reparación y mantenimiento. Servicios en Cali, Palmira, Yumbo, Jamundí, Candelaria y toda la región.",
  keywords: [
    "procesos metalmecánicos",
    "fabricación industrial",
    "mantenimiento industrial",
    "AFH Metalmecánicos",
    "AFH Metalmecanicos",
    "AFH",
    "metalmecánica Valle del Cauca",
    "fabricación metal Cali",
    "mecanizado Palmira",
    "soldadura industrial Yumbo",
    "diseño industrial Jamundí",
    "reparación industrial Candelaria",
    "servicios industriales Cali",
    "fabricación Palmira",
    "mecanizado Yumbo",
    "soldadura Jamundí",
    "mantenimiento Candelaria",
    "Valle del Cauca Colombia"
  ],
  authors: [{ name: "AFH Metalmecánicos" }],
  creator: "AFH Metalmecánicos",
  publisher: "AFH Metalmecánicos",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#000000' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: "AFH Metalmecánicos - Procesos Metalmecánicos | Valle del Cauca, Colombia",
    description: "Especialistas en procesos metalmecánicos para la industria en Valle del Cauca, Colombia. Servicios en Cali, Palmira, Yumbo, Jamundí, Candelaria y toda la región.",
    url: "https://www.afhmetalmecanicos.com",
    siteName: "AFH Metalmecánicos",
    images: [
      {
        url: "https://www.afhmetalmecanicos.com/logo.png",
        width: 1200,
        height: 630,
        alt: "AFH Metalmecánicos Logo - Procesos Metalmecánicos Valle del Cauca",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "AFH Metalmecánicos - Procesos Metalmecánicos",
    description: "Especialistas en procesos metalmecánicos para la industria en Valle del Cauca, Colombia.",
    images: ["https://www.afhmetalmecanicos.com/logo.png"],
  },
  alternates: {
    canonical: "https://www.afhmetalmecanicos.com",
  },
  verification: {
    google: "tu-codigo-de-verificacion-google",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = "https://www.afhmetalmecanicos.com";

  // Datos estructurados globales
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AFH Metalmecánicos",
    alternateName: "AFH Metal Mecánicos",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description:
      "AFH Metalmecánicos es una empresa especializada en procesos metalmecánicos, fabricación, reparación y mantenimiento industrial en Valle del Cauca, Colombia. Servicios en Cali, Palmira, Yumbo, Jamundí, Candelaria y toda la región.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Palmira",
      addressRegion: "Valle del Cauca",
      addressCountry: "CO"
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+57-300-000-0000",
        contactType: "customer service",
        areaServed: "CO",
        availableLanguage: "Spanish",
      },
    ],
    sameAs: [
      "https://www.facebook.com/afhmetalmecanicos",
      "https://www.instagram.com/afhmetalmecanicos",
    ],
    foundingDate: "2020",
    numberOfEmployees: "10-50",
    industry: "Manufacturing",
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
    ]
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AFH Metalmecánicos",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/buscar?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* JSON-LD de Organization */}
        <Script
          id="org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organization).replace(/</g, "\\u003c"),
          }}
        />

        {/* JSON-LD de WebSite */}
        <Script
          id="website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(website).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
