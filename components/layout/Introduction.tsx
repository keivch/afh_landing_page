"use client";

import SplitText from "../animations/SplitText";

export default function Introduction() {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };
    return (
        <div className="relative bg-[url('/afh1.jpeg')] bg-cover bg-center bg-no-repeat w-full min-h-[400px] md:min-h-[600px] lg:min-h-[700px] flex items-end rounded-lg overflow-hidden">
            {/* Overlay para mejorar legibilidad del texto */}
            <div className="absolute inset-0 bg-black/40 rounded-lg"></div>

            {/* Contenido */}
            <div className="relative z-10 font-semibold text-white m-4 p-4 md:m-6 md:p-6 lg:m-8 lg:p-8 w-full">
                <SplitText
                    text="Soluciones de metales de precisión"
                    className="font-public-sans font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="left"
                    onLetterAnimationComplete={handleAnimationComplete}
                />
                <div className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl">
                    <p className="leading-relaxed mb-6">
                        En AFH Metalmecánicos transformamos ideas en soluciones metálicas de alta precisión. En cada proyecto combinamos tecnología avanzada, materiales de primera y un equipo altamente capacitado para garantizar resultados duraderos y eficientes.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a 
                            href="/contact_us" 
                            className="inline-flex items-center justify-center px-6 py-3 bg-[#98e73c] text-black font-semibold rounded-lg hover:bg-[#81d323] transition-colors duration-200 shadow-lg hover:shadow-xl"
                        >
                            Solicitar Cotización
                        </a>
                        <a 
                            href="/about_us" 
                            className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#0b2239] transition-all duration-200"
                        >
                            Conocer Más
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}