import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

import { ArticleMeta } from '@/components/shared/article-meta';
import { ArticleShareButton } from '@/components/shared/article-share-button';
import { Container } from '@/components/shared/container';
import { ArrowIcon } from '@/components/ui/icons';
import type { BlogArticleDetail } from '@/types/content';

interface BlogArticleProps {
  article: BlogArticleDetail;
}

const articleHeadingClass =
  'font-sans text-brand-black text-[36px] leading-[46.8px] font-medium tracking-normal';

const articleParagraphClass =
  'font-body text-brand-black/75 text-[19px] leading-[30.4px] font-normal tracking-normal';

const galleryLabels = ['Before', 'After'] as const;

const articleStepDescriptionClass =
  'font-body text-brand-black/75 text-[17px] leading-[28.9px] font-normal tracking-normal';

const mistakeTitleClass =
  'font-body text-brand-black text-[17px] leading-[28.9px] font-bold tracking-normal';

export function BlogArticle({ article }: BlogArticleProps) {
  return (
    <article className="bg-white py-14 md:py-20">
      <Container className="max-w-[860px]">
        <div className="mb-12 flex flex-col items-start">
          <Link
            href="/blog"
            className="font-body text-brand-red mb-8 flex items-center gap-1.5 text-[14px] leading-5 font-normal tracking-normal transition-opacity hover:opacity-80"
          >
            <ArrowIcon direction="prev" className="size-3.5" />
            Back to Blog
          </Link>

          <p className="font-body bg-brand-cream text-brand-red mb-6 inline-flex rounded-full px-4 py-1.5 text-xs leading-4 font-normal tracking-[0.6px] uppercase">
            Our insights
          </p>

          <h1 className="text-brand-black mt-5 max-w-2xl font-sans text-[32px] leading-[1.12] font-normal md:text-[48px]">
            {article.title}
          </h1>

          <div className="mt-8 flex w-full flex-wrap items-center justify-between gap-x-5 gap-y-2">
            <ArticleMeta date={article.date} readTime={article.readTime} />

            <ArticleShareButton />
          </div>
        </div>

        <div className="bg-brand-black/10 relative aspect-[760/430] overflow-hidden rounded-lg">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="(min-width: 768px) 760px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="mt-16 flex flex-col gap-8">
          {article.intro.map((paragraph) => (
            <p key={paragraph} className={articleParagraphClass}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-16">
          {article.sections.slice(0, 2).map((section, index) => (
            <Fragment key={section.title}>
              <section>
                <h2 className={articleHeadingClass}>{section.title}</h2>

                {index === 1 ? (
                  <>
                    <p className={`${articleParagraphClass} mt-6`}>
                      {section.paragraphs[0]}
                    </p>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {article.gallery.map((image, imageIndex) => (
                        <div
                          key={`${article.id}-gallery-${imageIndex}`}
                          className="bg-brand-black/10 relative aspect-[340/245] overflow-hidden rounded-lg"
                        >
                          <Image
                            src={image}
                            alt={`${article.title} ${galleryLabels[imageIndex]} example`}
                            fill
                            sizes="(min-width: 640px) 50vw, 100vw"
                            className="object-cover"
                          />
                          <span className="font-body absolute top-3 left-3 flex h-6 items-center rounded-full bg-[#444140] px-3 py-1 text-xs leading-4 font-normal tracking-normal text-white uppercase">
                            {galleryLabels[imageIndex]}
                          </span>
                        </div>
                      ))}
                    </div>

                    {section.paragraphs.length > 1 && (
                      <div className="mt-12 flex flex-col gap-6">
                        {section.paragraphs.slice(1).map((paragraph) => (
                          <p key={paragraph} className={articleParagraphClass}>
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="mt-6 flex flex-col gap-6">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className={articleParagraphClass}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
              </section>

              {index === 0 && (
                <blockquote className="border-brand-red border-l-2 py-2 pr-0 pl-9">
                  <p className="text-brand-black font-serif text-[24px] leading-9 font-normal tracking-normal italic">
                    &ldquo;{article.quote.text}&rdquo;
                  </p>
                </blockquote>
              )}
            </Fragment>
          ))}

          <section>
            <h2 className={articleHeadingClass}>Step-by-Step Workflow</h2>
            <div className="mt-10 flex flex-col gap-10">
              {article.workflow.map((step, index) => (
                <div key={step.title}>
                  <h3 className="text-brand-black font-sans text-[24px] leading-[33.6px] font-medium tracking-normal">
                    {index + 1}. {step.title}
                  </h3>
                  <p className={`${articleStepDescriptionClass} mt-2`}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-brand-red bg-brand-cream mt-12 flex flex-col gap-2 border-l-2 py-8 pr-8 pl-9">
              <p className="text-brand-black font-sans text-[20px] leading-[30px] font-medium tracking-normal">
                Pro Tip: {article.proTip.title}
              </p>
              <p className="font-body text-brand-black text-[17px] leading-[28.9px] font-normal tracking-normal">
                {article.proTip.text}
              </p>
            </div>
          </section>

          <section>
            <h2 className={articleHeadingClass}>Common Mistakes to Avoid</h2>
            <p className={`${articleParagraphClass} mt-6`}>
              {article.mistakesIntro}
            </p>
            <div className="mt-6 flex flex-col gap-6 pl-6">
              {article.mistakes.map((mistake) => (
                <p key={mistake.title}>
                  <span className={mistakeTitleClass}>{mistake.title}</span>
                  <span className={articleStepDescriptionClass}>
                    {' '}
                    — {mistake.description}
                  </span>
                </p>
              ))}
            </div>
          </section>

          <section>
            <h2 className={articleHeadingClass}>When to Show Restraint</h2>
            <div className="mt-6 flex flex-col gap-6">
              {article.restraint.map((paragraph) => (
                <p key={paragraph} className={articleParagraphClass}>
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          <section>
            <h2 className={articleHeadingClass}>The Bottom Line</h2>
            <div className="mt-6 flex flex-col gap-6">
              {article.conclusion.map((paragraph) => (
                <p key={paragraph} className={articleParagraphClass}>
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          <footer className="pt-6">
            <p className="font-body text-brand-black/55 text-[14px] leading-5 font-normal tracking-normal">
              Written by
            </p>
            <p className="text-brand-black mt-2 font-sans text-[20px] leading-[30px] font-normal tracking-normal">
              {article.author}
            </p>
            <p className="font-body text-brand-black/75 mt-4 text-[15px] leading-[22.5px] font-normal tracking-normal">
              {article.authorNote}
            </p>
          </footer>
        </div>
      </Container>
    </article>
  );
}
