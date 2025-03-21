
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cpost-red';
  
  const variants = {
    primary: 'bg-cpost-red text-white hover:bg-opacity-90 shadow-sm',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    outline: 'border border-cpost-red text-cpost-red bg-transparent hover:bg-cpost-red/5',
    ghost: 'text-cpost-red hover:bg-cpost-red/5',
  };
  
  const sizes = {
    sm: 'text-sm h-9 px-4 py-2',
    md: 'text-base h-11 px-6 py-2.5',
    lg: 'text-lg h-14 px-8 py-3',
  };
  
  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
