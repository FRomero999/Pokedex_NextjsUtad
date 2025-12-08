export default function About() {
  return (
    <main className="flex flex-col items-center justify-center bg-white dark:bg-black rounded-lg p-8 shadow max-w-5xl w-full mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-blue-900 dark:text-blue-100">
          Acerca de la Pokédex
        </h1>
        <p className="text-lg text-zinc-800 dark:text-zinc-200 mb-4">
          ¡Bienvenido al Acerca de nuestra Pokédex! Este sitio está dedicado a todos los fanáticos de Pokémon que desean explorar, aprender y descubrir información sobre sus criaturas favoritas.
        </p>
        <p className="text-md text-zinc-700 dark:text-zinc-300">
          Nuestra misión es recopilar datos de todos los Pokémon, ofrecerte detalles sobre sus habilidades, tipos, evoluciones y mucho más. El equipo detrás de nuestra Pokédex está formado por entrenadores apasionados por el mundo Pokémon y la tecnología. ¡Atrévete a atraparlos todos con nosotros!
        </p>
      </main>
  );
}
