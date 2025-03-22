
import React from 'react';
import { Shield, BellRing, LineChart, Lock } from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';

const ParentalControls = () => {
  return (
    <section id="parental-controls" className="py-20 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Full Parental Guidance & Control</h2>
          <p className="text-gray-600">
            Stay involved in your child's financial journey with comprehensive tools that help you guide, monitor, and protect their spending and savings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>

        <div className="mt-16 ios-card max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold">CPost Parent App Preview</h3>
            <p className="text-gray-600 mt-2">Complete control at your fingertips</p>
          </div>
          
          <div className="phone-mockup bg-white max-w-xs mx-auto">
            <div className="phone-notch"></div>
            <img 
              src="/placeholder.svg" 
              alt="Parent App Interface" 
              className="w-full" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    icon: Shield,
    title: "Spending Limits",
    description: "Set daily, weekly, or monthly spending limits to help your child manage their budget effectively."
  },
  {
    icon: BellRing,
    title: "Real-time Alerts",
    description: "Receive instant notifications for all transactions, keeping you informed of your child's spending habits."
  },
  {
    icon: LineChart,
    title: "Spending Analytics",
    description: "View detailed breakdowns of spending categories to help teach budgeting and financial priorities."
  },
  {
    icon: Lock,
    title: "Merchant Control",
    description: "Approve or block specific merchants and control where your child can use their card."
  }
];

export default ParentalControls;
