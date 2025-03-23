
import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import AccountSummary from '@/components/dashboard/AccountSummary';
import TransactionList from '@/components/dashboard/TransactionList';
import AccountHeader from '@/components/dashboard/AccountHeader';
import PositiveReinforcementMessage from '@/components/dashboard/PositiveReinforcementMessage';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Button from '@/components/Button';

const Dashboard = () => {
  const navigate = useNavigate();
  
  // Confetti effect on first load
  useEffect(() => {
    const triggerConfetti = () => {
      const duration = 2000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      function randomInRange(min: number, max: number) {
        return Math.random() * (max - min) + min;
      }

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        
        // Since particles fall down, start a bit higher than random
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: randomInRange(0.1, 0.3) }
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: randomInRange(0.1, 0.3) }
        });
      }, 250);
    };

    // Using a slight delay to ensure the component is fully mounted
    const timer = setTimeout(() => {
      triggerConfetti();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <DashboardLayout>
      <div className="mb-8">
        <Card className="border-none shadow-none bg-gradient-to-r from-sky-50 via-white to-pink-50">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Account Information Section */}
              <div className="space-y-4">
                <h1 className="text-2xl font-bold">Congratulations! 🎉</h1>
                <p className="text-gray-600">
                  Your Spend & Save Account is ready to use
                </p>
                <div className="bg-white shadow-sm rounded-lg py-2 px-4 border inline-block">
                  <p className="text-sm text-gray-500">Account Number</p>
                  <p className="font-mono font-bold">XXXX-0001</p>
                </div>
                <div className="pt-2">
                  <Button>Turn-on Auto Save</Button>
                </div>
              </div>
              
              {/* Positive Reinforcement Message Section */}
              <div className="flex items-center justify-center md:justify-end">
                <PositiveReinforcementMessage />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <AccountHeader />
      <AccountSummary />
      
      <div className="mt-8">
        <CardHeader className="px-0">
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <TransactionList />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
