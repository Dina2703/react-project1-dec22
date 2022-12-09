import { useState } from "react";
import ReactHeader from "./ReactHeader";
import ReactHero from "./ReactHero";

function ReactMain() {
  const [mode, setMode] = useState(true);

  function handleMode() {
    console.log("clicked");
    setMode((prevMode) => !prevMode);
  }

  return (
    <div>
      <ReactHeader handleMode={handleMode} mode={mode} />
      <ReactHero mode={mode} />
    </div>
  );
}

export default ReactMain;
