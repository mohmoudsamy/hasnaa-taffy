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

const Sidebar = ({ links, setOpenCart, cartRef }) => {
  // Set Sidebar State
  const [openNavbar, setOpenNavbar] = useState(false);

  // Create Reusable Function For Closing Navabrs Floaitng Containers
  const closeFloatingContainer = (iconRef, containerRef, stateFunc) => {
    document.body.addEventListener("click", (e) => {
      if (
        iconRef.current &&
        !iconRef.current.contains(e.target) &&
        !containerRef.current.contains(e.target)
      ) {
        stateFunc(false);
      }
    });
  };

  // Close Sidebar On Body Click
  const barsRefIcon = useRef(null);
  const sideBarRef = useRef(null);
  closeFloatingContainer(barsRefIcon, sideBarRef, setOpenNavbar);

  // Close Cart On Body Click
  const cartRefIcon = useRef(null);
  closeFloatingContainer(cartRefIcon, cartRef, setOpenCart);

  // Set Search Bar State
  const [visibleSearch, setVisibleSearch] = useState(false);

  // Close Search Bar Overlay On Body Click
  const searchIconRef = useRef(null);
  const searchRef = useRef(null);
  closeFloatingContainer(searchIconRef, searchRef, setVisibleSearch);

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

  const uppernavRef = useRef(null);
  useEffect(() => {
    // Trigger Navbar Background Own Scroll
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        uppernavRef.current.classList.add("bg_scroll");
      } else {
        uppernavRef.current.classList.remove("bg_scroll");
      }
    });

    // Apply Focus To Search Bar
    if (visibleSearch) {
      document.querySelector(".app_search input").focus();
    }
  });

  // Search Bar Structure
  const serachBar = () => {
    return (
      <div className="app_search-overlay flex justify-center items-center fixed h-full top-0 left-0 w-full z-[1000]">
        <div
          className="app_search-overlay_wrapper relative w-2/3 h-2/3 rounded flex justify-center items-center"
          ref={searchRef}
        >
          <div
            className="app_search-overlay_close-btn absolute top-2 right-4 py-1 px-2 cursor-pointer rounded"
            onClick={() => setVisibleSearch(false)}
          >
            ESC
          </div>
          <span className="text-2xl mr-6 cursor-pointer">{search}</span>
          <input
            className="text-lg indent-1 py-1 px-2 w-1/3 border-b-2"
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>
    );
  };

  // Navbar Structure
  return (
    <>
      {/* Uppernav */}
      <div
        className="uppernav py-4 fixed z-[600] border-b-2 w-full px-4 md:px-0"
        ref={uppernavRef}
      >
        <div className={`app_search ${visibleSearch ? "block" : "hidden"}`}>
          {serachBar()}
        </div>
        <div className="container flex items-start flex-col sm:flex-row mx-auto">
          <div className="sidebar_logo py-2 sm:py-0">
            <a href="/">
              <img className="w-52" src={logo} alt="Hasnaa Taffy" />
            </a>
          </div>
          <ul className="uppernav_items text-3xl flex w-full justify-end leading-normal py-2 sm:py-0">
            <li
              className="cursor-pointer transition-colors duration-200"
              onClick={() => setVisibleSearch(true)}
            >
              <span ref={searchIconRef}>{search}</span>
            </li>
            <li
              className="cursor-pointer mx-6 transition-colors duration-200"
              onClick={() => setOpenCart(true)}
              ref={cartRefIcon}
            >
              {cart}
            </li>
            <li
              className="bars cursor-pointer transition-colors duration-200"
              onClick={() => setOpenNavbar(!openNavbar)}
              ref={barsRefIcon}
            >
              {bars}
            </li>
          </ul>
        </div>
      </div>
      {/* Sidebar Navabr */}
      <div
        className={`sidebar transition-all duration-500 pt-20 px-6 h-screen fixed right-full top-0 translate-x-0 z-[700] ${
          openNavbar ? "translate-x-full" : "translate-x-0"
        }`}
        ref={sideBarRef}
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
