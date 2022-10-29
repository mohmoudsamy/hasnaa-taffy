import React from "react";

import logo from "../assets/images/logo/logo.webp";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fas,
  faPhone,
  faLocationDot,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas, faLocationDot, faClock, faHeart);
const phone = <FontAwesomeIcon icon={faPhone} />;
const map = <FontAwesomeIcon icon={faLocationDot} />;
const clock = <FontAwesomeIcon icon={faClock} />;
const heart = <FontAwesomeIcon icon={faHeart} />;

const Footer = () => {
  return (
    <div className="app_footer py-10">
      <div className="container">
        <div className="app_footer-content grid grid-cols-1 md:grid-cols-2 gap-10 text-center md:text-left">
          <div className="col-span-1">
            <div className="app_footer-logo">
              <img
                className="w-52 m-auto md:m-0"
                src={logo}
                alt="Hasnaa Taffy"
              />
            </div>
            <p className="text-2xl pt-5">
              Tempor excepteur anim est excepteur veniam mollit eu amet aute.
            </p>
          </div>
          <div className="app_footer-info">
            <h3>
              <span>{map} </span>Street name 123 - New York
            </h3>
            <h3>
              <span>{phone} </span>Tel: +20-152-1542-215
            </h3>
            <h3>
              <span>{clock} </span>Mon-Sat: 9am-5pm
            </h3>
          </div>
          <div className="app_footer-copyright col-span-1 md:col-span-2 text-center text-2xl">
            <h3>
              All Rights Reserved For
              <span className="app_footer-copyright_name"> Hasnaa Taffy</span>
            </h3>
            <h4>
              Made with <span className="heart">{heart}</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
