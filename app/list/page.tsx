"use client";

import { useEffect, useState } from "react";
import PokemonCard from "@/components/PokemonCard";
import Pokemon from "@/types/Pokemon";

export default function PokemonListPage() {
  // useState es un hook de React que nos permite añadir y manejar un estado local dentro de un componente funcional.
  // En este caso, `selectedPokemon` es la variable de estado que guarda el número del Pokémon seleccionado, y 
  // `setSelectedPokemon` es la función usada para actualizar ese valor.
  // El argumento de useState (en este caso `null`) es el valor inicial del estado.
  // Cada vez que usamos setSelectedPokemon(nuevoValor), el componente se vuelve a renderizar con el nuevo estado.
  const [selectedPokemon, setSelectedPokemon] = useState<number | null>(null);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
 

  /**
   * El hook useEffect permite ejecutar código cuando el componente se monta (o cuando cambian ciertas dependencias).
   * En este caso, proporcionamos un arreglo vacío como segunda dependencia ([]), lo que significa que el efecto solo se ejecutará una vez, justo después del primer renderizado del componente.
   * 
   * Dentro del useEffect, definimos una función asincrónica llamada fetchPokemons que se encarga de obtener la lista de Pokémon desde el backend.
   * 
   * 1. Llamada fetch: Utilizamos `fetch` para realizar una petición HTTP al endpoint "http://localhost:3001/pokemons".
   * 2. Comprobación de estado: Si la respuesta no es exitosa (`!res.ok`), arrojamos un error indicando que no se pudo cargar la lista de Pokémon.
   * 3. Decodificación: Si la petición fue exitosa, convertimos la respuesta a formato JSON usando `res.json()`.
   * 4. Actualización de estado: Llamamos a `setPokemons(data)` para almacenar la lista de Pokémon obtenida en el estado local del componente.
   * 
   * Finalmente, llamamos a fetchPokemons inmediatamente para ejecutar la carga al renderizar la página.
   */
  useEffect(() => {
    async function fetchPokemons() {
      // Realizamos petición al backend para obtener los Pokémon
      const res = await fetch("http://localhost:3001/pokemons");
      // Si la respuesta no fue correcta, lanzamos un error
      if (!res.ok)
        throw new Error("No se pudo cargar la lista de pokémon.");
      // Obtenemos los datos en formato JSON
      const data = await res.json();
      
      // Guardamos los Pokémon en el estado local
      setLoading(false);
      setPokemons(data);
    }
    // Ejecutamos la función de obtención de datos cuando se monta el componente
    fetchPokemons();
  }, []);

  return (
    <main className="flex justify-center items-center bg-white dark:bg-black rounded-lg p-8 shadow max-w-5xl w-full mx-auto">
      <div className="flex flex-row flex-wrap gap-6 justify-center">

        {/* 
          Mostramos este mensaje solo mientras loading es true.
          Cuando el componente se monta, loading está en true. 
          Cuando la carga de la lista de pokémon termina (ya se han obtenido los datos del backend y se han almacenado en el estado), loading se debe poner en false, y este mensaje dejará de mostrarse. 
          Así el usuario sabe que la información aún se está cargando.
        */}
        {loading && <p>Cargando datos</p>}

        {
          pokemons.map( (pokemon,idx) => (

            <PokemonCard key={idx}
              image={pokemon.image}
              number={pokemon.id}
              name={pokemon.nombre}
              types={pokemon.tipo}
              description={pokemon.descripcion}
              isSelected={selectedPokemon === pokemon.id}
              onClick={() => setSelectedPokemon(pokemon.id)}
            />            

          ))
        }


      </div>
    </main>
  );
}
