import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute px-6 md:px-12 pt-2 md:pt-52 text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-3xl md:text-6xl font-bold">{title}</h1>

      <p className="hidden md:inline-block py-6 text-lg w-1/3">{overview}</p>

      <div>
        <button className="bg-white text-black px-6 py-2 md:px-12 md:py-4 text-lg md:text-xl rounded-lg mr-2 hover:bg-opacity-80">
          ▶ Play
        </button>

        <button className="hidden md:inline-block bg-gray-500 text-white px-12 py-4 text-xl rounded-lg hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
