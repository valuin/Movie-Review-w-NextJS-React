'use client'
import Image from "next/image";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/component/navbarmovie";
import React, { useEffect, useState } from 'react';
import MovieList from "@/components/component/movielist";
import Footer from "@/components/component/footer";
import useNowPlaying from "@/hooks/useNowPlaying";


// to do

//                  fix the media query so that it resize the whole page together and to fit the screen ✅
// add hamburger menu
//                  add a search bar ✅
//                  make cards for the movies ✅
//                  add a footer ✅
// start working on routing
// get movies from search
// get movie details using dynamic routing

export default function Home() {
  return (
    <div className="bg-neutral-950 overflow-x-hidden">
      <main className="w-full h-full flex flex-col bg-neutral-950">
        <div className="relative z-10">
          <Navbar />
        </div>

        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-full h-full items-center justify-center">
            <Image
              alt="Oppenheimer"
              src="/opp3.jpg"
              objectFit="cover"
              width={1920}
              height={1080}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-neutral-950 to-transparent "></div>
        </div>

        <div className="relative w-full h-full flex p-10 mb-10 bg-neutral-950 flex-col items-center justify-center space-y-2">
          <h1 className="text-2xl lg:text-4xl mr-5 font-semibold">
            Track Your Favorite Movies
          </h1>
          <p className="text-md lg:text-lg mr-5 text-neutral-50">
            Keep track of your favorite movies and get recommendations for new
            ones.
          </p>
        </div>

        <div className="w-full h-full flex flex-col justify-end">
          <h2 className="text-2xl ml-24 mb-5 font-semibold text-neutral-50">
            Now Playing
          </h2>
          <div className="grid grid-cols-1 gap-4 p-5">
            <MovieList useMoviesHook={useNowPlaying} />
          </div>
        </div>


      </main>
      <Footer />
    </div>
  );
}
