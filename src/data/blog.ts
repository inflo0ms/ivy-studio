import type { BlogArticleItem } from '@/components/sections/blog-articles-grid';
import type { BlogArticleDetail } from '@/components/sections/blog-article';
import type { BlogFeaturedArticleItem } from '@/components/sections/blog-featured-article';

import aboutLeftImage from '@/assets/images/introduce1.png';
import aboutRightImage from '@/assets/images/introduce2.png';
import heroImage from '@/assets/images/home-hero.png';
import colorCorrectionImage from '@/assets/images/services/colorCorrection.png';
import cullingImage from '@/assets/images/services/culling.png';
import featuredImage from '@/assets/images/services/retouching.png';

export const blogHero = {
  image: heroImage,
  eyebrow: 'Our Insights',
  description:
    'Expert tips, industry trends, and the stories behind our craft. Discover the art and technique of professional wedding photo retouching.',
};

export const blogFeaturedArticle = {
  id: 'emotion-editing-1',
  image: featuredImage,
  title: 'The Art of Natural Skin Retouching in Wedding Photography',
  description:
    'Learn how to enhance skin tones while maintaining the authentic beauty and emotion of your wedding day portraits.',
  date: 'March 15, 2026',
  readTime: '6 min read',
} satisfies BlogFeaturedArticleItem;

export const blogArticles = [
  {
    id: 'emotion-editing-1',
    image: aboutLeftImage,
    title: 'Preserving Emotion: The Balance Between Editing and Authenticity',
    description:
      'Learn how to enhance skin tones while maintaining the authentic beauty and emotion of your wedding day portraits.',
    date: 'March 8, 2026',
    readTime: '5 min read',
  },
  {
    id: 'emotion-editing-2',
    image: heroImage,
    title: 'Preserving Emotion: The Balance Between Editing and Authenticity',
    description:
      'Learn how to enhance skin tones while maintaining the authentic beauty and emotion of your wedding day portraits.',
    date: 'March 8, 2026',
    readTime: '5 min read',
  },
  {
    id: 'emotion-editing-3',
    image: colorCorrectionImage,
    title: 'Preserving Emotion: The Balance Between Editing and Authenticity',
    description:
      'Learn how to enhance skin tones while maintaining the authentic beauty and emotion of your wedding day portraits.',
    date: 'March 8, 2026',
    readTime: '5 min read',
  },
  {
    id: 'emotion-editing-4',
    image: cullingImage,
    title: 'Preserving Emotion: The Balance Between Editing and Authenticity',
    description:
      'Learn how to enhance skin tones while maintaining the authentic beauty and emotion of your wedding day portraits.',
    date: 'March 8, 2026',
    readTime: '5 min read',
  },
  {
    id: 'emotion-editing-5',
    image: aboutRightImage,
    title: 'Preserving Emotion: The Balance Between Editing and Authenticity',
    description:
      'Learn how to enhance skin tones while maintaining the authentic beauty and emotion of your wedding day portraits.',
    date: 'March 8, 2026',
    readTime: '5 min read',
  },
  {
    id: 'emotion-editing-6',
    image: aboutLeftImage,
    title: 'Preserving Emotion: The Balance Between Editing and Authenticity',
    description:
      'Learn how to enhance skin tones while maintaining the authentic beauty and emotion of your wedding day portraits.',
    date: 'March 8, 2026',
    readTime: '5 min read',
  },
  {
    id: 'emotion-editing-7',
    image: aboutRightImage,
    title: 'Preserving Emotion: The Balance Between Editing and Authenticity',
    description:
      'Learn how to enhance skin tones while maintaining the authentic beauty and emotion of your wedding day portraits.',
    date: 'March 8, 2026',
    readTime: '5 min read',
  },
  {
    id: 'emotion-editing-8',
    image: aboutLeftImage,
    title: 'Preserving Emotion: The Balance Between Editing and Authenticity',
    description:
      'Learn how to enhance skin tones while maintaining the authentic beauty and emotion of your wedding day portraits.',
    date: 'March 8, 2026',
    readTime: '5 min read',
  },
  {
    id: 'emotion-editing-9',
    image: colorCorrectionImage,
    title: 'Preserving Emotion: The Balance Between Editing and Authenticity',
    description:
      'Learn how to enhance skin tones while maintaining the authentic beauty and emotion of your wedding day portraits.',
    date: 'March 8, 2026',
    readTime: '5 min read',
  },
] satisfies [
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

export const blogRelatedArticles = [
  blogArticles[1],
  blogArticles[2],
  blogArticles[3],
] satisfies [BlogArticleItem, BlogArticleItem, BlogArticleItem];

export const blogArticleDetails = [
  {
    id: 'emotion-editing-1',
    title: 'The Art of Natural Skin Retouching in Wedding Photography',
    description:
      'Learn how to enhance skin tones while maintaining the authentic beauty and emotion of your wedding day portraits.',
    image: featuredImage,
    date: 'March 15, 2026',
    readTime: '6 min read',
    author: 'IVY Studio',
    intro: [
      'When it comes to wedding photography, natural skin retouching is one of the most delicate parts of the editing process. The goal is not to erase reality, but to gently refine distractions while keeping every portrait honest and emotional.',
      'A good retouch should feel invisible. Skin should retain texture, light should stay believable, and the couple should still recognize themselves in every frame.',
    ],
    sections: [
      {
        title: 'Understanding the Philosophy',
        paragraphs: [
          'Wedding retouching is different from beauty or commercial retouching. The images are part of a real story, so the editing has to protect the feeling of the day.',
          'We focus on temporary distractions: blemishes, redness, uneven shadows, and small elements that pull attention away from expression and connection.',
        ],
      },
      {
        title: 'The Frequency Separation Technique',
        paragraphs: [
          'Frequency separation can be helpful when used with restraint. It allows an editor to adjust tone and texture separately, which makes it easier to clean skin without flattening it.',
          'The key is moderation. Heavy smoothing quickly creates a plastic look, while careful local adjustments keep the portrait natural.',
        ],
      },
      {
        title: 'Step-by-Step Workflow',
        paragraphs: [
          'Start with color correction and exposure. Skin retouching should always happen after the image has a stable base tone.',
          'Then remove temporary distractions, refine uneven areas, and check the final image at multiple zoom levels before delivery.',
        ],
      },
    ],
    quote: {
      text: 'The goal is to make people feel like the best version of themselves - not someone else entirely.',
      author: 'IVY retouching team',
    },
    gallery: [aboutRightImage, aboutLeftImage],
    workflow: [
      {
        title: 'Color and Tone Correction First',
        description:
          'Before touching skin, we ensure proper exposure and color balance. Correct white balance can eliminate 80% of perceived skin issues. Sometimes what looks like a blemish is actually just a color cast that needs adjustment.',
      },
      {
        title: 'Separate Texture from Tone',
        description:
          'Using frequency separation, we create two working layers. The low-frequency layer handles uneven skin tones, redness, and discoloration. The high-frequency layer addresses specific imperfections like small blemishes or stray hairs.',
      },
      {
        title: 'Gentle, Targeted Adjustments',
        description:
          'We use a soft brush at low opacity, typically 15-30%, to blend uneven tones. Multiple light passes are always better than one heavy-handed edit. This gradual approach prevents the telltale signs of over-retouching.',
      },
    ],
    proTip:
      'After retouching, reduce your adjustment layer opacity to 50%. If the image still looks good, you have done it right. If it looks noticeably worse, you may have gone too far.',
    mistakes: [
      'Over-smoothing - Completely blurred skin that looks like porcelain or plastic.',
      "Removing natural features - Freckles, laugh lines, and character marks that define someone's face.",
      'Inconsistent lighting - Creating unnatural shadows or highlights through aggressive dodging and burning.',
      'Ignoring skin undertones - Making everyone look orange or pink instead of preserving natural coloring.',
    ],
    restraint: [
      'Not every photo needs extensive skin retouching. Environmental portraits, candid moments, and shots where the subject is smaller in the frame often benefit from lighter editing.',
      'Close-up portraits, formal poses, and detail shots typically warrant more attention. These are the images that will be printed large, shared widely, and cherished for decades.',
    ],
    conclusion: [
      'Natural skin retouching is both an art and a science. It requires technical skill with tools like frequency separation, but more importantly, it requires restraint and good judgment. The goal is always to enhance, never to transform.',
      'When done right, viewers should not notice the retouching at all. They should simply see beautiful, authentic portraits that capture the genuine emotion and beauty of the wedding day.',
    ],
    authorNote:
      'IVY has 10+ years of experience and 500+ weddings edited. Our team specializes in bringing out the natural beauty in every photograph.',
  },
] satisfies [BlogArticleDetail];

export function getBlogArticleById(id: string) {
  const detailArticle = blogArticleDetails.find((article) => article.id === id);

  if (detailArticle) {
    return detailArticle;
  }

  const listArticle = blogArticles.find((article) => article.id === id);
  const fallbackArticle = blogArticleDetails[0];

  if (!listArticle) {
    return fallbackArticle;
  }

  return {
    ...fallbackArticle,
    id: listArticle.id,
    title: listArticle.title,
    description: listArticle.description,
    image: listArticle.image,
    date: listArticle.date,
    readTime: listArticle.readTime,
  };
}
