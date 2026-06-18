import type { Metadata } from 'next';

import { FaqAccordionGroups } from '@/components/sections/faq-accordion-groups';
import { HeroInner } from '@/components/sections/hero-inner';
import { faqGroups, faqHero } from '@/data/faq';
import { homeImages } from '@/data/home';
import { siteContact } from '@/data/site';
import { Contact } from '@/components/sections/contact';

export const metadata: Metadata = {
  title: 'FAQ | Ivy Studio',
  description: faqHero.description,
};

export default function FaqPage() {
  return (
    <main>
      <HeroInner
        image={faqHero.image}
        eyebrow={faqHero.eyebrow}
        title={
          <>
            Everything <em className="font-serif italic">you need to know</em>
          </>
        }
        description={faqHero.description}
      />

      <FaqAccordionGroups groups={faqGroups} />

      <Contact
        image={homeImages.readyCta}
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
    </main>
  );
}
