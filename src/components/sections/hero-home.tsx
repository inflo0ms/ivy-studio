import type { StaticImageData } from 'next/image';
import type { ReactNode } from 'react';

import { BackgroundImage } from '@/components/shared/background-image';
import { Container } from '@/components/shared/container';
import { Button } from '@/components/ui/button';

interface HeroHomeProps {
  title: ReactNode;
  description: string;
  image?: StaticImageData;
}

export function HeroHome({ title, description, image }: HeroHomeProps) {
  return (
    <BackgroundImage image={image} priority>
      <Container className="flex min-h-[97vh] flex-col justify-between pt-28 pb-16">
        <div className="max-w-3xl">
          <h1 className="text-brand-white font-sans text-4xl leading-[1.2] font-normal sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="font-body mt-6 w-[90%] text-[17px] leading-[1.4] font-normal text-white">
            {description}
          </p>
        </div>

        {/* Scroll arrow — left aligned, hidden on mobile */}
        <ArrowIcon className="text-brand-white hidden md:block" />

        <div className="flex flex-wrap items-center gap-4">
          <Button variant="white" className="rounded-full px-7 py-3 text-sm">
            Make an order
          </Button>
          <Button variant="outline" className="rounded-full px-7 py-3 text-sm">
            View Pricing
          </Button>
        </div>
      </Container>
    </BackgroundImage>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 5v14M5 12l7 7 7-7" />
    </svg>
  );
}
