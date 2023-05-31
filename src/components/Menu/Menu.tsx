import "./Menu.css";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-list">
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <p>Home</p>
        </Link>
        <Link to="/products" onClick={() => window.scrollTo(0, 0)}>
          <p>Products</p>
        </Link>
      </div>
    </div>
  );
};
