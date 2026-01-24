"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { PokemonCardProps } from "@/interfaces/PokemonCardProps";

/**
 * PokemonCard muestra una tarjeta visual de un Pokémon, incluyendo su imagen, número y nombre.
 * 
 * Props:
 *  - image: string. URL de la imagen a mostrar.
 *  - number: number. Número de la Pokédex.
 *  - name: string. Nombre del Pokémon.
 *  - isSelected?: boolean. Si está seleccionada, aplica estilos destacados.
 *  - onClick?: función. Event handler para clics en la tarjeta.
 * 
 * Uso principal en el listado de Pokémon. 
 * Cambia el estilo visual según si está seleccionada (resalta borde y sombra).
 */

export default function PokemonCard({ image, number, name, types, description, isSelected = false, onClick }: PokemonCardProps) {
  // Hook de Next.js para manejar navegación programática.
  const router = useRouter();

  return (
    <div 
      // Cuando se hace clic en la tarjeta, si se pasó una función onClick como prop, se ejecutará.
      onClick={onClick}
      // Cuando se hace doble clic en la tarjeta, navega a la página de detalles del Pokémon usando el número en la URL.
      onDoubleClick={() => router.push(`/pokemon/${number}`)}
      className={` rounded-lg shadow-md p-4 flex flex-col items-center w-56 border cursor-pointer transition-all shadow-2xl 
        ${ isSelected  ? "border-blue-500 dark:border-blue-400 scale-110 bg-zinc-200" 
                       : "border-blue-200 dark:border-blue-900 hover:border-blue-400 dark:hover:border-blue-700 bg-white dark:bg-zinc-900"  }`}
    >      
      <h3 className="text-lg font-bold capitalize text-blue-900">{name}</h3>
      <span className="text-sm text-blue-500 font-semibold mb-1">#{number.toString().padStart(3, '0')}</span>
      <Image src={image} alt={name} width={96} height={96} className="w-24 h-24 object-contain mb-3" />
      <p className="mb-2 flex flex-wrap justify-center gap-1 ">
        {
          types.map((type, idx) => (
            <span key={idx} className="inline-block bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 rounded px-2 py-0.5 text-xs font-medium" >
              {type}
            </span>
          ))
        }
      </p>

      <p className=" text-blue-900">{ isSelected && description }</p>
    </div>
  );
}
