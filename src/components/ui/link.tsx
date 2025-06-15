
'use client';

import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const Link = ({ href, children, className }: LinkProps) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default Link;
