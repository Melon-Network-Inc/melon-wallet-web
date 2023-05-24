import React,{useEffect} from "react";
import Explore from "./explore";
import Home from "./home";
import ScanCode from "./scancode";
import Naver from "./never";
import Product from "./product";
import Single from "./single";
import Self from "./self";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Index() {

  useEffect(() => {
    AOS.init({
      duration : 800
    });
  }, []);

  return <div className="home bg-white overflow-hidden">
   <Home/>
   <ScanCode/>
   <Explore/>
   <Naver/>
   <Self/>
   <Single/>
   <Product/>
  </div>;
}
