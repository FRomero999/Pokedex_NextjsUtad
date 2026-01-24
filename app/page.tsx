"use client"

import WelcomeCard from "@/components/WelcomeCard";
import InfoCard from "@/components/InfoCard";

export default function Home() {


  return (
    <>
    <main className="flex flex-col items-center justify-center bg-white dark:bg-black rounded-lg p-8 shadow max-w-5xl w-full mx-auto">
      <WelcomeCard />

      <div className="flex justify-center gap-6 mt-12 w-full">
        <InfoCard
          title="Busca Pokémon"
          description="Encuentra información detallada sobre cualquier Pokémon usando el buscador de la Pokédex."
        />
        <InfoCard
          title="Explora la Lista"
          description="Navega por la colección completa de Pokémon y descubre sus tipos, estadísticas y evoluciones."
        />
        <InfoCard
          title="Guarda tus Favoritos"
          description="Crea tu propia lista de Pokémon favoritos para un acceso rápido y personalizado."
        />
      </div>
    </main>
    </>
  );
}
