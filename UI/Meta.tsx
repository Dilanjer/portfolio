import React from 'react';

interface MetaPops {
  children?: React.ReactNode | string;
}

const Meta: React.FC<MetaPops> = ({ children }) => {
  return (
    <span className='mr-2 bg-green-300/40 px-0.5 text-sm font-medium uppercase text-green-800'>
      {children}
    </span>
  );
};

export default Meta;
