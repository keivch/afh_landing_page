'use client';
import { useState } from 'react';
import { Play, X } from 'lucide-react';

interface Image {
    id: number;
    url: string;
    alt: string;
}

interface Video {
    id: number;
    url: string;
    thumbnail: string;
    title: string;
    description?: string;
}

export default function MediaSection() {
    const [selectedImage, setSelectedImage] = useState<Image | null>(null);
    const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);


    // Videos cortos - reemplaza con tus propios videos
    const videos: Video[] = [
        {
            id: 1,
            url: '/videos/soldadura.mp4',
            thumbnail: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
            title: 'Proceso de Soldadura',
            description: 'Técnicas especializadas de soldadura industrial'
        },
        {
            id: 2,
            url: '/videos/escalera.mp4',
            thumbnail: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800',
            title: 'Maquinaria CNC',
            description: 'Precisión en corte y mecanizado'
        },
        {
            id: 3,
            url: '/videos/puertas.mp4',
            thumbnail: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800',
            title: 'Proceso de Ensamble',
            description: 'Montaje de estructuras metálicas'
        },
        {
            id: 4,
            url: '/videos/fachada.mp4',
            thumbnail: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800',
            title: 'Control de Calidad',
            description: 'Verificación y pruebas de productos'
        },
    ];

    // Imágenes de ejemplo
    const images: Image[] = [
        { id: 1, url: '/galeria/fachada.jpg', alt: 'Taller metalmecánico' },
        { id: 2, url: '/galeria/ventana.jpg', alt: 'Maquinaria industrial' },
        { id: 3, url: '/galeria/vigas.jpg', alt: 'Proceso de soldadura' },
        { id: 4, url: '/galeria/muro.jpg', alt: 'Equipo de trabajo' },
        { id: 5, url: '/galeria/soportes.jpg', alt: 'Productos terminados' },
        { id: 6, url: '/galeria/balcon.jpg', alt: 'Instalaciones' },
    ];

    return (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Encabezado */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-center mb-6">
                        Nuestra Experiencia en Acción
                    </h1>
                    <p className="text-1xl font-public-sans text-gray-700 leading-relaxed">
                        Descubre cómo transformamos el metal en soluciones industriales de alta calidad
                    </p>
                </div>

                {/* Grid de Videos Cortos */}
                <div className="mb-16">
                    <h3 className="text-3xl font-bold text-center mb-8">
                        Nuestros Procesos
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="zoom-in">
                        {videos.map((video) => (
                            <div
                                key={video.id}
                                className="relative group cursor-pointer"
                                onClick={() => setSelectedVideo(video)}
                            >
                                <div className="relative aspect-[9/16] rounded-xl overflow-hidden shadow-xl">
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                                    {/* Botón Play */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-xl">
                                            <Play className="w-8 h-8 text-white ml-1" fill="white" />
                                        </div>
                                    </div>

                                    {/* Info del video */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <h4 className="text-white font-bold text-lg mb-1">{video.title}</h4>
                                        {video.description && (
                                            <p className="text-gray-300 text-sm">{video.description}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Galería de Fotos */}
                <div>
                    <h3 className="text-3xl font-bold text-center mb-8">
                        Galería de Proyectos
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {images.map((image) => (
                            <div
                                key={image.id}
                                className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                                onClick={() => setSelectedImage(image)}
                            >
                                <img
                                    src={image.url}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Modal de Video */}
                {selectedVideo && (
                    <div
                        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedVideo(null)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
                            onClick={() => setSelectedVideo(null)}
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
                            <div className="aspect-video bg-black rounded-lg overflow-hidden">
                                <video
                                    className="w-full h-full"
                                    controls
                                    autoPlay
                                    src={selectedVideo.url}
                                >
                                    Tu navegador no soporta el elemento de video.
                                </video>
                            </div>
                            <div className="mt-4 text-center">
                                <h3 className="text-white text-2xl font-bold mb-2">{selectedVideo.title}</h3>
                                {selectedVideo.description && (
                                    <p className="text-gray-300">{selectedVideo.description}</p>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Modal de Imagen */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <img
                            src={selectedImage.url}
                            alt={selectedImage.alt}
                            className="max-w-full max-h-full object-contain rounded-lg"
                        />
                    </div>
                )}
            </div>
        </section>
    );
}