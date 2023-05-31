import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";

export const Main = () => {
  return (
    <div className="main-container">
      <div className="main-left">
        <div className="main-left-box">
          <div className="main-left-box-text">
            <h2>Best place to buy soccer ball</h2>
            <p>
              Welcome to our store, where you can buy a wide variety of
              footballs from world and European championships, as well as balls
              from national leagues such as the Premier League, La Liga, and
              many others. We offer a wide selection of balls that will surely
              meet your expectations. Feel free to browse our selection and
              choose the ball that is perfect for you!
            </p>
          </div>
          <Link to="/products" onClick={() => window.scrollTo(0, 0)}>
            <button className="main-btn">Products</button>
          </Link>
        </div>
      </div>
      <div className="main-right">
        <div className="main-right-img">
          <img
            className="main-right-image"
            src="https://cdn.pixabay.com/photo/2013/07/13/10/51/football-157931_960_720.png"
            alt="soccer ball"
          />
        </div>
      </div>
    </div>
  );
};
