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
            Nuestra misión es proporcionar servicios de metalurgia excepcionales
            que superen las expectativas de los clientes. Nos esforzamos por
            lograrlo mediante la mejora continua, el avance tecnológico y el
            enfoque en la construcción de relaciones duraderas con nuestros
            clientes.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-xl font-public-sans text-black mb-2">
            Visión
          </h3>
          <p className="text-sm font-public-sans text-gray-700 leading-relaxed">
            Nuestra visión es ser el socio preferido para soluciones de
            fabricación y mecanizado de metales, reconocidos por nuestra
            calidad, fiabilidad e innovación. Nuestro objetivo es ampliar
            nuestras capacidades y nuestro alcance, manteniendo al mismo tiempo
            nuestros valores fundamentales de integridad y excelencia.
          </p>
        </div>
      </div>
    </section>
  );
}
