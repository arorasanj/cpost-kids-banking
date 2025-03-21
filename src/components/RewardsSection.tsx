
import React from 'react';
import { Gift, Sparkles } from 'lucide-react';

const brands = [
  { name: 'Nike', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png' },
  { name: 'H&M', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png' },
  { name: 'Zara', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/1200px-Zara_Logo.svg.png' },
  { name: 'Gap', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Gap_logo.svg/1200px-Gap_logo.svg.png' },
  { name: 'Abercrombie & Fitch', logo: 'https://1000logos.net/wp-content/uploads/2017/10/Abercrombie-Fitch-Logo.jpg' },
  { name: 'Lululemon', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Lululemon_Athletica_logo.svg/1200px-Lululemon_Athletica_logo.svg.png' },
];

const RewardsSection = () => {
  return (
    <section id="rewards" className="py-24 bg-gradient-to-b from-white to-sky-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center rounded-full bg-cpost-red/10 px-3 py-1 text-sm font-medium text-cpost-red mb-4">
            <Gift className="h-4 w-4 mr-1.5" />
            <span>Exclusive Rewards</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
            Get Rewards from <br className="hidden sm:block" />
            <span className="text-cpost-red">Your Favorite Brands</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Earn cashback and special discounts when you shop at popular retailers. The more you use your CPost account, the more rewards you unlock.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="ios-card flex flex-col items-center justify-center py-8 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <img 
                src={brand.logo} 
                alt={`${brand.name} logo`} 
                className="h-12 object-contain mb-4" 
              />
              <p className="text-sm font-medium">{brand.name}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto ios-card bg-gradient-to-r from-sky-50 to-blue-50 p-8 sm:p-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center mb-4">
                <Sparkles className="h-5 w-5 text-cpost-red mr-2" />
                <h3 className="font-semibold text-xl">Rewards that grow with you</h3>
              </div>
              <p className="text-gray-600">
                Unlock more rewards as you reach new spending milestones. Your CPost account automatically tracks your progress and applies rewards at checkout.
              </p>
            </div>
            <div className="flex-shrink-0 w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center p-4">
              <div className="text-center">
                <p className="text-xs text-gray-500">Up to</p>
                <p className="text-4xl font-bold text-cpost-red">10%</p>
                <p className="text-xs text-gray-500">Cashback</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
