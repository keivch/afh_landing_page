"use client";

import ButtonCTA from "../ui/ButtonCTA";
import ScrollFloat from "../animations/ScrollFloat";

export default function CallToAction() {
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };
    return (
        <div className="grid grid-cols-1 grid-rows-2 gap-4 justify-items-center">
            <div >
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
                <ButtonCTA text={'Cotizar'} link={""}></ButtonCTA>
            </div>
        </div>
    )
}
