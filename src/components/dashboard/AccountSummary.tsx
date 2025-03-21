
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowDown, ArrowUp, DollarSign } from 'lucide-react';

const AccountSummary = () => {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Balance</p>
              <h3 className="text-2xl font-bold mt-1">$1,000.00</h3>
            </div>
            <div className="rounded-full bg-blue-100 p-2">
              <DollarSign className="h-5 w-5 text-cpost-blue" />
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-500">
            Updated: Today, 2:30 PM
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Spending</p>
              <h3 className="text-2xl font-bold mt-1">$200.00</h3>
            </div>
            <div className="rounded-full bg-red-100 p-2">
              <ArrowUp className="h-5 w-5 text-red-500" />
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-500">
            Last 7 days
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Savings</p>
              <h3 className="text-2xl font-bold mt-1">$50.00</h3>
            </div>
            <div className="rounded-full bg-green-100 p-2">
              <ArrowDown className="h-5 w-5 text-green-500" />
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-500">
            Last 7 days
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountSummary;
