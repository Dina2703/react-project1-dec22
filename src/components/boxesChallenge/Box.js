import React from "react";

function Box({ box, toggle }) {
  console.log(box);
  return (
    <div className={`box ${box.on ? "grey" : "filled"}`} onClick={toggle}>
      Box
    </div>
  );
}

export default Box;
