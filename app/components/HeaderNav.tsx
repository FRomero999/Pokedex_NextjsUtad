import Link from "next/link";

export default function HeaderNav(){
    return(
        <header>
          <nav className="flex gap-2 justify-center">
            <Link href="/" className="hover:bg-amber-200">Inicio</Link>
            <Link href="/about" className="hover:bg-amber-200">Acerca de</Link>
            <Link href="/contact" className="hover:bg-amber-200">Contacto</Link>
          </nav>
        </header>
    )
}