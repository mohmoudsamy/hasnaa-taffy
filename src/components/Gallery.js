import React from "react";

import Heading from "../layout/Heading";
import Slider from "./Slider";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
