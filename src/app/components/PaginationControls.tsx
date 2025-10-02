
import Link from 'next/link';

export default function PaginationControls({ 
  hasPrev, 
  hasNext,
  currentOffset,
  limit
}: { 
  hasPrev: boolean; 
  hasNext: boolean;
  currentOffset: number;
  limit: number;
}) {
  const prevOffset = Math.max(0, currentOffset - limit);
  const nextOffset = currentOffset + limit;

  return (
    <div className="flex justify-center gap-4 mt-8">
      <Link
        href={`/?offset=${prevOffset}&limit=${limit}`}
        className={`px-4 py-2 rounded-md font-medium ${
          hasPrev
            ? 'bg-blue-500 text-white hover:bg-blue-700'
            : 'bg-gray-200 text-gray-500 pointer-events-none'
        } transition-colors`}
      >
        Prev
      </Link>

      <Link
        href={`/?offset=${nextOffset}&limit=${limit}`}
        className={`px-4 py-2 rounded-md font-medium ${
          hasNext
            ? 'bg-blue-500 text-white hover:bg-blue-700'
            : 'bg-gray-200 text-gray-500 pointer-events-none'
        } transition-colors`}
      >
        Next
      </Link>
    </div>
  );
}
