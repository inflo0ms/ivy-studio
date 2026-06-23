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
        <div className="flex flex-col gap-16">
          {groups.map((group) => (
            <section key={group.title}>
              <h2 className="text-brand-black border-brand-border font-body border-b pb-5 text-[32px] leading-9 font-medium tracking-[0.4px]">
                {group.title}
              </h2>

              <div className="mt-5 flex flex-col gap-4">
                {group.items.map((item, itemIndex) => {
                  const itemId = `${group.title
                    .toLowerCase()
                    .replaceAll(/[^a-z0-9]+/g, '-')}-${itemIndex}`;
                  const isOpen = openItem === itemId;

                  return (
                    <div
                      key={item.question}
                      className="border-brand-border border"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenItem(isOpen ? '' : itemId)}
                        className="flex w-full flex-col px-8 py-6 text-left"
                        aria-expanded={isOpen}
                      >
                        <span className="flex w-full items-center justify-between gap-6">
                          <span className="text-brand-black font-body text-2xl leading-7 font-normal tracking-[-0.44px]">
                            {item.question}
                          </span>
                          <span className="text-brand-black font-body shrink-0 text-xl leading-none">
                            {isOpen ? '-' : '+'}
                          </span>
                        </span>

                        {isOpen && (
                          <span className="text-brand-black/70 font-body mt-4 block text-[17px] leading-[1.4] font-normal">
                            {item.answer}
                          </span>
                        )}
                      </button>
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
