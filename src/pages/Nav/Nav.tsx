import "./Nav.css";
import { Cart3 } from "react-bootstrap-icons";
import { BurgerMenu } from "../../components/BurgerMenu/BurgerMenu";
import { Link } from "react-router-dom";

interface BurgerMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  menuToggle: () => void;
}

export const Nav: React.FC<BurgerMenuProps> = ({ menuToggle }) => {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <p>Home</p>
        <p>About us</p>
        <p>Contact</p>
        <BurgerMenu menuToggle={menuToggle} />
      </div>

      <Link to="/" className="nav-center">
        <h4>Land Of Football</h4>
      </Link>
      <div className="nav-right">
        <Link to="/cart">
          <Cart3 className="nav-right-icon" />
        </Link>
      </div>
    </div>
  );
};
