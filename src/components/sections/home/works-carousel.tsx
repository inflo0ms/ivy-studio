'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { useCallback } from 'react';

import { Container } from '@/components/shared/container';
import {
  SectionDescription,
  SectionTitle,
} from '@/components/shared/section-heading';
import { Button } from '@/components/ui/button';
import { ArrowIcon } from '@/components/ui/icons';
import { siteRoutes } from '@/data/site';
import type { WorkSlide } from '@/types/content';

interface WorksCarouselProps {
  slides: WorkSlide[];
}

export function WorksCarousel({ slides }: WorksCarouselProps) {
  const carouselSlides = [...slides, ...slides, ...slides];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: false,
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section className="bg-white py-16 md:py-20">
      <Container className="mb-5">
        <div className="flex items-end justify-between gap-6">
          <div className="w-full text-center md:w-auto md:text-left">
            <SectionTitle className="tracking-[-0.15px]">
              Our <em className="font-serif italic">works</em>
            </SectionTitle>
            <SectionDescription className="mx-auto mt-3 max-w-full md:mx-0 md:max-w-none">
              Every pair shows a real wedding, hover to see RAW image.
            </SectionDescription>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={scrollPrev}
              className="text-brand-black hover:border-brand-red hover:text-brand-red flex size-10 items-center justify-center rounded-full border border-black/10 bg-white transition-colors"
              aria-label="Previous work"
            >
              <ArrowIcon direction="prev" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              className="text-brand-black hover:border-brand-red hover:text-brand-red flex size-10 items-center justify-center rounded-full border border-black/10 bg-white transition-colors"
              aria-label="Next work"
            >
              <ArrowIcon direction="next" />
            </button>
          </div>
        </div>
      </Container>

      <div ref={emblaRef} className="overflow-hidden">
        <div className="-ml-3 flex touch-pan-y">
          {carouselSlides.map((slide, index) => (
            <div
              key={`${slide.title}-${index}`}
              className="min-w-0 flex-[0_0_82vw] pl-3 sm:flex-[0_0_351px]"
            >
              <div className="group bg-brand-black/10 relative aspect-[351/454] overflow-hidden rounded-lg">
                <Image
                  src={slide.beforeImage}
                  alt={`${slide.title} before editing`}
                  fill
                  sizes="(min-width: 640px) 351px, 82vw"
                  className="object-cover"
                />
                <Image
                  src={slide.afterImage}
                  alt={`${slide.title} after editing`}
                  fill
                  sizes="(min-width: 640px) 351px, 82vw"
                  className="object-cover transition-opacity duration-300 group-hover:opacity-0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Container className="mt-7 flex justify-center">
        <Button
          href={siteRoutes.portfolio}
          variant="red"
          className="rounded-full px-6 py-3 text-sm"
        >
          View full portfolio
        </Button>
      </Container>
    </section>
  );
}
