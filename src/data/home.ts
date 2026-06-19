import type { ArticleItem } from '@/components/sections/common/recent-articles';
import type { PricingItem } from '@/components/sections/home/pricing';
import type { ProcessItem } from '@/components/sections/home/process';
import type { ServiceItem } from '@/components/sections/home/services';
import type { TestimonialItem } from '@/components/sections/home/testimonials-carousel';
import type { WorkSlide } from '@/components/sections/home/works-carousel';

import heroHomeImage from '@/assets/images/home-hero.png';
import aboutLeftImage from '@/assets/images/introduce1.png';
import aboutRightImage from '@/assets/images/introduce2.png';
import service1Image from '@/assets/images/services/colorCorrection.png';
import service2Image from '@/assets/images/services/culling.png';
import service3Image from '@/assets/images/services/retouching.png';
import readyCtaImage from '@/assets/images/get-started.png';

export const homeImages = {
  hero: heroHomeImage,
  aboutLeft: aboutLeftImage,
  aboutRight: aboutRightImage,
  readyCta: readyCtaImage,
};

export const homeServices = [
  {
    image: service1Image,
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
    image: service2Image,
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
    image: service3Image,
    title: 'Retouching',
    description:
      'Perfect exposure, white balance, and skin tones — bringing the true feeling of every shot to every shot in every shot in life.',
    features: [
      'Exposure & white balance',
      'Tone & contrast adjustment',
      'Exposure & color balance',
    ],
  },
] satisfies [ServiceItem, ServiceItem, ServiceItem];

export const homeWorks = [
  {
    title: 'Lake Como wedding',
    beforeImage: aboutLeftImage,
    afterImage: service1Image,
  },
  {
    title: 'Garden portrait',
    beforeImage: heroHomeImage,
    afterImage: aboutRightImage,
  },
  {
    title: 'City ceremony',
    beforeImage: service2Image,
    afterImage: service3Image,
  },
  {
    title: 'Editorial details',
    beforeImage: aboutRightImage,
    afterImage: heroHomeImage,
  },
  {
    title: 'Reception story',
    beforeImage: service3Image,
    afterImage: aboutLeftImage,
  },
] satisfies [WorkSlide, WorkSlide, WorkSlide, WorkSlide, WorkSlide];

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
] satisfies [PricingItem, PricingItem, PricingItem];

export const homeTestimonials = [
  {
    avatar: aboutLeftImage,
    quote:
      "I've used 3 other services and IVY is by far the best. They actually understand how to retouch skin naturally - no plastic look.",
    author: 'Marcus Chen',
    role: 'Fine art photographer, California',
  },
  {
    avatar: heroHomeImage,
    quote:
      'The editing is consistent, subtle, and fast. My galleries feel like my work, only more polished and cohesive.',
    author: 'Elena Brooks',
    role: 'Wedding photographer, New York',
  },
  {
    avatar: aboutRightImage,
    quote:
      'They saved me hours every week and nailed the color direction from the first test gallery.',
    author: 'Sofia Martin',
    role: 'Destination photographer, Lisbon',
  },
  {
    avatar: service2Image,
    quote:
      'Culling used to be my least favorite part of the job. Now I can send a full wedding and know the story will stay intact.',
    author: 'Noah Williams',
    role: 'Documentary photographer, Austin',
  },
  {
    avatar: service3Image,
    quote:
      'The retouching is clean without feeling overdone. Skin texture stays real, and my clients notice the difference.',
    author: 'Mia Carter',
    role: 'Portrait photographer, Toronto',
  },
] satisfies [
  TestimonialItem,
  TestimonialItem,
  TestimonialItem,
  TestimonialItem,
  TestimonialItem,
];

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
] satisfies [ProcessItem, ProcessItem, ProcessItem];

export const recentArticles = [
  {
    id: 'editing-authenticity-1',
    image: aboutRightImage,
    title: 'Preserving Emotion: The Balance Between Editing and Authenticity',
    description:
      'Learn how to enhance skin tones while maintaining the authentic beauty and emotion of your wedding day portraits.',
    date: 'March 8, 2026',
    readTime: '5 min read',
  },
  {
    id: 'editing-authenticity-2',
    image: heroHomeImage,
    title: 'Preserving Emotion: The Balance Between Editing and Authenticity',
    description:
      'Learn how to enhance skin tones while maintaining the authentic beauty and emotion of your wedding day portraits.',
    date: 'March 8, 2026',
    readTime: '5 min read',
  },
  {
    id: 'editing-authenticity-3',
    image: service1Image,
    title: 'Preserving Emotion: The Balance Between Editing and Authenticity',
    description:
      'Learn how to enhance skin tones while maintaining the authentic beauty and emotion of your wedding day portraits.',
    date: 'March 8, 2026',
    readTime: '5 min read',
  },
] satisfies [ArticleItem, ArticleItem, ArticleItem];

export const readyCta = {
  description:
    'Start with a free color test — no payment, no commitment. We’ll edit 15 of your photos to show you exactly what to expect.',
  buttonLabel: 'Order free samples',
};
