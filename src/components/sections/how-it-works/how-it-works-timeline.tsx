import Image from 'next/image';

import { Container } from '@/components/shared/container';
import { ClockIcon } from '@/components/ui/icons';
import type { ProcessStep } from '@/types/content';

interface HowItWorksTimelineProps {
  steps: ProcessStep[];
}

export function HowItWorksTimeline({ steps }: HowItWorksTimelineProps) {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container className="max-w-[1280px]">
        <div className="relative">
          <div className="flex flex-col gap-16 md:gap-26">
            {steps.map((step, index) => (
              <article
                key={step.step}
                className="relative grid items-center gap-8 md:grid-cols-[300px_1fr] md:gap-16 md:pl-12"
              >
                <span className="bg-brand-black absolute top-1 left-2 hidden size-2 rounded-full md:block" />

                {index < steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="bg-brand-black/25 absolute top-2 left-3 hidden h-[calc(100%+4rem)] w-px md:block md:h-[calc(100%+6.5rem)]"
                  />
                )}

                <div>
                  <p className="text-brand-red font-serif text-[60px] leading-[60px] font-normal tracking-[0.26px] italic">
                    {step.step}
                  </p>
                  <h2 className="text-brand-black mt-4 font-sans text-2xl leading-8 font-medium tracking-[0.07px]">
                    {step.title}
                  </h2>
                  <p className="text-brand-black/75 mt-4 font-sans text-base leading-6 font-normal">
                    {step.description}
                  </p>
                  <div className="text-brand-black/55 mt-6 flex items-center gap-1.5 [font-family:Inter,var(--font-figtree),sans-serif] text-sm leading-5 font-normal tracking-[-0.15px]">
                    <ClockIcon />
                    {step.duration}
                  </div>
                </div>

                {step.image && (
                  <div className="border-brand-black/10 bg-brand-black/10 relative aspect-[766/444] overflow-hidden border">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="(min-width: 768px) 766px, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
