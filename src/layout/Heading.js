import React from "react";

import heading from "../assets/images/svg/heading.svg";

const Heading = ({ title }) => {
  return (
    <div className="app_heading p-6 relative">
      <img
        className="absolute w-64 -top-20 -left-14"
        src={heading}
        alt="Heading"
      />
      <h1 className="text-6xl z-20 relative">{title}</h1>
    </div>
  );
};

export default Heading;
