import React from "react";
import Die from "./Die";

function DiceBox({ dice }) {
  return (
    <div className="dice-container">
      {dice.map((die) => (
        <Die value={die.value} key={die.id} isHeld={die.isHeld} />
      ))}
    </div>
  );
}

export default DiceBox;
