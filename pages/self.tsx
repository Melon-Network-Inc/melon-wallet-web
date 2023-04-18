import Image from 'next/image'
import search from '../images/Search.png'
import qrCode from '../images/Frame 77.png'
import dp from '../images/Frame 2452.png'
import bottomProfile from '../images/My profile (1).png'
import blurGreen from '../images/Ellipse 60 (2).png'
import mywallet from '../images/My profile.png'
import roundGreen from '../images/Ellipse 60.png'
import multipleProfile from '../images/Frame 21193.png'
import  mainImage from '../images/Screenshot 2022-12-08 at 01.31 1 (1).png'
import circle from '../images/Ellipse 61.png'
import { useEffect } from 'react';
import smoothscroll from 'smoothscroll-polyfill';

export default function Self() {

  
function scrollToTarget(targetId) {
  const target = document.querySelector(targetId);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}


function MyLink({ href, targetId, children }) {
  function handleClick(event) {
    event.preventDefault();
    scrollToTarget(targetId);
  }

  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  );
}

useEffect(() => {
  smoothscroll.polyfill();
}, []);
  
  return <> 
 
  <section className="bg-black" id="my-section" id="page5">
  {/* main container */}
 <div className=" md:flex-row  sm:flex flex-col items-center container max-w-6xl mx-auto overflow-x-hidden">
 <div className='flex-1 p-3 item-center pt-44 md:pt-0'>
<h1 className='text-3xl font-bold sm:text-4xl lg:text-5xl text-white'>Self-Custody Means Nobody Has Access to Your Private Key</h1>
  <h5 className='text-lg pt-4 font-bold sm:text-xl text-white'>Multi-chain wallet enables you to engage with different chains seamlessly</h5>
  <p className='text-52 pt-4 text-24 text-white'>Receive airdrops, earn rewards, engage and vote in DAOs and connect to DApps you like on different blockchains without having to switch wallets at all.</p>
</div>
<div className='md:min-w-min sm:flex-1 min-w-full'>
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
</section></>;
}
