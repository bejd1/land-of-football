import React from "react";
import "./Menu.css";
// import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-list">
        <p>home</p>

        <p>about us</p>

        <p>contact</p>
      </div>
    </div>
  );
};
// export const Menu = () => {
//   return (
//     <div className="menu">
//       <div className="menu-list">
//       <Link to="/">
//           <p>Home</p>
//         </Link>
//         <Link to="/">
//           <p>About us</p>
//         </Link>
//         <Link to="/products">
//           <p>Products</p>
//         </Link>
//     </div>
//   );
// };
