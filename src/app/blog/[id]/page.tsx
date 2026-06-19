import type { Metadata } from 'next';

import { BlogArticle } from '@/components/sections/blog/blog-article';
import { RecentArticles } from '@/components/sections/common/recent-articles';
import {
  blogArticles,
  blogRelatedArticles,
  getBlogArticleById,
} from '@/data/blog';

interface BlogArticlePageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  return blogArticles.map((article) => ({
    id: article.id,
  }));
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { id } = await params;
  const article = getBlogArticleById(id);

  return {
    title: `${article.title} | Ivy Studio`,
    description: article.description,
  };
}

export default async function BlogArticlePage({
  params,
}: BlogArticlePageProps) {
  const { id } = await params;
  const article = getBlogArticleById(id);

  return (
    <main>
      <div className="bg-brand-red h-20" />
      <BlogArticle article={article} />
      <RecentArticles
        items={blogRelatedArticles}
        title={
          <>
            Related <em className="font-serif italic">articles</em>
          </>
        }
      />
    </main>
  );
}
