import "./Products.css";

export const Products = () => {
  return (
    <div className="productList-container">
      <h2>Products</h2>
      <div className="productsList-box">
        <div className="productsList-box-worldcup">
          <div className="dark-shadow"></div>
          <h3 className="productsList-box-national-title">World Cup</h3>
        </div>
        <div className="productsList-box-euro">
          <div className="dark-shadow"></div>
          <h3 className="productsList-box-national-title">European Cup</h3>
        </div>
        <div className="productsList-box-national">
          <div className="dark-shadow"></div>
          <h3 className="productsList-box-national-title">National League</h3>
        </div>
      </div>
    </div>
  );
};
