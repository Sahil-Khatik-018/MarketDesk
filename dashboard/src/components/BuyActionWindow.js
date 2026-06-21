import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  
  // FIX: Properly consume context
  const { closeBuyWindow } = useContext(GeneralContext);

  const handleBuyClick = async (e) => {
    e.preventDefault(); // Stop default anchor tags behavior
    
    if (stockQuantity <= 0) {
      alert("Quantity must be greater than 0");
      return;
    }

    try {
      await axios.post("http://localhost:5000/newOrder", {
        name: uid,
        qty: Number(stockQuantity), // FIX: Force number type cast
        price: Number(stockPrice),   // FIX: Force number type cast
        mode: "BUY",
      });
      closeBuyWindow();
    } catch (err) {
      console.error("Order failed", err);
      alert("Failed to place order");
    }
  };

  return (
    <div className="container" id="buy-window">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              min="1"
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              step="0.05"
              min="0"
              onChange={(e) => setStockPrice(Number(e.target.value))}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹{(stockQuantity * stockPrice).toFixed(2)}</span>
        <div>
          <button className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </button>
          <button className="btn btn-grey" onClick={closeBuyWindow}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;