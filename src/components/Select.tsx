import React, { forwardRef } from 'react';
import { cn } from '../utils/cn';

export interface SelectOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  sizeVariant?: 'sm' | 'md' | 'lg';
  arrowIcon?: React.ReactNode;
  arrowWrapperClassName?: string; // Custom bg, width, padding, border for icon container
  arrowClassName?: string;        // Custom size & color for the SVG icon
  containerClassName?: string;
  options?: SelectOption[];
}

const sizeStyles = {
  sm: { container: 'h-8 text-xs', select: 'pl-2.5 pr-10 text-md', icon: 'w-3.5 h-3.5' },
  md: { container: 'h-10 text-sm', select: 'pl-3 pr-12 text-md', icon: 'w-4 h-4' },
  lg: { container: 'h-12 text-base', select: 'pl-4 pr-14 text-lg', icon: 'w-5 h-5 size-8' },
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      containerClassName,
      arrowWrapperClassName,
      arrowClassName,
      label,
      error,
      helperText,
      sizeVariant = 'md',
      arrowIcon,
      options,
      children,
      ...props
    },
    ref
  ) => {
    const size = sizeStyles[sizeVariant];

    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && <label className="text-sm font-medium text-gray-700">{label}</label>}

        {/* Parent container handles border, radius, and overflow */}
        <div
          className={cn(
            'relative flex items-center w-full rounded-md border border-gray-300 bg-white overflow-hidden transition-colors',
            'focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent',
            error && 'border-red-500 focus-within:ring-red-500',
            size.container,
            containerClassName
          )}
        >
          <select
            ref={ref}
            className={cn(
              'w-full h-full bg-transparent appearance-none focus:outline-none cursor-pointer text-gray-800 disabled:cursor-not-allowed disabled:opacity-50',
              size.select,
              className
            )}
            {...props}
          >
            {options
              ? options.map((opt) => (
                  <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                    {opt.label}
                  </option>
                ))
              : children}
          </select>

          {/* Full-height custom arrow box */}
          <div
            className={cn(
              'absolute right-0 top-0 h-full flex items-center justify-center pointer-events-none border-l border-gray-300 bg-blue-200 px-6',
              arrowWrapperClassName
            )}
          >
            {arrowIcon || (
              <svg
                className={cn('fill-current text-gray-600', size.icon, arrowClassName)}
                viewBox="0 0 20 20"
              >
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            )}
          </div>
        </div>

        {error ? (
          <p className="text-xs text-red-500">{error}</p>
        ) : helperText ? (
          <p className="text-xs text-gray-500">{helperText}</p>
        ) : null}
      </div>
    );
  }
);

Select.displayName = 'Select';