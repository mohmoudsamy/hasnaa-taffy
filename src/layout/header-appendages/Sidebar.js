import React, { useState, useRef, useEffect } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fas,
  faPhone,
  faCartShopping,
  faSearch,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../../assets/images/logo/logo.webp";

library.add(fas, faFacebook, faInstagram);
const facebook = <FontAwesomeIcon icon={faFacebook} />;
const instagram = <FontAwesomeIcon icon={faInstagram} />;
const phone = <FontAwesomeIcon icon={faPhone} />;
const cart = <FontAwesomeIcon icon={faCartShopping} />;
const search = <FontAwesomeIcon icon={faSearch} />;
const bars = <FontAwesomeIcon icon={faBars} />;

const Sidebar = ({ links, setOpenCart }) => {
  // Set Sidebar State
  const [openNavbar, setOpenNavbar] = useState(false);

  // Close Sidebar On Body Click
  const barsRef = useRef(null);
  const cartRef = useRef(null);
  document.body.addEventListener("click", (e) => {
    if (barsRef.current && !barsRef.current.contains(e.target)) {
      setOpenNavbar(false);
    }
  });

  // document.body.addEventListener("click", (e) => {
  //   if (cartRef.current && !cartRef.current.contains(e.target)) {
  //     setOpenCart(false);
  //   }
  // });

  // Create Sidebar Links Structure
  const renderLinks = () => {
    return links.map((link, i) => {
      return (
        <li className="sidebar_list-item" key={i}>
          <a
            className="sidebar_list-item_link p-2 flex justify-center items-center cursor-pointer rounded transition-colors duration-300 text-lg"
            href="/"
          >
            <span>{link}</span>
          </a>
        </li>
      );
    });
  };

  // Trigger Navbar Background Own Scroll
  const uppernavRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        uppernavRef.current.classList.add("bg_scroll");
      } else {
        uppernavRef.current.classList.remove("bg_scroll");
      }
    });
  });

  // Navbar Structure
  return (
    <>
      {/* Uppernav */}
      <div
        className="uppernav py-4 fixed z-[600] border-b-2 w-full"
        onWheel={() => console.log(true)}
        ref={uppernavRef}
      >
        <div className="container flex items-start flex-col sm:flex-row mx-auto">
          <div className="sidebar_logo py-2 sm:py-0">
            <a href="/">
              <img className="w-52" src={logo} alt="Hasnaa Taffy" />
            </a>
          </div>
          <ul className="uppernav_items text-3xl flex w-full justify-end leading-normal py-2 sm:py-0">
            <li className="cursor-pointer transition-colors duration-200">
              {search}
            </li>
            <li
              className="cursor-pointer mx-6 transition-colors duration-200"
              onClick={() => setOpenCart(true)}
              ref={cartRef}
            >
              {cart}
            </li>
            <li
              className="bars cursor-pointer transition-colors duration-200"
              onClick={() => setOpenNavbar(!openNavbar)}
              ref={barsRef}
            >
              {bars}
            </li>
          </ul>
        </div>
      </div>
      {/* Sidebar Navabr */}
      <div
        className={`sidebar transition-all duration-500 pt-20 px-6 h-screen fixed z-[700] ${
          openNavbar ? "left-0" : "-left-full"
        }`}
      >
        <div className="sidebar_logo">
          <a href="/">
            <img className="w-52" src={logo} alt="Hasnaa Taffy" />
          </a>
        </div>
        <ul className="sidebar_list w-52 mt-20">{renderLinks()}</ul>
        <ul className="sidebar_info mt-20 text-center">
          <li>
            <span>{phone} </span>
            +20-124-1542-452
          </li>
          <li className="text-3xl mt-6">
            <span className="mr-2 cursor-pointer" title="Facebook">
              <a
                href="https://web.facebook.com/profile.php?id=100061274481572"
                target="_blank"
                rel="noreferrer"
              >
                {facebook}
              </a>
            </span>
            <span className="cursor-pointer" title="Instagram">
              <a
                href="https://www.instagram.com/the.dr.cake/?fbclid=IwAR0u4EY5CkvWM-P3aWmX-GWsIjNPrk_OUcAXkMn2HR2pTce5ie1NyWWdlT8"
                target="_blank"
                rel="noreferrer"
              >
                {instagram}
              </a>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
