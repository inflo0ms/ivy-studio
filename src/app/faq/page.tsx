import type { Metadata } from 'next';

import { Contact } from '@/components/sections/common/contact';
import { HeroInner } from '@/components/sections/common/hero-inner';
import { FaqAccordionGroups } from '@/components/sections/faq/faq-accordion-groups';
import { faqGroups, faqHero } from '@/data/faq';
import { homeImages } from '@/data/home';
import { siteContact } from '@/data/site';

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
        image={homeImages.contact}
        description="Start with a free color test - no payment, no commitment. We'll edit 15 of your photos to show you exactly what to expect."
        contact={siteContact}
      />
    </main>
  );
}
