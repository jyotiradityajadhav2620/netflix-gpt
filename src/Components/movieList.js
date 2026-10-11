import React from "react";
import MovieCard from "./movieCard";

const MovieList = ({ title, movies }) => {
  if (!movies?.length) return null;

  return (
    <div className="px-6 py-3 bg-black">
      <h1 className="text-3xl font-semibold py-3 text-white">
        {title}
      </h1>

      <div className="flex overflow-x-scroll hide-scrollbar">
        <div className="flex gap-4">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              MovieName={movie.title}
              posterPath={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;