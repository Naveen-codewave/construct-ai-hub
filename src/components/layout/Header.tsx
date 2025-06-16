
import React from 'react';
import { Button } from '@/components/ui/button';
import { Building } from 'lucide-react';
import Link from '@/components/ui/link';

interface HeaderProps {
  currentPage?: string;
}

const Header: React.FC<HeaderProps> = ({ currentPage }) => {
  return (
    <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Building className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-primary">ConstructAI</span>
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link 
            href="/" 
            className={`transition-colors ${currentPage === 'home' ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
          >
            Home
          </Link>
          <Link 
            href="/services" 
            className={`transition-colors ${currentPage === 'services' ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}
          >
            Services
          </Link>
          <Link href="/case-studies" className="text-foreground hover:text-primary transition-colors">
            Case Studies
          </Link>
          <Link href="/about" className="text-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
        <Link href="/login">
          <Button variant="outline">Login</Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
