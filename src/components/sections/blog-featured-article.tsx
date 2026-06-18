import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/shared/container';

export interface BlogFeaturedArticleItem {
  id: string;
  image: StaticImageData;
  title: string;
  description: string;
  date: string;
  readTime: string;
}

interface BlogFeaturedArticleProps {
  article: BlogFeaturedArticleItem;
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 7h8M8 4l3 3-3 3"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
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

export function BlogFeaturedArticle({ article }: BlogFeaturedArticleProps) {
  return (
    <section className="bg-white py-14 md:py-20">
      <Container>
        <article className="grid overflow-hidden border border-brand-black/10 bg-white shadow-[0_8px_24px_rgba(35,31,31,0.04)] md:grid-cols-[0.95fr_1.2fr]">
          <div className="relative aspect-[430/360] bg-brand-black/10 md:aspect-auto">
            <Image
              src={article.image}
              alt={article.title}
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center px-6 py-8 md:px-10 md:py-12">
            <h2 className="text-brand-black max-w-xl font-sans text-[28px] leading-[1.12] font-normal md:text-[42px]">
              {article.title}
            </h2>

            <p className="font-body text-brand-black/70 mt-5 max-w-md text-sm leading-[1.45]">
              {article.description}
            </p>

            <div className="font-body text-brand-black/55 mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] leading-none">
              <span className="flex items-center gap-1.5">
                <CalendarIcon />
                {article.date}
              </span>
              <span className="flex items-center gap-1.5">
                <ClockIcon />
                {article.readTime}
              </span>
            </div>

            <Link
              href={`/blog/${article.id}`}
              className="border-brand-red/20 bg-brand-white text-brand-red hover:border-brand-red/40 mt-8 inline-flex w-fit items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-xs transition-colors"
            >
              Read Article
              <ArrowIcon />
            </Link>
          </div>
        </article>
      </Container>
    </section>
  );
}
