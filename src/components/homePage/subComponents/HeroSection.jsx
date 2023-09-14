import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <div className="hero_section">
      <div className="overlay">
        <div className="header">
          <div className="logo">
            <img src="Logo2.png" alt="Logo" />
          </div>
          <div className="buttons">
            <button className="button1">Sign Up</button>
            <button className="button2">Login</button>
          </div>
        </div>
      </div>
      <div className="content">
        <h1 className="heading">Your Cravings, Our Delivery</h1>
        <div className="search_bar">
          <div className="search-input">
            <input type="text" placeholder="Search for Restaurants or Items" />
            <span className="search_icon"></span>
          </div>
          <button className="search-button">Search</button>
        </div>
      </div>
    </div>
  );
}
