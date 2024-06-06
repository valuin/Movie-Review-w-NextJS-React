"use client";
import React from "react";
import MovieList from "@/components/component/movielist";
import Navbar from "@/components/component/navbarmovie";
import usePopular from "@/hooks/usePopular";

export default function popular() {
  return (
    <div className="flex flex-col">
      <Navbar />

      <div className="mt-28 w-full h-full flex flex-col justify-end">
        <h2 className="text-2xl ml-20 mb-5 font-semibold text-neutral-50">
          Popular This Month
        </h2>
        <div className="grid grid-cols-1 gap-4 p-5">
          <MovieList useMoviesHook={usePopular} />
        </div>
      </div>
    </div>
  );
}
