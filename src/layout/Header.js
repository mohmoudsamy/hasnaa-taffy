import React, { useState } from "react";

import Sidebar from "./header-appendages/Sidebar";
import Video from "./header-appendages/Video";
import Cart from "../components/Cart";

const Header = ({ dealCartInfo }) => {
  const links = ["Home", "About", "Our Services", "Gallery", "Menu", "Contact"];

  // Share Cart Open State
  const [openCart, setOpenCart] = useState(false);

  return (
    <div className="app_header h-screen relative">
      <div className="relative">
        <Sidebar links={links} setOpenCart={setOpenCart} />
        <Cart
          setOpenCart={setOpenCart}
          openCart={openCart}
          cartContent={dealCartInfo}
        />
      </div>
      <div>
        <Video />
      </div>
    </div>
  );
};

export default Header;
