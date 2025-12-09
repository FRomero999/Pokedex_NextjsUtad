export default function ContactPage(){


    return(

    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-white dark:bg-black">
      <h1 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-100">Contacto</h1>
      <form className="flex flex-col gap-4 w-full max-w-md bg-zinc-100 dark:bg-zinc-800 p-6 rounded shadow">
        <label className="flex flex-col gap-1">
          <span className="text-zinc-800 dark:text-zinc-100">Nombre</span>
          <input
            type="text"
            name="nombre"
            className="rounded border border-zinc-300 p-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
            required
            autoComplete="off"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-zinc-800 dark:text-zinc-100">Correo electrónico</span>
          <input
            type="email"
            name="email"
            className="rounded border border-zinc-300 p-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
            required
            autoComplete="off"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-zinc-800 dark:text-zinc-100">Mensaje</span>
          <textarea
            name="mensaje"
            rows={4}
            className="rounded border border-zinc-300 p-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
            required
          ></textarea>
        </label>
        <button
          type="submit"
          className="bg-amber-400 hover:bg-amber-500 text-black font-semibold py-2 px-4 rounded transition"
        >
          Enviar
        </button>
      </form>
    </main>

    )

}