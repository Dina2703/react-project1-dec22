import React from "react";
import Card from "./Card";
import data from "../airbnba-data";

function AirBnbCards() {
  return (
    <div className="airbnb-cards">
      {data.map((each) => {
        return (
          <Card
            img={each.coverImg}
            rating={each.stats.rating}
            reviewCount={each.stats.reviewCount}
            location={each.location}
            title="Life lessons with Katie Zaferes"
            price={each.price}
            color="red"
          />
        );
      })}
    </div>
  );
}

export default AirBnbCards;
