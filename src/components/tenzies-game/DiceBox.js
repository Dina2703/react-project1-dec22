import React from "react";
import Die from "./Die";

function DiceBox({ dice }) {
  return (
    <section className="dice-container">
      {dice.map((die) => (
        <Die die={die} key={die.id} />
      ))}
    </section>
  );
}

export default DiceBox;
