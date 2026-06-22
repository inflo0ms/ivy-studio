import type { Metadata } from 'next';

import { Contact } from '@/components/sections/common/contact';
import { Faq } from '@/components/sections/common/faq';
import { HeroInner } from '@/components/sections/common/hero-inner';
import { PricingCalculator } from '@/components/sections/pricing/pricing-calculator';
import { PricingCards } from '@/components/sections/pricing/pricing-cards';
import { homeImages } from '@/data/home';
import {
  pricingCalculatorServices,
  pricingCards,
  pricingFaqItems,
  pricingHero,
} from '@/data/pricing';
import { siteContact } from '@/data/site';

export const metadata: Metadata = {
  title: 'Pricing | Ivy Studio',
  description: pricingHero.description,
};

export default function PricingPage() {
  return (
    <main>
      <HeroInner
        image={pricingHero.image}
        eyebrow={pricingHero.eyebrow}
        title={
          <>
            Simple, transparent <em className="font-serif italic">pricing</em>
          </>
        }
        description={pricingHero.description}
      />

      <PricingCards items={pricingCards} />

      <PricingCalculator services={pricingCalculatorServices} />

      <Contact
        image={homeImages.contact}
        title={
          <>
            <em className="font-serif italic">Have questions?</em>
            <br />
            Send us a message
          </>
        }
        description="Start with a free color test - no payment, no commitment. We'll edit 15 of your photos to show you exactly what to expect."
        contact={siteContact}
      />

      <Faq
        title={
          <>
            Frequently <em className="font-serif italic">asked questions</em>
          </>
        }
        items={pricingFaqItems}
      />
    </main>
  );
}
