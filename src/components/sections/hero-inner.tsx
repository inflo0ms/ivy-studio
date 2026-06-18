import type { StaticImageData } from 'next/image';
import type { ReactNode } from 'react';

import { BackgroundImage } from '@/components/shared/background-image';
import { Container } from '@/components/shared/container';

interface HeroInnerProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  image?: StaticImageData;
}

export function HeroInner({
  eyebrow,
  title,
  description,
  image,
}: HeroInnerProps) {
  return (
    <BackgroundImage
      image={image}
      priority
      imageClassName="object-center"
      overlayClassName="bg-black/45"
    >
      <Container className="flex min-h-[420px] flex-col items-center justify-center pt-28 pb-16 text-center md:min-h-[480px]">
        {eyebrow && (
          <span className="font-body text-brand-white/80 text-xs tracking-[0.18em] uppercase">
            {eyebrow}
          </span>
        )}

        <h1 className="text-brand-white mt-5 max-w-4xl font-sans text-[28px] leading-[1.12] font-normal md:text-[48px]">
          {title}
        </h1>

        {description && (
          <p className="font-body text-brand-white/85 mt-5 max-w-full text-[17px] leading-[1.45] md:max-w-[44%] md:text-sm">
            {description}
          </p>
        )}
      </Container>
    </BackgroundImage>
  );
}
