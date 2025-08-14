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
    <section className="flex flex-col gap-4">
      <h1 className="font-public-sans text-black text-1xl font-bold pl-4 sm:pl-8 md:pl-30 sm:text-base md:text-base">
        {title}
      </h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-8 md:px-30">
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
          </div>
        ))}
      </section>
    </section>
  );
}
