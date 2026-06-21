'use client';

import { useState } from 'react';

import { Container } from '@/components/shared/container';
import type { FaqGroup } from '@/types/content';

interface FaqAccordionGroupsProps {
  groups: FaqGroup[];
}

export function FaqAccordionGroups({ groups }: FaqAccordionGroupsProps) {
  const [openItem, setOpenItem] = useState('getting-started-0');

  return (
    <section className="bg-white py-14 md:py-20">
      <Container className="max-w-[1000px]">
        <div className="flex flex-col gap-12">
          {groups.map((group) => (
            <section key={group.title}>
              <h2 className="text-brand-black border-brand-border border-b pb-5 font-sans text-2xl leading-[1.2] font-normal">
                {group.title}
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                {group.items.map((item, itemIndex) => {
                  const itemId = `${group.title
                    .toLowerCase()
                    .replaceAll(/[^a-z0-9]+/g, '-')}-${itemIndex}`;
                  const isOpen = openItem === itemId;

                  return (
                    <div key={item.question} className="border-brand-border border">
                      <button
                        type="button"
                        onClick={() => setOpenItem(isOpen ? '' : itemId)}
                        className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left"
                        aria-expanded={isOpen}
                      >
                        <span className="text-brand-black font-sans text-base leading-[1.35] font-normal">
                          {item.question}
                        </span>
                        <span className="text-brand-black font-body text-xl leading-none">
                          {isOpen ? '-' : '+'}
                        </span>
                      </button>

                      {isOpen && (
                        <p className="font-body text-brand-black/70 px-5 pb-6 text-sm leading-[1.55]">
                          {item.answer}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </section>
  );
}
