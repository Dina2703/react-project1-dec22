import React from "react";
import AirBnbCards from "./AirBnbCards";
import HeroAirBnb from "./HeroAirBnb";
import NavbarAirBnb from "./NavbarAirBnb";

function AirbnbPage() {
  return (
    <div>
      <NavbarAirBnb />
      <HeroAirBnb />
      <AirBnbCards />
    </div>
  );
}

export default AirbnbPage;
