import { useEffect, useState } from "react";
import "./ProductsList.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Loading } from "../../components/Loading/Loading";

interface Product {
  id: string;
  name: string;
  prize: number;
  url: string;
}

export const ProductsListCart = () => {
  const [data, setData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    try {
      const fetchData = async () => {
        const result = await axios.get(
          "https://land-of-football-9167d-default-rtdb.firebaseio.com/productsList.json"
        );
        setData(result.data);
        setIsLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log("error");
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="products-list-cart">
          {data.map((products) => {
            const { id, url, name, prize } = products;

            return (
              <Link
                key={id}
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
                    <p>${prize}</p>
                  </div>
                  <button className="products-list-cart-container-btn">
                    Add to cart
                  </button>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

// useEffect(() => {
//   setIsLoading(true);
//   axios
//     .get(
//       "https://land-of-football-9167d-default-rtdb.firebaseio.com/productsList.json"
//     )
//     .then((res) => {
//       setData(res.data);
//       setIsLoading(false);
//     })
//     .catch((error) => {
//       console.log(error);
//       setIsLoading(false);
//     });
// }, []);
