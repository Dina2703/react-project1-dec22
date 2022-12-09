import React from "react";

function ReactHeader() {
  return (
    <header className="react-header ">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
        alt="react-logo"
      />
      <h3>ReactFacts</h3>
      <div className="mode-switch">
        <span>Light</span>
        <div className="mode-switch-btns">
          <button className="mode--btn"></button>
          <button className="mode--btn dark--header"></button>
        </div>
        <span className="light-text">Dark</span>
      </div>
    </header>
  );
}

export default ReactHeader;
