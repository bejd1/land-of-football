import "./ShoppingCart.css";
import { Trash, Plus, Dash } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export const ShoppingCart = () => {
  interface Items {
    cartItems: [];
    amount: number;
    total: number;
  }

  const { total } = useSelector((store: { cart: Items }) => store.cart);
  // const { cart } = useSelector((state) => state);
  // const dispatch = useDispatch();
  return (
    <>
      {total < 0 ? (
        <div className="shopping-cart-empty">
          <h2>Your cart is empty</h2>
          <Link to="/products" className="shopping-cart-empty-button">
            Back to shop
          </Link>
        </div>
      ) : (
        <>
          <div className="shopping-cart-container">
            <div className="shopping-cart-container-left">
              <h2>Cart</h2>
              <div className="shopping-cart-container-item">
                <div className="shopping-cart-container-item-left">
                  <img
                    className="shopping-cart-container-img"
                    src="https://football-balls.com/ball_files/2018-world-cup-adidas-telstar-18-mechta-official-final-match-ball-small.png"
                    alt=""
                  />
                  <div className="shopping-cart-container-item-left-tools">
                    <div className="shopping-cart-container-item-left-top">
                      <p>Brazucca</p>
                      <p>$12.99</p>
                    </div>
                    <div className="shopping-cart-container-item-left-bottom">
                      <Dash className="shopping-cart-container-item-left-bottom-icon" />
                      <p>{total}</p>
                      <Plus className="shopping-cart-container-item-left-bottom-icon" />
                    </div>
                  </div>
                </div>
                <div className="shopping-cart-container-item-right">
                  <p>Total: $12.99</p>

                  <Trash className="shopping-cart-container-item-right-icon" />
                </div>
              </div>
            </div>
            <div className="shopping-cart-container-right">
              <h2>Grandtotal</h2>
              <div className="shopping-cart-container-right-text">
                <p>Total: ${total}</p>
                <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                  <button>Back to shop</button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
