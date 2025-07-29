// src/app/movies/[id]/page.tsx
import Link from 'next/link';
import { movies } from '@/data/movies';

interface MovieDetailPageProps {
  params: { id: string }
}

export default async function MovieDetailPage({ params }: MovieDetailPageProps) {
  const { id } = await params;
  
  const movieId = parseInt(id, 10);
  const movie = movies.find(m => m.id === movieId);

  if (!movie) {
    return (
      <main className="container mx-auto py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">映画が見つかりません</h1>
          <Link href="/" className="text-blue-500 hover:underline">
            ← ホームに戻る
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto py-8 px-4">
      <Link href="/" className="text-blue-500 hover:underline mb-4 inline-block">
        ← 一覧に戻る
      </Link>
      
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-gray-600">
              <span className="font-semibold">監督:</span> {movie.director}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">公開年:</span> {movie.year}
            </p>
          </div>
          <div>
            <p className="text-gray-600">
              <span className="font-semibold">ジャンル:</span> {movie.genre}
            </p>
            <p className="text-yellow-500">
              <span className="font-semibold">評価:</span> ⭐ {movie.rating}
            </p>
          </div>
        </div>
        
        {movie.description && (
          <div className="border-t pt-4">
            <h2 className="text-xl font-semibold mb-2">📝 あらすじ</h2>
            <p className="text-gray-700">{movie.description}</p>
          </div>
        )}
      </div>
    </main>
  );
}
