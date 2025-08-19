export default function Contacts() {
  return (
    <section className="flex flex-col w-full px-10 md:px-30 gap-10">
      <section className="font-bold font-public-sans">
        <h1 className="font-public-sans text-black text-lg">
          Nuestra información de contacto
        </h1>
      </section>
      <section className="flex flex-col-2 gap-5">
        <div className="w-2/5 flex flex-col border-t gap-2 border-gray-500/10 pt-2">
          <span className="font-public-sans text-gray-400 text-sm">
            Dirección
          </span>
          <h2 className="font-public-sans text-black text-sm">
            Afh Metalmecanico, Cra. 13a #40-37, Palmira, Valle del Cauca,
            Colombia
          </h2>
        </div>
        <div className="w-3/5 flex flex-col border-t gap-2 border-gray-500/10 pt-2">
          <span className="font-public-sans text-gray-400 text-sm">
            Número telefonico
          </span>
          <span className="font-public-sans text-black text-sm">
            +57 (311) 616-7972
          </span>
        </div>
      </section>
      <section className="flex flex-col border-t gap-2 border-gray-500/10 pt-2">
        <span className="font-public-sans text-gray-400 text-sm">
          Correo electrónico
        </span>
        <span className="font-public-sans text-black text-sm">
          asisasistenteadm@afhmetalmecanico.com
        </span>
      </section>
    </section>
  );
}
