import React, { useState } from "react";
import { Inventory } from "./features/inventory/Inventory";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { selectInventory, addItem } from "./features/inventory/InventorySlice";

function App() {
  const [itemInput, setItemInput] = useState({
    name: "",
    description: "",
    price: "",
  });
  const dispatch = useDispatch();

  function handleChange(e) {
    setItemInput({ ...itemInput, [e.target.name]: e.target.value });
  }
  return (
    <>
      <h1>Add item to inventory</h1>
      <form action="">
        <input
          type="text"
          name="name"
          placeholder="name"
          value={itemInput.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          value={itemInput.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          placeholder="price"
          value={itemInput.price}
          onChange={handleChange}
        />
      </form>
      <button
        onClick={() => {
          dispatch(addItem(itemInput));
        }}
      >
        add item
      </button>
      <hr />
      <Inventory />
    </>
  );
}

export default App;
