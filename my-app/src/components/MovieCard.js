import React from "react";
import { MovieControls } from "./MovieControls";
//component to show information about movie
//type its depends to show in watched page (array) or watched list
export const MovieCard = ({ movie, type }) => {
  return (
    <div className="movie-card">
      <div className="overlay"></div>

      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      />

      <MovieControls type={type} movie={movie} />
    </div>
  );
};
