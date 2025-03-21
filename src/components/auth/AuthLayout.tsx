
import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-50 via-white to-sky-50 p-4">
      <div className="w-full max-w-md">
        {children}
      </div>
      <p className="text-sm text-gray-500 mt-8">
        © 2023 CPost. All rights reserved.
      </p>
    </div>
  );
};

export default AuthLayout;
