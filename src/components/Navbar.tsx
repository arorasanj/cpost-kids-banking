
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-4 bg-white/90 backdrop-blur-md shadow-sm' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center h-10">
              <div className="bg-cpost-red p-1.5 rounded-md">
                <svg width="28" height="20" viewBox="0 0 350 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M312 0L225 87L175 37L125 87L38 0H0V38L87 125L0 212V250H38L125 163L175 213L225 163L312 250H350V212L263 125L350 38V0H312Z" fill="white"/>
                </svg>
              </div>
              <span className="ml-2 text-xl font-bold">CPost</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <a href="#features" className="text-sm font-medium text-gray-800 hover:text-cpost-red transition-colors">
              Features
            </a>
            <a href="#rewards" className="text-sm font-medium text-gray-800 hover:text-cpost-red transition-colors">
              Rewards
            </a>
            <a href="#app" className="text-sm font-medium text-gray-800 hover:text-cpost-red transition-colors">
              App
            </a>
            <Button size="sm">Download App</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col p-8 h-full">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center h-10">
              <div className="bg-cpost-red p-1.5 rounded-md">
                <svg width="28" height="20" viewBox="0 0 350 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M312 0L225 87L175 37L125 87L38 0H0V38L87 125L0 212V250H38L125 163L175 213L225 163L312 250H350V212L263 125L350 38V0H312Z" fill="white"/>
                </svg>
              </div>
              <span className="ml-2 text-xl font-bold">CPost</span>
            </div>
            <button
              className="p-2 rounded-md text-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col space-y-8">
            <a 
              href="#features" 
              className="text-xl font-medium text-gray-800 hover:text-cpost-red transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#rewards" 
              className="text-xl font-medium text-gray-800 hover:text-cpost-red transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Rewards
            </a>
            <a 
              href="#app" 
              className="text-xl font-medium text-gray-800 hover:text-cpost-red transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              App
            </a>
            <Button className="mt-4" onClick={() => setIsMobileMenuOpen(false)}>
              Download App
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
