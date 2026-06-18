import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

import { cn } from '@/lib/cn';

interface ContainerProps<T extends ElementType = 'div'> {
  as?: T;
  className?: string;
  children: ReactNode;
}

export function Container<T extends ElementType = 'div'>({
  as,
  className,
  children,
  ...props
}: ContainerProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ContainerProps<T>>) {
  const Component = as ?? 'div';

  return (
    <Component
      className={cn('mx-auto w-[calc(100%-40px)] max-w-[1280px]', className)}
      {...props}
    >
      {children}
    </Component>
  );
}
