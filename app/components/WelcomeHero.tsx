interface WelcomeHeroProps{
    title: string;
    subtitle: string;
}

export default function WelcomeHero( { title, subtitle } : WelcomeHeroProps ){

    return(

    <section className="w-full flex flex-col items-center justify-center gap-4 py-12" >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 dark:text-zinc-100 text-center">
           {title}
        </h1>
        <p className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 text-center max-w-2xl">
          {subtitle}
        </p>
      </section>
        
    )

}