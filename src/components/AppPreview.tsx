import React from 'react';
import { CreditCard, ArrowRightLeft, PiggyBank, Lock, Coffee, ShoppingBag, Car, ShoppingCart } from 'lucide-react';
import TransactionItem from './TransactionItem';
const AppPreview = () => {
  return <section id="app" className="py-24 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-slate-50 via-white to-white"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
            Designed for <span className="text-cpost-red">Young Money</span> Managers
          </h2>
          <p className="text-lg text-gray-600">
            An intuitive interface that makes tracking spending and saving effortless for youth. Real financial literacy starts here.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 animate-fade-in">
            <div className="phone-mockup max-w-sm mx-auto app-shadow">
              <div className="phone-notch"></div>
              <div className="bg-white w-full h-full pt-10">
                {/* App Header */}
                <div className="px-6 py-4">
                  <h2 className="text-2xl font-bold">CPost Cash</h2>
                  <div className="mt-2">
                    <p className="text-3xl font-bold">$1,246.89</p>
                    <p className="text-xs text-gray-500 mt-1">Interest: 2.5%</p>
                  </div>
                </div>
                
                {/* Virtual Card */}
                <div className="px-6 my-4">
                  <div className="rounded-xl p-5 shadow-lg bg-[003087] bg-cpost-blue">
                    <div className="flex justify-between items-start mb-8">
                      <div className="flex items-center">
                        <div className="bg-cpost-red p-1 rounded-md">
                          <svg width="20" height="14" viewBox="0 0 350 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M312 0L225 87L175 37L125 87L38 0H0V38L87 125L0 212V250H38L125 163L175 213L225 163L312 250H350V212L263 125L350 38V0H312Z" fill="white" />
                          </svg>
                        </div>
                        <span className="ml-1.5 text-xs font-bold text-white">CPost</span>
                      </div>
                      <CreditCard className="h-5 w-5 text-gray-400" />
                    </div>
                    <p className="text-xs text-gray-400 mb-1">Alex Kim</p>
                    <div className="flex items-center">
                      <p className="text-gray-400 text-xs">••••</p>
                      <p className="text-gray-400 text-xs ml-1">••••</p>
                      <p className="text-gray-400 text-xs ml-1">••••</p>
                      <p className="text-white text-xs ml-1">4289</p>
                    </div>
                  </div>
                </div>
                
                {/* Toggle */}
                <div className="flex justify-between items-center px-6 py-2">
                  <div className="flex items-center">
                    <Lock className="h-4 w-4 text-gray-500 mr-2" />
                    <p className="text-xs text-gray-500">Temporarily lock card</p>
                  </div>
                  <div className="w-9 h-5 flex items-center bg-gray-200 rounded-full p-1">
                    <div className="w-3.5 h-3.5 bg-white rounded-full shadow-md"></div>
                  </div>
                </div>
                
                {/* Transactions */}
                <div className="px-6 py-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium">Transactions</h3>
                    <a href="#" className="text-xs text-cpost-red font-medium">See all →</a>
                  </div>
                  <div className="space-y-1">
                    <TransactionItem icon={Coffee} merchant="Starbucks" date="August 12" amount="$5.47" />
                    <TransactionItem icon={ShoppingBag} merchant="H&M" date="August 10" amount="$42.99" />
                    <TransactionItem icon={Car} merchant="Uber" date="August 8" amount="$12.95" />
                    <TransactionItem icon={ShoppingCart} merchant="Amazon" date="August 5" amount="$28.35" />
                    <TransactionItem icon={PiggyBank} merchant="Savings Transfer" date="August 1" amount="$50.00" isDebit={false} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 space-y-8 animate-fade-in-right">
            <div className="ios-card">
              <div className="flex items-start">
                <div className="rounded-full bg-cpost-red/10 p-3 mr-4">
                  <CreditCard className="h-6 w-6 text-cpost-red" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Virtual Debit Card</h3>
                  <p className="text-gray-600">
                    A secure virtual card that works online and in-store with Apple Pay or Google Pay. Parents can view all transactions in real-time.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="ios-card">
              <div className="flex items-start">
                <div className="rounded-full bg-cpost-red/10 p-3 mr-4">
                  <ArrowRightLeft className="h-6 w-6 text-cpost-red" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Real-Time Tracking</h3>
                  <p className="text-gray-600">
                    See where your money goes with instant notifications and categorized spending insights. Build healthy financial habits early.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="ios-card">
              <div className="flex items-start">
                <div className="rounded-full bg-cpost-red/10 p-3 mr-4">
                  <PiggyBank className="h-6 w-6 text-cpost-red" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Prize Linked Savings Account (PLSA)</h3>
                  <p className="text-gray-600">
                    Create savings goals with visual progress trackers. Automated transfers make saving effortless and rewarding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AppPreview;