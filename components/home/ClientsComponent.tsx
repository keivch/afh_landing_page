import ClientsCard from "../ui/ClientsCard"

export default function ClientsComponent() {
    return (

        <div className="w-full">
            <h2 className="font-public-sans text-black font-bold text-1xl  mb-6">
                Nuestros Clientes
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6">
                <ClientsCard title="Del Alba S.A" description="Cliente destacado" image="/metal.jpg" />
                <ClientsCard title="Ingenio Manuelita" description="Cliente destacado" image="/metal.jpg" />
                <ClientsCard title="Ingenio Maria Luisa S.A" description="Cliente destacado" image="/metal.jpg" />
                <ClientsCard title="Alqueria" description="Cliente destacado" image="/metal.jpg" />
                <ClientsCard title="Ingenio Carmelita S.A" description="Cliente destacado" image="/metal.jpg" />
                <ClientsCard title="Constructora Solanillas" description="Cliente destacado" image="/metal.jpg" />
            </div>
        </div>
    )
}