
"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

interface CarouselImage {
  id: number;
  src: string;
  alt: string;
  title?: string;
}

interface ImageCarouselProps {
  images?: CarouselImage[];
  autoAdvanceInterval?: number;
  showControls?: boolean;
  showIndicators?: boolean;
  className?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images = [
    {
      id: 1,
      src: "/afh2.jpeg",
      alt: "Paisaje de montaña",
      title: "Soldadura de precisión"
    },
    {
      id: 2,
      src: "/afh3.jpeg",
      alt: "Bosque verde"
      
    },
    {
      id: 3,
      src: "/afh4.jpeg",
      alt: "Lago tranquilo"
      
    },
    {
      id: 4,
      src: "/afh5.jpeg",
      alt: "Playa al atardecer"
    },
    {
      id: 5,
      src: "/afh8.jpeg"
    },
    {
      id: 6,
      src: "/afh6.jpeg"
    },
    {
      id: 7,
      src: "/afh7.jpeg"
    }
  ],
  autoAdvanceInterval = 4000,
  showControls = true,
  showIndicators = true,
  className = ""
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-avance del carrusel
  useEffect(() => {
    if (!isPlaying || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, autoAdvanceInterval);

    return () => clearInterval(interval);
  }, [isPlaying, isHovered, images.length, autoAdvanceInterval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div 
      className={`relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-2xl bg-gray-900 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Contenedor principal de imágenes */}
      <div className="relative aspect-video w-full">
        <div 
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image) => (
            <div key={image.id} className="w-full flex-shrink-0 relative">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlay con gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              {/* Título de la imagen */}
              {image.title && (
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-lg md:text-xl font-semibold drop-shadow-lg">
                    {image.title}
                  </h3>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Controles de navegación */}
        {showControls && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200 hover:scale-110 backdrop-blur-sm"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200 hover:scale-110 backdrop-blur-sm"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Botón play/pause */}
            <button
              onClick={togglePlayPause}
              className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200 hover:scale-110 backdrop-blur-sm"
              aria-label={isPlaying ? "Pausar" : "Reproducir"}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 md:w-5 md:h-5" />
              ) : (
                <Play className="w-4 h-4 md:w-5 md:h-5" />
              )}
            </button>
          </>
        )}
      </div>

      {/* Indicadores */}
      {showIndicators && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white scale-110 shadow-lg'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Barra de progreso */}
      {isPlaying && !isHovered && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20">
          <div 
            className="h-full bg-white/70 transition-all duration-100 ease-linear"
            style={{
              width: `${((Date.now() % autoAdvanceInterval) / autoAdvanceInterval) * 100}%`
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;