import { createSlice } from "@reduxjs/toolkit";

export const inventorySlice = createSlice({
  name: "inventory",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    buyItem: (state, action) => {
      state.items.splice(action.payload, 1);
    },
    changePrice: (state, action) => {
      let i = action.payload.idx;
      let p = action.payload.price;
      state.items[i].price = p;
    },
  },
});

export const selectInventory = state => state.inventory.items;
export const { addItem, buyItem, changePrice } = inventorySlice.actions;
export default inventorySlice.reducer;
