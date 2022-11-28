import { configureStore } from "@reduxjs/toolkit";
import inventoryReducer from "../features/inventory/InventorySlice";

export const store = configureStore({
  reducer: {
    inventory: inventoryReducer,
  },
});
