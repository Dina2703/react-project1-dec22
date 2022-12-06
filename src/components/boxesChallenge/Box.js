import React from "react";

function Box({ box, handleClick }) {
  console.log(box);
  return (
    <div
      className={`box ${box.on ? "grey" : "filled"}`}
      onClick={() => handleClick(box.id)}
    >
      Box
    </div>
  );
}

export default Box;
