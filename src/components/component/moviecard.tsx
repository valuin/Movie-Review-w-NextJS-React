"use client";
import React, { useEffect, useState } from "react";

const MovieCard = ({ title, posterUrl }) => {
  return (
    <a href="#">
      <div className="flex flex-col justify-between items-center max-w-sm rounded-3xl shadow-lg mb-5 mr-10">
        <img
          className="rounded-xl aspect-[11/16] max-w-60 relative object-cover hover:scale-105 transition duration-100"
          src={posterUrl}
          alt="Movie Poster"
        />
        <div className="w-250 flex flex-row justify-center items-center">
          <div className="font-bold text-xl mt-5 overflow-ellipsis">
            {title}
          </div>
        </div>
      </div>
    </a>
  );
};

export default MovieCard;
