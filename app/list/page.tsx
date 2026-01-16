"use client";

import { useEffect, useState } from "react";
import PokemonCard from "@/components/PokemonCard";
import Pokemon from "@/types/Pokemon";
import PokemonForm from "@/components/PokemonForm";

export default function PokemonListPage() {
  // useState es un hook de React que nos permite añadir y manejar un estado local dentro de un componente funcional.
  // En este caso, `selectedPokemon` es la variable de estado que guarda el número del Pokémon seleccionado, y 
  // `setSelectedPokemon` es la función usada para actualizar ese valor.
  // El argumento de useState (en este caso `null`) es el valor inicial del estado.
  // Cada vez que usamos setSelectedPokemon(nuevoValor), el componente se vuelve a renderizar con el nuevo estado.
  const [selectedPokemon, setSelectedPokemon] = useState<number | null>(null);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  // `showForm` es un estado booleano que indica si el formulario para añadir un nuevo Pokémon se debe mostrar en pantalla o no.
  // Al llamarse `setShowForm`, podemos cambiar su valor entre `true` (visible) y `false` (oculto).
  const [showForm, setShowForm] = useState<boolean>(false);
 

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

  // Ejemplo de como podemos usar un segundo useEffect para temporizadores
  useEffect( ()=>{
    setTimeout( () => alert("Han pasado 5 segundos!"), 5000)
  },[])

  // Función para manejar el envío del formulario de nuevo Pokémon
  const handlePokemonSubmit = async (nuevoPokemon: {
    id: number;
    nombre: string;
    image: string;
    tipo: string[];
    descripcion: string;
  }) => {
    try {
      const res = await fetch("http://localhost:3001/pokemons", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoPokemon),
      });
      if (!res.ok) {
        alert("Error al añadir el Pokémon.");
        return;
      }
      alert("¡Pokémon añadido correctamente!");
    } catch {
      alert("Ocurrió un error al intentar añadir el Pokémon.");
    }
  };

  return (
    <>
    <main className="flex justify-center items-center bg-white dark:bg-black rounded-lg p-8 shadow max-w-5xl w-full mx-auto">
      <div className="flex flex-row flex-wrap gap-6 justify-center">

        {/* 
          Mostramos este mensaje solo mientras loading es true.
          Cuando el componente se monta, loading está en true. 
          Cuando la carga de la lista de pokémon termina (ya se han obtenido los datos del backend y se han almacenado en el estado), loading se debe poner en false, y este mensaje dejará de mostrarse. 
          Así el usuario sabe que la información aún se está cargando.
        */}
        {loading && <p>Cargando datos</p>}

        
        {/*
          <ul>
          {
            pokemons.map( (pokemon,hds) => (
              <li key={hds}>{pokemon.nombre}</li>
            ) )
          }
          </ul>

        */}
        
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

    <div className="flex justify-center mt-8">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow transition-colors"
        onClick={() => setShowForm(!showForm) }
      >
        Añadir Pokémon
      </button>
    </div>


    { 

    showForm && 
    
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40">
      <div className="relative w-full max-w-2xl mx-auto bg-white dark:bg-black rounded-lg shadow-lg p-8">
        <button
          className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-900 dark:hover:text-white text-2xl font-bold"
          aria-label="Cerrar"
          onClick={() => setShowForm(false)}
        >
          &times;
        </button>
        <PokemonForm onSubmit={handlePokemonSubmit} />
      </div>
    </div>
    }


    </>
  );
}
