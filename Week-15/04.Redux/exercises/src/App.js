import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { RandomCounter } from "./features/randomCounter/RandomCounter";
import { useSelector, useDispatch } from "react-redux";
import {
  increment as randomCounterIncrement,
  selectRandomCount,
} from "./features/randomCounter/randomCounterSlice";
import {
  increment as counterIncrement,
  selectCount,
} from "./features/counter/counterSlice";

function App() {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const randomCount = useSelector(selectRandomCount);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <RandomCounter />

        <button
          onClick={() => {
            dispatch(randomCounterIncrement());
            dispatch(counterIncrement());
          }}
        >
          Increase both counters
        </button>

        <label htmlFor="">{Math.max(count, randomCount).toFixed(2)}</label>
      </header>
    </div>
  );
}

export default App;
