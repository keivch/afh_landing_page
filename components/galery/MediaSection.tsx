"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";

interface GalleryImage {
  id: number;
  url: string;
  alt: string;
  title: string;
}

interface GalleryVideo {
  id: number;
  url: string;
  poster: string;
  title: string;
  description: string;
}

const videos: GalleryVideo[] = [
  {
    id: 1,
    url: "/videos/soldadura.mp4",
    poster: "/afh2.jpeg",
    title: "Soldadura",
    description: "Trabajo de soldadura en taller y en obra.",
  },
  {
    id: 2,
    url: "/videos/escalera.mp4",
    poster: "/galeria/balcon.jpg",
    title: "Escaleras y barandas",
    description: "Montaje de escalera y elementos de circulación.",
  },
  {
    id: 3,
    url: "/videos/puertas.mp4",
    poster: "/galeria/ventana.jpg",
    title: "Puertas y ventanería",
    description: "Fabricación de puertas y marcos metálicos.",
  },
  {
    id: 4,
    url: "/videos/fachada.mp4",
    poster: "/galeria/fachada.jpg",
    title: "Fachada",
    description: "Cerramiento y fachada metálica en obra.",
  },
  {
    id: 5,
    url: "/videos/fuera.mp4",
    poster: "/galeria/fuera.jpg",
    title: "Montaje exterior",
    description: "Avance del trabajo visto desde el exterior de la obra.",
  },
];

const images: GalleryImage[] = [
  {
    id: 1,
    url: "/galeria/fachada.jpg",
    alt: "Barandas de vidrio instaladas sobre una losa en una vivienda en obra",
    title: "Barandas de vidrio",
  },
  {
    id: 2,
    url: "/galeria/vigas.jpg",
    alt: "Pérgola de acero y celosías metálicas en una terraza",
    title: "Pérgola y celosías",
  },
  {
    id: 3,
    url: "/galeria/ventana.jpg",
    alt: "Ventanal con marco metálico y cubierta de acero",
    title: "Ventanal metálico",
  },
  {
    id: 4,
    url: "/galeria/balcon.jpg",
    alt: "Viga metálica y baranda de vidrio en un balcón",
    title: "Estructura de balcón",
  },
  {
    id: 5,
    url: "/galeria/soportes.jpg",
    alt: "Detalle de soportes y perfiles metálicos bajo una cubierta de vidrio",
    title: "Soportes de cubierta",
  },
  {
    id: 6,
    url: "/galeria/fuera.jpg",
    alt: "Vista exterior de la obra con cerramiento y cubierta",
    title: "Vista exterior",
  },
  {
    id: 7,
    url: "/galeria/muro.jpg",
    alt: "Muro calado y estructura metálica superior en la misma obra",
    title: "Detalle de fachada",
  },
];

export default function MediaSection() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<GalleryVideo | null>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
        setSelectedVideo(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedImage || selectedVideo ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage, selectedVideo]);

  return (
    <>
      <section className="bg-[#0b2239] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#98e73c]">
            Galería
          </p>
          <h1 className="mt-3 max-w-3xl font-public-sans text-4xl font-bold leading-tight md:text-5xl">
            Trabajos de estructura, cerramiento y soldadura
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-300">
            Fotos y videos de obras reales: pérgolas, barandas, ventanería,
            fachadas y soldadura hechas por AFH Metalmecánicos.
          </p>
        </div>
      </section>

      <section className="w-full bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-public-sans text-3xl font-bold text-[#0b2239] md:text-4xl">
            Videos de obra
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
              <button
                key={video.id}
                type="button"
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white text-left shadow-sm"
                onClick={() => setSelectedVideo(video)}
              >
                <span className="relative block aspect-video">
                  <Image
                    src={video.poster}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <span className="absolute inset-0 bg-[#0b2239]/25 transition group-hover:bg-[#0b2239]/40" />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex size-14 items-center justify-center rounded-full bg-[#98e73c] text-[#0b2239] shadow-lg">
                      <Play className="ml-0.5 size-6" fill="currentColor" aria-hidden />
                    </span>
                  </span>
                </span>
                <span className="block p-5">
                  <span className="block font-public-sans text-lg font-semibold text-[#0b2239]">
                    {video.title}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-gray-600">
                    {video.description}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f7f8fa] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-public-sans text-3xl font-bold text-[#0b2239] md:text-4xl">
            Fotos del proyecto
          </h2>
          <p className="mt-4 max-w-2xl text-gray-600">
            Estructura metálica, barandas de vidrio, celosías y cerramientos
            instalados en obra.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((image) => (
              <button
                key={image.id}
                type="button"
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white text-left shadow-sm"
                onClick={() => setSelectedImage(image)}
              >
                <span className="relative block h-64">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </span>
                <span className="block px-5 py-4 font-semibold text-[#0b2239]">
                  {image.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedVideo && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={selectedVideo.title}
          onClick={() => setSelectedVideo(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 text-white"
            aria-label="Cerrar video"
            onClick={() => setSelectedVideo(null)}
          >
            <X className="size-8" />
          </button>
          <div
            className="flex max-h-full w-full max-w-3xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <p className="mb-3 text-center text-lg font-semibold text-white">
              {selectedVideo.title}
            </p>
            <video
              className="max-h-[75vh] max-w-full rounded-lg bg-black"
              controls
              autoPlay
              poster={selectedVideo.poster}
              src={selectedVideo.url}
            >
              Tu navegador no reproduce este video.
            </video>
          </div>
        </div>
      )}

      {selectedImage && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 text-white"
            aria-label="Cerrar imagen"
            onClick={() => setSelectedImage(null)}
          >
            <X className="size-8" />
          </button>
          <img
            src={selectedImage.url}
            alt={selectedImage.alt}
            className="max-h-[85vh] max-w-full rounded-lg object-contain"
          />
        </div>
      )}
    </>
  );
}
