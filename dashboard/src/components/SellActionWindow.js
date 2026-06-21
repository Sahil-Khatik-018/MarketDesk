import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [availableQty, setAvailableQty] = useState(0);
  
  const { closeSellWindow } = useContext(GeneralContext);

  // Fetch user's current holdings to validate quantity limits
  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        const response = await axios.get("http://localhost:5000/allHoldings");
        // Look up if the specific stock (uid/name) is present in current holdings
        const holding = response.data.find(item => item.name === uid);
        if (holding) {
          setAvailableQty(holding.qty);
        } else {
          setAvailableQty(0);
        }
      } catch (err) {
        console.error("Error fetching holdings details:", err);
      }
    };
    
    if(uid) fetchHoldings();
  }, [uid]);

  const handleSellClick = async (e) => {
    e.preventDefault();

    if (availableQty === 0) {
      alert(`Execution Denied: You don't own any shares of ${uid}.`);
      return;
    }

    if (stockQuantity > availableQty) {
      alert(`Execution Denied: You only hold ${availableQty} shares of ${uid}. You cannot sell ${stockQuantity}.`);
      return;
    }

    if (stockQuantity <= 0) {
      alert("Quantity must be greater than 0");
      return;
    }

    try {
      await axios.post("http://localhost:5000/newOrder", {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: "SELL", // Matches DB uppercase standard format 
      });
      closeSellWindow();
    } catch (err) {
      console.error("Sell transaction failed", err);
      alert("Failed to post transaction");
    }
  };

  return (
    <div className="container" id="sell-window">
      <div className="regular-order">
        <div className="inputs">
          <p style={{color: "orange", fontSize: "12px", margin: "5px 0"}}>
            Available to Sell: {availableQty} shares
          </p>
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              min="1"
              max={availableQty}
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
        <span>Estimated Credit: ₹{(stockQuantity * stockPrice).toFixed(2)}</span>
        <div>
          <button className="btn btn-red" onClick={handleSellClick} style={{backgroundColor: "#df5151"}}>
            Sell
          </button>
          <button className="btn btn-grey" onClick={closeSellWindow}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;