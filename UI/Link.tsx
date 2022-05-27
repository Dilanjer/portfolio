import React from 'react';
import NextLink from 'next/link';

interface LinkProps {
  children?: React.ReactNode | string;
  target?: string;
  href: string;
  scroll?: boolean;
}

const Link: React.FC<LinkProps> = ({ children, href, scroll, target }) => {
  return <Link href={href}></Link>;
};

export default Link;
