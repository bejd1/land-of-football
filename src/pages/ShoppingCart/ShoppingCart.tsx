import "./ShoppingCart.css";
import { Trash, Plus, Dash } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../components/App/Store";
import {
  removeFromCart,
  increase,
  decrease,
  clearCart,
} from "../../components/Features/Cart/CartSlice";

interface Items {
  id: number;
  cartItems: [];
  amount: number;
  total: number;
  quantity: number;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  url: string;
  quantity: number;
}
export const ShoppingCart = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const { total } = useSelector((store: { cart: Items }) => store.cart);
  const dispatch = useDispatch();

  return (
    <>
      {cartItems.length === 0 ? (
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
              {cartItems.map((item: CartItem) => {
                const { url, name, price, id, quantity } = item;
                const newPrice = price * quantity;
                return (
                  <div key={id} className="shopping-cart-container-item">
                    <div className="shopping-cart-container-item-left">
                      <img
                        className="shopping-cart-container-img"
                        src={url}
                        alt={name}
                      />
                      <div className="shopping-cart-container-item-left-tools">
                        <div className="shopping-cart-container-item-left-top">
                          <p>{name}</p>
                          <p>${price}</p>
                        </div>
                        <div className="shopping-cart-container-item-left-bottom">
                          <Dash
                            onClick={() => dispatch(decrease({ id: item.id }))}
                            className="shopping-cart-container-item-left-bottom-icon"
                          />
                          {item.quantity}
                          <Plus
                            onClick={() => dispatch(increase({ id: item.id }))}
                            className="shopping-cart-container-item-left-bottom-icon"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="shopping-cart-container-item-right">
                      <p>Total: ${newPrice.toFixed(2)}</p>
                      <Trash
                        onClick={() =>
                          dispatch(
                            removeFromCart({ id: item.id, price: item.price })
                          )
                        }
                        className="shopping-cart-container-item-right-icon"
                      />
                    </div>
                  </div>
                );
              })}
              <div className="shopping-cart-container-left-btn">
                <button onClick={() => dispatch(clearCart())}>
                  remove all items
                </button>
              </div>
            </div>
            <div className="shopping-cart-container-right">
              <h2>Grandtotal</h2>
              <div className="shopping-cart-container-right-text">
                <p>Grand total: ${total.toFixed(2)}</p>
                <Link to="/products" onClick={() => window.scrollTo(0, 0)}>
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
