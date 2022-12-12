import { useState, useEffect } from "react";
import DiceBox from "./DiceBox";
import { nanoid } from "nanoid";

function TenziesPage() {
  const [dice, setDice] = useState(allNewDice());
  const [isWinner, setIsWinner] = useState(false);

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  useEffect(() => {
    //check the dice array for these winning conditions (all dice are held, and all dice have the same value), if both conditions are true set the setIsWinner(true), and say 'You Won'
    const allHeld = dice.every((die) => die.isHeld); //to check all dice are held,
    const firstDieValue = dice[0].value; //randomly get one die value then, check with other die value
    const allSameValue = dice.every((die) => die.value === firstDieValue);
    if (allHeld && allSameValue) {
      setIsWinner(true);
      console.log("You Won");
    }
  }, [dice]);

  // console.log(dice);
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
        <h1>Tenzies</h1>
        <p className="game-instuction">
          Rolls until all dice are the same. Click each die to freeze it at its
          current value between rolls
        </p>
        <DiceBox dice={dice} holdDice={holdDice} />
        <button className="roll-btn" onClick={rollDice}>
          Roll
        </button>
      </div>
    </main>
  );
}

export default TenziesPage;
