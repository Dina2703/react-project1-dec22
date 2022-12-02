import React from "react";
import TravelCard from "./TravelCard";
import travelData from "../travel-data";

function TravelCards() {
  console.log(travelData);
  //pass the data to a child(single card component) by mapping and using spread operator {...item}
  const travelCards = travelData.map((item) => {
    return <TravelCard key={item.id} {...item} />;
  });

  return <div>{travelCards}</div>;
}

export default TravelCards;
