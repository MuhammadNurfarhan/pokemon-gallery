
import { Suspense } from 'react';
import { fetchPokemonList } from '@/lib/pokeapi';
import PokemonList from '@/app/components/PokemonList';
import PokemonListSkeleton from '@/app/components/skeleton/PokemonSkeleton';
import PaginationControls from '@/app/components/PaginationControls';

const DEFAULT_LIMIT = 10;

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const sp = await searchParams;

  const offset = Number(sp.offset) || 0;
  const limit = Number(sp.limit) || DEFAULT_LIMIT;

  const data = await fetchPokemonList(offset, limit);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Pokemon Gallery
        </h1>

        <Suspense 
          key={`pokemon-list-${offset}-${limit}`}
          fallback={<PokemonListSkeleton count={limit} />}
        >
          <PokemonList pokemons={data.results} />
        </Suspense>

        <PaginationControls
          hasPrev={data.previous !== null}
          hasNext={data.next !== null}
          currentOffset={offset}
          limit={limit}
        />
      </div>
    </div>
  );
}
