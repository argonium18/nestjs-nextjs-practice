import MovieCard from '@/components/MovieCard';
import SearchBar from '@/components/SearchBar';
import MovieList from '@/components/MovieList';
import { getFilteredMovies } from '@/app/actions';
import { Suspense } from 'react';


function MovieListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="border border-gray-200 rounded-lg p-4 animate-pulse">
          <div className="h-6 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-1"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-1"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
      ))}
    </div>
  );
}

export default async function Home({
  searchParams
}: {
  searchParams: { search?: string; genre?: string }
}) {
  const params = await searchParams;
  const search = params ?.search || '';
  const genre = params ?.genre || 'all';

  return(
    <main>
      <SearchBar/>
      <Suspense fallback={<MovieListSkeleton/>}>
        <MovieList search={search} genre={genre}/>
      </Suspense>
    </main>
  )
}
