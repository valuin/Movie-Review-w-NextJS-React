import { useState, useEffect } from 'react';

const useMovieDetails = (id:number) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMovieDetails(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return { movieDetails, loading, error };
};

export default useMovieDetails;