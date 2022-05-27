import React from 'react';

interface BadgeProps {
  children?: React.ReactNode;
  size?: string;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, size, className }) => {
  return (
    <span
      className={`${className} text-${size} bg-green-100 px-0.5 font-medium`}>
      {children}
    </span>
  );
};

export default Badge;
