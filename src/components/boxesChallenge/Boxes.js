import { useState } from "react";
import boxes from "./data";
import Box from "./Box";

export default function Boxesp() {
  const [squares, setSquares] = useState(boxes);

  function toggle(id) {
    setSquares((prevSquares) => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }

  return (
    <div className="App">
      {squares.map((each) => (
        <Box key={each.id} on={each.on} toggle={toggle} id={each.id} />
      ))}
    </div>
  );
}
