"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Pokemon from "@/types/Pokemon";

export default function PokemonPage() {
  const params = useParams();
  const id = params.id as string;
  
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        // Realizamos petición al backend para obtener el Pokémon por su ID
        const res = await fetch(`http://localhost:3001/pokemons/${id}`);
        // Si la respuesta no fue correcta, lanzamos un error
        if (!res.ok)
          throw new Error("No se pudo cargar la información del Pokémon.");
        // Obtenemos los datos en formato JSON
        const data = await res.json();
        
        // Guardamos el Pokémon en el estado local
        setPokemon(data);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar el Pokémon:", error);
        setLoading(false);
      }
    }
    
    // Ejecutamos la función de obtención de datos cuando se monta el componente o cambia el ID
    if (id) {
      fetchPokemon();
    }
  }, [id]);

  if (loading) {
    return (
      <main className="flex justify-center items-center bg-white dark:bg-black rounded-lg p-8 shadow max-w-5xl w-full mx-auto">
        <p>Cargando datos...</p>
      </main>
    );
  }

  if (!pokemon) {
    return (
      <main className="flex justify-center items-center bg-white dark:bg-black rounded-lg p-8 shadow max-w-5xl w-full mx-auto">
        <p>No se pudo cargar la información del Pokémon.</p>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center bg-white dark:bg-black rounded-lg p-8 shadow max-w-5xl w-full mx-auto">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold text-blue-900 dark:text-blue-100 capitalize">
          {pokemon.nombre}
        </h1>
        <span className="text-xl text-blue-500 font-semibold">
          #{pokemon.id.toString().padStart(3, '0')}
        </span>
        <Image 
          src={pokemon.image} 
          alt={pokemon.nombre} 
          width={200} 
          height={200} 
          className="w-48 h-48 object-contain" 
        />
        <div className="flex flex-wrap justify-center gap-2">
          {pokemon.tipo.map((type, idx) => (
            <span 
              key={idx} 
              className="inline-block bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 rounded px-3 py-1 text-sm font-medium"
            >
              {type}
            </span>
          ))}
        </div>
        <p className="text-lg text-zinc-800 dark:text-zinc-200 text-center max-w-2xl">
          {pokemon.descripcion}
        </p>
      </div>
    </main>
  );
}
