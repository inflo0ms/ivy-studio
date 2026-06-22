import Image, { type StaticImageData } from 'next/image';

import { Container } from '@/components/shared/container';
import { SectionTitle } from '@/components/shared/section-heading';

export interface PortfolioGalleryItem {
  image: StaticImageData;
  label: string;
  objectPosition?: string;
}

interface PortfolioGalleryGridProps {
  items: PortfolioGalleryItem[];
}

export function PortfolioGalleryGrid({ items }: PortfolioGalleryGridProps) {
  const pairs = Array.from(
    { length: Math.ceil(items.length / 2) },
    (_, index) => items.slice(index * 2, index * 2 + 2),
  );

  return (
    <section className="bg-white py-16 md:py-20">
      <Container>
        <SectionTitle className="mx-auto max-w-2xl text-center">
          Every image <em className="font-serif italic">is</em>{' '}
          <em className="font-serif italic">hand-edited</em>
          <br />
          by our expert team
        </SectionTitle>

        <div className="mt-18 grid gap-10 md:grid-cols-2">
          {pairs.map((pair, pairIndex) => (
            <div key={pairIndex} className="grid grid-cols-2 gap-2.5">
              {pair.map((item, itemIndex) => (
                <article
                  key={`${item.label}-${pairIndex}-${itemIndex}`}
                  className="bg-brand-black/10 relative aspect-[220/300] rounded-[5px]"
                >
                  <div className="relative h-full overflow-hidden rounded-[5px]">
                    <Image
                      src={item.image}
                      alt={`${item.label} portfolio sample`}
                      fill
                      sizes="(min-width: 768px) 25vw, 50vw"
                      className="object-cover"
                      style={{ objectPosition: item.objectPosition }}
                    />
                  </div>
                  <span className="bg-brand-red font-body absolute top-[-11px] left-1/2 flex h-6 w-[68px] -translate-x-1/2 items-center justify-center gap-2.5 rounded-[100px] px-4 py-1.5 text-xs leading-4 font-normal tracking-normal text-white uppercase">
                    {item.label}
                  </span>
                </article>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
