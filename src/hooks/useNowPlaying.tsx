import { useState, useEffect } from 'react';

const useNowPlaying = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=68b28a6a4026f0e7249efe9440ffee05');
      const data = await response.json();
      setMovies(data.results.slice(0, 8));
    };

    fetchMovies();
  }, []);

  return movies;
};

export default useNowPlaying;