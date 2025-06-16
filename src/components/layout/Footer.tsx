
import React from 'react';
import { Building } from 'lucide-react';
import Link from '@/components/ui/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building className="h-6 w-6" />
              <span className="text-xl font-bold">ConstructAI</span>
            </div>
            <p className="text-background/80">
              Building the future with AI-powered construction management.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-background/80">
              <li>Residential Construction</li>
              <li>Commercial Projects</li>
              <li>Interior Design</li>
              <li>Renovations</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-background/80">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/case-studies">Case Studies</Link></li>
              <li><Link href="/testimonials">Testimonials</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-background/80">
              <li>+1 (555) 123-4567</li>
              <li>info@constructai.com</li>
              <li>123 Construction Ave</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/80">
          <p>&copy; 2024 ConstructAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
