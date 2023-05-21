import React from "react";
import "./Newsletter.css";

export const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <div className="newsletter-container-left">
        <h2>Get instant discount</h2>
        <p>
          Subscribe our newsletter and get information about latest news about
          products and get 20% discount.
        </p>
        <div className="newsletter-container-left-input">
          <input type="email" placeholder="Your email" />
          <button className="newsletter-btn">Subscribe</button>
        </div>
      </div>
      <div className="newsletter-container-right">
        <img
          className="newsletter-container-right-img"
          src="https://cdn.pixabay.com/photo/2021/10/06/19/57/deal-of-the-day-6686603_960_720.png"
          alt="logo 'deal of the day'"
        />
      </div>
    </div>
  );
};
