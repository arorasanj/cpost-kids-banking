
import React from 'react';
import { PiggyBank, Goal, TrendingUp, Trophy } from 'lucide-react';
import FeatureCard from './FeatureCard';
import { Card } from './ui/card';

const SaveSection = () => {
  return (
    <section id="save" className="py-24 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-purple-50"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center rounded-full bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-600 mb-4">
            <Trophy className="h-4 w-4 mr-1.5" />
            <span>Save Features</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
            Canada's First <br className="hidden sm:block" />
            <span className="text-purple-600">Prize Linked Savings Account</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Every $1 saved is your entry ticket to a monthly prize draw. Save more for a chance to win big prizes, and maybe one day become a millionaire!
          </p>
        </div>
        
        <div className="ios-card bg-white/80 backdrop-blur-md p-8 mb-16 max-w-4xl mx-auto animate-fade-in">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">How PLSA Works</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="rounded-full bg-purple-100 p-1 mr-3 mt-1">
                    <span className="text-purple-600 text-xs font-bold">1</span>
                  </div>
                  <p className="text-gray-700">Save money in your PLSA account</p>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-purple-100 p-1 mr-3 mt-1">
                    <span className="text-purple-600 text-xs font-bold">2</span>
                  </div>
                  <p className="text-gray-700">Each dollar kept for 30 days = 1 entry ticket</p>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-purple-100 p-1 mr-3 mt-1">
                    <span className="text-purple-600 text-xs font-bold">3</span>
                  </div>
                  <p className="text-gray-700">Participate in monthly prize draws</p>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-purple-100 p-1 mr-3 mt-1">
                    <span className="text-purple-600 text-xs font-bold">4</span>
                  </div>
                  <p className="text-gray-700">Win prizes while your savings grow with interest</p>
                </li>
              </ul>
            </div>
            <div className="flex-shrink-0 w-40 h-40 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full shadow-lg flex items-center justify-center p-4">
              <div className="text-center">
                <p className="text-xs text-purple-100">Up to</p>
                <p className="text-4xl font-bold text-white">4%</p>
                <p className="text-xs text-purple-100">Interest</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={PiggyBank}
            title="Prize Linked Savings"
            description="Every dollar saved gives you an entry into monthly prize draws. The more you save, the better your chances to win."
            delay={100}
          />
          <FeatureCard
            icon={Goal}
            title="Goal-Based Savings"
            description="Create personalized savings goals with progress trackers. Automatically save a percentage of deposits or round-up every dollar spent."
            delay={200}
          />
          <FeatureCard
            icon={TrendingUp}
            title="Great Returns"
            description="Earn up to 4% interest on your balance, one of the highest rates available. Your money grows even if you don't win prizes."
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};

export default SaveSection;
