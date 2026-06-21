import type { Metadata } from 'next';

import { HeroInner } from '@/components/sections/common/hero-inner';
import { ReadyCta } from '@/components/sections/common/ready-cta';
import { TestimonialsCarousel } from '@/components/sections/common/testimonials-carousel';
import { PortfolioCompare } from '@/components/sections/portfolio/portfolio-compare';
import { PortfolioGalleryGrid } from '@/components/sections/portfolio/portfolio-gallery-grid';
import { PortfolioSamples } from '@/components/sections/portfolio/portfolio-samples';
import { homeImages, homeTestimonials, readyCta } from '@/data/home';
import {
  portfolioCompareItems,
  portfolioGalleryItems,
  portfolioHero,
  portfolioSampleGalleries,
} from '@/data/portfolio';

export const metadata: Metadata = {
  title: 'Portfolio | Ivy Studio',
  description: portfolioHero.description,
};

export default function PortfolioPage() {
  return (
    <main>
      <HeroInner
        image={portfolioHero.image}
        eyebrow={portfolioHero.eyebrow}
        title={
          <>
            See <em className="font-serif italic">the difference</em> we make
          </>
        }
        description={portfolioHero.description}
      />

      <PortfolioCompare items={portfolioCompareItems} />

      <PortfolioGalleryGrid items={portfolioGalleryItems} />

      <PortfolioSamples items={portfolioSampleGalleries} />

      <TestimonialsCarousel items={homeTestimonials} />

      <ReadyCta
        image={homeImages.readyCta}
        title={
          <>
            Ready to get <em className="font-serif italic">started?</em>
          </>
        }
        description={readyCta.description}
        buttonLabel={readyCta.buttonLabel}
      />
    </main>
  );
}
