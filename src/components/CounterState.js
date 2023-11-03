import React, { useState } from "react";

function CounterState() {
  // !state
  const [count, setCount] = useState(0);

  // !eventHandler
  function handleClick() {
    // !update state based on previos state
    setCount((count) => count + 1);
  }

  return (
    <div>
      <h1>CounterState</h1>
      <button onClick={handleClick}>{count}</button>
    </div>
  );
}

export default CounterState;
