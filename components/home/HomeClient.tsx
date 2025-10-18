"use client";

import { useEffect } from "react";
import Script from "next/script";
import AOS from "aos";
import "aos/dist/aos.css";
import CallToAction from "@/components/layout/callToAction";
import Footer from "@/components/layout/footer";
import Introduction from "@/components/layout/Introduction";
import ClientsComponent from "@/components/home/ClientsComponent";
import PortfolioComponent from "@/components/home/PortfolioComponent";
import ScrollVelocity from "@/components/animations/ScrollVelocity";
import Header from "@/components/layout/Header";
import Card from "@/components/ui/Card";

export default function HomeClient() {
  const values = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6 text-black"
        >
          <path
            fillRule="evenodd"
            d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 0 1-.517.608 7.45 7.45 0 0 0-.478.198.798.798 0 0 1-.796-.064l-.453-.324a1.875 1.875 0 0 0-2.416.2l-.243.243a1.875 1.875 0 0 0-.2 2.416l.324.453a.798.798 0 0 1 .064.796 7.448 7.448 0 0 0-.198.478.798.798 0 0 1-.608.517l-.55.092a1.875 1.875 0 0 0-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 0 1-.064.796l-.324.453a1.875 1.875 0 0 0 .2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 0 1 .796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 0 1 .517-.608 7.52 7.52 0 0 0 .478-.198.798.798 0 0 1 .796.064l.453.324a1.875 1.875 0 0 0 2.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 0 1-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 0 0 1.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 0 1-.608-.517 7.507 7.507 0 0 0-.198-.478.798.798 0 0 1 .064-.796l.324-.453a1.875 1.875 0 0 0-.2-2.416l-.243-.243a1.875 1.875 0 0 0-2.416-.2l-.453.324a.798.798 0 0 1-.796.064 7.462 7.462 0 0 0-.478-.198.798.798 0 0 1-.517-.608l-.091-.55a1.875 1.875 0 0 0-1.85-1.566h-.344ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      image: "",
      title: "Fabricación de metal",
      description:
        "Nos especializamos en la fabricación de metales a medida, creando componentes duraderos y precisos para diversas industrias.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6 text-black"
        >
          <path
            fillRule="evenodd"
            d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      image: "",
      title: "Maquinaria precisa",
      description:
        "Nuestros servicios de mecanizado utilizan tecnología avanzada para producir piezas con tolerancias estrictas y calidad superior.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6 text-black"
        >
          <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
        </svg>
      ),
      image: "",
      title: "Diseño personalizado",
      description:
        "Desde el concepto hasta la finalización, ofrecemos soluciones de diseño personalizadas para satisfacer sus necesidades específicas en materia de metalurgia.",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <>
      <Script
        id="ld-json-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "AFH Metalmecánicos",
            url: "https://www.afhmetalmecanicos.com",
            // ... resto de datos estructurados
          }),
        }}
      />

      <div className="flex flex-col items-center">
        <Header />
        <div className="m-2 w-full" data-aos="fade-down">
          <ScrollVelocity
            texts={["Bienvenido a AFH Metalmecánicos"]}
            velocity={100}
            className="custom-scroll-text"
          />
        </div>

        <div className="m-5" data-aos="fade-up">
          <Introduction />
        </div>

        <div className="m-5" data-aos="zoom-in">
          <Card items={values} title="Nuestros servicios" />
        </div>

        <div className="m-5" data-aos="fade-right">
          <ClientsComponent />
        </div>

        <div className="m-5" data-aos="fade-left">
          <PortfolioComponent />
        </div>

        <div data-aos="flip-up">
          <CallToAction />
        </div>


      </div>
      <Footer />
    </>
  );
}
