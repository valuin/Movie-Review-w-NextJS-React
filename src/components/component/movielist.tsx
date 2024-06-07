import React from "react";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import MovieListSkeleton from "../skeleton/mvListSkeleton";
import MovieCardSkeleton from "../skeleton/mvCardSkeleton";

const MovieCard = dynamic(() => import("@/components/component/moviecard"), {
  ssr: false,
});

type MovieListCards = {
  id: number;
  title: string;
  poster_path: string;
};

type MovieListProps = {
  useMoviesHook: () => MovieListCards[]; // Assuming Movie is a type you've defined elsewhere
};

const MovieList: React.FC<MovieListProps> = ({ useMoviesHook }) => {
  const movies = useMoviesHook();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (movies.length > 0) {
      setIsLoading(false);
    }
  }, [movies]);

  return (
    <div className="grid grid-cols-1 gap-4 justify-center items-center md:grid-cols-2 xl:grid-cols-4">
      {isLoading
        ? Array(8).fill(<MovieCardSkeleton />)
        : movies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              posterUrl={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : null
              }
              isLoading={isLoading}
            />
          ))}
    </div>
  );
};

export default MovieList;
