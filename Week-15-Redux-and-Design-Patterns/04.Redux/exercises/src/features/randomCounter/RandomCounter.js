import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addRandomNumber, selectRandomCount } from "./randomCounterSlice";
import styles from "./RandomCounter.module.css";

export function RandomCounter() {
  const randomCount = useSelector(selectRandomCount);
  const dispatch = useDispatch();

  return (
    <div>
      <hr />
      <h1>Random Counter</h1>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="random value"
          onClick={() => dispatch(addRandomNumber())}
        >
          Add random number
        </button>
        <span className={styles.value}>{randomCount.toFixed(2)}</span>
      </div>
    </div>
  );
}
