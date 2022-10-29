import React, { useState } from "react";

import Header from "../layout/Header";
import Offer from "./Offer";
import Categories from "./Categories";
import Services from "./Services";
import Deals from "./Deals";
import Clients from "./Clients";
import Footer from "../layout/Footer";

import "../assets/style/app.css";

const App = () => {
  // Store Deal Info In State To Add To Cart
  const [dealInfo, setDealInfo] = useState([]);

  return (
    <div className="app">
      <Header dealCartInfo={dealInfo} />
      <Offer />
      <Categories />
      <Services />
      <Deals onAddToCartClick={setDealInfo} />
      <Clients />
      <Footer />
    </div>
  );
};

export default App;
