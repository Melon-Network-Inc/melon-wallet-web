import { signIn, signOut, useSession } from 'next-auth/react';
import React, { useState, useEffect } from 'react';
import { LoadingDots } from '@/components/icons';
import Image from 'next/image';
import { MenuIcon } from '@heroicons/react/outline';
import { BsDiscord } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { Link, animateScroll as scroll } from "react-scroll";
import smoothscroll from 'smoothscroll-polyfill';
import { Element } from 'react-scroll';
import logo from '../img/logo.png'
import melon from '../img/m.png'
import network from '../img/n.png'

export default function Navbar({
  setSidebarOpen,
}: {
  setSidebarOpen: (open: boolean) => void;
}) {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);

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


  // after a specific scroll in the navbar color should change
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    function handleScroll() {
      console.log('Scrolling');
      const position = window.scrollY;
      console.log('Position:', position);
      setScrollPosition(position);
      console.log('State:', scrollPosition);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <nav
    className="fixed pr-4 pl-4 bg-green-200 z-10 w-full bg-white right-0 flex items-center justify-between md:justify-end"
      aria-label="Navbar">
        
     <button
        type="button"
        className="inline-flex md:hidden items-center justify-center rounded-md text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-0"
        onClick={() => setSidebarOpen(true)}>
        <span className="sr-only">Open sidebar</span>
        <MenuIcon className="h-6 w-6" aria-hidden="true"/>
      </button>
      
      <div className='container font-semibold max-w-6xl mx-auto flex justify-between items-center pt-2.5 pb-2.5'>
        <div className='flex items-center justify-center'><Image src={logo} className='w-16'/><h5 className='text-lg font-bold'>Melon</h5><p className='ml-0.5 text-lg text-gray-500'>Network</p></div>
      <div className='flex gap-8 items-center justify-end'>
      <div className='hidden lg:block'><BsDiscord size={14}/></div>
      <div className='hidden lg:block'><BsTwitter size={14}/></div>
      <div className='hidden lg:block'>
      <MyLink className='hidden lg:block'  href="#page1" targetId="#page1">
        Page1
      </MyLink>
      </div>
     <div className='hidden lg:block'>
     <MyLink className='hidden lg:block' href="#page2" targetId="#page2">
      page2
      </MyLink>
     </div>
     <div className='hidden lg:block'>
     <MyLink className='hidden lg:block' href="#page3" targetId="#page3">
      page3
      </MyLink>
     </div>
     <div className='hidden lg:block'>
     <MyLink className='hidden lg:block' href="#page4" targetId="#page4">
     page4
      </MyLink>
     </div>
     <div className='hidden lg:block'>
     <MyLink className='hidden lg:block' href="#page5" targetId="#page5">
     page5
      </MyLink>
     </div>
     <div className='hidden lg:block'>
     <MyLink className='hidden lg:block' href="#page6" targetId="#page6">
     page6
      </MyLink>
     </div>
     <div className='hidden lg:block'>
     <MyLink className='hidden lg:block' href="#page7" targetId="#page7">
     page7
      </MyLink>
     </div>
     <div className=''>
     <MyLink className='' href="#page7" targetId="#page7">
     {status !== 'loading' &&
        (session?.user ? (
          <Link href={`/username`}>
            <a className="w-8 h-8 rounded-full overflow-hidden">
              <Image
                src={
                  session.user.image ||
                  `https://avatar.tobi.sh/${session.user.name}`
                }
                alt={session.user.name || 'User'}
                width={300}
                height={300}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2PYsGHDfwAHNAMQumvbogAAAABJRU5ErkJggg=="
              />
            </a>
          </Link>
        ) : (
          <button
            disabled={loading}
            onClick={() => {
              setLoading(true);
              signIn('github', { callbackUrl: `/profile` });
            }}
            className={`${
              loading
                ? 'bg-gray-200 border-black mr-4'
                : 'text-black pt-1 font-semibold'
            } w-32 h-11 py-1 text-white hover:text-black border border-black rounded-full text-sm transition-all`}>
            {loading ? <LoadingDots color="gray" /> : 'Create Wallet'}
          </button>
        ))}
      </MyLink>
     </div>
      </div>
           

      </div>
    </nav>
  );
}
