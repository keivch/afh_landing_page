import HomeClient from "@/components/home/HomeClient";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = "https://afhmetalmecanico.com";

  return {
    title:
      "AFH Metalmecánico | Fabricación y Procesos Metalmecánicos en Valle del Cauca, Colombia",
    description:
      "AFH Metalmecánico en Valle del Cauca, Colombia. Especialistas en fabricación, mecanizado, soldadura y diseño personalizado para la industria.",
    keywords: [
      "metalmecánica Valle del Cauca",
      "fabricación de metal Cali",
      "mecanizado industrial Palmira",
      "AFH Metalmecánico",
      "soldadura industrial Jamundí",
    ],
    openGraph: {
      title:
        "AFH Metalmecánico | Fabricación y Procesos Metalmecánicos en Valle del Cauca",
      description:
        "Especialistas en fabricación, mecanizado, soldadura y diseño personalizado de componentes metálicos.",
      url: baseUrl,
      siteName: "AFH Metalmecánico",
      images: [
        {
          url: `${baseUrl}/logo.png`,
          width: 1200,
          height: 630,
          alt: "AFH Metalmecánico - Procesos Metalmecánicos Valle del Cauca",
        },
      ],
      locale: "es_CO",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title:
        "AFH Metalmecánico | Procesos Metalmecánicos Valle del Cauca",
      description:
        "Especialistas en fabricación, mecanizado y diseño de componentes metálicos.",
      images: [`${baseUrl}/logo.png`],
    },
    alternates: {
      canonical: baseUrl, 
    },
  };
}

export default function Home() {
  return <HomeClient />;
}
