"use client";

import React, { useState } from "react";

// Tipo de datos para el Pokémon que se envía en el formulario
interface PokemonFormData {
  id: number;
  nombre: string;
  image: string;
  tipo: string[];
  descripcion: string;
}

interface PokemonFormProps {
  onSubmit?: (pokemon: PokemonFormData) => void;
}

/**
 * PokemonForm es un formulario para crear o editar un Pokémon.
 * 
 * Props:
 *  - onSubmit?: función. Se ejecuta cuando se envía el formulario con los datos del Pokémon.
 * 
 * El formulario incluye campos para: ID, nombre, imagen (URL), tipos y descripción.
 */

export default function PokemonForm({ onSubmit }: PokemonFormProps) {
  const [id, setId] = useState<string>("");
  const [nombre, setNombre] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [tipoInput, setTipoInput] = useState<string>("");
  const [tipos, setTipos] = useState<string[]>([]);
  const [descripcion, setDescripcion] = useState<string>("");

  // Función para añadir un tipo a la lista
  const handleAddTipo = () => {
    const tipoTrimmed = tipoInput.trim();
    if (tipoTrimmed && !tipos.includes(tipoTrimmed)) {
      setTipos([...tipos, tipoTrimmed]);
      setTipoInput("");
    }
  };

  // Función para eliminar un tipo de la lista
  const handleRemoveTipo = (tipoToRemove: string) => {
    setTipos(tipos.filter(tipo => tipo !== tipoToRemove));
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    // Prevenimos el comportamiento por defecto del formulario (evita recargar la página)
    e.preventDefault();
    
    // Validamos que todos los campos requeridos estén completos
    if (!id || !nombre || !image || tipos.length === 0 || !descripcion) {
      alert("Por favor, completa todos los campos requeridos.");
      return; // Si falta algún campo, detenemos el envío
    }

    // Creamos un objeto con los datos del nuevo Pokémon, asegurándonos que id sea un número
    const pokemonData = {
      id: parseInt(id),
      nombre,
      image,
      tipo: tipos,
      descripcion,
    };

    // Si se proporcionó una función onSubmit desde las props, la llamamos y le pasamos los datos del Pokémon
    if (onSubmit) {
      onSubmit(pokemonData);
    }

    // Limpiar el formulario después de enviar
    setId("");
    setNombre("");
    setImage("");
    setTipoInput("");
    setTipos([]);
    setDescripcion("");
  };

  return (
    <div className="bg-white dark:bg-black rounded-lg p-8 shadow max-w-2xl w-full mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-blue-900 dark:text-blue-100">
        Añadir Nuevo Pokémon
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Campo ID */}
        <div>
          <label htmlFor="id" className="block text-sm font-medium mb-2 text-zinc-800 dark:text-zinc-200">
            ID *
          </label>
          <input
            type="number"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-full px-4 py-2 border border-blue-200 dark:border-blue-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100"
            required
          />
        </div>

        {/* Campo Nombre */}
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium mb-2 text-zinc-800 dark:text-zinc-200">
            Nombre *
          </label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full px-4 py-2 border border-blue-200 dark:border-blue-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100"
            required
          />
        </div>

        {/* Campo Imagen */}
        <div>
          <label htmlFor="image" className="block text-sm font-medium mb-2 text-zinc-800 dark:text-zinc-200">
            URL de Imagen *
          </label>
          <input
            type="url"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full px-4 py-2 border border-blue-200 dark:border-blue-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100"
            placeholder="https://ejemplo.com/imagen.png"
            required
          />
        </div>

        {/* Campo Tipos */}
        <div>
          <label htmlFor="tipo" className="block text-sm font-medium mb-2 text-zinc-800 dark:text-zinc-200">
            Tipos *
          </label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              id="tipo"
              value={tipoInput}
              onChange={(e) => setTipoInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleAddTipo();
                }
              }}
              className="flex-1 px-4 py-2 border border-blue-200 dark:border-blue-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100"
              placeholder="Escribe un tipo y presiona Enter o el botón"
            />
            <button
              type="button"
              onClick={handleAddTipo}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Añadir
            </button>
          </div>
          
          {/* Lista de tipos añadidos */}
          {tipos.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tipos.map((tipo, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 rounded px-3 py-1 text-sm font-medium"
                >
                  {tipo}
                  <button
                    type="button"
                    onClick={() => handleRemoveTipo(tipo)}
                    className="ml-1 text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-100"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Campo Descripción */}
        <div>
          <label htmlFor="descripcion" className="block text-sm font-medium mb-2 text-zinc-800 dark:text-zinc-200">
            Descripción *
          </label>
          <textarea
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            rows={4}
            className="w-full px-4 py-2 border border-blue-200 dark:border-blue-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 resize-y"
            required
          />
        </div>

        {/* Botón de envío */}
        <button
          type="submit"
          className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md"
        >
          Crear Pokémon
        </button>
      </form>
    </div>
  );
}
