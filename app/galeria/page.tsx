import MediaSection from "@/components/galery/MediaSection";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Galería | AFH Metalmecánicos - Valle del Cauca, Colombia",
    description:
        "Explora la galería de AFH Metalmecánicos en Valle del Cauca, Colombia. Descubre nuestros procesos de fabricación, mecanizado y soldadura a través de imágenes y videos. Servicios en Cali, Palmira, Yumbo, Jamundí, Candelaria y toda la región.",
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
        title: "Galería | AFH Metalmecánicos - Valle del Cauca, Colombia",
        description:
            "Explora la galería de AFH Metalmecánicos en Valle del Cauca, Colombia. Descubre nuestros procesos de fabricación, mecanizado y soldadura a través de imágenes y videos. Servicios en Cali, Palmira, Yumbo, Jamundí, Candelaria y toda la región.",
        url: "https://www.afhmetalmecanico.com/galeria",
        siteName: "AFH Metalmecánicos",
        type: "website",
        images: [
            {
                url: "https://www.afhmetalmecanico.com/logo.png",
                width: 1200,
                height: 630,
                alt: "Contacto AFH Metalmecánicos Valle del Cauca",
            },
        ],
        locale: "es_CO",
    },
    twitter: {
        card: 'summary_large_image',
        title: "Galería | AFH Metalmecánicos",
        description: "Explora la galería de AFH Metalmecánicos en Valle del Cauca, Colombia. Descubre nuestros procesos de fabricación, mecanizado y soldadura a través de imágenes y videos. Servicios en Cali, Palmira, Yumbo, Jamundí, Candelaria y toda la región.",
        images: ["https://www.afhmetalmecanicos.com/logo.png"],
    },
    alternates: {
        canonical: "https://www.afhmetalmecanico.com/galeria",
    },
};

export default function GaleriaPage() {
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
        <main>
            <Header></Header>
            <div data-aos="fade-up">
                <MediaSection />
            </div>

            <Footer></Footer>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
        </main>
    );
}