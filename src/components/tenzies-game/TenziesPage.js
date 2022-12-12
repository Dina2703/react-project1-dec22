import { useState } from "react";
import DiceBox from "./DiceBox";
import { nanoid } from "nanoid";

function TenziesPage() {
  const [dice, setDice] = useState(allNewDice());

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  console.log(dice);
  function allNewDice() {
    const diceArr = [];

    for (let i = 0; i < 10; i++) {
      const newDice = generateNewDie();
      diceArr.push(newDice);
    }
    return diceArr;
  }

  // when button clicked
  function rollDice() {
    setDice((prevDie) =>
      prevDie.map((die) => (die.isHeld ? die : generateNewDie()))
    );
  }

  function holdDice(id) {
    // console.log(id);
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
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
