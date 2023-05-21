import React, { useEffect, useState } from "react";
import "./ProductsList.css";
import { ProductsListCart } from "./ProductsListCart";
import axios from "axios";

interface Product {
  id: string;
  name: string;
  prize: number;
  url: string;
  data: object;
}

export const ProductsList = () => {
  const [data, setData] = useState<Product[]>([]);
  // const newItems = [...data];

  useEffect(() => {
    axios
      .get(
        "https://land-of-football-9167d-default-rtdb.firebaseio.com/productsList.json"
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const sortToUp = () => {
    data.sort((a, b) => b.prize - a.prize);
    console.log(sortToUp());
  };
  const sortToDown = () => {
    data.sort((a, b) => b.prize - a.prize);
    console.log(sortToDown());
  };
  return (
    <div className="products-list-container">
      <div className="products-list-btns">
        <div className="products-list-btns-left">
          <button>All</button>
          <button>World Cup</button>
          <button>Euro</button>
          <button>National League</button>
        </div>
        <div className="products-list-btns-left-form">
          <form action="">
            <label htmlFor="">Categories: </label>
            <select id="category" name="category">
              <option value="all">All</option>
              <option value="worldcup">World Cup</option>
              <option value="euro">Euro</option>
              <option value="national">National League</option>
            </select>
          </form>
        </div>
        <div className="products-list-btns-right">
          <form action="">
            <label htmlFor="">Sort by: </label>
            <select id="sortby" name="sortby">
              <option value="all" onClick={() => sortToUp}>
                Prize ^
              </option>
              <option value="worldcup" onClick={sortToDown}>
                Prize v
              </option>
            </select>
          </form>
        </div>
      </div>
      <h2>Balls for you!</h2>
      <ProductsListCart />
    </div>
  );
};
