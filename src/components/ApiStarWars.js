import { useState, useEffect } from "react";

function ApiStarWars() {
  const [starWarsData, setStarWarsdata] = useState({});
  const [count, setCount] = useState(1);

  console.log("Component rendered");

  // console.log(starWarsData);
  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${count}`)
      .then((res) => res.json())
      .then((data) => setStarWarsdata(data));
    console.log("Effect function ran");
  }, [count]);

  return (
    <div>
      <div>
        ApiStarWars
        <pre> {JSON.stringify(starWarsData, null, 2)}</pre>
        <h3>The count is {count}</h3>
        <button onClick={() => setCount((prev) => prev + 1)}>
          get next character
        </button>
      </div>
    </div>
  );
}

export default ApiStarWars;
