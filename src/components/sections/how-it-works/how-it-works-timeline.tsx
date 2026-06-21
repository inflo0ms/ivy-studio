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
          <div className="bg-brand-black/25 absolute top-0 bottom-0 left-3 hidden w-px md:block" />

          <div className="flex flex-col gap-16 md:gap-24">
            {steps.map((step) => (
              <article
                key={step.step}
                className="relative grid gap-8 md:grid-cols-[260px_1fr] md:gap-16 md:pl-12"
              >
                <span className="bg-brand-black absolute top-1 left-2 hidden size-2 rounded-full md:block" />

                <div>
                  <p className="text-brand-red font-serif text-4xl leading-none font-normal italic md:text-[42px]">
                    {step.step}
                  </p>
                  <h2 className="text-brand-black mt-7 font-sans text-lg leading-[1.25] font-normal">
                    {step.title}
                  </h2>
                  <p className="font-body text-brand-black/75 mt-4 text-sm leading-[1.45]">
                    {step.description}
                  </p>
                  <div className="font-body text-brand-black/55 mt-6 flex items-center gap-1.5 text-xs leading-none">
                    <ClockIcon />
                    {step.duration}
                  </div>
                </div>

                {step.image && (
                  <div className="border-brand-black/10 bg-brand-black/10 relative aspect-[650/270] overflow-hidden border">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="(min-width: 768px) 650px, 100vw"
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
