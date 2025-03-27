import Image from "next/image";
import PokemonListSection from "./ui/pokemonlistsection";


export default function Home() {
  return (
    <div >
      <main className="container">
        <h1>Pokemon</h1>

        <PokemonListSection/>
      </main>
      <footer className="container">
        <h6>Hulllo</h6>
      </footer>
    </div>
  );
}
