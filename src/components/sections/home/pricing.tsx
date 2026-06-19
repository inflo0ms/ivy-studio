import { Container } from '@/components/shared/container';
import { Button } from '@/components/ui/button';

export interface PricingItem {
  title: string;
  description: string;
  features: string[];
  price: string;
  priceNote: string;
}

interface PricingProps {
  items: [PricingItem, PricingItem, PricingItem];
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

export function Pricing({ items }: PricingProps) {
  return (
    <section className="bg-[#F9F7F6] py-16 md:py-20">
      <Container>
        <div className="flex flex-col gap-6 border-b border-brand-black/15 pb-8 md:flex-row md:items-start md:justify-between">
          <div className="text-center md:text-left">
            <h2 className="text-brand-black font-sans text-[28px] leading-[1.1] font-normal md:text-[40px]">
              Simple, transparent{' '}
              <em className="font-serif italic">pricing</em>
            </h2>
            <p className="font-body text-brand-black/70 mt-4 text-[17px] leading-[1.5] md:text-sm">
              No hidden fees. No surprise invoices. Pay per photo - or save
              with a wedding package.
            </p>
          </div>

          <Button
            type="button"
            variant="red"
            className="hidden rounded-full px-6 py-3 text-sm md:mt-2 md:inline-flex"
          >
            Calculate
          </Button>
        </div>

        <div className="divide-y divide-brand-black/15">
          {items.map((item) => (
            <div
              key={item.title}
              className="grid gap-6 py-7 md:grid-cols-[1.1fr_1.55fr_0.75fr] md:items-start md:gap-10 md:py-8"
            >
              <div>
                <h3 className="text-brand-black font-sans text-xl leading-[1.2] font-normal md:text-lg">
                  {item.title}
                </h3>
                <p className="font-body text-brand-black/75 mt-3 max-w-[240px] text-sm leading-[1.35] md:text-xs">
                  {item.description}
                </p>
              </div>

              <ul className="flex flex-col gap-2.5">
                {item.features.map((feature) => (
                  <li
                    key={feature}
                    className="font-body text-brand-black/80 flex items-start gap-3 text-sm leading-[1.4] md:text-xs"
                  >
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-baseline gap-2 md:justify-end md:text-right">
                <span className="text-brand-black font-sans text-3xl leading-none font-normal md:text-2xl">
                  {item.price}
                </span>
                <span className="font-body text-brand-black/70 text-xs leading-none">
                  {item.priceNote}
                </span>
              </div>
            </div>
          ))}
        </div>

        <Button
          type="button"
          variant="red"
          className="mt-8 w-full rounded-full px-6 py-3 text-sm md:hidden"
        >
          Calculate
        </Button>
      </Container>
    </section>
  );
}
