import type { Metadata } from 'next';

import { BlogArticlesGrid } from '@/components/sections/blog/blog-articles-grid';
import { BlogFeaturedArticle } from '@/components/sections/blog/blog-featured-article';
import { HeroInner } from '@/components/sections/common/hero-inner';
import { blogArticles, blogFeaturedArticle, blogHero } from '@/data/blog';
import { Contact } from '@/components/sections/common/contact';
import { homeImages } from '@/data/home';
import { siteContact } from '@/data/site';

export const metadata: Metadata = {
  title: 'Blog | Ivy Studio',
  description: blogHero.description,
};

export default function BlogPage() {
  return (
    <main>
      <HeroInner
        image={blogHero.image}
        eyebrow={blogHero.eyebrow}
        title={
          <>
            The stories behind <em className="font-serif italic">our craft</em>
          </>
        }
        description={blogHero.description}
      />

      <BlogFeaturedArticle article={blogFeaturedArticle} />

      <BlogArticlesGrid items={blogArticles} />

      <Contact
        image={homeImages.contact}
        title={
          <>
            <em className="font-serif italic">Have questions?</em>
            <br />
            Send us a message
          </>
        }
        description="Start with a free color test - no payment, no commitment. We'll edit 15 of your photos to show you exactly what to expect."
        contact={siteContact}
      />
    </main>
  );
}
