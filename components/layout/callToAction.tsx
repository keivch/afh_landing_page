"use client";

import ButtonCTA from "../ui/ButtonCTA";
import ScrollFloat from "../animations/ScrollFloat";

export default function CallToAction() {
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };
    return (
        <div className="flex flex-col items-center justify-center gap-6 md:gap-8 py-8 md:py-12 lg:py-16 text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                <ScrollFloat
                    animationDuration={1}
                    ease='back.inOut(2)'
                    scrollStart='center bottom+=50%'
                    scrollEnd='bottom bottom-=40%'
                    stagger={0.03}
                >
                    ¿Listo para cotizar tu trabajo?
                </ScrollFloat>
            </div>
            <div>
                <ButtonCTA text={'Cotizar'} link={"/contact_us"} />
            </div>
        </div>
    )
}
