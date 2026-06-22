import type {
  ArticleSummary,
  PricingItem,
  ProcessStep,
  ServiceItem,
  TestimonialItem,
  WorkSlide,
} from '@/types/content';

import {
  homeAboutLeft,
  homeAboutRight,
  homeArticle1,
  homeArticle2,
  homeArticle3,
  contactImage,
  readyCtaImage,
  homeHero,
  homeWork1,
  homeWork2,
  homeWork3,
  homeWork4,
  serviceColorCorrection,
  serviceCulling,
  serviceRetouching,
} from '@/assets/images';

export const homeImages = {
  hero: homeHero,
  aboutLeft: homeAboutLeft,
  aboutRight: homeAboutRight,
  readyCta: readyCtaImage,
  contact: contactImage,
};

export const homeServices = [
  {
    image: serviceColorCorrection,
    title: 'Color Correction',
    description:
      'Perfect exposure, white balance, and tone adjustments to bring out the best in every shot. We work with RAW files and Lightroom catalogs.',
    features: [
      'Exposure & color balance',
      'Tone & contrast adjustment',
      'Skin color adj.',
    ],
  },
  {
    image: serviceCulling,
    title: 'Culling',
    description:
      'Perfect exposure, white balance, and from the best-selected, and the adjustments to the balance. Light and cohesive.',
    features: [
      'Exposure & white balance',
      'Tone & contrast adjustment',
      'Free color full',
    ],
  },
  {
    image: serviceRetouching,
    title: 'Retouching',
    description:
      'Perfect exposure, white balance, and skin tones — bringing the true feeling of every shot to every shot in every shot in life.',
    features: [
      'Exposure & white balance',
      'Tone & contrast adjustment',
      'Exposure & color balance',
    ],
  },
] satisfies ServiceItem[];

export const homeWorks = [
  {
    title: 'Lake Como wedding',
    beforeImage: homeAboutLeft,
    afterImage: homeWork1,
  },
  {
    title: 'Garden portrait',
    beforeImage: homeHero,
    afterImage: homeWork2,
  },
  {
    title: 'City ceremony',
    beforeImage: serviceCulling,
    afterImage: homeWork3,
  },
  {
    title: 'Editorial details',
    beforeImage: homeAboutRight,
    afterImage: homeWork4,
  },
  {
    title: 'Reception story',
    beforeImage: serviceRetouching,
    afterImage: homeWork1,
  },
] satisfies WorkSlide[];

export const pricingItems = [
  {
    title: 'Color correction',
    description: 'Exposure, white balance, tones, contrast',
    features: [
      'Works with RAW files & Lightroom catalogs',
      'Free color test before full gallery',
      'Unlimited style revisions on test',
    ],
    price: '$0.30',
    priceNote: 'per photo',
  },
  {
    title: 'Culling',
    description: "We select the best shots so you don't have to",
    features: [
      'Works with RAW files & Lightroom catalogs',
      'Free color test before full gallery',
      'Unlimited style revisions on test',
    ],
    price: '$25',
    priceNote: 'per 100 photos',
  },
  {
    title: 'Retouching',
    description: 'Skin smoothing, light body shaping, natural look',
    features: [
      'Works with RAW files & Lightroom catalogs',
      'Free color test before full gallery',
      'Unlimited style revisions on test',
    ],
    price: '$2 - $5',
    priceNote: 'per photo',
  },
] satisfies PricingItem[];

export const homeTestimonials = [
  {
    avatar: homeAboutLeft,
    quote:
      "I've used 3 other services and IVY is by far the best. They actually understand how to retouch skin naturally - no plastic look.",
    author: 'Marcus Chen',
    role: 'Fine art photographer, California',
  },
  {
    avatar: homeHero,
    quote:
      'The editing is consistent, subtle, and fast. My galleries feel like my work, only more polished and cohesive.',
    author: 'Elena Brooks',
    role: 'Wedding photographer, New York',
  },
  {
    avatar: homeAboutRight,
    quote:
      'They saved me hours every week and nailed the color direction from the first test gallery.',
    author: 'Sofia Martin',
    role: 'Destination photographer, Lisbon',
  },
  {
    avatar: serviceCulling,
    quote:
      'Culling used to be my least favorite part of the job. Now I can send a full wedding and know the story will stay intact.',
    author: 'Noah Williams',
    role: 'Documentary photographer, Austin',
  },
  {
    avatar: serviceRetouching,
    quote:
      'The retouching is clean without feeling overdone. Skin texture stays real, and my clients notice the difference.',
    author: 'Mia Carter',
    role: 'Portrait photographer, Toronto',
  },
] satisfies TestimonialItem[];

export const homeProcess = [
  {
    step: '01',
    title: 'Send us 15 sample photos',
    description:
      'Pick photos that represent your typical lighting conditions and style. A Dropbox or Drive link works best for large files.',
    duration: '5 minutes',
  },
  {
    step: '02',
    title: 'We create a free color test',
    description:
      'We edit your samples in your preferred style. You review, request tweaks, or approve before we touch a single paid photo.',
    duration: '24 hours',
  },
  {
    step: '03',
    title: 'Receive your full gallery',
    description:
      'Once approved, upload the full wedding. We edit to the test standard and return in 3-5 days. Two rounds of revisions included.',
    duration: '3-5 business days',
  },
] satisfies ProcessStep[];

export const recentArticles = [
  {
    id: 'editing-authenticity-1',
    image: homeArticle1,
    title: 'Preserving Emotion: The Balance Between Editing and Authenticity',
    description:
      'Learn how to enhance skin tones while maintaining the authentic beauty and emotion of your wedding day portraits.',
    date: 'March 8, 2026',
    readTime: '5 min read',
  },
  {
    id: 'editing-authenticity-2',
    image: homeArticle2,
    title: 'Preserving Emotion: The Balance Between Editing and Authenticity',
    description:
      'Learn how to enhance skin tones while maintaining the authentic beauty and emotion of your wedding day portraits.',
    date: 'March 8, 2026',
    readTime: '5 min read',
  },
  {
    id: 'editing-authenticity-3',
    image: homeArticle3,
    title: 'Preserving Emotion: The Balance Between Editing and Authenticity',
    description:
      'Learn how to enhance skin tones while maintaining the authentic beauty and emotion of your wedding day portraits.',
    date: 'March 8, 2026',
    readTime: '5 min read',
  },
] satisfies ArticleSummary[];

export const readyCta = {
  description:
    'Start with a free color test — no payment, no commitment. We’ll edit 15 of your photos to show you exactly what to expect.',
  buttonLabel: 'Order free samples',
};
