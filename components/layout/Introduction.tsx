"use client";

import SplitText from "../animations/SplitText";

export default function Introduction() {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };
    return (
        <div className="relative bg-[url('/metal.jpg')] bg-cover bg-center bg-no-repeat w-full min-h-[400px] md:min-h-[600px] lg:min-h-[700px] flex items-end rounded-lg overflow-hidden">
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
                    <p className="leading-relaxed">
                        En AFH Metalmecánicos transformamos ideas en soluciones metálicas de alta precisión. En cada proyecto combinamos tecnología avanzada, materiales de primera y un equipo altamente capacitado para garantizar resultados duraderos y eficientes.
                    </p>
                </div>
            </div>
        </div>
    )
}