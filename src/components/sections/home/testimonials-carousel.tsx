'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Image, { type StaticImageData } from 'next/image';
import { useCallback } from 'react';

import { Container } from '@/components/shared/container';
import { ArrowIcon } from '@/components/ui/icons';

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  avatar: StaticImageData;
}

interface TestimonialsCarouselProps {
  items: [
    TestimonialItem,
    TestimonialItem,
    TestimonialItem,
    TestimonialItem,
    TestimonialItem,
  ];
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
            <span className="font-body text-brand-black/50 text-xs tracking-[0.2em] uppercase">
              Testimonials
            </span>
            <h2 className="text-brand-black mt-3 font-sans text-[28px] leading-[1.1] font-normal md:text-[40px]">
              What <em className="font-serif italic">photographers</em> say
            </h2>
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
        <div className="-ml-3 flex touch-pan-y md:-ml-4">
          {carouselItems.map((item, index) => (
            <div
              key={`${item.author}-${index}`}
              className="min-w-0 flex-[0_0_86vw] pl-3 md:flex-[0_0_425px] md:pl-4 lg:flex-[0_0_560px]"
            >
              <article className="flex min-h-[288px] flex-col items-center justify-center bg-[#F9F7F6] px-8 py-10 text-center md:min-h-[328px] md:px-14">
                <div className="bg-brand-black/10 relative size-16 overflow-hidden rounded-full md:size-[72px]">
                  <Image
                    src={item.avatar}
                    alt={item.author}
                    fill
                    sizes="72px"
                    className="object-cover"
                  />
                </div>

                <blockquote className="font-body text-brand-black mt-8 max-w-[360px] text-sm leading-[1.45] md:max-w-[390px]">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>

                <div className="mt-7">
                  <p className="text-brand-black font-sans text-sm leading-none">
                    {item.author}
                  </p>
                  <p className="font-body text-brand-black/70 mt-2 text-xs leading-none">
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
