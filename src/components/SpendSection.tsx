
import React from 'react';
import { CreditCard, Gift, Lightbulb, Bell, Shield } from 'lucide-react';
import FeatureCard from './FeatureCard';

const SpendSection = () => {
  return (
    <section id="spend" className="py-24 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-50 via-white to-white"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center rounded-full bg-cpost-blue/10 px-3 py-1 text-sm font-medium text-cpost-blue mb-4">
            <CreditCard className="h-4 w-4 mr-1.5" />
            <span>Spend Features</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="text-cpost-blue">Smart Spending</span> <br className="hidden sm:block" />
            for our next generation
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our spending account gives you the tools to spend wisely, build good habits, and get rewarded along the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={CreditCard}
            title="Spending Card with Personality"
            description="Choose a card design that links to a cultural or social cause you care about. Your spending can make a difference."
            delay={100}
          />
          <FeatureCard
            icon={Gift}
            title="Brand Rewards"
            description="Earn cashback and exclusive discounts when shopping at partner brands like Nike, H&M, Zara, and more."
            delay={200}
          />
          <FeatureCard
            icon={Lightbulb}
            title="Parental Guidance"
            description="Get tips and support from parents on spending and specific merchants, helping you make better financial decisions."
            delay={300}
          />
          <FeatureCard
            icon={Bell}
            title="Positive Reinforcement"
            description="Receive instant alerts encouraging responsible behavior and meaningful rewards for reaching your financial goals."
            delay={400}
          />
          <FeatureCard
            icon={Shield}
            title="Secure Banking"
            description="Bank-level security with biometric authentication and instant lock/unlock capabilities for your account."
            delay={500}
          />
        </div>
      </div>
    </section>
  );
};

export default SpendSection;
