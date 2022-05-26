import React from 'react';
import Popover from '../UI/Popover';
import { AnimatePresence } from 'framer-motion';
import { MenuIcon } from '@heroicons/react/outline';
import Link from 'next/link';

const Menu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open: any = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = React.useCallback(() => {
    if (anchorEl !== null) setAnchorEl(null);
  }, [anchorEl]);

  React.useEffect(() => {
    return () => {
      handleClose();
    };
  }, [handleClose]);

  return (
    <>
      <button
        onClick={handleClick}
        className='rounded-md border border-blue-100 p-2 outline-blue-300 hover:bg-blue-100'>
        <MenuIcon className='w-5' />
      </button>

      <AnimatePresence initial={false}>
        <Popover
          className={'w-36 rounded-sm border bg-white shadow'}
          open={open}
          key={open}
          anchorEl={anchorEl}
          onClose={handleClose}>
          <Link href='/'>
            <a
              onClick={handleClose}
              className='block px-3 py-2 transition-colors hover:bg-blue-100'>
              About
            </a>
          </Link>
          <Link href='/works'>
            <a
              onClick={handleClose}
              className='block px-3 py-2 transition-colors hover:bg-blue-100'>
              Works
            </a>
          </Link>
          <Link href='https://github.com/Dilanjer'>
            <a
              onClick={handleClose}
              target={'_blank'}
              className='block px-3 py-2 transition-colors hover:bg-blue-100'>
              GitHub
            </a>
          </Link>
        </Popover>
      </AnimatePresence>
    </>
  );
};

export default Menu;
