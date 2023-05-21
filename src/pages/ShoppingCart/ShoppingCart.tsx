import React from "react";
import "./ShoppingCart.css";
import { Trash } from "react-bootstrap-icons";

export const ShoppingCart = () => {
  return (
    <div className="shopping-cart-container">
      <div className="shopping-cart-container-left">
        <h2>Cart</h2>
        <div className="shopping-cart-container-item">
          <div className="shopping-cart-container-item-left">
            <img
              className="shopping-cart-container-img"
              src="https://football-balls.com/ball_files/2018-world-cup-adidas-telstar-18-mechta-official-final-match-ball-small.png"
              alt=""
            />
            <div className="shopping-cart-container-item-left-tools">
              <div className="shopping-cart-container-item-left-top">
                <p>Brazucca</p>
                <p>$12.99</p>
              </div>
              <div className="shopping-cart-container-item-left-bottom">
                <p>+</p>
                <p>1</p>
                <p>-</p>
              </div>
            </div>
          </div>
          <div className="shopping-cart-container-item-right">
            <p>Total: $12.99</p>
            <p>
              Delete
              <Trash className="shopping-cart-container-item-right-icon" />
            </p>
          </div>
        </div>
      </div>
      <div className="shopping-cart-container-right">
        <h2>Grandtotal</h2>
        <div className="shopping-cart-container-right-text">
          <p>Total: $12.99</p>
          <button>Back to shop</button>
        </div>
      </div>
    </div>
  );
};
