import React from "react";

function Die({ value, isHeld }) {
  const styles = {
    backgroundColor: isHeld ? "#59E391" : "white",
  };

  return (
    <div className="die-item" style={styles}>
      <div>{value}</div>
    </div>
  );
}

export default Die;
