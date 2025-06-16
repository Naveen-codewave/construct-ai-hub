
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Home, Building, Palette, Wrench, ArrowRight } from 'lucide-react';
import Link from '@/components/ui/link';
import SEOHead from '@/components/seo/SEOHead';
import Header from '@/components/layout/Header';
import ServiceCard from '@/components/services/ServiceCard';
import ProcessSection from '@/components/services/ProcessSection';

const ServicesPage = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Construction',
      description: 'Custom homes, villas, and residential complexes built to perfection',
      features: ['Custom Design', 'Quality Materials', 'Timely Delivery', 'Warranty Included'],
      price: 'Starting from $150/sq ft'
    },
    {
      icon: Building,
      title: 'Commercial Construction',
      description: 'Office buildings, retail spaces, and commercial complexes',
      features: ['Modern Architecture', 'Sustainable Building', 'Safety Compliance', 'Project Management'],
      price: 'Starting from $200/sq ft'
    },
    {
      icon: Palette,
      title: 'Interior Design & Fit-out',
      description: 'Complete interior solutions for homes and offices',
      features: ['3D Visualization', 'Custom Furniture', 'Lighting Design', 'Space Planning'],
      price: 'Starting from $50/sq ft'
    },
    {
      icon: Wrench,
      title: 'Renovation & Remodeling',
      description: 'Transform your existing spaces with expert renovation',
      features: ['Structural Changes', 'Modern Upgrades', 'Cost Effective', 'Minimal Disruption'],
      price: 'Starting from $75/sq ft'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Construction Services - ConstructAI | Residential & Commercial"
        description="Complete construction services including residential homes, commercial buildings, interior design, and renovations. Professional project management with competitive pricing."
        keywords="construction services, residential construction, commercial construction, interior design, renovation, building contractors"
        canonical="/services"
      />

      <Header currentPage="services" />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-4" variant="secondary">Professional Construction Services</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Complete Construction Solutions
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            From residential homes to commercial complexes, we deliver exceptional construction services with cutting-edge project management.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive construction solutions tailored to your specific needs and requirements
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a detailed estimate and consultation from our expert team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/estimate">
              <Button size="lg">
                Get Free Estimate <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
