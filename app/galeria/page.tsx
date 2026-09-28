import MediaSection from "@/components/galery/MediaSection";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/footer";
import { breadcrumbJsonLd } from "@/lib/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galería de proyectos",
  description:
    "Fotos y videos de montajes, estructuras, soldadura y trabajos metalmecánicos de AFH Metalmecánicos en el Valle del Cauca.",
  alternates: {
    canonical: "/galeria",
  },
  openGraph: {
    title: "Galería de proyectos | AFH Metalmecánicos",
    description:
      "Mira montajes, estructuras y trabajos de soldadura realizados por AFH Metalmecánicos.",
    url: "/galeria",
    locale: "es_CO",
    type: "website",
  },
};

export default function GaleriaPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Inicio", path: "/" },
              { name: "Galería", path: "/galeria" },
            ])
          ).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <div>
        <MediaSection />
      </div>
      <Footer />
    </main>
  );
}
