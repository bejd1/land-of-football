import { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);
  const menuToggle = () => setIsOpen(!isOpen);

  return (
    <div className="App">
      {isOpen && <Menu />}

      <BrowserRouter>
        <Nav menuToggle={menuToggle} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Main />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/products/:id" element={<ProductItem />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route
            path="*"
            element={
              <div className="not__exit">
                <h1 className="not__exits">This page does not exist</h1>
                <Link to="/" className="not__exit-btn">
                  BACK TO HOME
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
