import React from "react";

import Heading from "../layout/Heading";

import imgOne from "../assets/images/deals/01.jpg";
import imgTwo from "../assets/images/deals/02.jpg";
import imgThree from "../assets/images/deals/03.jpg";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas, solidStar, regularStar);
const starSolid = <FontAwesomeIcon icon={solidStar} />;
const starRegular = <FontAwesomeIcon icon={regularStar} />;

const Deals = ({ onAddToCartClick }) => {
  // Deals Dummy Details
  const dealsDetails = [
    {
      dealImg: imgOne,
      dealTitle: "Donuts",
      dealPrice: "18",
      dealRate: 5,
    },
    {
      dealImg: imgTwo,
      dealTitle: "Cookies",
      dealPrice: "25",
      dealRate: 3,
    },
    {
      dealImg: imgThree,
      dealTitle: "Cakes",
      dealPrice: "16",
      dealRate: 4,
    },
  ];

  // Render Exact Star Rating Number
  const starRating = (num, starType) => {
    return [...Array(num)].map((star, i) => {
      return (
        <React.Fragment key={i}>
          <span>{starType}</span>
        </React.Fragment>
      );
    });
  };

  const renderDealCard = () => {
    return dealsDetails.map((deal, i) => {
      return (
        <div className="app_deals-wrapper_box p-6" key={i}>
          <div className="app_deals-wrapper_box-img">
            <img
              className="rounded-lg"
              src={deal.dealImg}
              alt={deal.dealTitle}
            />
          </div>
          <div className="app_deals-wrapper_box-content mt-6 text-center">
            <h2 className="text-2xl font-bold">{deal.dealTitle}</h2>
            <p className="text-2xl mt-2">${deal.dealPrice}</p>
            <div className="rate mt-4">
              {starRating(deal.dealRate, starSolid)}
              {starRating(5 - deal.dealRate, starRegular)}
            </div>
            <button
              className="cart_btn mt-6"
              onClick={() => {
                onAddToCartClick((oldArr) => [...oldArr, dealsDetails[i]]);
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="app_deals mt-10">
      <div className="container">
        <Heading title={"Best Deals"} />
        <div className="app_deals-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 mt-10">
          {renderDealCard()}
        </div>
      </div>
    </div>
  );
};

export default Deals;
