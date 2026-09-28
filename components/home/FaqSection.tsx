import { faqs } from "@/lib/site";

export default function FaqSection() {
  return (
    <section id="preguntas" className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5f8f18]">
          Preguntas frecuentes
        </p>
        <h2 className="mt-3 font-public-sans text-3xl font-bold text-[#0b2239] md:text-4xl">
          Lo que suelen preguntar antes de cotizar
        </h2>
        <div className="mt-8 divide-y divide-gray-200 border-y border-gray-200">
          {faqs.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="cursor-pointer list-none font-public-sans text-lg font-semibold text-[#0b2239] marker:content-none">
                <span className="flex items-start justify-between gap-4">
                  {item.question}
                  <span className="text-[#5f8f18] transition group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 max-w-2xl leading-relaxed text-gray-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
