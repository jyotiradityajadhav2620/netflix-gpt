import React, { useEffect } from "react";
import Header from "./Header";
import { API_CONSTANTS } from "../Utils/constants";
import { log } from "firebase/firestore/pipelines";
import { addNowPlayingMovies } from "../Utils/moviesSlice";
import { useDispatch } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
