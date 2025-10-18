import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#0b2239] text-white py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo y descripción */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <Image
                                src="/logo4.png"
                                width={50}
                                height={50}
                                alt="Logo AFH Metalmecánicos"
                                className="rounded-lg"
                            />
                            <span className="font-bold text-xl text-white font-public-sans">
                                AFH Metalmecánicos
                            </span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4 max-w-md">
                            Especialistas en procesos metalmecánicos, fabricación industrial, 
                            soldadura y mantenimiento en Valle del Cauca, Colombia.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/afhmetalmecanicos" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#98e73c] transition-colors duration-200">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/afhmetalmecanicos" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#98e73c] transition-colors duration-200">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Enlaces rápidos */}
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-[#98e73c]">Enlaces</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200">Inicio</Link></li>
                            <li><Link href="/about_us" className="text-gray-300 hover:text-white transition-colors duration-200">Sobre nosotros</Link></li>
                            <li><Link href="/galeria" className="text-gray-300 hover:text-white transition-colors duration-200">nuestra galería</Link></li>
                            <li><Link href="/contact_us" className="text-gray-300 hover:text-white transition-colors duration-200">Contacto</Link></li>
                        </ul>
                    </div>

                    {/* Información de contacto */}
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-[#98e73c]">Contacto</h3>
                        <div className="space-y-2 text-sm text-gray-300">
                            <p>📞 +57 311 616 7972</p>
                            <p>✉️ asistenteadm@afhmetalmecanico.com</p>
                            <p>📍 Palmira, Valle del Cauca</p>
                            <p>Colombia</p>
                        </div>
                    </div>
                </div>

                {/* Línea divisoria y copyright */}
                <div className="border-t border-gray-700 mt-8 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                        <p>© 2024 AFH Metalmecánicos. Todos los derechos reservados.</p>
                        <p>Servicios en Valle del Cauca, Colombia</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}