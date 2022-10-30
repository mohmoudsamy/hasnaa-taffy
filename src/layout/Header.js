import React, { useState, useRef } from "react";

import Sidebar from "./header-appendages/Sidebar";
import Video from "./header-appendages/Video";
import Cart from "../components/Cart";

const Header = ({ dealCartInfo }) => {
  const links = ["Home", "About", "Our Services", "Gallery", "Menu", "Contact"];

  // Set Cart Ref
  const cartRef = useRef(null);

  // Share Cart Open State
  const [openCart, setOpenCart] = useState(false);

  return (
    <div className="app_header h-screen relative">
      <div className="relative">
        <Sidebar links={links} setOpenCart={setOpenCart} cartRef={cartRef} />
        <Cart
          setOpenCart={setOpenCart}
          openCart={openCart}
          cartContent={dealCartInfo}
          cartRef={cartRef}
        />
      </div>
      <div>
        <Video />
      </div>
    </div>
  );
};

export default Header;
