import React from "react";
import { useState } from "react";

export default function SpotCheck1() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 1</h4>
      <div className="exercise" id="sc-1">
        <p>{counter}</p>
        <button onClick={() => setCounter(counter + 1)}>+1</button>
        <button onClick={() => setCounter(counter - 1)}>-1</button>
      </div>
    </div>
  );
}
