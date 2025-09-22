import { Metadata } from "next";
import HomeClient from "@/components/home/HomeClient";

export const metadata: Metadata = {
  title: "AFH Metalmecánicos | Fabricación y Procesos Metalmecánicos en Valle del Cauca, Colombia",
  description:
    "AFH Metalmecánicos en Valle del Cauca, Colombia. Especialistas en fabricación, mecanizado, soldadura y diseño personalizado en procesos metalmecánicos para la industria. Servicios en Cali, Palmira, Yumbo, Jamundí, Candelaria y toda la región.",
  keywords: [
    "metalmecánica Valle del Cauca",
    "fabricación de metal Cali",
    "mecanizado industrial Palmira",
    "diseño industrial Yumbo",
    "AFH Metalmecánicos",
    "soldadura industrial Jamundí",
    "mantenimiento industrial Candelaria",
    "reparación metalmecánica Valle del Cauca",
    "procesos metalmecánicos Colombia",
    "servicios industriales Cali",
    "fabricación metal Palmira",
    "mecanizado Yumbo",
    "soldadura Jamundí",
    "mantenimiento Candelaria",
    "Valle del Cauca",
    "Colombia"
  ],
  openGraph: {
    title: "AFH Metalmecánicos | Fabricación y Procesos Metalmecánicos en Valle del Cauca",
    description:
      "Especialistas en fabricación, mecanizado, soldadura y diseño personalizado de componentes metálicos para la industria en Valle del Cauca, Colombia. Servicios en Cali, Palmira, Yumbo, Jamundí y toda la región.",
    url: "https://www.afhmetalmecanicos.com",
    siteName: "AFH Metalmecánicos",
    images: [
      {
        url: "https://www.afhmetalmecanicos.com/logo.png",
        width: 1200,
        height: 630,
        alt: "AFH Metalmecánicos - Procesos Metalmecánicos Valle del Cauca",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "AFH Metalmecánicos | Procesos Metalmecánicos Valle del Cauca",
    description: "Especialistas en fabricación, mecanizado y diseño personalizado de componentes metálicos para la industria en Valle del Cauca.",
    images: ["https://www.afhmetalmecanicos.com/logo.png"],
  },
  alternates: {
    canonical: "https://www.afhmetalmecanicos.com",
  },
};

export default function Home() {
  return <HomeClient />;
}