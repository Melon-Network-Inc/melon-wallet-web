import React, { useState, useEffect,useRef } from 'react';
import Image from 'next/image'
import bottomProfile from '../images/My profile (1).png'
import blurGreen from '../images/Ellipse 60 (2).png'
import  mainImage from '../images/Screenshot 2022-12-08 at 01.31 1 (1).png'
import { useInView } from 'react-intersection-observer';

export default function Explore() {

  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1, // Adjust this value as per your requirement
  });

  // Update the state when the target section becomes visible or hidden
  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  console.log("I am"+isVisible)


  return <>
  <section ref={ref} className="overflow-x-hidden" id="my-section" id="page3">
  {/* main container */}
 <div className=" md:flex-row  sm:flex flex-col items-center container max-w-6xl mx-auto">
 <div className='flex-1 p-3 item-center pt-44 md:pt-0'>

<div className={`text-3xl font-bold sm:text-5xl lg:text-5xl transform transition-transform duration-1000 ${isVisible ? 'translate-x' : '-translate-x-full'}`}>Explore Dapp Like Never Before</div>
  <h5 className={`text-lg pt-4 font-bold sm:text-xl transform transition-transform duration-1000 ${isVisible ? 'translate-x' : '-translate-x-full'}`}>Multi-chain wallet enables you to engage with different chains seamlessly</h5>
  <p className={`text-52 pt-4 text-24 transform transition-transform duration-1000 ${isVisible ? 'translate-x' : '-translate-x-full'}`}>Receive airdrops, earn rewards, engage and vote in DAOs and connect to DApps you like on different blockchains without having to switch wallets at all.</p>
</div>

<div className={`md:min-w-min sm:flex-1 min-w-full transform transition-transform duration-1000 ${isVisible ? '-translate-x' : 'translate-x-full'}`}>
<div className='lg:min-w-min sm:flex-1 min-w-full ml-9 sm:ml-0'>
  <div className="relative h-screen">
  <div className="absolute inset-0 flex flex-col items-center justify-center">
      <Image src={blurGreen} className='w-52 mr-72 sm:w-64 mt-36 ml-0 sm:mr-96'/>
  </div>
  <div className="absolute inset-0 flex flex-col items-center justify-center">
      <Image src={mainImage} className='w-64 sm:w-96 mt-8 sm:ml-16'/>
  </div>
  <div className="absolute inset-0 flex flex-col items-center justify-center">
      <Image src={bottomProfile} className='mt-64 w-36 sm:w-48 sm:mt-72 mr-52 sm:mr-72'/>
  </div>
  <div className="absolute inset-0 flex flex-col items-center justify-center">
      <Image src={bottomProfile} className='w-36 mb-56 mr-40 sm:w-48 sm:mb-72 sm:mr-64 transform rotate-45'/>
  </div>
  </div>
  </div>
</div>
 </div>
</section>
</>;
}
