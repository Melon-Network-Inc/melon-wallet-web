import { Fragment } from 'react';


import { signIn, signOut, useSession } from 'next-auth/react';
import { useState } from 'react';
import { LoadingDots } from '@/components/icons';
import Image from 'next/image';
import { MenuIcon } from '@heroicons/react/outline';

import { Link, animateScroll as scroll } from "react-scroll";



import { Dialog, Transition } from '@headlessui/react';
import {
  CalendarIcon,
  CogIcon,
  HomeIcon,
  MapIcon,
  SearchCircleIcon,
  SpeakerphoneIcon,
  UserGroupIcon,
  ViewGridAddIcon,
  XIcon,
} from '@heroicons/react/outline';
import { BsDiscord } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { useEffect } from 'react';
import smoothscroll from 'smoothscroll-polyfill'; 
// import Directory from './directory';
// import { ResultProps } from '@/lib/api/user';

export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
  // results,
  totalUsers,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  // results: ResultProps[];
  totalUsers: number;
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



  return (
    <Transition.Root show={sidebarOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-40 bg-black lg:hidden"
        onClose={setSidebarOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 flex z-40">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full">
            <Dialog.Panel className="relative flex-1 flex flex-col max-w-sm w-full bg-white focus:outline-none">
             {/* here is the side menu */}
          <div className='flex flex-col justify-center items-center h-screen text-lg font-semibold'>
          <div className='flex gap-4 pb-3'>
          <div className=''><BsDiscord size={30}/></div>
                <div><BsTwitter size={30}/></div>
          </div>
      <div className='pb-2'>
      <MyLink href="#page1" targetId="#page1">
        page1
      </MyLink>
      </div>
      <div className='pb-2'>
      <MyLink href="#page2" targetId="#page2">
        page2
      </MyLink>
      </div>
     <div className='pb-2'>
     <MyLink href="#page3" targetId="#page3">
        page3
      </MyLink>
     </div>
      <div className='pb-2'>
      <MyLink href="#page4" targetId="#page4">
        page4
      </MyLink>
      </div>
     <div className='pb-2'>
     <MyLink href="#page5" targetId="#page5">
        page5
      </MyLink>
     </div>
      <div className='pb-2'>
      <MyLink href="#page6" targetId="#page6">
        page6
      </MyLink>
      </div>
     <div className='pb-2'>
     <MyLink href="#page7" targetId="#page7">
        page7
      </MyLink>
     </div>
     <div className='pb-2 mt-4'>
     <MyLink href="" targetId="#page7">
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
                ? 'bg-gray-200 border-black'
                : 'text-black pt-1 font-semibold'
            } w-32 h-11 py-1 text-white hover:text-black border border-black rounded-full text-sm transition-all`}>
            {loading ? <LoadingDots color="gray" /> : 'Create Wallet'}
          </button>
        ))}
      </MyLink>
     </div>
          </div>


         
              
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}>
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
            </Dialog.Panel>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Teams', href: '#', icon: UserGroupIcon, current: false },
  { name: 'Directory', href: '#', icon: SearchCircleIcon, current: true },
  { name: 'Announcements', href: '#', icon: SpeakerphoneIcon, current: false },
  { name: 'Office Map', href: '#', icon: MapIcon, current: false },
];
const secondaryNavigation = [
  { name: 'Apps', href: '#', icon: ViewGridAddIcon },
  { name: 'Settings', href: '#', icon: CogIcon },
];

const user = {
  name: 'Tom Cook',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
