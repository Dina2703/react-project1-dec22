import React from "react";

function Props() {
  const date = new Date();
  const hours = date.getHours();

  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "night";
  }

  return (
    <div>
      <h1>
        it is currently about {date.getHours() % 12} : {date.getMinutes()}{" "}
        o'clock. <br /> Good {timeOfDay}
      </h1>
    </div>
  );
}

export default Props;
