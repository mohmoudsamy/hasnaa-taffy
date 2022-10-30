import React from "react";

import Heading from "../layout/Heading";
import Slider from "./Slider";

const Gallery = () => {
  return (
    <div className="app_gallery mt-10">
      <div className="container">
        <Heading title={"Our Gallery"} />
        <div className="app_gallery-slider py-10">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
