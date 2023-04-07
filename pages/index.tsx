import Explore from "./explore";
import Home from "./home";
import ScanCode from "./scancode";
import Naver from "./never";
import Products from "./Prodcuts";
import Product from "./product";

export default function Index() {
  return <div className="home bg-white">
    <Home/>
    <ScanCode/>
    <Explore/>
   <Naver/>
   <Product/>
  </div>;
}
