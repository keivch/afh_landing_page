import ButtonCTA from "../ui/ButtonCTA";

export default function CallToAction() {
    return (
        <div className="grid grid-cols-1 grid-rows-2 gap-4 justify-items-center">
            <div >
                <p className="font-public-sans font-black text-4xl">¿Listo para cotizar tu trabajo?</p>
            </div>
            <div>
                <ButtonCTA text={'Cotizar'} link={""}></ButtonCTA>
            </div>
        </div>
    )
}