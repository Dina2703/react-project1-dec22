import React from "react";
import { FaStar } from "react-icons/fa";
function Card() {
  return (
    <div className="airbnb-card">
      <img src="https://www.w3schools.com/w3images/avatar6.png" alt="" />
      <div className="airbnb-card-content">
        <div className="card-stats">
          <FaStar color="red" />
          <span>5.0</span>
          <span>(6)&#x2022;</span>
          <span>USA</span>
        </div>
        <p>Life lessons with Katie Zaferes</p>
        <p>
          <span style={{ fontWeight: "bold" }}>From $136</span> /person
        </p>
      </div>
    </div>
  );
}

export default Card;
