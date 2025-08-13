import Image from "next/image"

export default function PortfolioComponent(){
    const images = ['/metal.jpg', '/metal.jpg']

    return(
        <div className="grid grid-cols-2 grid-rows-1 gap-4">
            <div className="font-public-sans text-black font-bold">Nuestro Portafolio</div>
            {images.map((image, index) => (
                <div key={index} className="rounded-lg row-start-2">
                     <Image src={image} alt="Servicio" width={350} height={90} className="rounded-lg" />
                </div>
            ))}
        </div>
    )
}