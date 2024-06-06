import { useState, useEffect } from "react";

function useByGenre(genreIds:any) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const allMovies = [];
      for (const id of genreIds) {
        const response = await fetchMoviesByGenre(id);
        allMovies.push(response);
      }
      setMovies(allMovies);
    }

    fetchMovies();
  }, [genreIds]);

  return movies;
}
async function fetchMoviesByGenre(genreId) {
  const apiKey = process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY; // replace with your actual API key
  const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  const movies = data.results; // MovieDB API returns the movies in the 'results' property

  return movies.slice(0, 8); // Return only the first 8 movies
}

export default useByGenre;