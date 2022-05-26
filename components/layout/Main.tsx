import React from 'react';
import { motion } from 'framer-motion';

interface MainProps {
  children?: React.ReactNode;
}

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
};

const Main = ({ children }: MainProps) => {
  return (
    <div className='h-full'>
      <motion.main
        variants={variants}
        initial='hidden'
        animate='enter'
        exit='exit'
        transition={{ type: 'linear' }}
        className='mx-auto w-full max-w-5xl space-y-6 px-3'>
        {children}
      </motion.main>
    </div>
  );
};

export default Main;
