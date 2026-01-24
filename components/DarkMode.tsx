"use client";

import { useContext, useEffect } from "react";
import { AppContext } from "@/contexts/AppContext";

/**
 * Componente que sincroniza el modo oscuro del contexto con la clase 'dark' en el elemento HTML
 * Este componente debe estar dentro de AppContextProvider
 */
export default function DarkMode() {
  const context = useContext(AppContext);

  useEffect(() => {
    if (!context) return;
    
    const { isDarkMode } = context;
    const htmlElement = document.documentElement;
    
    // Aplicar o remover la clase dark inmediatamente
    if (isDarkMode) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
    
    // Debug: verificar que la clase se está aplicando
    console.log("Dark mode:", isDarkMode, "HTML classList:", htmlElement.classList.toString());
  }, [context?.isDarkMode, context]);

  return null; // Este componente no renderiza nada
}
