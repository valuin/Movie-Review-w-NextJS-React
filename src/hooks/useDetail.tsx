import { useState, useEffect } from 'react';

type MovieDetails = {
  title: string;
  overview: string;
  release_date: string;
  genres: { id: number; name: string }[];
  poster_path: string;
};

const useMovieDetails = (id:number) => {
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

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
        setError(error as Error);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return { movieDetails, loading, error };
};

export default useMovieDetails;