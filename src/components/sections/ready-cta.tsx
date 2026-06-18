import type { StaticImageData } from 'next/image';
import type { ReactNode } from 'react';

import { BackgroundImage } from '@/components/shared/background-image';
import { Container } from '@/components/shared/container';
import { Button } from '@/components/ui/button';

interface ReadyCtaProps {
  title: ReactNode;
  description: string;
  buttonLabel: string;
  image: StaticImageData;
}

export function ReadyCta({
  title,
  description,
  buttonLabel,
  image,
}: ReadyCtaProps) {
  return (
    <section className="bg-white">
      <BackgroundImage
        image={image}
        alt=""
        className="min-h-[300px] md:min-h-[340px]"
        imageClassName="object-center"
        overlayClassName="bg-black/45"
      >
        <Container className="flex min-h-[300px] flex-col items-center justify-center py-16 text-center md:min-h-[340px]">
          <h2 className="text-brand-white font-sans text-[28px] leading-[1.1] font-normal md:text-[44px]">
            {title}
          </h2>
          <p className="font-body mt-4 max-w-xl text-[17px] leading-[1.45] text-white/85 md:text-sm">
            {description}
          </p>
          <Button variant="red" className="mt-8 rounded-full px-6 py-3 text-sm">
            {buttonLabel}
          </Button>
        </Container>
      </BackgroundImage>
    </section>
  );
}
