import type { StaticImageData } from 'next/image';
import type { ReactNode } from 'react';

import { BackgroundImage } from '@/components/shared/background-image';
import { Container } from '@/components/shared/container';
import {
  SectionDescription,
  SectionTitle,
} from '@/components/shared/section-heading';
import { Button } from '@/components/ui/button';
import { siteRoutes } from '@/data/site';

interface ReadyCtaProps {
  title: ReactNode;
  description: string;
  buttonLabel: string;
  buttonHref?: string;
  image: StaticImageData;
}

export function ReadyCta({
  title,
  description,
  buttonLabel,
  buttonHref = siteRoutes.pricing,
  image,
}: ReadyCtaProps) {
  return (
    <section className="bg-white">
      <BackgroundImage
        image={image}
        alt=""
        className="min-h-[300px] md:min-h-[475px]"
        imageClassName="object-center"
      >
        <Container className="flex min-h-[300px] flex-col items-center justify-center py-16 text-center md:min-h-[475px]">
          <SectionTitle tone="light" className="leading-none">
            {title}
          </SectionTitle>
          <SectionDescription
            tone="light"
            className="mt-4 max-w-full text-center text-white/85 md:max-w-[40%]"
          >
            {description}
          </SectionDescription>
          <Button
            href={buttonHref}
            variant="red"
            className="mt-8 rounded-full px-6 py-3 text-sm"
          >
            {buttonLabel}
          </Button>
        </Container>
      </BackgroundImage>
    </section>
  );
}
