import { useCallback } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  menuToggle: () => void;
}

export const Menu: React.FC<MenuProps> = ({ menuToggle }) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
    menuToggle();
  };

  const lockScroll = useCallback(() => {
    document.body.style.overflow = "hidden";
    // document.body.style.paddingRight = "17px";
  }, []);

  lockScroll();

  return (
    <div className="menu">
      <div className="menu-list">
        <Link to="/" onClick={handleClick}>
          <p>Home</p>
        </Link>
        <Link to="/products" onClick={handleClick}>
          <p>Products</p>
        </Link>
      </div>
    </div>
  );
};
