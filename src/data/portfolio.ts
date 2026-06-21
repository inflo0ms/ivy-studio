import aboutLeftImage from '@/assets/images/introduce1.png';
import aboutRightImage from '@/assets/images/introduce2.png';
import heroHomeImage from '@/assets/images/our-works-page/hero.png';
import readyCtaImage from '@/assets/images/get-started.png';
import service1Image from '@/assets/images/services/colorCorrection.png';
import service2Image from '@/assets/images/services/culling.png';
import service3Image from '@/assets/images/services/retouching.png';

export const portfolioHero = {
  eyebrow: 'Our work',
  image: heroHomeImage,
  description:
    'Every pair shows a real wedding edited in our own refined style. Filtered, soft on the right, fitted edit on the left.',
};

export const portfolioCompareItems = [
  {
    beforeImage: service2Image,
    afterImage: service1Image,
    beforePosition: 'center center',
    afterPosition: 'center top',
    beforeScale: 1.08,
    afterScale: 1.16,
  },
  {
    beforeImage: aboutLeftImage,
    afterImage: aboutRightImage,
    beforePosition: 'center top',
    afterPosition: 'center top',
    beforeScale: 1.08,
    afterScale: 1.08,
  },
  {
    beforeImage: heroHomeImage,
    afterImage: service3Image,
    beforePosition: 'center center',
    afterPosition: 'center top',
    beforeScale: 1.1,
    afterScale: 1.12,
  },
];

export const portfolioGalleryItems = [
  { image: aboutLeftImage, label: 'Before', objectPosition: 'center top' },
  { image: service1Image, label: 'After', objectPosition: 'center center' },
  { image: readyCtaImage, label: 'Before', objectPosition: 'center center' },
  { image: aboutRightImage, label: 'After', objectPosition: 'center top' },
  { image: heroHomeImage, label: 'Before', objectPosition: 'center center' },
  { image: service2Image, label: 'After', objectPosition: 'center center' },
  { image: service3Image, label: 'Before', objectPosition: 'center top' },
  { image: aboutLeftImage, label: 'After', objectPosition: 'center top' },
];

export const portfolioSampleGalleries = [
  {
    image: aboutLeftImage,
    title: 'Editorial wedding gallery',
  },
  {
    image: service2Image,
    title: 'City ceremony gallery',
  },
];
