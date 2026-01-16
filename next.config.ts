import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // La sección "images" en la configuración de Next.js permite controlar qué dominios externos están permitidos para cargar imágenes remotas usando el componente <Image /> de Next.js.
  // 
  // remotePatterns es un arreglo de patrones que describe, con objetos, qué URLs externas se aceptan. 
  // Cada patrón puede filtrar por protocolo (por ejemplo, solo https), el hostname (dominio, incluso con wildcards como ** para subdominios), un puerto específico (si se requiere), y el pathname (ruta) o search (query params) que se permite.
  // 
  // En este ejemplo, los patrones añaden permiso para:
  // 1. Todas las imágenes cuyo dominio termina en ".githubusercontent.com" (de cualquier subdominio) con HTTPS.
  // 2. Todas las imágenes servidas desde "picsum.photos" (también con HTTPS) para cualquier ruta del path.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.githubusercontent.com', // Permite imágenes desde cualquier subdominio de githubusercontent.com, por ejemplo: raw.githubusercontent.com
        port: '', // Sin restricción de puerto (por defecto 443 para https)
        search: '', // Sin filtro sobre la query string, permite cualquiera
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos', // Permite imágenes desde el dominio picsum.photos
        port: '', // Sin restricción de puerto
        pathname: '/**', // Permite cualquier ruta dentro de picsum.photos
      },
    ],
  },
};


export default nextConfig;
