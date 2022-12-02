import React from "react";
import { GoGlobe } from "react-icons/go";

function TravelNavbar() {
  return (
    <div id="travel--navbar">
      <div className="travel-navbar-box">
        <GoGlobe />
        <div>
          <p>my travel journal</p>
        </div>
      </div>
    </div>
  );
}

export default TravelNavbar;
