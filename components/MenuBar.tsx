import Link from "next/link";

export default function MenuBar() {
  return (
    <nav className="w-full bg-blue-800 dark:bg-blue-950 text-white px-8 py-4 shadow flex items-center justify-between">
      <div className="text-xl font-bold">
        MiSitio
      </div>
      <div className="flex space-x-6">
        <Link href="/" className="hover:underline">
          Inicio
        </Link>
        <Link href="/list" className="hover:underline">
          Listado de Pokémon
        </Link>
        <Link href="/about" className="hover:underline">
          Acerca de
        </Link>
        {/* Puedes agregar más enlaces aquí */}
      </div>
    </nav>
  );
}