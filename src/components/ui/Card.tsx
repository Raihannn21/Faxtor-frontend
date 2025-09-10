import { ReactNode } from 'react';
import { classNames } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export function Card({ children, className, hover = false, padding = 'md' }: CardProps) {
  const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div 
      className={classNames(
        'bg-white rounded-lg shadow-lg',
        hover && 'transition-transform duration-200 hover:scale-105',
        paddingStyles[padding],
        className
      )}
    >
      {children}
    </div>
  );
}
