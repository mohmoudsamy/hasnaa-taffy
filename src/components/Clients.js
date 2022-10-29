import React from "react";

import Heading from "../layout/Heading";

import Slider from "./Slider";

const Clients = () => {
  return (
    <div className="app_clients mt-10 relative py-10">
      <div className="container relative z-10">
        <Heading title={"Our Clients"} />
        <div className="app_clients-content mt-10">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Clients;
