import Image from 'next/image';
import type { ReactNode } from 'react';

import { ArticleMeta } from '@/components/shared/article-meta';
import { Container } from '@/components/shared/container';
import { SectionTitle } from '@/components/shared/section-heading';
import { Button } from '@/components/ui/button';
import { siteRoutes } from '@/data/site';
import type { ArticleSummary } from '@/types/content';

interface RecentArticlesProps {
  items: ArticleSummary[];
  title?: ReactNode;
}

export function RecentArticles({
  items,
  title = (
    <>
      Recent <em className="font-serif italic">articles</em>
    </>
  ),
}: RecentArticlesProps) {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container>
        <div className="mb-8 flex items-center justify-between gap-6">
          <SectionTitle>
            {title}
          </SectionTitle>

          <Button
            href={siteRoutes.blog}
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
                <h3 className="text-brand-black font-body text-[24px] leading-8 font-medium tracking-[0.07px]">
                  {item.title}
                </h3>

                <p className="font-body text-brand-black/70 mt-4 text-xs leading-[1.45]">
                  {item.description}
                </p>

                <ArticleMeta
                  date={item.date}
                  readTime={item.readTime}
                  className="mt-5"
                />
              </div>
            </article>
          ))}
        </div>

        <Button
          href={siteRoutes.blog}
          variant="red"
          className="mt-8 w-full rounded-full px-5 py-3 text-xs md:hidden"
        >
          Read more
        </Button>
      </Container>
    </section>
  );
}
