import Image from 'next/image';
import type { ReactNode } from 'react';

import { Container } from '@/components/shared/container';
import {
  SectionEyebrow,
  SectionTitle,
} from '@/components/shared/section-heading';
import { Button } from '@/components/ui/button';
import { siteRoutes } from '@/data/site';
import type { ServiceItem } from '@/types/content';

interface ServicesProps {
  eyebrow?: string;
  title: ReactNode;
  items: ServiceItem[];
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="mt-0.5 shrink-0"
    >
      <path
        d="M3 8l3.5 3.5L13 4.5"
        stroke="#3D030B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface ServiceRowProps {
  item: ServiceItem;
  reverse?: boolean;
}

function ServiceRow({ item, reverse }: ServiceRowProps) {
  return (
    <div
      className={`border-brand-border flex flex-col-reverse overflow-hidden rounded-lg border md:grid md:grid-cols-2 md:items-stretch ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}
    >
      {/* Text card */}
      <div className="bg-white px-5 py-16 md:px-[72px] md:pt-[72px] md:pb-[84px]">
        <div>
          <h3 className="text-brand-black max-w-full font-sans text-[32px] leading-8 font-medium tracking-[0.07px]">
            {item.title}
          </h3>

          <p className="text-brand-black font-body mt-4 mb-[57px] max-w-full text-[17px] leading-[1.4] font-normal tracking-normal md:max-w-[68%]">
            {item.description}
          </p>
        </div>

        <ul className="mt-5 mb-[114px] flex flex-col gap-2">
          {item.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <CheckIcon />
              <span className="text-brand-black font-body text-[17px] leading-[1.4] font-normal tracking-normal">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <Button
          href={siteRoutes.portfolio}
          variant="soft"
          className="text-brand-red h-10 w-28 gap-2.5 rounded-[48px] border border-[#3D030B33] bg-white px-6 py-2 [font-family:Inter,var(--font-figtree),sans-serif] text-base leading-6 font-medium tracking-[-0.31px] hover:border-[#3D030B33] hover:bg-white"
        >
          Samples
        </Button>
      </div>

      {/* Image — no rounded corners */}
      <div className="bg-brand-black/10 relative h-[300px] md:h-auto">
        {item.image && (
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        )}
      </div>
    </div>
  );
}

export function Services({
  eyebrow = 'our services',
  title,
  items,
}: ServicesProps) {
  return (
    <section className="bg-brand-cream py-20">
      {/* Section header */}
      <Container className="mb-16 text-center">
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <SectionTitle className="m-auto mt-4 max-w-full leading-[1.2] tracking-normal md:max-w-[45%]">
          {title}
        </SectionTitle>
      </Container>

      {/* Rows */}
      <Container className="flex flex-col gap-8">
        {items.map((item, index) => (
          <ServiceRow key={item.title} item={item} reverse={index % 2 === 1} />
        ))}
      </Container>
    </section>
  );
}
