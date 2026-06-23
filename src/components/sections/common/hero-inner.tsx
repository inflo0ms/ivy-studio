import type { StaticImageData } from 'next/image';
import type { ReactNode } from 'react';

import { BackgroundImage } from '@/components/shared/background-image';
import { Container } from '@/components/shared/container';
import {
  SectionDescription,
  SectionEyebrow,
  SectionTitle,
} from '@/components/shared/section-heading';

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
          <SectionEyebrow tone="light" className="text-brand-white/80">
            {eyebrow}
          </SectionEyebrow>
        )}

        <SectionTitle
          as="h1"
          tone="light"
          className="mt-5 max-w-4xl text-[48px] leading-[1.12] md:text-[60px]"
        >
          {title}
        </SectionTitle>

        {description && (
          <SectionDescription
            tone="light"
            className="mt-5 max-w-full text-brand-white/85 md:max-w-[44%]"
          >
            {description}
          </SectionDescription>
        )}
      </Container>
    </BackgroundImage>
  );
}
