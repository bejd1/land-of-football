import { useEffect, useState } from "react";
import "./ProductItem.css";
import axios from "axios";
import { useParams } from "react-router-dom";
// import { Loading } from "../../components/Loading/Loading";

interface Product {
  id: number;
  name: string;
  prize: number;
  url: string;
}

export const ProductItem = () => {
  const [data, setData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  let id: number;

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        "https://land-of-football-9167d-default-rtdb.firebaseio.com/productsList.json"
      )
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
    console.log(params.id);
    id = parseInt(params.id as string);
    console.log(id);
  }, [params.id]);

  return (
    <>
      <div>test</div>
      {data
        // .filter((product) => {
        //   console.log(id);
        //   return product.id === id;
        // })
        .map((products) => {
          const { name, prize, url } = products;

          console.log(id);
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
  );
  //   <>
  //     {isLoading ? (
  //       <Loading />
  //     ) : (
  //       <>
  //         {data
  //           .filter((product) => product.id == id)
  //           .map((products) => {
  //             const { id, name, prize, url } = products;

  //             console.log("dupa")
  //             return (
  //               <div key={id} className="product-item-container">
  //                 <h2>{name}</h2>
  //                 <div className="product-item-container-left">
  //                   <img src={url} alt={name} />
  //                 </div>
  //                 <div className="product-item-container-right">
  //                   <p>Title</p>
  //                   <p>$ {prize}</p>
  //                   <button>Add to cart</button>
  //                 </div>
  //               </div>
  //             );
  //           })}
  //       </>
  //     )}
  //   </>
  // );
};
