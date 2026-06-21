import { Container } from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/cn';
import type { PricingItem } from '@/types/content';

interface PricingCardsProps {
  items: PricingItem[];
}

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className="mt-0.5 shrink-0"
    >
      <path
        d="M3 7l2.5 2.5L11 4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PricingCards({ items }: PricingCardsProps) {
  return (
    <section className="bg-brand-cream py-16 md:py-24">
      <Container>
        <div className="grid gap-5 md:grid-cols-3 md:items-stretch">
          {items.map((item) => (
            <article
              key={item.title}
              className={cn(
                'border-brand-black/10 relative flex flex-col border bg-white px-7 py-8 shadow-[0_8px_24px_rgba(35,31,31,0.04)] md:min-h-[460px] md:px-8',
                item.badge && 'border-brand-red',
              )}
            >
              {item.badge && (
                <span className="bg-brand-red text-brand-white font-body absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full px-5 py-2 text-xs leading-none">
                  {item.badge}
                </span>
              )}

              <div>
                <h2 className="text-brand-black font-sans text-2xl leading-[1.2] font-normal md:text-[26px]">
                  {item.title}
                </h2>
                <p className="font-body text-brand-black/75 mt-3 max-w-[290px] text-sm leading-[1.4]">
                  {item.description}
                </p>
              </div>

              <div className="mt-9">
                <p className="text-brand-black font-sans text-4xl leading-none font-normal">
                  {item.price}
                </p>
                <p className="font-body text-brand-black mt-2 text-sm leading-none">
                  {item.priceNote}
                </p>
              </div>

              <ul className="mt-8 flex flex-col gap-4">
                {item.features.map((feature) => (
                  <li
                    key={feature}
                    className="font-body text-brand-black/85 flex items-start gap-3 text-sm leading-[1.35]"
                  >
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                type="button"
                variant="red"
                className="mt-10 h-12 w-full rounded-full text-sm md:mt-auto"
              >
                Get started
              </Button>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
