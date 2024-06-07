import React, { useEffect, useState } from "react";
import Link from "next/link";
import Skeleton from 'react-loading-skeleton';

type MovieCardProps = {
  id: number;
  title: string;
  posterUrl: string | null;
  isLoading: boolean;
};

const MovieCard: React.FC<MovieCardProps> = ({ id, title, posterUrl, isLoading }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/movies/${id}`}>
        <div
          className="flex flex-col justify-between items-center max-w-sm rounded-3xl shadow-lg mb-16"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isLoading ? (
            <Skeleton height={250} width={175} />
          ) : (
            <img
              className={`rounded-xl aspect-[11/16] max-w-60 relative object-cover ${
                isHovered ? "scale-105" : ""
              } transition duration-100`}
              src={posterUrl ? posterUrl : "/oppPoster.jpg"}
              alt="Movie Poster"
            />
          )}
          <div className="w-250 flex flex-row justify-center items-center h-20">
            {isLoading ? (
              <Skeleton width={200} height={30} />
            ) : (
              <div
                className={`font-bold text-xl mt-5 overflow-ellipsis ${
                  isHovered ? "text-red-500" : ""
                }`}
              >
                {title}
              </div>
            )}
          </div>
        </div>
    </Link>
  );
};

export default MovieCard;