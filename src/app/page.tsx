'use client'
import Image from "next/image";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/component/navbarmovie";
import React, { useEffect, useState } from 'react';
import MovieList from "@/components/component/movielist";


// to do

//                  fix the media query so that it resize the whole page together and to fit the screen ✅
// add hamburger menu
// add a search bar
//                  make cards for the movies ✅
//                  add a footer ✅
// start working on routing
// 

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

        <div className="w-full h-full flex p-10 mb-10 bg-neutral-950 flex-col items-center justify-center space-y-2">
          <h1 className="text-4xl mr-5 font-semibold text-neutral-50">
            Track Your Favorite Movies
          </h1>
          <p className="text-lg mr-5 text-neutral-50">
            Keep track of your favorite movies and get recommendations for new
            ones.
          </p>
        </div>

        <div className="w-full h-full flex flex-col justify-end ml-2">
          <h2 className="text-2xl ml-24 mb-5 font-semibold text-neutral-50">
            Now Playing
          </h2>
          <div className="grid grid-cols-1 gap-4 p-5">
            <MovieList />
          </div>
        </div>


      </main>
      <footer className="w-full mr-5 ml-14 bg-neutral-950">
        <div className="container grid w-full max-w-6xl gap-7 py-10">
          <div className="flex-wrap items-center gap-2">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/valtrizt/"
            >
              <div className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 rounded-none hover:bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-6 w-6"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
                <span className="sr-only">Instagram</span>
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/valtrizt/"
            >
              <div className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 rounded-none hover:bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current h-6 w-6"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span className="sr-only">Linkedin</span>
              </div>
            </a>
          </div>
          <p className="ml-3 text-xs text-foreground/60 sm:text-sm">
            &copy; 2024 Valtrizt. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
