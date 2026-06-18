import Image, { type StaticImageData } from 'next/image';

import { Container } from '@/components/shared/container';
import { Button } from '@/components/ui/button';

export interface ArticleItem {
  id: string;
  image: StaticImageData;
  title: string;
  description: string;
  date: string;
  readTime: string;
}

interface RecentArticlesProps {
  items: [ArticleItem, ArticleItem, ArticleItem];
}

function CalendarIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect
        x="2"
        y="2.5"
        width="8"
        height="7"
        rx="1"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M3.5 1.5v2M8.5 1.5v2M2.2 5h7.6"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle
        cx="6"
        cy="6"
        r="4"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M6 3.8V6l1.5.9"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function RecentArticles({ items }: RecentArticlesProps) {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container>
        <div className="mb-8 flex items-center justify-between gap-6">
          <h2 className="text-brand-black font-sans text-[28px] leading-[1.1] font-normal md:text-[40px]">
            Recent <em className="font-serif italic">articles</em>
          </h2>

          <Button
            type="button"
            variant="red"
            className="hidden rounded-full px-5 py-2.5 text-xs md:inline-flex"
          >
            Read more
          </Button>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-sm border border-brand-black/10 bg-white shadow-[0_8px_24px_rgba(35,31,31,0.04)]"
            >
              <div className="relative aspect-[352/254] bg-brand-black/10">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="px-5 pt-5 pb-4">
                <h3 className="text-brand-black font-sans text-lg leading-[1.2] font-normal md:text-[17px]">
                  {item.title}
                </h3>

                <p className="font-body text-brand-black/70 mt-4 text-xs leading-[1.45]">
                  {item.description}
                </p>

                <div className="font-body text-brand-black/55 mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] leading-none">
                  <span className="flex items-center gap-1.5">
                    <CalendarIcon />
                    {item.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ClockIcon />
                    {item.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <Button
          type="button"
          variant="red"
          className="mt-8 w-full rounded-full px-5 py-3 text-xs md:hidden"
        >
          Read more
        </Button>
      </Container>
    </section>
  );
}
