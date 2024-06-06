import React from 'react';
import dynamic from 'next/dynamic';

const MovieCard = dynamic(() => import('@/components/component/moviecard'), { ssr: false });

const MovieList = ({ useMoviesHook }) => {
  const movies = useMoviesHook();

  return (
    <div className="grid grid-cols-1 gap-4 justify-center items-center md:grid-cols-2 xl:grid-cols-4">
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          posterUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
      ))}
    </div>
  );
};

export default MovieList;