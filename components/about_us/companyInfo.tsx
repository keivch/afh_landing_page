export default function AboutUsComponent() {
  return (
    <section className="flex flex-col items-center gap-8 px-4 sm:px-10 md:px-30">
      <div className="flex-1 space-y-6">
        <div>
          <h1 className="font-bold text-2xl font-public-sans text-black mb-2">
            Sobre nosotros
          </h1>
          <p className="text-sm font-public-sans text-gray-700 leading-relaxed">
            AFH Metalmecánicos es un proveedor líder de servicios de fabricación
            y mecanizado de metales, dedicado a ofrecer soluciones de alta
            calidad adaptadas a las necesidades de nuestros clientes. Nuestro
            compromiso con la precisión, la innovación y la satisfacción del
            cliente impulsa todo lo que hacemos.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-xl font-public-sans text-black mb-2">
            Misión
          </h3>
          <p className="text-sm font-public-sans text-gray-700 leading-relaxed">
            Somos el aliado estratégico de nuestros clientes entregando montajes
            integrales y servicios de mantenimiento industrial acordes a sus
            especificaciones, soportando nuestro actuar en un equipo humano
            comprometido con la excelencia, la preservación del medio ambiente y
            el mejoramiento continuo de nuestros sistemas de calidad, seguridad
            y salud en el trabajo.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-xl font-public-sans text-black mb-2">
            Visión
          </h3>
          <p className="text-sm font-public-sans text-gray-700 leading-relaxed">
            En el año 2027, (AFH Metalmecánicos SAS) seremos reconocidos a nivel
            nacional y latinoamericano como una de las mejores empresas
            prestadoras de servicios de montajes integrales y mantenimientos
            industriales.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-xl font-public-sans text-black mb-2">
            Politica de calidad
          </h3>
          <p className="text-sm font-public-sans text-gray-700 leading-relaxed">
            Nos comprometemos con nuestros clientes a convertirnos en su aliado
            estratégico entregando montajes y servicios de mantenimiento
            industrial acorde a sus especificaciones. El mejoramiento continuo
            del sistema de gestión de calidad y el cumplimiento a los requisitos
            de nuestros grupos de interés son el pilar para ser reconocidos a
            nivel nacional y latinoamericano como una de las mejores empresas
            del sector metalmecánico.
          </p>
        </div>
      </div>
    </section>
  );
}
