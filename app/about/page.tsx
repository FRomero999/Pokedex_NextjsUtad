import styles from "./page.module.css"

export default function AboutPage() {

    return (

    <main className={`flex flex-col items-center justify-center min-h-screen p-8 bg-white dark:bg-black gap-6 ${styles.rojo}`}>
      Lorem, ipsum.
      <p className="max-w-2xl text-lg text-zinc-700 dark:text-zinc-300">
        Esta página tiene como objetivo proporcionar información relevante y actualizada sobre el proyecto desarrollado.
      </p>
      <p className="max-w-2xl text-lg text-zinc-700 dark:text-zinc-300">
        Aquí encontrarás detalles sobre las funcionalidades implementadas, así como recursos que te ayudarán a aprovechar al máximo la plataforma.
      </p>
      <p className="max-w-2xl text-lg text-zinc-700 dark:text-zinc-300">
        Los creadores de esta página son Francisco Romero y el equipo de desarrollo de UTAD, comprometidos con la innovación y la calidad educativa.
      </p>
    </main>

    );


}