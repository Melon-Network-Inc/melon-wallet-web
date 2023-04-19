import React,{useEffect} from "react";
import Explore from "./explore";
import Home from "./home";
import ScanCode from "./scancode";
import Naver from "./never";
import Products from "./Prodcuts";
import Product from "./product";
import Nav from "./nav";
import Single from "./single";
import Self from "./self";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Index() {

  useEffect(() => {
    AOS.init({
      startEvent: 'DOMContentLoaded', 
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate'
    });
  }, [])

  return <div className="home bg-white">
   <Home/>
   <ScanCode/>
   <Explore/>
   <Naver/>
   <Self/>
   <Single/>
   <Product/>
  </div>;
}
