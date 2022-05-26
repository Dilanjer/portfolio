import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Logo = () => {
  return (
    <Link className='' href={'/'}>
      <a className='flex items-center space-x-1 p-2 outline-2 outline-blue-300'>
        <Image width={20} height={25} alt='Logo' src={'/images/logo.png'} />
        <span className='text-lg font-semibold'>Arthur Hovhhnaisyan</span>
      </a>
    </Link>
  );
};

export default Logo;
