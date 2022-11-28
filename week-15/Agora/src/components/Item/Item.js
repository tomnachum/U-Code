import React, { useState } from "react";
import "./Item.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { buyItem, changePrice } from "../../features/inventory/InventorySlice";
import { useDispatch } from "react-redux";

export default function Item({ item, idx }) {
  const [newPrice, setNewPrice] = useState(item.price);
  const dispatch = useDispatch();

  function handleChange(e) {
    setNewPrice(e.target.value);
  }

  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <div className="price-container">
          <Card.Text>Price: {item.price}</Card.Text>
          <input
            type="text"
            value={newPrice}
            onChange={handleChange}
            style={{ width: "70px" }}
          />
          <Button
            variant="primary"
            onClick={() => {
              dispatch(changePrice({ idx, price: newPrice }));
            }}
          >
            change price
          </Button>
        </div>
        <Button
          variant="success"
          onClick={() => {
            dispatch(buyItem(idx));
          }}
        >
          buy
        </Button>
      </Card.Body>
    </Card>
  );
}
