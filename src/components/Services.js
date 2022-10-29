import React from "react";

import Heading from "../layout/Heading";
import servicesImg from "../assets/images/services.jpg";

const servicesName = [
  "Custom Shape",
  "Free Shipping",
  "New Design",
  "High Quality Service",
];

const Services = () => {
  const serviceBox = () => {
    return servicesName.map((serv, i) => {
      return (
        <div
          className="app_services-service_box transition-colors duration-500 cursor-pointer rounded-3xl py-4 px-6"
          key={i}
        >
          <div className="app_services-service_box-title text-2xl uppercase mb-3 font-bold">
            <span className="block">0{i + 1}.</span>
            <span>{serv}</span>
          </div>
          <div className="app_services-service_box-description text-lg">
            Do enim excepteur est enim mollit sint do mollit.
          </div>
        </div>
      );
    });
  };

  return (
    <div className="app_services mt-10">
      <div className="container px-[1rem] md:px-[2rem] lg:px-[6.5rem]">
        <Heading title={"Our Services"} />
        <div className="grid grid-rows-2 grid-cols-1 xl:grid-rows-1 xl:grid-cols-5 xl:gap-x-10 gap-y-10 mt-10">
          <div className="app_services-img col-span-2 lg:col-span-3">
            <img
              className="rounded-3xl h-[30rem] w-full"
              src={servicesImg}
              alt="Services"
            />
          </div>
          <div className="app_services-service col-span-2 grid grid-cols-2 gap-10">
            {serviceBox()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
