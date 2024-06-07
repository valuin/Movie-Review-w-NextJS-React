import { useState, useEffect } from "react";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

function useByGenre(genreIds: number[]): Movie[] {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const allMovies: Movie[] = [];
      for (const id of genreIds) {
        const response: Movie[] = await fetchMoviesByGenre(id);
        allMovies.push(...response);
      }
      setMovies(allMovies);
    };

    fetchMovies();
  }, [JSON.stringify(genreIds)]);

  return movies;
}

async function fetchMoviesByGenre(genreId: number): Promise<Movie[]> {
  const apiKey = process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY; // replace with your actual API key
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  const movies = data.results; // MovieDB API returns the movies in the 'results' property

  return movies.slice(0, 8); // Return only the first 8 movies
}

export default useByGenre;
