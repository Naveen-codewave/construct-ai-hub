
'use client';

import { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const Link = ({ href, children, className }: LinkProps) => {
  return (
    <RouterLink to={href} className={className}>
      {children}
    </RouterLink>
  );
};

export default Link;
