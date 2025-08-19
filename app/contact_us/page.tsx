import Contacts from "@/components/contact_us/contacts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/footer";
import Map from "@/components/ui/map";
import Form from "@/components/contact_us/form";
import Head from "next/head";

export default function contactUs() {
  return (
    <div className="font-sans grid grid-rows gap-16">
      <Head>
        {/* SEO básico */}
        <title>AFH Metalmecánicos - Soluciones en Metales de Precisión</title>
        <meta
          name="Contactanos"
          content="Metodos de contacto para AFH Metalmecánicos, incluyendo dirección, teléfono y correo electrónico."
        />
        <meta name="keywords" content="AFH Metalmecánicos, metalmecánica, metales de precisión, ingeniería, fabricación" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.midominio.com/" />

        {/* Favicon */}
        <link rel="icon" href="/logo.png" />

        {/* Open Graph / Redes sociales */}
        <meta property="og:title" content="AFH Metalmecánicos - Soluciones en Metales de Precisión" />
        <meta property="og:description" content="Expertos en metales de precisión para la industria. Conoce nuestros servicios." />
        <meta property="og:image" content="https://www.midominio.com/logo.png" />
        <meta property="og:url" content="https://www.midominio.com/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AFH Metalmecánicos - Soluciones en Metales de Precisión" />
        <meta name="twitter:description" content="Expertos en metales de precisión para la industria. Conoce nuestros servicios." />
        <meta name="twitter:image" content="https://www.midominio.com/logo.png" />
      </Head>
      <Header />
      <div data-aos="zoom-in">
        <Form />
      </div>
      <div data-aos="zoom-in">
        <Contacts />
      </div>
      <div data-aos="zoom-in">
        <Map />
      </div>
      <Footer />
    </div>
  );
}
