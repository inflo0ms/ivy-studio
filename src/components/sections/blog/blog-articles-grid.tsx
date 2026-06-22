'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { ArticleMeta } from '@/components/shared/article-meta';
import { Container } from '@/components/shared/container';
import { SectionTitle } from '@/components/shared/section-heading';
import { ArrowIcon } from '@/components/ui/icons';
import type { ArticleSummary } from '@/types/content';

const FIRST_PAGE_SIZE = 9;

function getTotalPages(itemCount: number) {
  return itemCount > FIRST_PAGE_SIZE ? 2 : 1;
}

function getVisibleItems(items: ArticleSummary[], page: number) {
  if (page === 0) {
    return items.slice(0, FIRST_PAGE_SIZE);
  }

  return items.slice(FIRST_PAGE_SIZE);
}

interface BlogArticlesGridProps {
  items: ArticleSummary[];
}

export function BlogArticlesGrid({ items }: BlogArticlesGridProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const skipInitialScroll = useRef(true);
  const totalPages = getTotalPages(items.length);
  const [currentPage, setCurrentPage] = useState(0);

  const visibleItems = useMemo(
    () => getVisibleItems(items, currentPage),
    [items, currentPage],
  );

  useEffect(() => {
    if (skipInitialScroll.current) {
      skipInitialScroll.current = false;
      return;
    }

    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [currentPage]);

  const showPrevious = useCallback(() => {
    setCurrentPage((page) => Math.max(0, page - 1));
  }, []);

  const showNext = useCallback(() => {
    setCurrentPage((page) => Math.min(totalPages - 1, page + 1));
  }, [totalPages]);

  const showPage = useCallback((index: number) => {
    setCurrentPage(index);
  }, []);

  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === totalPages - 1;

  return (
    <section ref={sectionRef} className="bg-white py-14 md:py-20 scroll-mt-6">
      <Container>
        <SectionTitle>
          Recent <em className="font-serif italic">articles</em>
        </SectionTitle>

        <div className="mt-8 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item) => (
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

                <div className="p-6">
                  <h3 className="font-body text-[24px] leading-[32px] font-medium tracking-[0.07px] text-brand-black">
                    {item.title}
                  </h3>
                  <p className="font-body mt-3 text-[17px] leading-[1.4] font-normal tracking-normal text-[#231F1FCC]">
                    {item.description}
                  </p>

                  <ArticleMeta
                    date={item.date}
                    readTime={item.readTime}
                    className="mt-4"
                  />
                </div>
              </Link>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={showPrevious}
              disabled={isFirstPage}
              className="text-brand-black hover:border-brand-red hover:text-brand-red flex size-10 items-center justify-center rounded-full border border-black/10 bg-white transition-colors disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-black/10 disabled:hover:text-brand-black"
              aria-label="Previous articles page"
            >
              <ArrowIcon direction="prev" />
            </button>

            <div
              className="flex items-center gap-2 px-2"
              aria-label={`Page ${currentPage + 1} of ${totalPages}`}
            >
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => showPage(index)}
                  className={`size-1.5 rounded-full transition-colors ${index === currentPage ? 'bg-brand-red' : 'bg-brand-black/20'}`}
                  aria-label={`Go to page ${index + 1}`}
                  aria-current={index === currentPage ? 'true' : undefined}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={showNext}
              disabled={isLastPage}
              className="text-brand-black hover:border-brand-red hover:text-brand-red flex size-10 items-center justify-center rounded-full border border-black/10 bg-white transition-colors disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-black/10 disabled:hover:text-brand-black"
              aria-label="Next articles page"
            >
              <ArrowIcon direction="next" />
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
