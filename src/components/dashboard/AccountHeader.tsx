
import React from 'react';
import { ChevronDown, List, Search } from 'lucide-react';

const AccountHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
      <div>
        <h2 className="text-2xl font-bold">Spend & Save Account</h2>
        <div className="flex items-center mt-1 text-gray-500">
          <span className="text-sm">Primary Account</span>
          <ChevronDown className="h-4 w-4 ml-1" />
        </div>
      </div>
      
      <div className="flex space-x-2 mt-4 sm:mt-0">
        <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
          <Search className="h-5 w-5 text-gray-700" />
        </button>
        <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
          <List className="h-5 w-5 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default AccountHeader;
