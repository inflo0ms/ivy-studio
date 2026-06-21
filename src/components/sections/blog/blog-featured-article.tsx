import Image from 'next/image';
import Link from 'next/link';

import { ArticleMeta } from '@/components/shared/article-meta';
import { Container } from '@/components/shared/container';
import { ArrowIcon } from '@/components/ui/icons';
import type { ArticleSummary } from '@/types/content';

interface BlogFeaturedArticleProps {
  article: ArticleSummary;
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

            <ArticleMeta
              date={article.date}
              readTime={article.readTime}
              className="mt-6"
            />

            <Link
              href={`/blog/${article.id}`}
              className="border-brand-red/20 bg-brand-white text-brand-red hover:border-brand-red/40 mt-8 inline-flex w-fit items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-xs transition-colors"
            >
              Read Article
              <ArrowIcon className="size-3.5" />
            </Link>
          </div>
        </article>
      </Container>
    </section>
  );
}
