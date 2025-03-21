
import React from 'react';
import { Home, CreditCard, PiggyBank, Bell, Settings, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const location = useLocation();
  
  const navigation = [
    { name: 'Home', path: '/dashboard', icon: Home },
    { name: 'Cards', path: '/dashboard/cards', icon: CreditCard },
    { name: 'Savings', path: '/dashboard/savings', icon: PiggyBank },
    { name: 'Notifications', path: '/dashboard/notifications', icon: Bell },
    { name: 'Settings', path: '/dashboard/settings', icon: Settings },
  ];
  
  const isActive = (path: string) => {
    if (path === '/dashboard' && location.pathname === '/dashboard') {
      return true;
    }
    return location.pathname.startsWith(path) && path !== '/dashboard';
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="hidden md:flex md:flex-col md:w-64 bg-white border-r shadow-sm">
        <div className="p-4 border-b">
          <div className="flex items-center">
            <div className="bg-cpost-red p-1.5 rounded-md mr-2">
              <svg width="24" height="17" viewBox="0 0 350 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M312 0L225 87L175 37L125 87L38 0H0V38L87 125L0 212V250H38L125 163L175 213L225 163L312 250H350V212L263 125L350 38V0H312Z" fill="white"/>
              </svg>
            </div>
            <span className="text-xl font-bold">CPost</span>
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`
                flex items-center px-4 py-3 text-sm rounded-lg transition-colors
                ${isActive(item.path) 
                  ? 'bg-cpost-blue/10 text-cpost-blue font-medium' 
                  : 'text-gray-700 hover:bg-gray-100'}
              `}
            >
              <item.icon className={`h-5 w-5 mr-3 ${isActive(item.path) ? 'text-cpost-blue' : 'text-gray-500'}`} />
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="p-4 border-t">
          <Link
            to="/"
            className="flex items-center px-4 py-3 text-sm rounded-lg text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut className="h-5 w-5 mr-3" />
            Sign Out
          </Link>
        </div>
      </aside>
      
      {/* Mobile Header */}
      <div className="flex flex-col flex-1">
        <header className="md:hidden bg-white border-b p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-cpost-red p-1.5 rounded-md">
                <svg width="24" height="17" viewBox="0 0 350 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M312 0L225 87L175 37L125 87L38 0H0V38L87 125L0 212V250H38L125 163L175 213L225 163L312 250H350V212L263 125L350 38V0H312Z" fill="white"/>
                </svg>
              </div>
              <span className="ml-2 text-xl font-bold">CPost</span>
            </div>
            {/* Add mobile menu button here if needed */}
          </div>
        </header>
        
        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8">
          <div className="max-w-4xl mx-auto">
            {children}
          </div>
        </main>
        
        {/* Mobile Navigation Bar */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t">
          <div className="grid grid-cols-5">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`
                  flex flex-col items-center py-2.5 text-xs
                  ${isActive(item.path) ? 'text-cpost-blue' : 'text-gray-500'}
                `}
              >
                <item.icon className={`h-6 w-6 ${isActive(item.path) ? 'text-cpost-blue' : 'text-gray-500'}`} />
                <span className="mt-1">{item.name}</span>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default DashboardLayout;
