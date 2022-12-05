import { useState } from "react";
import { FaStar } from "react-icons/fa";
import Rating from "./Rating";

function Card({
  coverImg,
  rating,
  reviewCount,
  location,
  title,
  price,
  color,
  openSpots,
}) {
  //if you passed the data in item={item} way, destructure 'item' obj
  // const {
  //   coverImg,
  //   rating,
  //   reviewCount,
  //   location,
  //   title,
  //   price,
  //   color,
  //   openSpots,
  // } = item;

  const [isFilled, setIsFilled] = useState(true);

  //logic for badge text
  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "Online";
  }

  function handleRating() {
    setIsFilled((prev) => !prev);
  }

  return (
    <div className="airbnb-card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={coverImg} alt="" />
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
        <Rating isFilled={isFilled} handleRating={handleRating} />
      </div>
    </div>
  );
}

export default Card;
