"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useContext } from "react";
import Login from "./Login";
import { AppContext } from "@/contexts/AppContext";

export default function MenuBar() {
  // Obtenemos la ruta actual usando el hook usePathname de Next.js.
  // Esto nos permite saber en qué página estamos para poder resaltar el enlace correspondiente en la barra de menú.
  const pathname = usePathname();
  const [loginModal, setLoginModal] = useState<boolean>(false);
  
  // Obtenemos el contexto para acceder a isDarkMode y setIsDarkMode
  const context = useContext(AppContext);
  
  if (!context) {
    throw new Error("MenuBar debe estar dentro de AppContextProvider");
  }
  
  const { isDarkMode, setIsDarkMode } = context;

  return (

    <>
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


      {/* Modal para Login */}
      {loginModal &&
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="relative">
            {/* Botón de cierre en esquina superior derecha del modal */}
            <button
              type="button"
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white text-2xl font-bold"
              aria-label="Cerrar modal"
              onClick={() => {
                setLoginModal(false);
              }}
            >
              &times;
            </button>
            <Login />
          </div>
        </div>
      }

      {/* Botón flotante modo oscuro/claro */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed bottom-6 right-6 z-50 rounded-full p-3 bg-blue-500 dark:bg-zinc-800 text-white dark:text-blue-300 shadow-lg hover:bg-blue-600 dark:hover:bg-zinc-700 transition-colors"
        aria-label="Cambiar modo claro/oscuro"
        type="button"
      >
        {isDarkMode ? (
          // Icono sol para modo claro
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="currentColor" />
            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        ) : (
          // Icono luna para modo oscuro
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke="currentColor" strokeWidth="2" d="M21 12.79A9.004 9.004 0 1111.21 3a7 7 0 109.79 9.79v0z" fill="currentColor" />
          </svg>
        )}
      </button>

    </>
  );
}