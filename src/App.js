// import Props from "./components/TimeOfDay";
// import Cats from "./components/cats-profiles/Cats";
// import AirbnbPage from "./components/airbnb/AirbnbPage";

import { useState } from "react";

// import TravelJournal from "./components/travel-journal/TravelJournal";
// import MemeHome from "./components/meme-generator/MemeHome";
function App() {
  const [itemArr, setItemArr] = useState([]);

  const addItem = () => {
    let newItem = `item ${itemArr.length + 1}`;
    setItemArr((prev) => [...prev, newItem]);
    console.log(newItem);
  };

  const itemEl = itemArr.map((item) => <p key={item}>{item}</p>);

  //challenge

  function greeting(name) {
    let hours = new Date().getHours();

    let answer;

    if (hours >= 4 && hours < 12) {
      answer = "morning";
    } else if (hours >= 12 && hours < 17) {
      answer = "afternoon";
    } else if (hours >= 17 && hours < 20) {
      answer = "evening";
    } else {
      answer = "night";
    }

    return `Good ${answer} ${name}`;
  }

  console.log(greeting("Sam"));

  return (
    <div className="App">
      <button onClick={addItem}>Add Item</button>
      {itemEl}

      {/*
      <Props />
      <Cats />
      <TravelJournal />
      <AirbnbPage />
      <MemeHome />
    */}
    </div>
  );
}

export default App;
