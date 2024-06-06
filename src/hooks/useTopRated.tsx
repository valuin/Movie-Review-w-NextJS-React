import { useState, useEffect } from 'react';

const useTopRated = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY}`);
      const data = await response.json();
      setMovies(data.results.slice(0, 8));
    };

    fetchMovies();
  }, []);

  return movies;
};

export default useTopRated;