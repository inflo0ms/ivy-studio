import type { ReactNode } from 'react';

import { Container } from '@/components/shared/container';
import { SectionTitle } from '@/components/shared/section-heading';

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  title: ReactNode;
  items: [FaqItem, FaqItem, FaqItem, FaqItem];
}

export function Faq({ title, items }: FaqProps) {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container>
        <SectionTitle className="text-center">
          {title}
        </SectionTitle>

        <div className="mx-auto mt-10 max-w-[820px] divide-y divide-brand-black/10 md:mt-12">
          {items.map((item) => (
            <article key={item.question} className="py-7 first:pt-0">
              <h3 className="text-brand-black font-sans text-base leading-[1.3] font-normal">
                {item.question}
              </h3>
              <p className="font-body text-brand-black/75 mt-3 text-sm leading-[1.45]">
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
