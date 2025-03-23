
import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const PositiveReinforcementMessage = () => {
  const [showHeart, setShowHeart] = useState(false);
  
  useEffect(() => {
    // Show the heart animation after a short delay
    const timer = setTimeout(() => {
      setShowHeart(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <Card className="border-none shadow-sm bg-gradient-to-r from-sky-50 to-purple-50">
      <CardContent className="p-4 flex items-center space-x-3">
        <div className="relative">
          {showHeart && (
            <div className="absolute -top-6 -left-2 animate-fade-in">
              <Heart className="h-5 w-5 text-rose-500 animate-ping opacity-75" />
            </div>
          )}
          <div className="h-10 w-10 rounded-full bg-rose-100 flex items-center justify-center">
            <Heart className="h-5 w-5 text-rose-500" />
          </div>
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium">
            Amy, well done, you saved $100 more.
          </p>
          <p className="text-xs text-gray-500">
            Love, Dad
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PositiveReinforcementMessage;
