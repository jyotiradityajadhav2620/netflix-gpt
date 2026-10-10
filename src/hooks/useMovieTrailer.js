import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_CONSTANTS } from "../Utils/constants";
import { addTrailerVideo } from "../Utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMoviesVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_CONSTANTS,
    );
    const jason = await data.json();
    const Trailer = jason.results.filter((video) => video.type == "Trailer");
    const FilteredTrailor = Trailer.length ? Trailer[0] : jason.results[0];
    dispatch(addTrailerVideo(FilteredTrailor));
  };
  useEffect(() => {
    getMoviesVideo();
  }, []);
};

export default useMovieTrailer;
