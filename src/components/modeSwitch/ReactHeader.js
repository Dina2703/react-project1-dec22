import React from "react";

function ReactHeader({ handleMode, mode }) {
  return (
    <header className={`react-header ${mode ? null : "dark--header"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
        alt="react-logo"
      />
      <h3 style={{ color: mode ? "black" : "white" }}>ReactFacts</h3>
      <div className="mode-switch">
        <span className={`${mode ? null : "light--text"}`}>Light</span>
        <div
          className={`${
            mode ? "mode-switch-btns-light" : "mode-switch-btns-dark"
          }`}
        >
          <button
            className={`mode--btn ${mode ? "light" : "dark"}`}
            onClick={handleMode}
          ></button>
          <button
            className={`mode--btn ${mode ? "dark" : "light"}`}
            onClick={handleMode}
          ></button>
        </div>
        <span className={`${mode ? "light--text" : null}`}>Dark</span>
      </div>
    </header>
  );
}

export default ReactHeader;
