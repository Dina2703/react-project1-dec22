import React from "react";

function ReactHero({ mode }) {
  return (
    <section className={`react-hero ${mode ? null : "dark--body"}`}>
      <h1>Fun facts about React</h1>
      <ul className="react-facts">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </section>
  );
}

export default ReactHero;
