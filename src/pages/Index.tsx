
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SpendSection from '@/components/SpendSection';
import SaveSection from '@/components/SaveSection';
import AppPreview from '@/components/AppPreview';
import RewardsSection from '@/components/RewardsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Smooth scroll effect for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      <HeroSection />
      <SpendSection />
      <SaveSection />
      <RewardsSection />
      <AppPreview />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
