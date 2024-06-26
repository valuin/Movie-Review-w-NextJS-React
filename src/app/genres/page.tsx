"use client";
import React, { useState, useEffect } from "react";
import useGenres from "@/hooks/useGenres";
import useByGenre from "@/hooks/useByGenre";
import MovieCard from "@/components/component/moviecard";
import Navbar from "@/components/component/navbarmovie";
import Footer from "@/components/component/footer";
import MovieCardSkeleton from "@/components/skeleton/mvCardSkeleton";


type Genre = {
  id: number;
  name: string;
};

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  genre_ids: number[];
};

export default function Genres() {
  const genres: Genre[] = useGenres();
  const limitedGenres = genres.slice(0, 8); // Limit the genres to 8
  const genreIds = limitedGenres.map((genre) => genre.id);
  let movies: Movie[] = useByGenre(genreIds);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (movies.length > 0) {
      // Delay the setting of isLoading to false by 1 second
      setTimeout(() => {
        setIsLoading(false);
      }, 200);
    }
  }, [movies]);

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
                {isLoading
                  ? Array(8).fill(<MovieCardSkeleton />)
                  : (() => {
                      if (movies && Array.isArray(movies)) {
                        let movieElements = [];
                        let addedMovieIds = new Set(); // Keep track of added movie IDs
                        for (let i = 0; i < movies.length; i++) {
                          let movie = movies[i];
                          // Check if the movie's genre matches the current genre and it hasn't been added yet
                          if (
                            movie.genre_ids.includes(genre.id) &&
                            !addedMovieIds.has(movie.id)
                          ) {
                            movieElements.push(
                              <MovieCard
                                key={i}
                                id={movie.id}
                                title={movie.title}
                                posterUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                isLoading={false}
                              />
                            );
                            addedMovieIds.add(movie.id); // Mark the movie as added
                          }
                        }
                        return movieElements;
                      }
                    })()}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
