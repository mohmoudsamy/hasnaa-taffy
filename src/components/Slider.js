import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import clientOne from "../assets/images/clients/01.jpg";
import clientTwo from "../assets/images/clients/02.jpg";
import clientThree from "../assets/images/clients/03.jpg";
import clientFour from "../assets/images/clients/04.jpg";

const Slider = () => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={2}
        slidesPerGroup={2}
        breakpoints={{
          640: { slidesPerView: 1 },
          992: { slidesPerView: 2 },
        }}
      >
        <SwiperSlide>
          <div className="grid grid-cols-3 gap-x-6 p-2 lg:p-16">
            <div className="col-span-1">
              <img className="rounded-full" src={clientOne} alt="Cake One" />
            </div>
            <div className="col-span-2">
              <p>
                Elit aliqua ex nostrud occaecat proident ipsum est fugiat enim
                ea cupidatat ea occaecat in.
              </p>
              <h3 className="font-bold text-2xl">John Wick</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-3 gap-x-6 p-2 lg:p-16">
            <div className="col-span-1">
              <img className="rounded-full" src={clientTwo} alt="Cake Two" />
            </div>
            <div className="col-span-2">
              <p>
                Elit aliqua ex nostrud occaecat proident ipsum est fugiat enim
                ea cupidatat ea occaecat in.
              </p>
              <h3 className="font-bold text-2xl">Jason Ham</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-3 gap-x-6 p-2 lg:p-16">
            <div className="col-span-1">
              <img
                className="rounded-full"
                src={clientThree}
                alt="Cake Three"
              />
            </div>
            <div className="col-span-2">
              <p>
                Elit aliqua ex nostrud occaecat proident ipsum est fugiat enim
                ea cupidatat ea occaecat in.
              </p>
              <h3 className="font-bold text-2xl">Brad Bett</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-3 gap-x-6 p-2 lg:p-16">
            <div className="col-span-1">
              <img className="rounded-full" src={clientFour} alt="Cake Four" />
            </div>
            <div className="col-span-2">
              <p>
                Elit aliqua ex nostrud occaecat proident ipsum est fugiat enim
                ea cupidatat ea occaecat in.
              </p>
              <h3 className="font-bold text-2xl">Bernard Show</h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
