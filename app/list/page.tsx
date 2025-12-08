import PokemonCard from "@/components/PokemonCard";

export default function PokemonListPage() {
  return (
    <main className="flex justify-center items-center bg-white dark:bg-black rounded-lg p-8 shadow max-w-5xl w-full mx-auto">
      <div className="flex flex-row flex-wrap gap-6 justify-center">
        <PokemonCard
          image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
          number={1}
          name="bulbasaur"
        />
        <PokemonCard
          image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
          number={4}
          name="charmander"
        />
        <PokemonCard
          image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
          number={7}
          name="squirtle"
        />
        <PokemonCard
          image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
          number={25}
          name="pikachu"
        />
        <PokemonCard
          image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png"
          number={39}
          name="jigglypuff"
        />
      </div>
    </main>
  );
}
