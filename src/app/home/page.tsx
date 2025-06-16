
import React from 'react';
import SEOHead from '@/components/seo/SEOHead';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import ServicesSection from '@/components/home/ServicesSection';
import CTASection from '@/components/home/CTASection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="ConstructAI - Expert Construction & Project Management"
        description="Professional construction services with AI-powered project management. Custom homes, commercial buildings, and renovations. Get your free estimate today."
        keywords="construction, building, project management, residential construction, commercial construction, renovation, AI construction"
        canonical="/"
      />
      
      <Header currentPage="home" />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default HomePage;
