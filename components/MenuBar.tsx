"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuBar() {
  // Obtenemos la ruta actual usando el hook usePathname de Next.js.
  // Esto nos permite saber en qué página estamos para poder resaltar el enlace correspondiente en la barra de menú.
  const pathname = usePathname();

  return (
    <nav className="w-full bg-blue-800 dark:bg-blue-950 text-white px-8 py-4 shadow flex items-center justify-between">
      <div className="text-xl font-bold">MiSitio</div>
      <div className="flex space-x-6">
        {/* 
          Este enlace utiliza el componente Link de Next.js para navegar a la ruta raíz ("/") de la aplicación.
          La clase CSS aplicada incluye "hover:underline", lo que significa que cuando el usuario pasa el cursor sobre el enlace, el texto se subrayará.
          Además, si la ruta actual (pathname) es exactamente "/", se añade "font-semibold" (letra más gruesa), 
          y "border-b-2 border-white" que dibuja una línea blanca en la parte inferior del enlace. 
          Esto sirve para resaltar visualmente cuál página está activa en el menú.
        */}
        <Link
          href="/"
          className={`hover:underline ${pathname === "/" ? "font-semibold border-b-2 border-white" : ""}`}
        >
          Inicio
        </Link>
        <Link
          href="/list"
          className={`hover:underline ${pathname === "/list" ? "font-semibold border-b-2 border-white" : ""}`}
        >
          Listado de Pokémon
        </Link>
        <Link
          href="/about"
          className={`hover:underline ${pathname === "/about" ? "font-semibold border-b-2 border-white" : ""}`}
        >
          Acerca de
        </Link>
        
      </div>
    </nav>
  );
}