import React from 'react';

interface ButtonProps {
  label: string;
  className?: string;
}

const JoinCommunityButton: React.FC<ButtonProps> = ({ label, className }) => {
  return (
    <button className={`ml-6 bg-white border border-black font-normal transition duration-400 text-black pt-3 pb-3 pl-6 pr-6 rounded-full tracking-wide
    hover:bg-black hover:text-white ${className}`}>
      {label}
    </button>
  );
};

export default JoinCommunityButton;







