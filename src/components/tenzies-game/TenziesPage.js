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
  // when button clicked
  function rollDice() {
    setDice(allNewDice());
  }

  function holdDice(id) {
    console.log(id);
  }

  return (
    <main className="dice-body">
      <div className="dice-inner-layer">
        <DiceBox dice={dice} holdDice={holdDice} />
        <button className="roll-btn" onClick={rollDice}>
          Roll
        </button>
      </div>
    </main>
  );
}

export default TenziesPage;
