import MovieCard from './MovieCard';
import { getFilteredMovies } from '@/app/actions';

export default async function MovieList({ 
  search, 
  genre 
}: { 
  search: string; 
  genre: string;
}) {
  // 意図的な遅延（デモ用）
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const filteredMovies = await getFilteredMovies(search, genre);
  
    return(
      <>
        {(search || genre !== 'all') && (
          <p>
            検索結果：{filteredMovies.length}件
            {search && <span> (「{search}」を検索) </span>}
          </p>
        )}
  
        <div>
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie, index) => 
              <MovieCard key={index} {...movie} />
            )
          ):(
            <div>
              <p>
                検索条件に一致する映画が見つかりませんでした。
              </p>
            </div>
          )}
          </div>
      </>
    );
  }
