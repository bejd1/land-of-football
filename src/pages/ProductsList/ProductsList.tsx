import { useEffect, useState } from "react";
import "./ProductsList.css";
import axios from "axios";
import { Loading } from "../../components/Loading/Loading";
import { Link } from "react-router-dom";

interface Product {
  id: string;
  name: string;
  price: number;
  url: string;
  data: object;
  category: string;
  product: string;
}

export const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState<string>("all");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        "https://land-of-football-9167d-default-rtdb.firebaseio.com/productsList.json"
      )
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  // sort by price

  const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sortBy = event.target.value;
    let sortData = [];

    if (sortBy === "fromTheLowest") {
      sortData = [...products].sort((a, b) => a.price - b.price);
    } else if (sortBy === "toTheHighest") {
      sortData = [...products].sort((a, b) => b.price - a.price);
    } else {
      sortData = [...products];
    }

    setProducts(sortData);
  };

  // sort by category

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCategory(event.target.value);
  };

  const filteredData =
    category === "all"
      ? products
      : products.filter((item) => item.category === category);

  return (
    <div className="products-list-container">
      <div className="products-list-btns">
        <div className="products-list-btns-left">
          <button onClick={() => setCategory("all")}>All</button>
          <button onClick={() => setCategory("worldcup")}>World Cup</button>
          <button onClick={() => setCategory("euro")}>Euro</button>
          <button onClick={() => setCategory("national")}>
            National League
          </button>
        </div>
        <div className="products-list-btns-left-form">
          <form action="">
            <label htmlFor="category">Categories: </label>
            <select
              id="category"
              name="category"
              onChange={handleCategoryChange}
              value={category}
            >
              <option value="all">All</option>
              <option value="worldcup">World Cup</option>
              <option value="euro">Euro</option>
              <option value="national">National League</option>
            </select>
          </form>
        </div>
        <div className="products-list-btns-right">
          <form action="">
            <label htmlFor="sortby">Sort by: </label>
            <select id="sortby" name="sortby" onChange={handleSort}>
              <option value="all">-</option>
              <option value="fromTheLowest">Price(Low to High)</option>
              <option value="toTheHighest">Price(High to Low)</option>
            </select>
          </form>
        </div>
      </div>

      <h2>Products</h2>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="products-list-cart">
          {filteredData.map((product) => {
            const { id, url, name, price } = product;
            return (
              <div key={id}>
                <Link
                  to={`/products/${id}`}
                  className="products-list-cart-link"
                >
                  <div className="products-list-cart-container">
                    <img
                      className="products-list-cart-container-img"
                      src={url}
                      alt={name}
                    />
                    <div className="products-list-cart-container-row">
                      <p>{name}</p>
                      <p>${price}</p>
                    </div>
                    <button className="products-list-cart-container-btn">
                      Add to cart
                    </button>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
