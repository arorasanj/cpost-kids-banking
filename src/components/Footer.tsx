
import React from 'react';
import { ArrowRight, Instagram, Twitter, Facebook, Youtube, Linkedin } from 'lucide-react';
import Button from './Button';

const Footer = () => {
  return (
    <footer className="pt-24 pb-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto mb-16 ios-card bg-gradient-to-r from-cpost-red/5 to-cpost-red/10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-8 lg:p-12">
            <div className="lg:max-w-xl">
              <h3 className="text-2xl sm:text-3xl font-display font-bold mb-3">
                Ready to start your financial journey?
              </h3>
              <p className="text-gray-600">
                Download the CPost app today and open your Spend & Save account in minutes.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button>
                Download App
              </Button>
              <Button variant="outline" className="group">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center h-10 mb-6">
              <div className="bg-cpost-red p-1.5 rounded-md">
                <svg width="20" height="14" viewBox="0 0 350 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M312 0L225 87L175 37L125 87L38 0H0V38L87 125L0 212V250H38L125 163L175 213L225 163L312 250H350V212L263 125L350 38V0H312Z" fill="white"/>
                </svg>
              </div>
              <span className="ml-2 text-xl font-bold">CPost</span>
            </div>
            <p className="text-gray-500 text-sm mb-6 max-w-xs">
              Banking reimagined for the next generation. Build financial literacy while earning rewards.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cpost-red transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cpost-red transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cpost-red transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cpost-red transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cpost-red transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-cpost-red text-sm">Features</a></li>
              <li><a href="#" className="text-gray-500 hover:text-cpost-red text-sm">Security</a></li>
              <li><a href="#" className="text-gray-500 hover:text-cpost-red text-sm">App</a></li>
              <li><a href="#" className="text-gray-500 hover:text-cpost-red text-sm">Rewards</a></li>
              <li><a href="#" className="text-gray-500 hover:text-cpost-red text-sm">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-cpost-red text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-cpost-red text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-500 hover:text-cpost-red text-sm">Press</a></li>
              <li><a href="#" className="text-gray-500 hover:text-cpost-red text-sm">News</a></li>
              <li><a href="#" className="text-gray-500 hover:text-cpost-red text-sm">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-cpost-red text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-500 hover:text-cpost-red text-sm">Newsletter</a></li>
              <li><a href="#" className="text-gray-500 hover:text-cpost-red text-sm">Events</a></li>
              <li><a href="#" className="text-gray-500 hover:text-cpost-red text-sm">Help Center</a></li>
              <li><a href="#" className="text-gray-500 hover:text-cpost-red text-sm">Tutorials</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} CPost. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-cpost-red text-sm">Terms</a>
            <a href="#" className="text-gray-500 hover:text-cpost-red text-sm">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-cpost-red text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
