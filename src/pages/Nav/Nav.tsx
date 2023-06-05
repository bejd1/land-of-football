import "./Nav.css";
import { Cart3 } from "react-bootstrap-icons";
import { BurgerMenu } from "../../components/BurgerMenu/BurgerMenu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

interface BurgerMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  menuToggle: () => void;
}

export const Nav: React.FC<BurgerMenuProps> = ({ menuToggle }) => {
  const amount = useSelector(
    (state: { cart: { amount: number } }) => state.cart.amount
  );

  return (
    <div className="nav-container">
      <div className="nav-left">
        <Link to="/" className="nav-left-home-link">
          <p>Home</p>
        </Link>

        <Link to="/products">
          <p>Products</p>
        </Link>
        <BurgerMenu menuToggle={menuToggle} />
      </div>

      <Link to="/" className="nav-center">
        <h4>Land Of Football</h4>
      </Link>
      <div className="nav-right">
        <Link to="/cart">
          <Cart3 className="nav-right-icon" />
          <div className="nav-right-count">{amount}</div>
        </Link>
      </div>
    </div>
  );
};
