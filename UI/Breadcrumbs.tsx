import { ChevronRightIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import React from 'react';

interface BreadcrumbsProps {
  paths?: string;
  children?: React.ReactNode | string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ paths, children }) => {
  const router = useRouter();
  const pathsArray = paths && paths.slice(1).split('/').slice(0, -1);

  return (
    <div className='flex items-center'>
      {pathsArray &&
        pathsArray.map((path) => {
          return (
            <React.Fragment key={path}>
              <button onClick={() => router.back()}>
                <a className='text-sm capitalize text-blue-400 underline'>
                  {path}
                </a>
              </button>
              <span>
                <ChevronRightIcon className='mx-1 mt-0.5 w-3' />
              </span>
            </React.Fragment>
          );
        })}
      <h2 className='font-semibold'>{children}</h2>
    </div>
  );
};

export default Breadcrumbs;
