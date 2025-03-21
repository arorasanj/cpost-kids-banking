
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AppPreview from '@/components/AppPreview';
import RewardsSection from '@/components/RewardsSection';
import Footer from '@/components/Footer';
import { CreditCard, PiggyBank, Shield, LockKeyhole, Clock, Gift } from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';

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

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-50 via-white to-white"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="text-cpost-red">Smart Banking</span> Features <br className="hidden sm:block" />
              for Smart Youth
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              CPost provides all the tools needed to help young people manage money confidently, build good habits, and earn rewards along the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={CreditCard}
              title="Virtual Debit Card"
              description="A secure card that works online and in physical stores through Apple Pay or Google Pay. No risk of losing a physical card."
              delay={100}
            />
            <FeatureCard
              icon={PiggyBank}
              title="Goal-Based Savings"
              description="Create personalized savings goals with progress trackers. Automatically save a percentage of every deposit."
              delay={200}
            />
            <FeatureCard
              icon={Gift}
              title="Brand Rewards"
              description="Earn cashback and exclusive discounts when shopping at partner brands like Nike, H&M, Zara, and more."
              delay={300}
            />
            <FeatureCard
              icon={Shield}
              title="Parental Controls"
              description="Parents can set spending limits, monitor transactions, and approve specific merchants for added security."
              delay={400}
            />
            <FeatureCard
              icon={LockKeyhole}
              title="Secure Banking"
              description="Bank-level security with biometric authentication and instant lock/unlock capabilities for your account."
              delay={500}
            />
            <FeatureCard
              icon={Clock}
              title="Real-Time Notifications"
              description="Instant alerts for all transactions, balance updates, and reward achievements to stay on top of your finances."
              delay={600}
            />
          </div>
        </div>
      </section>

      <RewardsSection />
      <AppPreview />
      <Footer />
    </div>
  );
};

export default Index;
