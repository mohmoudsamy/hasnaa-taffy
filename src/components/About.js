import React from "react";

import Heading from "../layout/Heading";
import aboutImg from "../assets/images/about.jpg";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fas,
  faSmile,
  faTruck,
  faCakeCandles,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas, faSmile, faTruck, faCakeCandles);
const happy = <FontAwesomeIcon icon={faSmile} />;
const cake = <FontAwesomeIcon icon={faCakeCandles} />;
const delivery = <FontAwesomeIcon icon={faTruck} />;

const About = () => {
  const statisticsInfo = [
    { icon: happy, count: "+300", text: "Happy Customers" },
    { icon: cake, count: "+40", text: "Cake Options" },
    { icon: delivery, count: "+80", text: "Deliveries Made" },
  ];

  const aboutStatistics = () => {
    return statisticsInfo.map((statisticsBox, i) => {
      return (
        <div
          className="app_about-info_statistics-box w-1/3 text-center flex flex-col justify-center items-center py-4 px-6 text-4xl gap-4"
          key={i}
        >
          <div className="app_about-info_statistics-box_icon">
            {statisticsBox.icon}
          </div>
          <div className="app_about-info_statistics-box_count">
            {statisticsBox.count}
          </div>
          <div className="app_about-info_statistics-box_text text-2xl">
            {statisticsBox.text}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="app_about mt-20">
      <div className="container px-[1rem] md:px-[2rem] lg:px-[6.5rem]">
        <Heading title={"About Us"} />
        <div className="grid grid-cols-3 gap-x-10 gap-y-10 pt-20">
          <div className="app_about-info col-span-2">
            <h4 className="text-lg">We Are Bakerfresh</h4>
            <h2 className="text-3xl my-3">We Love Cake</h2>
            <p className="text-lg">
              Ut sint exercitation labore qui tempor ex minim labore do Lorem
              est culpa. Incididunt velit proident amet aute fugiat sunt
              voluptate. Exercitation ut do proident id qui qui incididunt magna
              cillum et cillum sunt. In id eu ullamco consequat dolore laboris
              et aliquip ipsum reprehenderit commodo nisi. Ipsum sint nisi irure
              consequat do aliquip. Quis nulla laboris cillum ad. Ullamco
              excepteur consequat esse ad laboris eu commodo proident qui ut
              cillum ullamco proident.
            </p>
            <div className="app_about-info_statistics col-span-1 flex mt-10 rounded gap-x-4">
              {aboutStatistics()}
            </div>
          </div>
          <div className="app_about-img col-span-1 relative">
            <div className="app_about-img_overlay absolute rounded w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-500">
              <button className="mt-3 btn rounded main_btn">See More</button>
            </div>
            <img
              className="rounded-3xl h-[30rem] w-full"
              src={aboutImg}
              alt="about"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
