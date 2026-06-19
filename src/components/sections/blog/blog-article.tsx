import Image, { type StaticImageData } from 'next/image';

import { ArticleMeta } from '@/components/shared/article-meta';
import { Container } from '@/components/shared/container';

export interface BlogArticleSection {
  title: string;
  paragraphs: string[];
}

export interface BlogWorkflowStep {
  title: string;
  description: string;
}

export interface BlogArticleDetail {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  date: string;
  readTime: string;
  author: string;
  intro: string[];
  sections: [BlogArticleSection, BlogArticleSection, BlogArticleSection];
  quote: {
    text: string;
    author: string;
  };
  gallery: [StaticImageData, StaticImageData];
  workflow: [BlogWorkflowStep, BlogWorkflowStep, BlogWorkflowStep];
  proTip: string;
  mistakes: string[];
  restraint: string[];
  conclusion: string[];
  authorNote: string;
}

interface BlogArticleProps {
  article: BlogArticleDetail;
}

export function BlogArticle({ article }: BlogArticleProps) {
  return (
    <article className="bg-white py-14 md:py-20">
      <Container className="max-w-[860px]">
        <div className="mb-8">
          <p className="font-body text-brand-black/55 text-xs leading-none">
            Our insights
          </p>

          <h1 className="text-brand-black mt-5 max-w-2xl font-sans text-[32px] leading-[1.12] font-normal md:text-[48px]">
            {article.title}
          </h1>

          <div className="font-body text-brand-black/55 mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs leading-none">
            <span>By {article.author}</span>
            <ArticleMeta
              date={article.date}
              readTime={article.readTime}
              className="contents"
            />
          </div>
        </div>

        <div className="relative aspect-[760/430] overflow-hidden rounded-lg bg-brand-black/10">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="(min-width: 768px) 760px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="font-body text-brand-black/75 mt-8 flex flex-col gap-5 text-sm leading-[1.65]">
          {article.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-10">
          {article.sections.slice(0, 2).map((section, index) => (
            <section key={section.title}>
              <h2 className="text-brand-black font-sans text-2xl leading-[1.2] font-normal">
                {section.title}
              </h2>
              <div className="font-body text-brand-black/75 mt-4 flex flex-col gap-4 text-sm leading-[1.65]">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {index === 0 && (
                <blockquote className="border-brand-red bg-[#F9F7F6] mt-7 border-l-2 px-6 py-5">
                  <p className="font-body text-brand-black text-sm leading-[1.55]">
                    &ldquo;{article.quote.text}&rdquo;
                  </p>
                  <cite className="font-body text-brand-black/60 mt-3 block text-xs not-italic">
                    {article.quote.author}
                  </cite>
                </blockquote>
              )}

              {index === 1 && (
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {article.gallery.map((image, imageIndex) => (
                    <div
                      key={`${article.id}-gallery-${imageIndex}`}
                      className="relative aspect-[340/245] overflow-hidden rounded-lg bg-brand-black/10"
                    >
                      <Image
                        src={image}
                        alt={`${article.title} example ${imageIndex + 1}`}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}

          <section>
            <h2 className="text-brand-black font-sans text-2xl leading-[1.2] font-normal">
              Step-by-Step Workflow
            </h2>
            <div className="mt-5 flex flex-col gap-6">
              {article.workflow.map((step, index) => (
                <div key={step.title}>
                  <h3 className="text-brand-black font-sans text-base leading-[1.3] font-normal">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="font-body text-brand-black/75 mt-2 text-sm leading-[1.65]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-brand-red bg-[#F9F7F6] mt-7 border-l-2 px-6 py-5">
              <p className="font-body text-brand-black text-sm leading-[1.55]">
                Pro Tip: {article.proTip}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-brand-black font-sans text-2xl leading-[1.2] font-normal">
              Common Mistakes to Avoid
            </h2>
            <div className="font-body text-brand-black/75 mt-4 flex flex-col gap-3 text-sm leading-[1.65]">
              {article.mistakes.map((mistake) => (
                <p key={mistake}>{mistake}</p>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-brand-black font-sans text-2xl leading-[1.2] font-normal">
              When to Show Restraint
            </h2>
            <div className="font-body text-brand-black/75 mt-4 flex flex-col gap-4 text-sm leading-[1.65]">
              {article.restraint.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-brand-black font-sans text-2xl leading-[1.2] font-normal">
              The Bottom Line
            </h2>
            <div className="font-body text-brand-black/75 mt-4 flex flex-col gap-4 text-sm leading-[1.65]">
              {article.conclusion.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <footer className="border-brand-black/10 border-t pt-6">
            <p className="font-body text-brand-black/55 text-xs leading-none">
              Written by
            </p>
            <p className="font-body text-brand-black mt-2 text-sm leading-none">
              {article.author}
            </p>
            <p className="font-body text-brand-black/65 mt-3 text-xs leading-[1.5]">
              {article.authorNote}
            </p>
          </footer>
        </div>
      </Container>
    </article>
  );
}
