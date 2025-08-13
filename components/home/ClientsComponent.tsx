import ClientsCard from "../ui/ClientsCard"

export default function ClientsComponent() {
    return (

        <div className="w-full">
            <h2 className="font-public-sans text-black font-bold text-1xl  mb-6">
                Nuestros Clientes
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                <ClientsCard title="alqueria" description="epico" image="/metal.jpg" />
                <ClientsCard title="alqueria" description="epico" image="/metal.jpg" />
                <ClientsCard title="alqueria" description="epico" image="/metal.jpg" />
                <ClientsCard title="alqueria" description="epico" image="/metal.jpg" />
            </div>
        </div>
    )
}