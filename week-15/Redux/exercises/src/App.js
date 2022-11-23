import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { RandomCounter } from "./features/randomCounter/RandomCounter";
import { useSelector, useDispatch } from "react-redux";
import { increment as randomCounterIncrement } from "./features/randomCounter/randomCounterSlice";
import { increment as counterIncrement } from "./features/counter/counterSlice";

function App() {
  const dispatch = useDispatch();

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
      </header>
    </div>
  );
}

export default App;
