import React, { forwardRef } from 'react';
import { cn } from '../utils/cn';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  badgeColor?:string;

  leftIcon? : React.ReactNode;
  rightIcon? : React.ReactNode;
}



export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({
     className, 
     type = 'text', 
     label,onChange, 
     error,
     badgeColor='bg-blue-600 text-white', 
     helperText,
    
     leftIcon,
     rightIcon, 
     ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1.5">
        <div 
        aria-invalid = {!!error}
        className={`flex items-center overflow-hidden rounded-md border border-gray-300 bg-white shadow-sm transition-colors focus-within:ring-2 focus-within:ring-blue-500/40 aria-invalid:focus-within:ring-red-500/20 ${className}`}>
             {/* Label */}
        {label && (
          <label className={`text-sm py-2 px-3 text-nowrap  font-medium text-gray-700 ${badgeColor}`}>
            {label}
          </label>
        )}

        {/* Input Element */}

        {
          leftIcon && (
            <span className="absolute left-3 text-gray-400 pointer-events-none">
             {leftIcon} 
            </span>
          )
        }
        <input
            onChange={onChange}
          type={type}
          ref={ref}
          className={cn(
            'w-full rounded-md bg-transparent px-3 py-2 text-sm transition-colors',
            'placeholder:text-gray-400 focus:outline-none',
            'disabled:cursor-not-allowed disabled:bg-gray-100 disabled:opacity-50',
            error && 'border-red-500 focus:ring-red-500',
            leftIcon && 'pl-20',
            rightIcon && '-pr-9',
            className,
            
          )}
          {...props}
        />
        {rightIcon && (
            <span className="absolute right-9 bg-gray-100 border-l-2 pl-2 text-gray-400">{rightIcon}</span>
          )}
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