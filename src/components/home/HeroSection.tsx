
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import Link from '@/components/ui/link';

const HeroSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto text-center max-w-4xl">
        <Badge className="mb-4" variant="secondary">AI-Powered Construction Management</Badge>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Build Your Dreams with Expert Precision
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          From concept to completion, we deliver exceptional construction services with cutting-edge project management and real-time updates.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/estimate">
            <Button size="lg" className="w-full sm:w-auto">
              Get Free Estimate <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/services">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              View Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
