import { useEffect, useState } from "react";
import "./ProductItem.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Loading } from "../../components/Loading/Loading";

interface Product {
  id: number;
  name: string;
  price: number;
  url: string;
  category: string;
}

export const ProductItem = () => {
  const [items, setItems] = useState<Product[]>([]);
  const { id } = useParams();

  useEffect(() => {
    try {
      const fetchData = async () => {
        const result = await axios.get(
          "https://land-of-football-9167d-default-rtdb.firebaseio.com/productsList.json"
        );
        setItems(result.data);
      };
      fetchData();
    } catch (error) {
      console.log("error");
    }
  }, []);

  const item = items.find((item) => item.id === Number(id));

  if (!item) {
    return (
      <div className="vh">
        <Loading />
      </div>
    );
  }

  return (
    <div className="product-item-container">
      <div className="product-item-container-left">
        <h3>{item.name}</h3>
        <p>Price: ${item.price}</p>
        <button>Add to cart</button>
      </div>
      <div className="product-item-container-right">
        <img src={item.url} alt={item.name} />
      </div>
    </div>
  );
};
