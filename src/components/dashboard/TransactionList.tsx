
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, Coffee, ShoppingBag, Smartphone, Utensils, CreditCard, Plus, Zap } from 'lucide-react';

// Sample transaction data
const transactions = [
  { 
    id: '1', 
    merchant: 'Starbucks', 
    category: 'Food & Drink',
    date: '2023-06-01', 
    amount: -4.50, 
    icon: Coffee 
  },
  { 
    id: '2', 
    merchant: 'Amazon', 
    category: 'Shopping',
    date: '2023-06-03', 
    amount: -35.27, 
    icon: ShoppingBag 
  },
  { 
    id: '3', 
    merchant: 'Mobile Service', 
    category: 'Bills',
    date: '2023-06-05', 
    amount: -45.00, 
    icon: Smartphone 
  },
  { 
    id: '4', 
    merchant: 'Salary Deposit', 
    category: 'Income',
    date: '2023-06-15', 
    amount: 1250.00, 
    icon: Plus 
  },
  { 
    id: '5', 
    merchant: 'Restaurant', 
    category: 'Food & Drink',
    date: '2023-06-18', 
    amount: -28.75, 
    icon: Utensils 
  },
  { 
    id: '6', 
    merchant: 'Utility Bill', 
    category: 'Bills',
    date: '2023-06-20', 
    amount: -85.50, 
    icon: Zap 
  },
  { 
    id: '7', 
    merchant: 'Movie Tickets', 
    category: 'Entertainment',
    date: '2023-06-25', 
    amount: -24.00, 
    icon: CreditCard 
  }
];

const TransactionList = () => {
  const [filter, setFilter] = useState<'30days' | 'monthly'>('30days');
  
  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric' 
    }).format(date);
  };
  
  // Format amount for display
  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(Math.abs(amount));
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          <button 
            className={`text-sm px-3 py-1 rounded-full transition-colors ${
              filter === '30days' ? 'bg-cpost-blue text-white' : 'bg-gray-100 text-gray-600'
            }`}
            onClick={() => setFilter('30days')}
          >
            Last 30 days
          </button>
          <button 
            className={`text-sm px-3 py-1 rounded-full transition-colors ${
              filter === 'monthly' ? 'bg-cpost-blue text-white' : 'bg-gray-100 text-gray-600'
            }`}
            onClick={() => setFilter('monthly')}
          >
            Monthly
          </button>
        </div>
        <button className="text-sm text-cpost-blue flex items-center">
          View All
          <ChevronDown className="h-4 w-4 ml-1" />
        </button>
      </div>
      
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Merchant</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => {
                  const Icon = transaction.icon;
                  return (
                    <TableRow key={transaction.id}>
                      <TableCell>
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                            <Icon className="h-4 w-4 text-gray-700" />
                          </div>
                          <span>{transaction.merchant}</span>
                        </div>
                      </TableCell>
                      <TableCell>{transaction.category}</TableCell>
                      <TableCell>{formatDate(transaction.date)}</TableCell>
                      <TableCell className={`text-right font-medium ${
                        transaction.amount > 0 ? 'text-green-600' : ''
                      }`}>
                        {transaction.amount > 0 ? '+' : '-'}{formatAmount(transaction.amount)}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TransactionList;
