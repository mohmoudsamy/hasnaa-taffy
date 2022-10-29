import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas, faCircleXmark, faXmark);
const closeMark = <FontAwesomeIcon icon={faCircleXmark} />;
const deleteMark = <FontAwesomeIcon icon={faXmark} />;

const Cart = ({ setOpenCart, openCart, cartContent }) => {
  const renderCartDeals = () => {
    return cartContent.map((deal, i) => {
      return (
        <React.Fragment key={i}>
          <li className="app_cart-cart_content-item flex">
            <div className="app_cart-cart_content-item_img p-2">
              <img className="w-20" src={deal.dealImg} alt="" />
            </div>
            <div className="app_cart-cart_content-item_info p-2">
              <h3 className="font-bold">{deal.dealTitle}</h3>
              <h4>1 X ${deal.dealPrice}</h4>
            </div>
            <div className="app_cart-cart_content-item_info p-2">
              <span className="cursor-pointer">{deleteMark}</span>
            </div>
          </li>
        </React.Fragment>
      );
    });
  };
  return (
    <div
      className={`app_cart fixed top-0 z-[700] p-10 h-screen ${
        openCart ? "right-0" : "right-full"
      }`}
    >
      <div className="app_cart-close_mark cursor-pointer text-3xl flex justify-between">
        <span className="mr-6">My Cart </span>
        <span onClick={() => setOpenCart(false)}>{closeMark}</span>
      </div>
      <ul className="app_cart-cart_content mt-10 px-2">{renderCartDeals()}</ul>
    </div>
  );
};

export default Cart;
