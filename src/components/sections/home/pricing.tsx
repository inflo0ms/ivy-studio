import { Container } from '@/components/shared/container';
import {
  SectionDescription,
  SectionTitle,
} from '@/components/shared/section-heading';
import { Button } from '@/components/ui/button';
import { siteRoutes } from '@/data/site';
import type { PricingItem } from '@/types/content';

interface PricingProps {
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

export function Pricing({ items }: PricingProps) {
  return (
    <section className="bg-brand-cream py-16 md:py-20">
      <Container>
        <div className="border-brand-black/15 flex flex-col gap-6 border-b pb-8 md:flex-row md:items-start md:justify-between">
          <div className="text-center md:text-left">
            <SectionTitle className="text-brand-charcoal">
              Simple, transparent <em className="font-serif italic">pricing</em>
            </SectionTitle>
            <SectionDescription className="text-brand-charcoal mt-4">
              No hidden fees. No surprise invoices. Pay per photo - or save with
              a wedding package.
            </SectionDescription>
          </div>

          <Button
            href={siteRoutes.pricing}
            variant="red"
            className="hidden rounded-full px-6 py-3 text-sm md:mt-2 md:inline-flex"
          >
            Calculate
          </Button>
        </div>

        <div className="divide-brand-black/15 divide-y">
          {items.map((item) => (
            <div
              key={item.title}
              className="grid gap-6 py-7 md:grid-cols-[1.1fr_1.55fr_0.75fr] md:items-start md:gap-10 md:py-8"
            >
              <div>
                <h3 className="text-brand-black font-body mb-[15px] text-2xl leading-none font-medium tracking-normal">
                  {item.title}
                </h3>
                <p className="text-brand-black font-body mt-3 max-w-[240px] text-[17px] leading-[1.4] font-normal tracking-normal">
                  {item.description}
                </p>
              </div>

              <ul className="flex flex-col gap-2.5">
                {item.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-brand-black font-body flex items-start gap-3 text-[17px] leading-[1.4] font-normal tracking-normal"
                  >
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-baseline gap-2 md:justify-end md:text-right">
                <span className="text-brand-black font-sans text-[36px] leading-10 font-normal tracking-[0.37px]">
                  {item.price}
                </span>
                <span className="text-brand-black font-sans text-base leading-6 font-normal tracking-[-0.31px]">
                  {item.priceNote}
                </span>
              </div>
            </div>
          ))}
        </div>

        <Button
          href={siteRoutes.pricing}
          variant="red"
          className="mt-8 w-full rounded-full px-6 py-3 text-sm md:hidden"
        >
          Calculate
        </Button>
      </Container>
    </section>
  );
}
