"use client";

import React, { useState } from "react";
import { LoginFormState } from "@/interfaces/LoginFormState";
import { LoginProps } from "@/interfaces/LoginProps";
import { Usuario } from "@/interfaces/Usuario";

/**
 * Login es un formulario para iniciar sesión.
 * 
 * Props:
 *  - onSubmit?: función. Se ejecuta cuando se envía el formulario con los datos del usuario.
 * 
 * El formulario incluye campos para: username y password.
 */

export default function Login({ onSubmit }: LoginProps) {
  const [form, setForm] = useState<LoginFormState>({
    username: "",
    password: "",
  });

  // Manejo genérico de los campos del formulario usando name
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.username || !form.password) {
      alert("Por favor, completa todos los campos requeridos.");
      return;
    }

    const usuarioData: Usuario = {
      username: form.username,
      password: form.password,
    };

    if (onSubmit) {
      onSubmit(usuarioData);
    }

    

    // Limpiar el formulario después de enviar
    setForm({
      username: "",
      password: "",
    });

  };

  return (
    <div className="bg-white dark:bg-black rounded-lg p-8 shadow max-w-md w-full mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-blue-900 dark:text-blue-100">
        Iniciar Sesión
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Campo Username */}
        <div>
          <label htmlFor="username" className="block text-sm font-medium mb-2 text-zinc-800 dark:text-zinc-200">
            Usuario *
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={form.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-blue-200 dark:border-blue-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100"
            placeholder="Ingresa tu nombre de usuario"
            required
          />
        </div>

        {/* Campo Password */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-2 text-zinc-800 dark:text-zinc-200">
            Contraseña *
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-blue-200 dark:border-blue-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100"
            placeholder="Ingresa tu contraseña"
            required
          />
        </div>

        {/* Botón de envío */}
        <button
          type="submit"
          className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}
