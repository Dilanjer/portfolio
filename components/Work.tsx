import { ChevronRightIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import React from 'react';
import Badge from './Badge';

interface TitlePops {
  children?: React.ReactNode;
}
interface MetaPops {
  children?: React.ReactNode;
}

export const Title = ({ children }: TitlePops) => {
  return (
    <div className='flex items-center'>
      <Link href={'/works'}>
        <a className='text-sm text-blue-400'>Works</a>
      </Link>
      <span>
        <ChevronRightIcon className='mx-1 mt-0.5 w-3' />
      </span>
      <h2 className='font-semibold'>{children}</h2>
    </div>
  );
};

export const Meta = ({ children }: MetaPops) => {
  return (
    <Badge className='mr-2 bg-green-300/40 text-sm uppercase text-green-800'>
      {children}
    </Badge>
  );
};
