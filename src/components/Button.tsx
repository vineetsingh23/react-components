import React from 'react'
import { cn } from '../utils/cn'

// 1. interface extending standart button attributes
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    variant? : 'primary' | 'secondary' | 'outline' | 'error' | 'neutral';
    size? : 'sm' | 'md' | 'lg' | 'xl'
}

// 2. style maps for variant and sizes

const variantStyles : Record<NonNullable<ButtonProps['variant']>,string> = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    outline: 'border border-gray-300 bg-transparent text-gray-700 hover:bg-gay-100',
    error: 'bg-red-500 text-white hover:bg-red-600',
    neutral: 'bg-gray-300 text-gray-800 hover:bg-gray-400'
}

const sizeStyles: Record<NonNullable<ButtonProps['size']>,string> = {
    sm:'px-3 py-1.5 text-sm' ,
    md: ' px-4 py-2 text-base',
    lg: 'px-5 py-2.5 text-lg',
    xl: 'px-6 py-3 text-lg',

}

export function Button({
    className,
    variant ='primary',
    size= 'md',
    children,
    ...props
   
}:ButtonProps) {
   

  return (
    <button
    className={cn(
        'rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus-ring-blue-500',
        variantStyles[variant],
        sizeStyles[size],
        className
    )}
    {...props}
    >
        {children}
     </button>
  )
}
