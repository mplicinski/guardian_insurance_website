import React from "react";
import CardItem from "./CardItem";
import CardItemAlt from "./CardItemAlt";
import "./Cards.css";

const Cards = () => {
  return (
    <div>
      <div className="container">
        <div class="title h1 text-center">
          Learn more about our services below
        </div>
        <CardItem
          title="Personal Insurance"
          text="Learn about our services in Home, Auto, and Life Insurance."
          src="/images/home.jpeg"
          path="/personal"
        />
        <CardItemAlt
          title="Commerical Insurance"
          text="Lern about our services in Dumptrucks, Long Distance Hauling, and more."
          src="/images/trucks.jpg"
          path="/commercial"
        />
        <CardItem
          title="About Us"
          text="Learn more about who we are."
          src="/images/header_bg.png"
          path="/about"
        />
      </div>
    </div>
  );
};

export default Cards;
