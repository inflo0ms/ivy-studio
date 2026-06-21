import Image, { type StaticImageData } from 'next/image';

import { Container } from '@/components/shared/container';

interface PortfolioSampleGallery {
  image: StaticImageData;
  title: string;
}

interface PortfolioSamplesProps {
  items: PortfolioSampleGallery[];
}

export function PortfolioSamples({ items }: PortfolioSamplesProps) {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container>
        <h2 className="text-center font-sans text-[28px] leading-[1.3] font-normal tracking-[0.35px] text-brand-black md:text-[32px]">
          Check full gallery samples
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.title}
              className="group relative h-[478px] overflow-hidden rounded-[5px] bg-brand-black/10"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <button
                type="button"
                className="absolute right-5 bottom-5 left-5 rounded-full bg-brand-red px-4 py-2 font-sans text-xs leading-none font-medium tracking-[-0.15px] text-white transition-colors hover:bg-brand-red/90 md:right-auto md:w-auto"
              >
                Open Gallery
              </button>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
