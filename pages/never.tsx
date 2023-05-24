import React, { useState, useEffect,useRef } from 'react';
import Image from 'next/image'
import bottomProfile from '../images/My profile (1).png'
import logo from '../images/4.png'
import login from '../images/Login.png'
import { useInView } from 'react-intersection-observer';

export default function Naver() {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1, // Adjust this value as per your requirement
  });

  // Update the state when the target section becomes visible or hidden
  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  console.log("I am"+isVisible)
  return <div ref={ref} className="bg-orange-100" id='page4'>
  {/* main container */}
 <div className=" md:flex-row  sm:flex flex-col items-center container max-w-6xl mx-auto" id="about">
<div className={`md:min-w-min sm:flex-1 min-w-full transform transition-transform duration-1000 ${isVisible ? 'translate-x' : '-translate-x-full'}`}>
<div className='lg:min-w-min sm:flex-1 min-w-full ml-9 sm:ml-0'>
  <div className="relative h-screen">

  <div className="absolute inset-0 flex flex-col items-center justify-center ml-9 mb-12">
      <Image src={logo} className='w-20 mr-72 mb-72 bg-white rounded-full'/>
  </div>
  <div className="absolute inset-0 flex flex-col items-center justify-center">
      <Image src={login} className='w-56'/>
  </div>
  <div className="absolute inset-0 flex flex-col items-center justify-center">
      <Image src={bottomProfile} className='w-44 mr-52 mt-64'/>
  </div>
  </div>
  </div>
</div>
<div className='flex-1 p-3 item-center pb-44 md:pb-0'>
<h1 className={`text-3xl font-bold sm:text-4xl lg:text-4xl transform transition-transform duration-1000 ${isVisible ? '-translate-x' : 'translate-x-full'}`}>You’ll Never Have to Worry About Losing Accounts Again</h1>
  <h5 className={`text-lg pt-6 font-bold sm:text-xl transform transition-transform duration-1000 ${isVisible ? '-translate-x' : 'translate-x-full'}`}>Melon Wallet’s patented secured backup/retrieval process helps you securely backup & retrieve your wallet accounts without compromising your private keys</h5>
  <p className={`text-52 pt-6 text-24 transform transition-transform duration-1000 ${isVisible ? '-translate-x' : 'translate-x-full'}`}>If you backup wallet accounts using Melon Wallet, you will never lose wallet access even if you lose your phone, switch to a new laptop/browser or accidentally sign out of all accounts.</p>
</div>
 </div>
</div>;
}
