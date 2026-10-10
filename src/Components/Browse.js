import React, { useEffect } from "react";
import Header from "./Header";
import { API_CONSTANTS } from "../Utils/constants";
import { log } from "firebase/firestore/pipelines";
import { addNowPlayingMovies } from "../Utils/moviesSlice";
import { useDispatch } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies( );
  return (
    <div> 
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
