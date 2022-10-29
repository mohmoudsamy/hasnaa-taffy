import React from "react";

import cake from "../assets/images/categories/cake.png";
import cookie from "../assets/images/categories/cookie.png";
import cupcake from "../assets/images/categories/cupcake.png";
import donuts from "../assets/images/categories/donuts.png";

const categoriesIcons = [cake, cookie, cupcake, donuts];
const categories = ["Cake", "Cookie", "Cupcake", "Donuts"];

export const Categories = () => {
  const categoryStructure = () => {
    return categoriesIcons.map((icon, i) => {
      return (
        <div
          className="app_categories-category rounded flex flex-col justify-center items-center py-6 px-10"
          key={i}
        >
          <div className="app_categories-category_img cursor-pointer">
            <img className="w-20" src={icon} alt={categories[i]} />
          </div>
          <div className="app_categories-category_text cursor-pointer mt-6">
            <a href="/" className="text-2xl">
              {categories[i]}
            </a>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container">
      <div className="app_categories grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center mt-10 p-6 sm:p-0">
        {categoryStructure()}
      </div>
    </div>
  );
};
export default Categories;
