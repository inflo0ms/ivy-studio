import type { ReactNode } from 'react';

import { Container } from '@/components/shared/container';
import { SectionTitle } from '@/components/shared/section-heading';
import { ClockIcon } from '@/components/ui/icons';
import type { ProcessStep } from '@/types/content';

interface ProcessProps {
  title: ReactNode;
  items: ProcessStep[];
}

export function Process({ title, items }: ProcessProps) {
  return (
    <section className="bg-brand-cream py-16 md:py-20">
      <Container>
        <SectionTitle className="text-center md:text-left">
          {title}
        </SectionTitle>

        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.step}
              className="border-brand-black/10 bg-white px-7 py-8 shadow-[0_0_0_1px_rgba(35,31,31,0.04)] md:min-h-[295px] md:px-8 md:py-9"
            >
              <p className="text-brand-red font-sans text-5xl leading-none font-light tracking-[-0.04em] md:text-[52px]">
                {item.step}
              </p>

              <h3 className="text-brand-black mt-7 font-sans text-lg leading-[1.25] font-normal">
                {item.title}
              </h3>

              <p className="font-body text-brand-black/75 mt-4 max-w-[250px] text-sm leading-[1.35]">
                {item.description}
              </p>

              <div className="font-body text-brand-black/70 mt-9 flex items-center gap-1.5 text-xs leading-none md:mt-10">
                <ClockIcon />
                <span>{item.duration}</span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
