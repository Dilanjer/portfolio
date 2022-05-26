import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface WorkItemProps {
  imgSrc: string;
  href: string;
  title?: string;
  description?: string;
}

const WorkItem = ({ description, href, imgSrc, title }: WorkItemProps) => {
  return (
    <Link href={href}>
      <a className='group shadow-md transition-transform hover:-translate-y-1'>
        <div className='relative max-w-[320px] overflow-hidden rounded-md text-center'>
          <Image
            className='transition-transform hover:duration-5000 group-hover:scale-110'
            alt='hero'
            width={'320px'}
            height={'200px'}
            src={imgSrc}
          />
          <div className='py-2'>
            <h1 className='font-semibold text-primary'>{title}</h1>
            <p className='px-2 text-sm'>{description}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default WorkItem;
