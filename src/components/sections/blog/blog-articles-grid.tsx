import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';

import { ArticleMeta } from '@/components/shared/article-meta';
import { Container } from '@/components/shared/container';
import { SectionTitle } from '@/components/shared/section-heading';
import { ArrowIcon } from '@/components/ui/icons';

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

export function BlogArticlesGrid({ items }: BlogArticlesGridProps) {
  return (
    <section className="bg-white py-14 md:py-20">
      <Container>
        <SectionTitle>
          Recent <em className="font-serif italic">articles</em>
        </SectionTitle>

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

        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            type="button"
            className="text-brand-black hover:border-brand-red hover:text-brand-red flex size-10 items-center justify-center rounded-full border border-black/10 bg-white transition-colors"
            aria-label="Previous articles page"
          >
            <ArrowIcon direction="prev" />
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
            <ArrowIcon direction="next" />
          </button>
        </div>
      </Container>
    </section>
  );
}
