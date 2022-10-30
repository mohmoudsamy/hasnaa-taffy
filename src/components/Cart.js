import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas, faCircleXmark, faXmark);
const closeMark = <FontAwesomeIcon icon={faCircleXmark} />;
const deleteMark = <FontAwesomeIcon icon={faXmark} />;

const Cart = ({ setOpenCart, openCart, cartContent, cartRef }) => {
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
      className={`app_cart fixed z-[700] p-4 h-screen w-72 left-full top-0 translate-x-0 transition-transform duration-300 grid grid-rows-6 ${
        openCart ? "-translate-x-full" : "translate-x-0"
      }`}
      ref={cartRef}
    >
      <div className="app_cart-close_mark cursor-pointer text-3xl flex justify-between row-span-1">
        <span className="mr-6">My Cart </span>
        <span onClick={() => setOpenCart(false)}>{closeMark}</span>
      </div>
      <ul className="app_cart-cart_content px-2 row-span-5 overflow-scroll">
        {renderCartDeals()}
      </ul>
      <div className="app_cart-btns row-span-1 flex flex-col mt-4">
        <a
          href="/"
          className="hover:opacity-70 transition-opacity mb-2 p-2 text-center"
        >
          View Cart
        </a>
        <a
          href="/"
          className="hover:opacity-70 transition-opacity p-2 text-center"
        >
          Checkout
        </a>
      </div>
    </div>
  );
};

export default Cart;
