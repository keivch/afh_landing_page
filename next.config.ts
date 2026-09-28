import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuración para SEO
  trailingSlash: false,
  poweredByHeader: false,
  
  // Configuración de imágenes para mejor SEO
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Headers para SEO y seguridad
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  
  // Redirecciones para SEO. Solo aplican si esos dominios apuntan a este mismo sitio.
  async redirects() {
    const canonicalHosts = [
      "afhmetalmecanicos.com",
      "www.afhmetalmecanicos.com",
      "www.afhmetalmecanico.com",
    ];

    return [
      ...canonicalHosts.map((host) => ({
        source: "/:path*",
        has: [{ type: "host" as const, value: host }],
        destination: "https://afhmetalmecanico.com/:path*",
        permanent: true,
      })),
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/inicio',
        destination: '/',
        permanent: true,
      },
      {
        source: '/contacto',
        destination: '/contact_us',
        permanent: true,
      },
      {
        source: '/nosotros',
        destination: '/about_us',
        permanent: true,
      },
      {
        source: '/cotizacion',
        destination: '/contact_us',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
