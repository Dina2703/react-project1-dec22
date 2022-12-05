import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

function Rating({ isFilled, handleRating }) {
  return (
    <div onClick={handleRating}>
      {isFilled ? <FaStar color="red" /> : <FaRegStar color="red" />}
    </div>
  );
}

export default Rating;
