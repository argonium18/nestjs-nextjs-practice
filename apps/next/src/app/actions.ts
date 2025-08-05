'use server'

import { movies }from '@/data/movies'
import { redirect } from 'next/navigation';

export async function searchMovies(formData: FormData){
  const search = formData?.get('search') as string
  const genre = formData?.get('genre') as string

  const params = new URLSearchParams();
  if(search) params.set('search',search);
  if(genre && genre !== 'all') params.set('genre',genre);

  redirect(`/?${params.toString()}`)
}

export async function getFilteredMovies(search?: string, genre?: string) {

  let filteredMovies = [...movies];

  if(search) {
      filteredMovies = filteredMovies.filter(movie => 
        movie.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  if(genre && genre !== 'all') {
      filteredMovies = filteredMovies.filter(movie => 
        movie.genre === genre
    );
  }

  return filteredMovies
}
