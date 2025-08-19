import Image from "next/image"

export default function PortfolioComponent() {
    const images = ['/metal.jpg', '/metal.jpg']

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="col-span-full font-public-sans text-black font-bold text-1xl md:text-1xl mb-2">
                <h4>Nuestro Portafolio</h4>
            </div>

            {/* Imágenes */}
            {images.map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <Image
                        src={image}
                        alt={`Proyecto ${index + 1}`}
                        width={350}
                        height={250}
                        className="w-full h-auto object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    />
                </div>
            ))}
        </div>
    )
}