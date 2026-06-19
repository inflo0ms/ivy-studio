import Image, { type StaticImageData } from 'next/image';
import type { ReactNode } from 'react';

import { Container } from '@/components/shared/container';
import { Button } from '@/components/ui/button';

export interface ServiceItem {
  title: string;
  description: string;
  features: string[];
  image?: StaticImageData;
}

interface ServicesProps {
  eyebrow?: string;
  title: ReactNode;
  items: [ServiceItem, ServiceItem, ServiceItem];
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
      className={`flex flex-col-reverse md:grid md:grid-cols-2 md:items-stretch ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}
    >
      {/* Text card */}
      <div className="bg-white px-5 py-16 md:px-[72px] md:pt-[72px] md:pb-[84px]">
        <div>
          <h3 className="text-brand-black font-sans text-2xl leading-[1.2] font-normal sm:text-3xl">
            {item.title}
          </h3>

          <p className="font-body text-brand-black/70 mt-4 mb-[57px] max-w-[68%] text-[15px] leading-[1.5]">
            {item.description}
          </p>
        </div>

        <ul className="mt-5 mb-[114px] flex flex-col gap-2">
          {item.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <CheckIcon />
              <span className="font-body text-brand-black/80 text-[14px] leading-[1.5]">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <Button variant="soft" className="rounded-full px-6 py-2.5 text-sm">
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
  eyebrow = 'Services',
  title,
  items,
}: ServicesProps) {
  return (
    <section className="bg-[#F9F7F6] py-20">
      {/* Section header */}
      <Container className="mb-16 text-center">
        <span className="font-body text-brand-black/50 text-xs tracking-[0.2em] uppercase">
          {eyebrow}
        </span>
        <h2 className="text-brand-black m-auto mt-4 max-w-3xl font-sans text-[28px] leading-[1.2] font-normal md:text-5xl">
          {title}
        </h2>
      </Container>

      {/* Rows */}
      <Container className="flex flex-col gap-8">
        <ServiceRow item={items[0]} />
        <ServiceRow item={items[1]} reverse />
        <ServiceRow item={items[2]} />
      </Container>
    </section>
  );
}
