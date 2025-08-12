export default function Footer() {
    return (
        <footer className="absolute bottom-0 text-[#637587] font-sans font-semibold">
            <div className="grid grid-cols-1 grid-rows-2 gap-10">
                <div className="flex justify-between gap-5 md:items-center md:gap-80">
                    <a href="">Inicio</a>
                    <a href="">Contacto</a>
                    <a href="">Sobre nosotros</a>
                </div>
                <div className="flex items-center flex-col">© 2024 AFH Metalmecánicos. All rights reserved.</div>
            </div>
        </footer>
    )
}