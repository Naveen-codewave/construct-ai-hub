
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from '@/components/ui/link';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-secondary/5">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Get a detailed estimate and consultation from our expert team
        </p>
        <Link href="/estimate">
          <Button size="lg">
            Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
