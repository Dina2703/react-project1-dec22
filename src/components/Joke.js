import React from "react";

function Joke({ punchline, setup }) {
  return (
    <div>
      {setup && <h4>Setup: {setup}</h4>}
      {punchline ? (
        <p>
          <em>Punchline:</em> {punchline}
        </p>
      ) : (
        <em>No puchline passed in</em>
      )}
      <hr />
    </div>
  );
}

export default Joke;
