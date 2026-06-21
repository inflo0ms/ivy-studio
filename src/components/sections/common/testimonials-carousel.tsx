'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { useCallback } from 'react';

import { Container } from '@/components/shared/container';
import { SectionEyebrow, SectionTitle } from '@/components/shared/section-heading';
import { ArrowIcon } from '@/components/ui/icons';
import type { TestimonialItem } from '@/types/content';

interface TestimonialsCarouselProps {
  items: TestimonialItem[];
}

export function TestimonialsCarousel({ items }: TestimonialsCarouselProps) {
  const carouselItems = [...items, ...items, ...items];

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
      <Container className="mb-6">
        <div className="flex items-end justify-between gap-6">
          <div className="w-full text-center md:w-auto md:text-left">
            <SectionEyebrow>
              Testimonials
            </SectionEyebrow>
            <SectionTitle>
              What{' '}
              <em className="font-serif lowercase italic">photographers</em> say
            </SectionTitle>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={scrollPrev}
              className="text-brand-black hover:border-brand-red hover:text-brand-red flex size-10 items-center justify-center rounded-full border border-black/10 bg-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowIcon direction="prev" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              className="text-brand-black hover:border-brand-red hover:text-brand-red flex size-10 items-center justify-center rounded-full border border-black/10 bg-white transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowIcon direction="next" />
            </button>
          </div>
        </div>
      </Container>

      <div ref={emblaRef} className="overflow-hidden">
        <div className="-ml-2.5 flex touch-pan-y">
          {carouselItems.map((item, index) => (
            <div
              key={`${item.author}-${index}`}
              className="min-w-0 flex-[0_0_86vw] pl-2.5 md:flex-[0_0_600px]"
            >
              <article className="border-brand-border bg-brand-cream flex min-h-[288px] flex-col items-center justify-start rounded-lg border px-8 py-10 text-center md:h-[397px] md:p-[58px]">
                <div className="bg-brand-black/10 relative size-16 overflow-hidden rounded-full md:size-[100px]">
                  <Image
                    src={item.avatar}
                    alt={item.author}
                    fill
                    sizes="100%"
                    className="object-cover"
                  />
                </div>

                <blockquote className="text-brand-black font-body mt-8 max-w-[360px] text-center text-[17px] leading-[1.4] font-normal tracking-normal md:flex md:h-[72px] md:max-w-[390px] md:items-center">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>

                <div className="mt-7 md:mt-5">
                  <p className="text-brand-black font-sans text-base leading-6 font-medium tracking-[-0.31px]">
                    {item.author}
                  </p>
                  <p className="text-brand-black font-sans mt-2 text-sm leading-5 font-normal tracking-[-0.15px]">
                    {item.role}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
