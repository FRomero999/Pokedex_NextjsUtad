"use client";

import React, { createContext, ReactNode, useState, useEffect, useRef } from "react";

const STORAGE_KEY = "darkMode";

// Definimos el tipo del contexto
interface AppContextType {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

// Creamos el contexto con un valor por defecto undefined
export const AppContext = createContext<AppContextType | undefined>(undefined);

// Props para el Provider
interface AppContextProviderProps {
  children: ReactNode;
}

// Provider del contexto
export function AppContextProvider({ children }: AppContextProviderProps) {
  // Este estado controla si el modo oscuro está activado o no. Inicialmente se pone en false
  // para asegurarnos de que, tanto en el servidor como en el cliente, el valor inicial sea coherente.
  // Esto evita que haya desajustes entre lo que se renderiza en el servidor y lo que espera el cliente (hydration mismatch).
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Creamos una referencia mutable para saber si ya hemos leído la preferencia guardada en localStorage.
  // Esto nos permite evitar sobrescribir localStorage antes de haber cargado el valor inicialmente.
  const hasLoadedFromStorage = useRef(false);

  // Una vez que el componente se hidrata en el cliente, intentamos leer la preferencia guardada en localStorage.
  // Usamos queueMicrotask para asegurarnos de no cambiar el estado durante la ejecución del efecto (buena práctica y recomendado por el linter).
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY); // Buscamos el valor guardado (si existe)
    hasLoadedFromStorage.current = true; // Marcamos que ya hemos terminado de leer de localStorage
    if (saved !== null) {
      // Si existe un valor guardado (true o false), actualizamos el estado con ese valor
      queueMicrotask(() => setIsDarkMode(saved === "true"));
    }
  }, []);

  // Persistir cuando cambie el modo (evita escribir antes de haber leído de localStorage)
  useEffect(() => {
    if (!hasLoadedFromStorage.current) return;
    localStorage.setItem(STORAGE_KEY, String(isDarkMode));
  }, [isDarkMode]);

  const value: AppContextType = {
    isDarkMode,
    setIsDarkMode,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
