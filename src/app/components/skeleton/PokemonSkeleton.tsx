
function PokemonSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow animate-pulse">
      <div className="flex flex-col items-center p-4">
        <div className="w-24 h-24 bg-gray-300 dark:bg-gray-200 rounded-full mb-3" />
        <div className="h-5 w-24 bg-gray-300 dark:bg-gray-200 rounded" />
      </div>
    </div>
  );
}

export default function PokemonListSkeleton({ count = 10 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <PokemonSkeleton key={i} />
      ))}
    </div>
  );
}
