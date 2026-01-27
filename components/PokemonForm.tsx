"use client";

import React, { useState } from "react";
import { PokemonFormData } from "@/interfaces/PokemonFormData";
import { PokemonFormProps } from "@/interfaces/PokemonFormProps";
import { PokemonFormState } from "@/interfaces/PokemonFormState";

/**
 * PokemonForm es un formulario para crear o editar un Pokémon.
 * 
 * Props:
 *  - onSubmit?: función. Se ejecuta cuando se envía el formulario con los datos del Pokémon.
 * 
 * El formulario incluye campos para: ID, nombre, imagen (URL), tipos y descripción.
 */

export default function PokemonForm({ onSubmit }: PokemonFormProps) {
  // Unificación de todos los useState en uno solo para los campos del formulario
  const [form, setForm] = useState<PokemonFormState>({
    id: "",
    nombre: "",
    image: "",
    tipoInput: "",
    tipo: [],
    descripcion: "",
  });

  // Manejo genérico de los campos del formulario usando name
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Función para añadir un tipo a la lista
  const handleAddTipo = () => {
    const tipoTrimmed = form.tipoInput.trim();
    if (tipoTrimmed && !form.tipo.includes(tipoTrimmed)) {
      setForm((prev) => ({
        ...prev,
        tipo: [...prev.tipo, tipoTrimmed],
        tipoInput: "",
      }));
    }
  };

  // Función para eliminar un tipo de la lista
  const handleRemoveTipo = (tipoToRemove: string) => {
    setForm((prev) => ({
      ...prev,
      tipo: prev.tipo.filter((tipo) => tipo !== tipoToRemove),
    }));
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !form.id ||
      !form.nombre ||
      !form.image ||
      form.tipo.length === 0 ||
      !form.descripcion
    ) {
      alert("Por favor, completa todos los campos requeridos.");
      return;
    }

    const pokemonData: PokemonFormData = {
      id: parseInt(form.id),
      nombre: form.nombre,
      image: form.image,
      tipo: form.tipo,
      descripcion: form.descripcion,
    };

    if (onSubmit) {
      onSubmit(pokemonData);
    }

    // Limpiar el formulario después de enviar
    setForm({
      id: "",
      nombre: "",
      image: "",
      tipoInput: "",
      tipo: [],
      descripcion: "",
    });
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
            name="id"
            value={form.id}
            onChange={handleChange}
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
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
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
            name="image"
            value={form.image}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-blue-200 dark:border-blue-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100"
            placeholder="https://ejemplo.com/imagen.png"
            required
          />
        </div>

        {/* Campo Tipos */}
        <div>
          <label htmlFor="tipoInput" className="block text-sm font-medium mb-2 text-zinc-800 dark:text-zinc-200">
            Tipos *
          </label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              id="tipoInput"
              name="tipoInput"
              value={form.tipoInput}
              onChange={handleChange}
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
          {form.tipo.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {form.tipo.map((tipo, idx) => (
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
            name="descripcion"
            value={form.descripcion}
            onChange={handleChange}
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
