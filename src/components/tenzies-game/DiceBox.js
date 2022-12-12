import React from "react";
import Die from "./Die";

function DiceBox({ dice, holdDice }) {
  return (
    <section className="dice-container">
      {dice.map((die) => (
        <Die die={die} key={die.id} holdDice={holdDice} />
      ))}
    </section>
  );
}

export default DiceBox;
