import { useState } from "react";
import DiceBox from "./DiceBox";
import { nanoid } from "nanoid";

function TenziesPage() {
  const [dice, setDice] = useState(allNewDice());
  console.log({ dice });

  function allNewDice() {
    let diceArr = [];
    for (let i = 0; i < 10; i++) {
      diceArr.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return diceArr;
  }

  function newDice() {
    setDice(allNewDice());
  }

  return (
    <main className="tenzies-body">
      <DiceBox dice={dice} />
      <button onClick={newDice} className="roll-btn">
        Roll
      </button>
    </main>
  );
}

export default TenziesPage;
