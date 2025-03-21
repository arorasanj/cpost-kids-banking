
import React from 'react';
import Button from './Button';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 overflow-hidden relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-50 via-white to-sky-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 flex flex-col space-y-6 animate-fade-in">
            <div className="inline-flex items-center rounded-full bg-cpost-red/10 px-3 py-1 text-sm font-medium text-cpost-red mb-2">
              <span className="flex h-2 w-2 rounded-full bg-cpost-red mr-1.5"></span>
              <span>New Banking Experience for Youth</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight tracking-tight">
              Banking Made <span className="text-cpost-red">Simple.</span> <br />
              For The Next Generation.
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl">
              Introducing CPost's "Spend & Save" account. Designed for today's youth with exclusive rewards from your favorite brands.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="group">
                Get Started
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
            
            <div className="pt-8 flex items-center space-x-4">
              <p className="text-sm font-medium text-gray-500">TRUSTED BY PARENTS ACROSS THE COUNTRY</p>
              <div className="h-px bg-gray-200 flex-grow"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-float">
            <div className="phone-mockup max-w-xs mx-auto">
              <div className="phone-notch"></div>
              <img 
                src="/lovable-uploads/8f31a85b-0a3f-4c93-afda-0e701d99492b.png" 
                alt="CPost Banking App" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
