import React from "react";

function Die({ die }) {
  const { value, isHeld } = die;
  const styles = { backgroundColor: isHeld ? "green" : "" };
  return (
    <div className="die-face" style={styles}>
      {value}
    </div>
  );
}

export default Die;
