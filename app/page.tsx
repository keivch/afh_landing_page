import { Metadata } from "next";
import HomeClient from "@/components/home/HomeClient";

export const metadata: Metadata = {
  title: "AFH Metalmecánicos | Procesos y Soluciones Metalmecánicas",
  description:
    "AFH Metalmecánicos ofrece fabricación, mecanizado y diseño personalizado en procesos metalmecánicos para diversas industrias.",
  keywords: [
    "metalmecánica",
    "fabricación de metal",
    "mecanizado",
    "diseño industrial",
    "AFH Metalmecánicos",
    "Colombia",
  ],
  openGraph: {
    title: "AFH Metalmecánicos | Procesos y Soluciones Metalmecánicas",
    description:
      "Especialistas en fabricación, mecanizado y diseño personalizado de componentes metálicos para la industria.",
    url: "https://www.afhmetalmecanicos.com",
    siteName: "AFH Metalmecánicos",
    images: [
      {
        url: "https://www.afhmetalmecanicos.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AFH Metalmecánicos",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
};

export default function Home() {
  return <HomeClient />;
}
