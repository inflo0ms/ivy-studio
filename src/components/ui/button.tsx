import type { ButtonHTMLAttributes } from 'react';

import { cn } from '@/lib/cn';

type ButtonVariant = 'white' | 'outline' | 'soft' | 'red';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

// Behavior only — sizing (padding, font size, radius) is set per usage via className
const base =
  'inline-flex items-center justify-center border transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50';

const variants: Record<ButtonVariant, string> = {
  // Filled white, red text -> on hover flips to outline
  white:
    'border-transparent bg-brand-white text-brand-red hover:border-brand-white hover:bg-transparent hover:text-brand-white',
  // Outline white -> on hover flips to filled white
  outline:
    'border-brand-white bg-transparent text-brand-white hover:bg-brand-white hover:text-brand-red',
  // White surface with subtle red border, red text
  soft: 'border-brand-red/20 bg-brand-white text-brand-red hover:border-brand-red/40',
  // Filled red, white text
  red: 'border-transparent bg-brand-red text-brand-white hover:bg-brand-red/90',
};

export function Button({
  variant = 'white',
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(base, variants[variant], className)} {...props} />
  );
}
