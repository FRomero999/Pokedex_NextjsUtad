"use client";

import React, { createContext, ReactNode, useState } from "react";

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
  // Estado para el modo oscuro/claro
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const value: AppContextType = {
    isDarkMode,
    setIsDarkMode,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
