'use client'
import {searchMovies} from '@/app/actions'
 

export default function SearchBar({
    defaultSearch = '',
    defaultGenre = 'all'
  }: {
    defaultSearch?: string;
    defaultGenre?: string;

  }
){

  return(
    <form action={searchMovies} className="space-y-4 mb-6">
      <div className="flex gap-2">
          <input 
            type="text" 
            name="search"
            placeholder="映画を検索…"
            className = "flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          <button 
            type="submit"
            className = "px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            検索
          </button>
        </div>
        
        <div className= "flex gap-4 items-center">
          <label className="flex items-center gap-2">
            <select
              name="genre"
              defaultValue={defaultGenre}
              className="px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">すべて</option>
              <option value="アクション">アクション</option>
              <option value="アニメ">アニメ</option>
              <option value="SF">SF</option>
            </select>
          </label>
        </div>
      </form>
      
  )
}