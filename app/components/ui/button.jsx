import React from 'react';

export const Button = ({ children, className = '', size = 'default', ...props }) => {
  const sizeClasses = {
    default: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    sm: 'px-3 py-1.5 text-sm'
  };

  return (
    <button
      className={`inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
