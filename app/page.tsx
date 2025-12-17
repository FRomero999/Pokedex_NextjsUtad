import WelcomeHero from "./components/WelcomeHero";
import CardSection from "./components/CardSection";

export default function Home() {

  
  return (
    <main className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-center p-16 bg-white dark:bg-black sm:items-start m-auto">
      
      <WelcomeHero
        title="Titulo de la aplicación"
        subtitle="Subtitulo de la aplicación web de ejemplo"
      ></WelcomeHero>

      <CardSection></CardSection>


    </main>
  );
}
