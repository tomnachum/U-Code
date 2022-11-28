import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Inventory.css";
import { selectInventory, addItem } from "./InventorySlice";
import Item from "../../components/Item/Item";

export function Inventory() {
  const inventory = useSelector(selectInventory);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Inventory {inventory.length}</h1>
      <div className="items-container">
        {inventory.map((item, i) => (
          <Item key={i} item={item} idx={i} />
        ))}
      </div>
    </div>
  );
}
