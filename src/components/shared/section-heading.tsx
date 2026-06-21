import type { ReactNode } from 'react';

import { cn } from '@/lib/cn';

type TextTone = 'dark' | 'light';

interface SectionTextProps {
  children: ReactNode;
  className?: string;
  tone?: TextTone;
}

interface SectionTitleProps extends SectionTextProps {
  as?: 'h1' | 'h2';
}

const toneClass: Record<TextTone, string> = {
  dark: 'text-brand-black',
  light: 'text-brand-white',
};

export function SectionEyebrow({
  children,
  className,
  tone = 'dark',
}: SectionTextProps) {
  return (
    <span
      className={cn(
        toneClass[tone],
        'font-sans text-sm leading-5 font-normal tracking-[0.55px] uppercase',
        className,
      )}
    >
      {children}
    </span>
  );
}

export function SectionTitle({
  as: Component = 'h2',
  children,
  className,
  tone = 'dark',
}: SectionTitleProps) {
  return (
    <Component
      className={cn(
        toneClass[tone],
        'font-sans text-[28px] leading-[1.3] font-normal tracking-[0.35px] md:text-[48px]',
        className,
      )}
    >
      {children}
    </Component>
  );
}

export function SectionDescription({
  children,
  className,
  tone = 'dark',
}: SectionTextProps) {
  return (
    <p
      className={cn(
        toneClass[tone],
        'font-body text-[17px] leading-[1.4] font-normal tracking-normal',
        className,
      )}
    >
      {children}
    </p>
  );
}
