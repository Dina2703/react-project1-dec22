import React from "react";
import Card from "./Card";
import data from "../../airbnba-data";

function AirBnbCards() {
  //build cards Component
  const cards = data.map((item) => {
    //we can do item={item}  or {...item} to spread the props of the object(item).
    return <Card key={item.id} {...item} />;
  });
  //render
  return <div className="airbnb-cards scroll">{cards}</div>;
}

export default AirBnbCards;
