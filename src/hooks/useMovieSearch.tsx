import { useState, useEffect } from 'react';

type MovieSearch = {
  id: number;
  title: string;
  poster_path: string;
};

function useMovieSearch(searchTerm: string) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const apiKey = process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY;
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}&page=1`);
        const data = await response.json();
        setMovies(data.results.slice(0, 12));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, [JSON.stringify(searchTerm)]);

  return { loading, movies };
}

export default useMovieSearch;