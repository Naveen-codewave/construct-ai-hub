
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building, Home, Wrench, Palette, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

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

  const processSteps = [
    { step: '01', title: 'Consultation', description: 'Initial meeting to understand your requirements' },
    { step: '02', title: 'Design & Planning', description: 'Detailed blueprints and project planning' },
    { step: '03', title: 'Approval & Permits', description: 'Handle all necessary approvals and permits' },
    { step: '04', title: 'Construction', description: 'Execute the project with regular updates' },
    { step: '05', title: 'Handover', description: 'Quality check and project handover' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Building className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">ConstructAI</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
            <Link href="/services" className="text-primary font-medium">Services</Link>
            <Link href="/case-studies" className="text-foreground hover:text-primary transition-colors">Case Studies</Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">About</Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
          </nav>
          <Link href="/login">
            <Button variant="outline">Login</Button>
          </Link>
        </div>
      </header>

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
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <Badge variant="outline" className="mt-1">{service.price}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-6">
                    {service.description}
                  </CardDescription>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Link href="/estimate" className="flex-1">
                      <Button className="w-full">
                        Get Quote <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Button variant="outline">Learn More</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-secondary/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach to deliver your project on time and within budget
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
