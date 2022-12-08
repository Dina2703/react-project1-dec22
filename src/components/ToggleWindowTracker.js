import { useState, useEffect } from "react";

const WindowTracker = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    function watchWidth() {
      console.log("Setting up ...");
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", watchWidth);

    //useEffect clean-up, prevent memory-leak. When the Component is unmounted(not displayed) we need to remove watchWidth() function to stop setting a new state value to the state.
    return function () {
      console.log("Cleaning up ...");
      window.removeEventListener("resize", watchWidth);
    };
  }, []);

  return (
    <div>
      <p>Window width: {windowWidth}</p>
    </div>
  );
};

function ToggleWindowTracker() {
  const [show, setShow] = useState(true);
  return (
    <div
      style={{
        background: "orange",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <button
        onClick={() => {
          setShow((prev) => !prev);
        }}
        style={{
          margin: "20px ",
          padding: "10px 50px",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Toggle Window Tracker
      </button>
      {show && <WindowTracker />}
    </div>
  );
}

export default ToggleWindowTracker;
