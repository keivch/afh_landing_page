import ClientsCard from "../ui/ClientsCard"

export default function ClientsComponent() {
    return (

            <div className="grid grid-cols-4 grid-rows-1 gap-4">
                <div className="col-start-1 row-start-2">
                    <ClientsCard title="alqueria" description="epico" image="/metal.jpg" />
                </div>
                <div className="col-start-2 row-start-2">
                    <ClientsCard title="alqueria" description="epico" image="/metal.jpg" />
                </div>
                <div className="col-start-3 row-start-2">
                    <ClientsCard title="alqueria" description="epico" image="/metal.jpg" />
                </div>
                <div className="col-start-4 row-start-2">
                    <ClientsCard title="alqueria" description="epico" image="/metal.jpg" />
                </div>
                <div className="font-public-sans text-black font-bold">Nuestro Clientes</div>
            </div>
    )
}