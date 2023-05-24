import Image from 'next/image'
import search from '../images/Search.png'
import multipleProfile from '../images/Frame 21193.png'
import qrCode from '../images/Frame 77.png'
import dp from '../images/Frame 2452.png'
import React, { useState, useEffect,useRef } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Single() {


  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1, // Adjust this value as per your requirement
  });

  // Update the state when the target section becomes visible or hidden
  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);



  return <div ref={ref} className="" id='page6'>
  {/* main container */}
  <div className='items-center container max-w-md mx-auto'>
    <h1 className='text-center pt-14 text-2xl font-bold max-w-lg mx-auto'>A Single Multi-chain Wallet is All You Need</h1>
  </div>
 <div className=" md:flex-row  sm:flex flex-col items-center container max-w-6xl mx-auto">
<div className={`md:min-w-min sm:flex-1 min-w-full transform transition-transform duration-1000 ${isVisible ? 'translate-x' : '-translate-x-full'}`}>
<div className="relative h-screen">
<div className="absolute inset-0 flex flex-col items-center justify-center">
<p className='text-center font-semibold'>Add Recipients</p>
    <Image src={search} className='w-56 pt-8'/>
    <Image src={multipleProfile} className='w-72 pt-8'/>
    <Image src={qrCode} className='w-40 pt-8'/>
    <Image src={dp} className='w-64 pt-8'/>
</div>
</div>
</div>
<div className={`flex-1 p-3 item-center pb-36 md:pb-0 transform transition-transform duration-1000 ${isVisible ? '-translate-x' : 'translate-x-full'}`}>
<h1 className='text-3xl font-bold sm:text-5xl lg:text-5xl'>Send Assets to Friends Not to Code</h1>
  <h5 className='text-lg pt-4 font-bold sm:text-xl'>Simply look up their name, social media handle, email or ENS... and send it!</h5>
  <p className='text-52 pt-4 text-24'>No more stressing about sending money to the wrong hexadecimal recipient address. Melon Wallet’s on/off anonymous mode enables you to show identity to friends while remaining private to strangers.</p>
</div>
 </div>
</div>;
}
