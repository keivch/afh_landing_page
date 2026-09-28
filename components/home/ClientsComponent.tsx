import ClientsCard from "../ui/ClientsCard";

const clients = [
  { title: "Del Alba S.A.", description: "Industria de alimentos", image: "/Logo-del-alba.webp" },
  { title: "Ingenio Manuelita", description: "Ingenio azucarero", image: "/manuelita.png" },
  { title: "Ingenio María Luisa", description: "Ingenio azucarero", image: "/maria-luisa.png" },
  { title: "Alquería", description: "Industria de alimentos", image: "/alqueria.webp" },
  { title: "Ingenio Carmelita", description: "Ingenio azucarero", image: "/logo-carmelita.png" },
  { title: "Constructora Solanillas", description: "Construcción", image: "/solanillas.webp" },
];

export default function ClientsComponent() {
  return (
    <section id="clientes" className="w-full bg-[#f7f8fa] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5f8f18]">
            Clientes
          </p>
          <h2 className="mt-3 font-public-sans text-3xl font-bold text-[#0b2239] md:text-4xl">
            Industrias que ya trabajan con AFH
          </h2>
          <p className="mt-4 text-gray-600">
            Ingenios, alimentos y construcción en el Valle del Cauca confían el
            montaje y el mantenimiento de sus equipos.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((client) => (
            <ClientsCard
              key={client.title}
              title={client.title}
              description={client.description}
              image={client.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
