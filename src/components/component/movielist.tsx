import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import useNowPlaying from '@/hooks/useNowPlaying';

const MovieCard = dynamic(() => import('@/components/component/moviecard'), { ssr: false });

const MovieList = () => {
  const movies = useNowPlaying();

  return (
    <div className="grid grid-cols-1 gap-4 justify-center items-center mx-7 md:grid-cols-2 xl:grid-cols-4">
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          posterUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
      ))}
    </div>
  );
};

export default MovieList;