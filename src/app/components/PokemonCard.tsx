
import Image from 'next/image';
import { PokemonDetail } from '@/types/pokemon';

export default function PokemonCard({ pokemon }: { pokemon: PokemonDetail }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-transform duration-300 hover:bg-blue-500 hover:scale-105 hover:shadow-lg animate-fadeIn">
      <div className="flex flex-col items-center p-4">
        {pokemon.sprites.front_default ? (
          <Image
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            width={96}
            height={96}
            priority
            className="transition-opacity duration-300 hover:opacity-80"
          />
        ) : (
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-500">?</span>
          </div>
        )}
        <h3 className="mt-2 text-lg font-semibold capitalize text-gray-800">
          {pokemon.name}
        </h3>
      </div>
    </div>
  );
}
