import { useState } from "react";
import data from "./data";
import Box from "./Box";

function Boxes() {
  const [boxArr, setBoxArr] = useState(data);
  // console.log(boxArr);

  function handleClick(id) {
    console.log("clicked " + id);
    setBoxArr((prevBoxArr) => {
      return prevBoxArr.map((each) => {
        return each.id === id ? { ...each, on: !each.on } : each;
      });
    });
  }

  const boxComponent = boxArr.map((box) => (
    <Box key={box.id} box={box} toggle={() => handleClick(box.id)} />
  ));

  return <div className="box-container">{boxComponent}</div>;
}

export default Boxes;
