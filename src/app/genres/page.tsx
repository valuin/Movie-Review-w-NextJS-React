"use client";
import React from "react";
import useGenres from "@/hooks/useGenres";
import useByGenre from "@/hooks/useByGenre";
import MovieList from "@/components/component/movielist";
import MovieCard from "@/components/component/moviecard";
import Navbar from "@/components/component/navbarmovie";

import { map } from "zod";
import Footer from "@/components/component/footer";

export default function Genres() {
  const genres = useGenres();
  const limitedGenres = genres.slice(0, 8); // Limit the genres to 8
  const genreIds = limitedGenres.map((genre) => genre.id);
  const movies = useByGenre(genreIds);


  return (
    <div className="flex flex-col overflow-x-hidden">
      <Navbar />
      <div className="mt-28 w-full h-full ml-6 flex flex-col justify-end">
        <h2 className="text-2xl ml-14 px-1 mb-5 font-semibold text-neutral-50">
          Genres
        </h2>
        <div className="flex flex-col gap-4 p-5 ml-8">
          {limitedGenres.map((genre, index) => (
            <div key={index}>
              <p className="text-2xl text-neutral-50 mb-5 ml-2">{genre.name}</p>
              <div className="flex flex-row gap-6 ml-1 overflow-y-visible">
                {movies[index] &&
                  movies[index].map((movie, index) => (
                    <MovieCard
                      key={movie.index}
                      id={movie.id}
                      title={movie.title}
                      posterUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
