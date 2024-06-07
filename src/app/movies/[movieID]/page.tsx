"use client";
import React from "react";
import useMovieDetails from "@/hooks/useDetail";
import Navbar from "@/components/component/navbarmovie";
import Footer from "@/components/component/footer";
import DetailSkeleton from "@/components/skeleton/detailSkeleton";

interface Params {
  movieID: number;
}

export default function MovieDetail({ params }: { params: Params }) {
  const { movieDetails, loading, error } = useMovieDetails(params.movieID);

  if (loading) {
    return (
      <div className="flex flex-col overflow-x-hidden bg-neutral-950">
        <Navbar />
        <div className="flex justify-start ml-4">
          <DetailSkeleton />
        </div>
        <Footer />
      </div>
    );
  }

  if ((error as any) instanceof Error) {
    return <p>Error: {(error as Error).message}</p>;
  }

  return movieDetails ? (
    <div className="flex flex-col overflow-x-hidden bg-neutral-950">
      <Navbar />
      <div className="mt-28 w-full h-full flex flex-row justify-end">
        <img
          className="rounded-xl aspect-[11/16] max-w-96 ml-16 object-cover"
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt={movieDetails.title}
        />
        <div className="flex flex-col mx-14">
          <h1 className="text-5xl font-semibold mb-6">{movieDetails.title}</h1>
          <h2 className="text-xl font-medium mb-4">{new Date(movieDetails.release_date).getFullYear()}</h2>
          <p className="text-lg font-medium mb-3">{movieDetails.genres.map((genre) => genre.name).join(", ")}</p>
          <p>{movieDetails.overview}</p>
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <div>Loading...</div>
  );
}
