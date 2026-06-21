import { Contact } from '@/components/sections/common/contact';
import { RecentArticles } from '@/components/sections/common/recent-articles';
import { About } from '@/components/sections/home/about';
import { HeroHome } from '@/components/sections/home/hero-home';
import { Pricing } from '@/components/sections/home/pricing';
import { Process } from '@/components/sections/home/process';
import { ReadyCta } from '@/components/sections/home/ready-cta';
import { Services } from '@/components/sections/home/services';
import { TestimonialsCarousel } from '@/components/sections/home/testimonials-carousel';
import { WorksCarousel } from '@/components/sections/home/works-carousel';
import {
  homeImages,
  homeProcess,
  homeServices,
  homeTestimonials,
  homeWorks,
  pricingItems,
  readyCta,
  recentArticles,
} from '@/data/home';
import { siteContact } from '@/data/site';

export default function HomePage() {
  return (
    <main>
      <HeroHome
        image={homeImages.hero}
        title={
          <>
            Every image <em className="font-serif italic">is Hand-Edited</em> by
            our expert team
          </>
        }
        description="With over 10 years of experience and 500+ weddings edited, we understand the delicate balance between enhancing photos and maintaining their authentic, emotional essence."
      />

      <About
        title={
          <>
            Let us <em className="font-serif italic">introduce</em> ourselves
          </>
        }
        imageLeft={homeImages.aboutLeft}
        imageRight={homeImages.aboutRight}
        description="We are a team of professional retouchers specializing in wedding photography. With over 10 years of experience and 500+ weddings edited, we understand the delicate balance between enhancing photos and maintaining their authentic, emotional essence."
      />

      <Services
        title={
          <>
            Every image <em className="font-sans italic">is</em>{' '}
            <em className="font-serif italic">hand-edited</em> by our expert
            team
          </>
        }
        items={homeServices}
      />

      <WorksCarousel slides={homeWorks} />

      <Pricing items={pricingItems} />

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

      <TestimonialsCarousel items={homeTestimonials} />

      <Process
        title={
          <>
            Process from upload{' '}
            <em className="font-serif italic">to delivery</em>
          </>
        }
        items={homeProcess}
      />

      <RecentArticles items={recentArticles} />

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
