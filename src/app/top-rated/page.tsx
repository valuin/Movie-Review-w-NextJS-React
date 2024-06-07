"use client";
import React from "react";
import MovieList from "@/components/component/movielist";
import Navbar from "@/components/component/navbarmovie";
import useTopRated from "@/hooks/useTopRated";
import Footer from "@/components/component/footer";

export default function TopRated() {
  return (
    <div className="flex flex-col">
      <Navbar />

      <div className="mt-28 w-full h-full flex flex-col justify-end">
        <h2 className="text-2xl ml-20 mb-5 font-semibold text-neutral-50">
          Top Rated
        </h2>
        <div className="grid grid-cols-1 gap-4 p-5">
          <MovieList useMoviesHook={useTopRated} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
