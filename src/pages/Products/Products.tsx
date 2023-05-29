import { Link } from "react-router-dom";
import "./Products.css";

export const Products = () => {
  return (
    <div className="productList-container">
      <h2>Products</h2>
      <div className="productsList-box">
        <div className="productsList-box-worldcup">
          <Link to="/products" onClick={() => window.scrollTo(0, 0)}>
            <div className="dark-shadow"></div>
            <h3 className="productsList-box-national-title">World Cup</h3>
          </Link>
        </div>
        <div className="productsList-box-euro">
          <Link to="/products" onClick={() => window.scrollTo(0, 0)}>
            <div className="dark-shadow"></div>
            <h3 className="productsList-box-national-title">European Cup</h3>
          </Link>
        </div>
        <div className="productsList-box-national">
          <Link to="/products" onClick={() => window.scrollTo(0, 0)}>
            <div className="dark-shadow"></div>
            <h3 className="productsList-box-national-title">National League</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};
