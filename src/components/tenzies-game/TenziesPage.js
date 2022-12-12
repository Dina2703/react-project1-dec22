import { useState } from "react";
import DiceBox from "./DiceBox";
import { nanoid } from "nanoid";

function TenziesPage() {
  const [dice, setDice] = useState(allNewDice());

  console.log(dice);
  function allNewDice() {
    const diceArr = [];

    for (let i = 0; i < 10; i++) {
      const newDice = {
        value: Math.ceil(Math.random() * 6),
        isHeld: true,
        id: nanoid(),
      };
      diceArr.push(newDice);
    }
    return diceArr;
  }

  function rollDice() {
    setDice(allNewDice());
  }

  return (
    <main className="dice-body">
      <div className="dice-inner-layer">
        <DiceBox dice={dice} />
        <button className="roll-btn" onClick={rollDice}>
          Roll
        </button>
      </div>
    </main>
  );
}

export default TenziesPage;
