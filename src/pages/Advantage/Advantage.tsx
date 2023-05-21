import React from "react";
import "./Advantage.css";
import {
  Truck,
  PersonCheckFill,
  Coin,
  ArrowUpRightCircle,
} from "react-bootstrap-icons";

export const Advantage = () => {
  return (
    <div className="advantage-container">
      <h2>Why to buy here?</h2>
      <div className="advantage-box">
        <div className="advantage-box-left-freeship">
          <Truck style={{ fontSize: "80px" }} />
          <p>Free Shipping & Returns</p>
        </div>
        <div className="advantage-box-left-highquality">
          <ArrowUpRightCircle style={{ fontSize: "80px" }} />
          <p>High quality matierial </p>
        </div>

        <div className="advantage-box-right-moneyback">
          <Coin style={{ fontSize: "80px" }} />
          <p>100% Money back Guarantee</p>
        </div>
        <div className="advantage-box-right-positive-opinion">
          <PersonCheckFill style={{ fontSize: "80px" }} />
          <p>+10 000 Positive Opinion</p>
        </div>
      </div>
    </div>
  );
};
// export const Advantage = () => {
//   return (
//     <div className="advantage-container">
//       <h2>Why to buy here?</h2>
//       <div className="advantage-box">
//         <div className="advantage-box-left">
//           <div className="advantage-box-left-freeship">
//             <Truck style={{ fontSize: "80px" }} />
//             <p>Free Shipping & Returns</p>
//           </div>
//           <div className="advantage-box-left-highquality">
//             <ArrowUpRightCircle style={{ fontSize: "80px" }} />
//             <p>High quality matierial </p>
//           </div>
//         </div>
//         <div className="advantage-box-right">
//           <div className="advantage-box-right-moneyback">
//             <Coin style={{ fontSize: "80px" }} />
//             <p>100% Money back Guarantee</p>
//           </div>
//           <div className="advantage-box-right-positive-opinion">
//             <PersonCheckFill style={{ fontSize: "80px" }} />
//             <p>+10 000 Positive Opinion</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
