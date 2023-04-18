import Link from 'next/link';
import { useEffect } from 'react';
import smoothscroll from 'smoothscroll-polyfill'; 

export default function Nav() {
  
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
 
 <MyLink href="#my-section" targetId="#my-section">
        Scroll to section
      </MyLink>

  </>;
}
