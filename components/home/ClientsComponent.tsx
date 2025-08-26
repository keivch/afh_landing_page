import ClientsCard from "../ui/ClientsCard"

export default function ClientsComponent() {
    const clients = [
        { title: "Del Alba S.A", description: "Cliente destacado", image: "/Logo-del-alba.webp" },
        { title: "Ingenio Manuelita", description: "Cliente destacado", image: "/manuelita.png" },
        { title: "Ingenio Maria Luisa S.A", description: "Cliente destacado", image: "/maria-luisa.png" },
        { title: "Alqueria", description: "Cliente destacado", image: "/alqueria.webp" },
        { title: "Ingenio Carmelita S.A", description: "Cliente destacado", image: "/logo-carmelita.png" },
        { title: "Constructora Solanillas", description: "Cliente destacado", image: "/solanillas.webp" }
    ];
    return (
        <section className="w-full py-12 px-4 bg-gradient-to-b from-gray-50/50 to-white">
            <div className="max-w-7xl mx-auto">
                {/* Título mejorado */}
                <div className="text-center mb-12">
                    <h2 className="font-public-sans text-gray-900 font-bold text-2xl md:text-3xl mb-4">
                        Nuestros Clientes
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#98e73c] to-[#98e73c] mx-auto rounded-full"></div>
                    <p className="text-gray-600 mt-4 text-sm md:text-base max-w-2xl mx-auto">
                        Empresas que confían en nuestros servicios y han experimentado resultados excepcionales
                    </p>
                </div>

                {/* Grid responsivo mejorado */}
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
                        <span>+100 empresas confían en nosotros</span>
                        <div className="w-8 h-0.5 bg-gray-300 rounded"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}