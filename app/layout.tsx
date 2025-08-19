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
  title: "AFH Metalmecánicos - Soluciones en Procesos Metalmecánicos",
  description:
    "AFH Metalmecánicos ofrece soluciones integrales en procesos metalmecánicos, fabricación, reparación y mantenimiento industrial.",
  keywords: [
    "procesos metalmecánicos",
    "fabricación industrial",
    "mantenimiento industrial",
    "AFH Metalmecánicos",
    "AFH Metalmecanicos",
    "AFH"
  ],
  authors: [{ name: "AFH Metalmecánicos" }],
  openGraph: {
    title: "AFH Metalmecánicos - Procesos Metalmecánicos",
    description: "Especialistas en procesos metalmecánicos para la industria.",
    url: "https://afhmetalmecanicos.com",
    siteName: "AFH Metalmecánicos",
    images: [
      {
        url: "https://afhmetalmecanicos.com/logo.png",
        width: 800,
        height: 600,
        alt: "AFH Metalmecánicos Logo",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = "https://afhmetalmecanicos.com";

  // Datos estructurados globales
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AFH Metalmecánicos",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description:
      "AFH Metalmecánicos es una empresa especializada en procesos metalmecánicos, fabricación, reparación y mantenimiento industrial.",
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
