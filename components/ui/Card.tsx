import { ReactNode } from "react";

interface CardItem {
  icon: ReactNode; // puede ser cualquier nodo JSX (svg, imagen, texto, etc.)
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
      <h1 className="font-public-sans text-black text-2xl sm:text-3xl md:text-4xl font-bold px-4 sm:px-8 md:px-16 lg:px-24">
        {title}
      </h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-8 md:px-16 lg:px-24">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-4 sm:p-6 md:p-8 flex flex-col shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 ease-in-out hover:scale-105 hover:border-gray-200"
          >
            <div className="flex justify-center sm:justify-center md:justify-start mb-4">
              <div className="text-blue-600 text-3xl sm:text-4xl">
                {item.icon}
              </div>
            </div>

            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 font-public-sans text-center md:text-left mb-3">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg font-public-sans text-center md:text-left leading-relaxed flex-grow">
              {item.description}
            </p>
          </div>
        ))}
      </section>
    </section>
  );
}
