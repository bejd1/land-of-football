import { useCallback, useState } from "react";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { Menu } from "./components/Menu/Menu";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Nav } from "./pages/Nav/Nav";
import { Footer } from "./pages/Footer/Footer";
import { Main } from "./pages/Main/Main";
import { ProductsList } from "./pages/ProductsList/ProductsList";
import { ShoppingCart } from "./pages/ShoppingCart/ShoppingCart";
import { ProductItem } from "./pages/ProductItem/ProductItem";

function App(): JSX.Element {
  const unlockScroll = useCallback(() => {
    document.body.style.overflow = "";
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const menuToggle = () => {
    unlockScroll();
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <BrowserRouter>
        {isOpen && <Menu menuToggle={menuToggle} />}
        <Nav menuToggle={menuToggle} />
        <Routes>
          <Route path="/land-of-football" element={<Home />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/products/:id" element={<ProductItem />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route
            path="*"
            element={
              <div className="not__exit">
                <h2 className="not__exits">This page does not exist</h2>
                <Link to="/land-of-football" className="not__exit-btn">
                  back to home
                </Link>
              </div>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
