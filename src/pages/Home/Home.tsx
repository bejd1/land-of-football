import { Main } from "../Main/Main";
import { Products } from "../Products/Products";
import { Advantage } from "../Advantage/Advantage";
import { AboutUs } from "../AboutUs/AboutUs";
import { Newsletter } from "../Newsletter/Newsletter";

export const Home = () => {
  return (
    <>
      <div className="home">
        <Main />
        <Advantage />
        <AboutUs />
        <Products />
        <Newsletter />
      </div>
    </>
  );
};
