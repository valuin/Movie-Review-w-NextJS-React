"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const MovieCard = ({ id, title, posterUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link href={`/movies/${id}`}>
        <div
          className="flex flex-col justify-between items-center max-w-sm rounded-3xl shadow-lg mb-16"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            className={`rounded-xl aspect-[11/16] max-w-60 relative object-cover ${
              isHovered ? "scale-105" : ""
            } transition duration-100`}
            src={posterUrl}
            alt="Movie Poster"
          />
          <div className="w-250 flex flex-row justify-center items-center h-20">
            <div
              className={`font-bold text-xl mt-5 overflow-ellipsis ${
                isHovered ? "text-red-500" : ""
              }`}
            >
              {title}
            </div>
          </div>
        </div>
    </Link>
  );
};

export default MovieCard;