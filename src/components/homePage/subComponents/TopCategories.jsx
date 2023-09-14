import React from "react";
import "./TopCategories.css";

import Pizza from "../images/hawaiian-pizza.jpg";
import Burger from "../images/big-tasty-burger.jpg";
import Drinks from "../images/refreshing-drink.jpg";
import Japanese from "../images/fresh-tuna-diet-dinner-salmon.jpg";
import Biryani from "../images/dish-with-rice.jpg";
export default function TopCategories() {
  return (
    <div className="top_categories_section">
      <h1>Top Categories</h1>

      <div className="category_container">
        <div className="scroll_button left-button">&lt;</div>

        <div className="category_box">
          <div className="category_content">
            <img src={Pizza} alt="Category 1" />
            <p>Pizza</p>
          </div>
        </div>
        <div className="category_box">
          <div className="category_content">
            <img src={Burger} alt="Category 1" />
            <p>Burger</p>
          </div>
        </div>
        <div className="category_box">
          <div className="category_content">
            <img src={Drinks} alt="Category 1" />
            <p>Drinks</p>
          </div>
        </div>
        <div className="category_box">
          <div className="category_content">
            <img src={Japanese} alt="Category 1" />
            <p>Japanese</p>
          </div>
        </div>
        <div className="category_box">
          <div className="category_content">
            <img src={Biryani} alt="Category 1" />
            <p>Biryani</p>
          </div>
        </div>
        <div className="scroll_button right-button">&gt;</div>
      </div>
    </div>
  );
}
