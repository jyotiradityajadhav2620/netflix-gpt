import React from "react";
import MovieList from "./movieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  if (!movies?.nowPlayingMovies) return null;

  return (
    <div className="relative z-20 -mt-100">
      <MovieList
        title="Now Playing"
        movies={movies.nowPlayingMovies}
      />
      <MovieList
        title="Horror"
        movies={movies.nowPlayingMovies}
      />
    </div>
  );
};

export default SecondaryContainer;