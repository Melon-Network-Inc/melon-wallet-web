import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  onIntersect: () => void;
};

const IntersectionObserverComponent = ({ children, onIntersect }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          onIntersect();
          observer.unobserve(entry.target);
        }
      });
    });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [onIntersect]);

  return (
    <div ref={targetRef}>
      {children}
    </div>
  );
};

export default IntersectionObserverComponent;
