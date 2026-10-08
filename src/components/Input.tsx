import React, { forwardRef } from 'react';
import { cn } from '../utils/cn';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  badgeColor:string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', label,onChange, error,badgeColor, helperText, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1.5">
        <div 
        aria-invalid = {!!error}
        className={`flex items-center overflow-hidden rounded-md border border-gray-300 bg-white shadow-sm transition-colors focus-within:ring-2 focus-within:ring-blue-500/40 aria-invalid:focus-within:ring-red-500/20 ${className}`}>
             {/* Label */}
        {label && (
          <label className={`text-sm bg-gray-300 py-2 px-3 text-nowrap  font-medium text-gray-700 ${badgeColor}`}>
            {label}
          </label>
        )}

        {/* Input Element */}
        <input
            onChange={onChange}
          type={type}
          ref={ref}
          className={cn(
            'w-full rounded-md bg-transparent px-3 py-2 text-sm transition-colors',
            'placeholder:text-gray-400 focus:outline-none',
            'disabled:cursor-not-allowed disabled:bg-gray-100 disabled:opacity-50',
            error && 'border-red-500 focus:ring-red-500',
            className
          )}
          {...props}
        />
        </div>
       

        {/* Error or Helper Message */}
        {error ? (
          <p className="text-xs text-red-500">{error}</p>
        ) : helperText ? (
          <p className="text-xs text-gray-500">{helperText}</p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = 'Input';