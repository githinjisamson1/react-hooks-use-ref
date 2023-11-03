import React, { useRef } from "react";

function CounterRef() {
  // !define defaultValue/initialValue
  const count = useRef(0);

  // !eventHandler
  function handleClick() {
    count.current = count.current + 1;
    console.log(count.current);
  }

  // !access value using count.current
  return (
    <div>
      <h1>CounterRef</h1>
      <button onClick={handleClick}>{count.current}</button>
    </div>
  );
}

export default CounterRef;
