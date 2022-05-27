import React from 'react';

interface ButtonProps {
  children?: React.ReactNode | string;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className='mt-14 flex items-center rounded-sm bg-teal-600 py-1.5 px-4 font-semibold text-white transition-colors hover:bg-teal-700'>
      {children}
    </button>
  );
};

export default Button;
