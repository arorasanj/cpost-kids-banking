
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';
import { ChevronRight } from 'lucide-react';

const JourneyHero = () => {
  return (
    <section className="pt-32 pb-20 overflow-hidden relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-100 via-white to-purple-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <div className="inline-flex items-center rounded-full bg-cpost-blue/10 px-3 py-1 text-sm font-medium text-cpost-blue mb-2">
            <span className="flex h-2 w-2 rounded-full bg-cpost-blue mr-1.5"></span>
            <span>Financial Education for Children</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight tracking-tight text-center">
            Start Their <span className="text-cpost-blue">Journey</span> <br />
            To Financial Independence
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mt-6">
            Learn responsible spending and saving with us as early as age 5 with parental guidance. Building the foundation for a financially secure future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center">
            <Link to="/signin">
              <Button size="lg" className="group">
                Start Their Journey
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyHero;
