
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import JourneyHero from '@/components/journey/JourneyHero';
import AgeStages from '@/components/journey/AgeStages';
import CardPersonality from '@/components/journey/CardPersonality';
import ParentalControls from '@/components/journey/ParentalControls';
import GrowthMilestones from '@/components/journey/GrowthMilestones';
import UniversityReadiness from '@/components/journey/UniversityReadiness';
import Footer from '@/components/Footer';

const Journey = () => {
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
      <JourneyHero />
      <AgeStages />
      <CardPersonality />
      <ParentalControls />
      <GrowthMilestones />
      <UniversityReadiness />
      <Footer />
    </div>
  );
};

export default Journey;
