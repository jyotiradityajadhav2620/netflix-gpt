import React from "react";
import { IMG_CDN_URL } from "../Utils/constants";

const movieCard = ({ MovieName, posterPath }) => {
  return (
    <div className="w-48">
      <img alt={MovieName} src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default movieCard;
