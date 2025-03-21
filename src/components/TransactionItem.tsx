
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TransactionItemProps {
  icon: LucideIcon;
  merchant: string;
  date: string;
  amount: string;
  isDebit?: boolean;
}

const TransactionItem = ({ 
  icon: Icon, 
  merchant, 
  date, 
  amount, 
  isDebit = true 
}: TransactionItemProps) => {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
          <Icon className="h-4 w-4 text-gray-700" />
        </div>
        <div>
          <p className="text-sm font-medium">{merchant}</p>
          <p className="text-xs text-gray-500">{date}</p>
        </div>
      </div>
      <p className={`text-sm font-medium ${isDebit ? 'text-black' : 'text-green-600'}`}>
        {isDebit ? '-' : '+'}{amount}
      </p>
    </div>
  );
};

export default TransactionItem;
