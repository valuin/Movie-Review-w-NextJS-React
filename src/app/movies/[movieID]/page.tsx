"use client";
import React from "react";
import useMovieDetails from "@/hooks/useDetail";
import Navbar from "@/components/component/navbarmovie";
import Footer from "@/components/component/footer";

export default function MovieDetail({ params }) {
  const { movieDetails, loading, error } = useMovieDetails(params.movieID);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="flex flex-col overflow-x-hidden bg-neutral-950">
        <Navbar />
      <div className="mt-28 w-full h-full flex flex-row justify-end">
        <img
          className="rounded-xl aspect-[11/16] max-w-96 ml-12 object-cover"
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt={movieDetails.title}

        />
        <div className="flex flex-col mx-14">
            <h1 className="text-7xl font-semibold mb-6">{movieDetails.title}</h1>
            <p>{movieDetails.overview}</p>
        </div>
      </div>
        <Footer />
    </div>
  );
}
