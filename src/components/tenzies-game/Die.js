import React from "react";

function Die({ die, holdDice }) {
  const { value, isHeld, id } = die;
  const styles = { backgroundColor: isHeld ? "green" : "" };
  return (
    <div className="die-face" style={styles} onClick={() => holdDice(id)}>
      {value}
    </div>
  );
}

export default Die;
