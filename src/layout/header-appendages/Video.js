import React from "react";

import video from "../../assets/videos/header.mp4";

const Video = () => {
  return (
    <div className="app_video">
      <div className="app_video-overlay text-white absolute top-0 right-0 z-10 py-60 pl-10 sm:pl-32 w-full h-screen">
        <h1 className="text-7xl w-fit py-4">
          Welcome to <span>Hasnaa Taffy</span>
        </h1>
        <p className="my-6 text-2xl">
          We offer high quality, delicious,"from scratch" cakes! See our menu
          for more information
        </p>
        <button className="btn">Explore More</button>
      </div>
      <video
        className="absolute top-0 right-0 w-full h-screen object-cover"
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
