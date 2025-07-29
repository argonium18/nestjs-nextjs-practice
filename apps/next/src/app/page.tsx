import Image from "next/image";
import MovieCard from '@/components/MovieCard';
import FruitList from '@/components/FruitList';
import {movies} from '../data/movies';
import App from '@/components/Props';

export default function Home() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        🎬 ムービーコレクション
      </h1>
      <div className="flex flex-wrap justify-center">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            {...movie}
          />
        ))}
      </div>
    </main>
  );
}