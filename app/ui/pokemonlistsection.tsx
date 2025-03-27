import { Pokedex } from "pokeapi-js-wrapper";
import PokemonEntry from "./pokemonentry";

export default async function PokemonListSection () {
    let pokedex = new Pokedex();

    let pokemonentries = await pokedex.getPokemonsList({offset: 0, limit: 25}).then((list) => {
        return list.results.map((pokemon) => {
            return <PokemonEntry pokemonName={pokemon.name}/>
        });
    });

    return (
        <section className="container">
            {pokemonentries ? pokemonentries : <h2>No Pokemon</h2>}
        </section>
    );
}