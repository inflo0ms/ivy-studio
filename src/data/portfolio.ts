import {
  homeAboutLeft,
  homeAboutRight,
  portfolioCta,
  portfolioHeroImage,
  serviceColorCorrection,
  serviceCulling,
  serviceRetouching,
} from '@/assets/images';

export const portfolioHero = {
  eyebrow: 'Our work',
  image: portfolioHeroImage,
  description:
    'Every pair shows a real wedding edited in our own refined style. Filtered, soft on the right, fitted edit on the left.',
};

export const portfolioCompareItems = [
  {
    beforeImage: serviceCulling,
    afterImage: serviceColorCorrection,
    beforePosition: 'center center',
    afterPosition: 'center top',
    beforeScale: 1.08,
    afterScale: 1.16,
  },
  {
    beforeImage: homeAboutLeft,
    afterImage: homeAboutRight,
    beforePosition: 'center top',
    afterPosition: 'center top',
    beforeScale: 1.08,
    afterScale: 1.08,
  },
  {
    beforeImage: portfolioHeroImage,
    afterImage: serviceRetouching,
    beforePosition: 'center center',
    afterPosition: 'center top',
    beforeScale: 1.1,
    afterScale: 1.12,
  },
];

export const portfolioGalleryItems = [
  { image: homeAboutLeft, label: 'Before', objectPosition: 'center top' },
  { image: serviceColorCorrection, label: 'After', objectPosition: 'center center' },
  { image: portfolioCta, label: 'Before', objectPosition: 'center center' },
  { image: homeAboutRight, label: 'After', objectPosition: 'center top' },
  { image: portfolioHeroImage, label: 'Before', objectPosition: 'center center' },
  { image: serviceCulling, label: 'After', objectPosition: 'center center' },
  { image: serviceRetouching, label: 'Before', objectPosition: 'center top' },
  { image: homeAboutLeft, label: 'After', objectPosition: 'center top' },
];

export const portfolioSampleGalleries = [
  {
    image: homeAboutLeft,
    title: 'Editorial wedding gallery',
  },
  {
    image: serviceCulling,
    title: 'City ceremony gallery',
  },
];
