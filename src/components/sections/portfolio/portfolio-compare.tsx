'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Image, { type StaticImageData } from 'next/image';
import { useCallback, useEffect, useState } from 'react';

import compareArrows from '@/assets/icons/compare_arrows.svg';
import { Container } from '@/components/shared/container';
import {
  SectionDescription,
  SectionTitle,
} from '@/components/shared/section-heading';
import { ArrowIcon } from '@/components/ui/icons';

interface PortfolioCompareItem {
  beforeImage: StaticImageData;
  afterImage: StaticImageData;
  beforePosition?: string;
  afterPosition?: string;
  beforeScale?: number;
  afterScale?: number;
}

interface PortfolioCompareProps {
  items: PortfolioCompareItem[];
}

export function PortfolioCompare({ items }: PortfolioCompareProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
  });
  const [position, setPosition] = useState(50);
  const [activeIndex, setActiveIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) {
      return;
    }

    setActiveIndex(emblaApi.selectedScrollSnap());
    setPosition(50);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    emblaApi.on('select', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const showPrevious = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const showNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const showSlide = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  return (
    <section className="border-brand-border bg-brand-cream border-t-2 py-16 md:py-20">
      <Container>
        <div className="text-center">
          <SectionTitle className="font-body text-center tracking-[0.37px]">
            Drag to <em className="font-serif italic">compare</em>
          </SectionTitle>
          <SectionDescription className="mt-4 text-center">
            Interactive before/after slider - place your mouse here.
          </SectionDescription>
        </div>

        <div className="mt-10">
          <div ref={emblaRef} className="overflow-hidden rounded-lg">
            <div className="flex touch-pan-y">
              {items.map((item, index) => (
                <div key={index} className="min-w-0 flex-[0_0_100%]">
                  <CompareSlide
                    item={item}
                    position={position}
                    setPosition={setPosition}
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={showPrevious}
              className="text-brand-black hover:border-brand-red hover:text-brand-red flex size-10 items-center justify-center rounded-full border border-black/10 bg-white transition-colors"
              aria-label="Previous comparison"
            >
              <ArrowIcon direction="prev" />
            </button>

            <div
              className="flex items-center gap-2"
              aria-label={`Comparison ${activeIndex + 1} of ${items.length}`}
            >
              {items.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => showSlide(index)}
                  className={`size-1.5 rounded-full transition-colors ${index === activeIndex ? 'bg-brand-red' : 'bg-brand-black/20'}`}
                  aria-label={`Show comparison ${index + 1}`}
                  aria-current={index === activeIndex ? 'true' : undefined}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={showNext}
              className="text-brand-black hover:border-brand-red hover:text-brand-red flex size-10 items-center justify-center rounded-full border border-black/10 bg-white transition-colors"
              aria-label="Next comparison"
            >
              <ArrowIcon direction="next" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

interface CompareSlideProps {
  item: PortfolioCompareItem;
  position: number;
  setPosition: (position: number) => void;
  priority: boolean;
}

function CompareSlide({
  item,
  position,
  setPosition,
  priority,
}: CompareSlideProps) {
  return (
    <div className="border-brand-border bg-brand-black/10 relative h-[228px] overflow-hidden rounded-lg border md:h-[549px]">
      <Image
        src={item.beforeImage}
        alt="Before editing"
        fill
        priority={priority}
        sizes="(min-width: 1280px) 1280px, calc(100vw - 40px)"
        className="object-cover"
        style={{
          objectPosition: item.beforePosition,
          transform: item.beforeScale
            ? `scale(${item.beforeScale})`
            : undefined,
        }}
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
      >
        <Image
          src={item.afterImage}
          alt="After editing"
          fill
          priority={priority}
          sizes="(min-width: 1280px) 1280px, calc(100vw - 40px)"
          className="object-cover"
          style={{
            objectPosition: item.afterPosition,
            transform: item.afterScale
              ? `scale(${item.afterScale})`
              : undefined,
          }}
        />
      </div>

      <span className="text-brand-red bg-brand-cream font-body absolute top-1/2 left-[25px] flex h-6 w-[77px] -translate-y-1/2 items-center justify-center gap-2.5 rounded-[100px] px-4 py-1.5 text-xs leading-4 font-normal tracking-normal uppercase">
        Before
      </span>
      <span className="text-brand-red bg-brand-cream font-body absolute top-1/2 right-[25px] flex h-6 w-[77px] -translate-y-1/2 items-center justify-center gap-2.5 rounded-[100px] px-4 py-1.5 text-xs leading-4 font-normal tracking-normal uppercase">
        After
      </span>

      <div
        className="absolute inset-y-0 w-px bg-white"
        style={{ left: `${position}%` }}
      >
        <span className="absolute top-1/2 left-1/2 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_8px_24px_rgba(35,31,31,0.16)]">
          <Image src={compareArrows} alt="" width={20} height={9} aria-hidden />
        </span>
      </div>

      <input
        type="range"
        min="0"
        max="100"
        value={position}
        aria-label="Compare before and after editing"
        onChange={(event) => setPosition(Number(event.target.value))}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
