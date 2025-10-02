
import { Pokemon } from '@/types/pokemon';
import { fetchPokemonDetail } from '@/lib/pokeapi';
import PokemonCard from '@/app/components/PokemonCard';

export default async function PokemonList({ pokemons }: { pokemons: Pokemon[] }) {
  const detailedPokemons = await Promise.all(
    pokemons.map(p => fetchPokemonDetail(p.url))
  );

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {detailedPokemons.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}
