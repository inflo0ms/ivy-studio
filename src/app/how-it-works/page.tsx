import type { Metadata } from 'next';

import { Contact } from '@/components/sections/common/contact';
import { HeroInner } from '@/components/sections/common/hero-inner';
import { HowItWorksTimeline } from '@/components/sections/how-it-works/how-it-works-timeline';
import { howItWorksHero, howItWorksSteps } from '@/data/how-it-works';
import { homeImages } from '@/data/home';
import { siteContact } from '@/data/site';

export const metadata: Metadata = {
  title: 'How It Works | Ivy Studio',
  description: howItWorksHero.description,
};

export default function HowItWorksPage() {
  return (
    <main>
      <HeroInner
        image={howItWorksHero.image}
        title={
          <>
            A simple process from{' '}
            <em className="font-serif italic">upload to delivery</em>
          </>
        }
        description={howItWorksHero.description}
      />

      <HowItWorksTimeline steps={howItWorksSteps} />

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
    </main>
  );
}
