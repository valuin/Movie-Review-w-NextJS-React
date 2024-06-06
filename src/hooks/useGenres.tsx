import { useState, useEffect } from "react";

const useGenres = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY}`
      );
      const data = await response.json();
      setGenres(data.genres);
    };

    fetchGenres();
  }, []);

  return genres;
};

export default useGenres;