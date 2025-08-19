import { ReactNode } from "react";
import Image from "next/image";

interface CardItem {
  icon: ReactNode; // puede ser cualquier nodo JSX (svg, imagen, texto, etc.)
  image: string;
  title: string;
  description: string;
}

interface CardProps {
  items: CardItem[];
  title: string;
}

export default function Card({ items, title }: CardProps) {
  return (
    <section className="flex flex-col gap-6 md:gap-8">
      <h1 className="font-public-sans text-black text-2xl sm:text-3xl md:text-3xl font-bold px-4 sm:px-8 md:px-16 lg:px-24">
        {title}
      </h1>
      {items.length % 3 === 0 ? (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-6 px-4 sm:px-8 md:px-30">
          {items.map((item, index) => (
            <div
              key={index}
              className="rounded-lg p-4 sm:p-6 flex flex-col shadow border border-gray-100/10 transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <div className="flex justify-center sm:justify-start">
                {item.icon}
              </div>


              <h3 className="mt-3 sm:mt-4 text-base sm:text-base font-semibold text-gray-900 font-public-sans text-center sm:text-left">
                {item.title}
              </h3>

              <p className="mt-2 text-gray-600 text-sm sm:text-base font-public-sans text-center sm:text-left leading-relaxed">
                {item.description}
              </p>
              {item.image !== "" && (
                <section className="w-full px-10" data-aos="fade-up">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1920}
                    height={1080}
                    className="w-full h-auto object-cover rounded-lg"
                    priority
                  />
                </section>
              )}
            </div>
          ))}
        </section>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 sm:gap-6 px-4 sm:px-8 md:px-30">
          {items.map((item, index) => (
            <div
              key={index}
              className="rounded-lg p-4 sm:p-6 flex flex-col shadow border border-gray-100/10 transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <div className="flex justify-center sm:justify-start">
                {item.icon}
              </div>

              <h3 className="mt-3 sm:mt-4 text-base sm:text-base font-semibold text-gray-900 font-public-sans text-center sm:text-left">
                {item.title}
              </h3>

              <p className="mt-2 text-gray-600 text-sm sm:text-base font-public-sans text-center sm:text-left leading-relaxed">
                {item.description}
              </p>
              {item.image !== "" && (
                <section className="w-full px-10" data-aos="fade-up">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1920}
                    height={1080}
                    className="w-full h-auto object-cover rounded-lg"
                    priority
                  />
                </section>
              )}
            </div>
          ))}
        </section>
      )}
    </section>
  );
}
