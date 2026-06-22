import { cn } from '@/lib/cn';

interface IconProps {
  className?: string;
}

export function CalendarIcon({ className }: IconProps) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className={cn('shrink-0', className)}
    >
      <rect
        x="2"
        y="2.5"
        width="8"
        height="7"
        rx="1"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M3.5 1.5v2M8.5 1.5v2M2.2 5h7.6"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className={cn('shrink-0', className)}
    >
      <circle
        cx="6"
        cy="6"
        r="4"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M6 3.8V6l1.5.9"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowIcon({
  className,
  direction = 'next',
}: IconProps & { direction?: 'prev' | 'next' }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      className={cn(direction === 'prev' && 'rotate-180', className)}
    >
      <path
        d="M4 9h10M10 5l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ShareIcon({ className }: IconProps) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className={cn('shrink-0', className)}
    >
      <circle cx="10.5" cy="2.5" r="1.5" stroke="currentColor" strokeWidth="1" />
      <circle cx="3.5" cy="7" r="1.5" stroke="currentColor" strokeWidth="1" />
      <circle cx="10.5" cy="11.5" r="1.5" stroke="currentColor" strokeWidth="1" />
      <path
        d="M4.8 6.2 9.2 3.3M4.8 7.8l4.4 2.9"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}
