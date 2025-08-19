import ClientsCard from "../ui/ClientsCard"

export default function PortfolioComponent() {
    const clients = [
        { title: "Chimenea", description: "Construccion y montaje  de chimeneas en el sector industrial", image: "/chimenea.jpg" },
        { title: "Cabezal", description: "Se realizan los mejores cabezales para dar soluciones a las empresas azucareras", image: "/industrial.jpg" },
        { title: "Estructura", description: "Construcción y montaje de estructura para techos en la industria", image: "/estructura.jpg" },
        { title: "Rejillas metálicas", description: "Construcción y montaje de rejillas metálicas para la industria", image: "/rejillas.jpg" },
        { title: "Pisos Metalmecanicos", description: "onstrucción y montaje de rejillas metálicas para la industria", image: "/pisos.jpg" },
        { title: "Sin Fin", description: "Construcción y montaje de sin fin, adecuados a la necesidad de la industria para la industria", image: "/sinfin.jpg" },
    ];
    return (
        <section className="w-full py-12 px-4 bg-gradient-to-b from-gray-50/50 to-white">
            <div className="max-w-7xl mx-auto">
            
                <div className="text-center mb-12">
                    <h3 className="font-public-sans text-gray-900 font-bold text-2xl md:text-3xl mb-4">
                        Nuestro Portafolio
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
                    <p className="text-gray-600 mt-4 text-sm md:text-base max-w-2xl mx-auto">
                        Prestación de servicios en montajes
                        metalmecánico y mantenimiento industrial.
                    </p>
                </div>


                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                    {clients.map((client, index) => (
                        <ClientsCard
                            key={index}
                            title={client.title}
                            description={client.description}
                            image={client.image}
                        />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <div className="inline-flex items-center space-x-2 text-gray-500 text-sm">
                        <div className="w-8 h-0.5 bg-gray-300 rounded"></div>
                        <span>Muchos servicios mas</span>
                        <div className="w-8 h-0.5 bg-gray-300 rounded"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}