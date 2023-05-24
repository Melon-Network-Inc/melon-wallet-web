import Image from 'next/image'
import logo from '../images/4.png'
import img from '../images/lines.png'
import CreateWalletButton from '@/components/CreateWalletButton/createWalletButton'
import JoinCommunityButton from '@/components/JoinCommunityButton/JoinCommunityButton'
import React, { useState, useEffect,useRef } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Product() {

  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1, // Adjust this value as per your requirement
  });

  // Update the state when the target section becomes visible or hidden
  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

    return  <div ref={ref} className="items-center container max-w-6xl mx-auto overflow-hidden pt-12 pb-12" id='page7'>
      {/* call an action container */}
     <div className={`bg-black rounded-2xl transform transition-transform duration-1000 ${isVisible ? '-translate-y' : 'translate-y-full'}`}>
     <div className='max-w-2xl mx-auto text-center pt-10 pb-10'>
        <h1 className='text-white text-3xl pb-12'>Call to Action</h1>
        <Image src={img} className='pb-20'/>
        <CreateWalletButton label='Create Wallet' className="bg-white !border !border-white  text-black transition duration-400
        hover:!bg-black hover:!text-white"/>
        <JoinCommunityButton label='Join the Community' className='!bg-black border !text-white !border !border-white  text-black transition duration-400
        hover:!bg-white hover:!text-black'/>
      </div>
     </div>
    {/* main container */}
    <div className={`grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 transform transition-transform duration-1000 ${isVisible ? '-translate-y' : 'translate-y-full'}`}>
  <div class="grid-item col-span-1 flex flex-col justify-center items-center">
    <Image src={logo} className='w-28 pt-6 pb-6'/>
    <h5 className='font-bold ml-4 text-left'>Multi Chain</h5>
    <p className='ml-4 pt-3'>A wallet to explore all blockchain with</p>
  </div>

  <div class="grid-item col-span-1 flex flex-col justify-center items-center">
    <Image src={logo} className='w-28 pt-6 pb-6'/>
    <h5 className='font-bold ml-4 text-left'>Multi Chain</h5>
    <p className='ml-4 pt-3'>A wallet to explore all blockchain with</p>
  </div>
  
  <div class="grid-item col-span-1 flex flex-col justify-center items-center">
    <Image src={logo} className='w-28 pt-6 pb-6'/>
    <h5 className='font-bold ml-4 text-left'>Multi Chain</h5>
    <p className='ml-4 pt-3'>A wallet to explore all blockchain with</p>
  </div>
  
  <div class="grid-item col-span-1 flex flex-col justify-center items-center">
    <Image src={logo} className='w-28 pt-6 pb-6'/>
    <h5 className='font-bold ml-4 text-left'>Multi Chain</h5>
    <p className='ml-4 pt-3'>A wallet to explore all blockchain with</p>
  </div>
  
</div>
  </div>;
  }
  