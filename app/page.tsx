import Footer from "@/components/layout/footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1>Bienvenido a nuestra página</h1>
      <Image src="/logo.png" alt="Logo" width={150} height={150} />
      <p>Esta es la página de inicio de nuestro sitio web.</p>
      <Footer />
    </main>
    

  );
}
