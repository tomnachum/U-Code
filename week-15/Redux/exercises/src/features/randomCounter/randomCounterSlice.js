import { createSlice } from "@reduxjs/toolkit";

export const randomCounterSlice = createSlice({
  name: "randomCounter",
  initialState: {
    value: 0,
  },
  reducers: {
    addRandomNumber: state => {
      state.value += Math.random();
    },
    increment: state => {
      console.log("in random increment");
      state.value += 1;
    },
  },
});

export const selectRandomCount = state => state.randomCounter.value;

export const { addRandomNumber, increment } = randomCounterSlice.actions;

export default randomCounterSlice.reducer;
