import Image from 'next/image'
import faceIcons from '../images/Frame 21183 (4).png'
import mywallet from '../images/My profile.png'
import roundGreen from '../images/Ellipse 60.png'
import multipleProfile from '../images/Frame 21193.png'
import bottomProfile from '../images/My profile (1).png'
import circle from '../images/Ellipse 61.png'
import CreateWalletButton from '@/components/CreateWalletButton/createWalletButton'
import JoinCommunityButton from '@/components/JoinCommunityButton/JoinCommunityButton'
import React, { useState, useEffect,useRef } from 'react';
import { useInView } from 'react-intersection-observer';


export default function Home() {

    const [isVisible, setIsVisible] = useState(false);
    const [ref, inView] = useInView({
      threshold: 0.1, // Adjust this value as per your requirement
    });
  
    // Update the state when the target section becomes visible or hidden
    useEffect(() => {
      setIsVisible(inView);
    }, [inView]);


    return  <div ref={ref} className="" id="page1">
    {/* main container */}
   <div className=" lg:flex-row  sm:flex flex-col items-center container max-w-6xl mx-auto pt-12 pb-12">
   <div className={`flex-1 p-3 item-center transform transition-transform duration-1000 ${isVisible ? 'translate-x' : '-translate-x-full'}`}>

      {/* text with face icons */}
      <div className='flex items-center pt-44 md:pt-0'>
            <h1 className='text-4xl sm:text-5xl font-bold'>Your</h1><Image className="w-24 pl-2 mt-2" src={faceIcons}/>
          </div>
          {/* remaining header text */}
          <h1 className='text-4xl leading-[3rem] pt-2  sm:text-5xl font-bold sm:leading-[4rem]'>Personalized Gateway to Digital Ownership</h1>
          {/* paragraph */}
          <p className='pt-8 text-black'>Melon Wallet is a multi-network self-custody wallet that lets you earn, send, socialize and engage in the new economy on your own terms.</p>
    {/* buttons create wallet and join community */}
    <div className="mt-6 flex">
           <CreateWalletButton label='Create Wallet'/>
           <JoinCommunityButton label='Join the Community'/>
          </div>
  </div>
  
  <div className={`lg:min-w-min sm:flex-1 min-w-full ml-9 sm:ml-0 transform transition-transform duration-1000 ${isVisible ? '-translate-x' : 'translate-x-full'}`}>
  
  <div className="relative h-screen">
  
  <div className="absolute inset-0 flex flex-col items-center justify-center">
      <Image src={roundGreen} className='w-20 sm:w-28 mt-72 mr-72 ml-9 sm:ml-0 sm:mr-96'/>
  </div>
  <div className="absolute inset-0 flex flex-col items-center justify-center">
      <Image src={roundGreen} className='w-14 ml-24 mb-40 sm:w-28 sm:mb-52 sm:ml-52'/>
  </div>
  <div className="absolute inset-0 flex flex-col items-center justify-center">
      <Image src={mywallet} className='w-44 sm:w-72 mr-20'/>
  </div>
  <div className="absolute inset-0 flex flex-col items-center justify-center">
      <Image src={multipleProfile} className='w-40 mr-56 sm:w-72 ml-72 sm:mr-12 mb-24'/>
  </div>
  <div className="absolute inset-0 flex flex-col items-center justify-center">
      <Image src={bottomProfile} className='w-28 mr-72 ml-10 mt-80  sm:w-48 sm:ml-4 sm:mr-96 sm:mt-96 pt-12'/>
  </div>
  <div className="absolute inset-0 flex flex-col items-center justify-center mr-28">
      <Image src={circle} className='w-5 sm:w-8 mr-60 mt-44 sm:mr-96 sm:mt-20'/>
  </div>
  <div className="absolute inset-0 flex flex-col items-center justify-center ml-28">
      <Image src={circle} className='w-4 mb-64 ml-16 sm:w-6 sm:mb-96 sm:ml-56'/>
  </div>
  </div>
  </div>
   </div>
  </div>;
    }
  