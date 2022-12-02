import React from "react";
import { FaStar } from "react-icons/fa";

function Card({ img, rating, reviewCount, location, title, price, color }) {
  return (
    <div className="airbnb-card">
      <img src={img} alt="" />
      <div className="airbnb-card-content">
        <div className="card-stats">
          <FaStar color={color} />
          <span>{rating}</span>
          <span>({reviewCount})&#x2022;</span>
          <span>{location}</span>
        </div>
        <p>{title}</p>
        <p>
          <span style={{ fontWeight: "bold" }}>From ${price}</span> /person
        </p>
      </div>
    </div>
  );
}

export default Card;
