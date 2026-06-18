import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/shared/container';

export interface BlogArticleItem {
  id: string;
  image: StaticImageData;
  title: string;
  description: string;
  date: string;
  readTime: string;
}

interface BlogArticlesGridProps {
  items: [
    BlogArticleItem,
    BlogArticleItem,
    BlogArticleItem,
    BlogArticleItem,
    BlogArticleItem,
    BlogArticleItem,
    BlogArticleItem,
    BlogArticleItem,
    BlogArticleItem,
  ];
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

function PaginationArrow({ direction }: { direction: 'prev' | 'next' }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      className={direction === 'prev' ? 'rotate-180' : undefined}
    >
      <path
        d="M4 9h10M10 5l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BlogArticlesGrid({ items }: BlogArticlesGridProps) {
  return (
    <section className="bg-white py-14 md:py-20">
      <Container>
        <h2 className="text-brand-black font-sans text-[28px] leading-[1.1] font-normal md:text-[40px]">
          Recent <em className="font-serif italic">articles</em>
        </h2>

        <div className="mt-8 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-lg border border-brand-black/10"
            >
              <Link href={`/blog/${item.id}`} className="block h-full">
                <div className="relative aspect-[352/254] bg-brand-black/10">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div className="px-4 pt-4 pb-5">
                  <h3 className="text-brand-black font-sans text-base leading-[1.2] font-normal">
                    {item.title}
                  </h3>
                  <p className="font-body text-brand-black/70 mt-3 text-xs leading-[1.45]">
                    {item.description}
                  </p>

                  <div className="font-body text-brand-black/55 mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] leading-none">
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
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            type="button"
            className="text-brand-black hover:border-brand-red hover:text-brand-red flex size-10 items-center justify-center rounded-full border border-black/10 bg-white transition-colors"
            aria-label="Previous articles page"
          >
            <PaginationArrow direction="prev" />
          </button>
          <div className="flex items-center gap-2 px-2" aria-label="Page 1 of 3">
            <span className="bg-brand-red size-1.5 rounded-full" />
            <span className="bg-brand-black/20 size-1.5 rounded-full" />
            <span className="bg-brand-black/20 size-1.5 rounded-full" />
          </div>
          <button
            type="button"
            className="text-brand-black hover:border-brand-red hover:text-brand-red flex size-10 items-center justify-center rounded-full border border-black/10 bg-white transition-colors"
            aria-label="Next articles page"
          >
            <PaginationArrow direction="next" />
          </button>
        </div>
      </Container>
    </section>
  );
}
