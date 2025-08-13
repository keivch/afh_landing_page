"use client";

import SplitText from "../animations/SplitText";
import AnimatedContent from "@/components/animations/AnimatedContent";

export default function Introduction() {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };
    return (
        <div className="bg-[url('/metal.jpg')] bg-contain bg-center w-300 h-100 flex items-end rounded-lg" >
            <div className="font-semibold text-white m-6 p-6">
                <SplitText
                    text="Soluciones de metales de precisión"
                    className="font-public-sans font-bold text-4xl"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                    onLetterAnimationComplete={handleAnimationComplete}
                />
                <div className="left-0">
                    <p>En AFH Metalmecánicos transformamos ideas en soluciones metálicas de alta precisión. En cada proyecto combinamos tecnología avanzada, materiales de primera y un equipo altamente capacitado para garantizar resultados duraderos y eficientes.</p>
                </div>
            </div>
        </div>


    )
}