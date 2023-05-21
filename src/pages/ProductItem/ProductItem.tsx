import { useEffect, useState } from "react";
import "./ProductItem.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Loading } from "../../components/Loading/Loading";

interface Product {
  id: string;
  name: string;
  prize: number;
  url: string;
}

export const ProductItem = () => {
  const [data, setData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        "https://land-of-football-9167d-default-rtdb.firebaseio.com/productsList.json"
      )
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [params.id]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {data.map((products) => {
            const { id, name, prize, url } = products;

            return (
              <div key={id} className="product-item-container">
                <h2>{name}</h2>
                <div className="product-item-container-left">
                  <img src={url} alt={name} />
                </div>
                <div className="product-item-container-right">
                  <p>Title</p>
                  <p>$ {prize}</p>
                  <button>Add to cart</button>
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};
