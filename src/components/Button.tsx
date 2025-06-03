// src/components/Button.tsx
import React from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge'; // For intelligent merging of Tailwind classes

// Define props for the Button component
// Extends ButtonHTMLAttributes to inherit all standard HTML button props
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The content to be rendered inside the button.
   */
  children: ReactNode;
  /**
   * Defines the visual style of the button.
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'success';
  /**
   * Defines the size of the button.
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Optional icon to display before the children.
   */
  icon?: ReactNode;
  /**
   * Additional Tailwind CSS classes to apply to the button.
   * These will be merged intelligently with base styles.
   */
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  className,
  disabled = false, // Ensure disabled prop is handled
  ...rest // Capture any other standard HTML button attributes
}) => {
  // Base styles applied to all buttons
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  // Styles specific to each button variant
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 active:bg-gray-400 focus:ring-gray-300',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 active:bg-gray-200 focus:ring-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus:ring-red-500',
    success: 'bg-green-600 text-white hover:bg-green-700 active:bg-green-800 focus:ring-green-500',
  };

  // Styles specific to each button size
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-2.5 text-lg',
  };

  // Styles applied when the button is disabled
  const disabledStyles = disabled
    ? 'opacity-50 cursor-not-allowed pointer-events-none'
    : '';

  // Combine all classes using twMerge.
  // twMerge intelligently merges Tailwind classes, resolving conflicts (e.g., if you pass 'p-4' and 'p-6', it will correctly apply 'p-6').
  const combinedClasses = twMerge(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    disabledStyles,
    icon ? 'space-x-2' : '', // Add spacing between icon and text if an icon is present
    className // Custom classes passed via props will override or extend existing ones
  );

  return (
    <button
      className={combinedClasses}
      disabled={disabled} // Apply the disabled HTML attribute
      {...rest} // Spread any other standard HTML button attributes (e.g., onClick, type)
    >
      {icon && <span>{icon}</span>} {/* Render icon if provided */}
      <span>{children}</span> {/* Render button text/children */}
    </button>
  );
};

// Memoize the component for performance optimization.
// React.memo prevents the component from re-rendering if its props haven't changed.
export default React.memo(Button);
