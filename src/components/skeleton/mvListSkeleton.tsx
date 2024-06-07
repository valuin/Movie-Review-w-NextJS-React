// MovieListSkeleton.tsx
import React from 'react';
import MovieCardSkeleton from './mvCardSkeleton';

const MovieListSkeleton = () => (
  <div className="grid grid-cols-1 gap-4 justify-center items-center md:grid-cols-2 xl:grid-cols-4">
    {[...Array(4)].map((_, i) => (
      <MovieCardSkeleton key={i} />
    ))}
  </div>
);

export default MovieListSkeleton;