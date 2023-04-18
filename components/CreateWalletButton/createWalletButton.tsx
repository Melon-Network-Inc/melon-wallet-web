import React from 'react';

interface ButtonProps {
  label: string;
  className?: string;
}

const createWalletButton: React.FC<ButtonProps> = ({ label, className }) => {
  return (
    <button className={`bg-black border border-black font-normal transition duration-400 text-white pt-3 pb-3 pl-6 pr-6 rounded-full tracking-wide
    hover:bg-white hover:text-black  ${className}`}>
      {label}
    </button>
  );
};

export default createWalletButton;