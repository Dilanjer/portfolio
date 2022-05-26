import React from 'react';

const Footer = () => {
  return (
    <footer className='mt-20 p-2 text-center text-sm opacity-50'>
      &copy; {new Date().getFullYear()} Arthur Hovhannisyan. All Rights
      Reserved.
    </footer>
  );
};

export default Footer;
