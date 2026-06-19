import type { FaqItem } from '@/components/sections/common/faq';
import type { PricingCalculatorService } from '@/components/sections/pricing/pricing-calculator';
import type { PricingCardItem } from '@/components/sections/pricing/pricing-cards';

import heroImage from '@/assets/images/home-hero.png';

export const pricingHero = {
  image: heroImage,
  eyebrow: 'Services & Pricing',
  description:
    'No hidden fees. No surprise invoices. Pay per photo - or save with a wedding package. Every order starts with a free color test.',
};

export const pricingCards = [
  {
    title: 'Color correction',
    description:
      'Exposure, white balance, tones, contrast. Consistent look across your entire gallery.',
    price: '$0.30',
    priceNote: 'per photo; RAW or JPEG',
    features: [
      'Works with RAW files & Lightroom catalogs',
      'Free color test before full gallery',
      'Unlimited style revisions on test',
      'Delivered in 3-5 business days',
    ],
  },
  {
    title: 'Culling',
    description:
      "We select the best shots so you don't have to. Delivered in Lightroom catalogs.",
    price: '$25',
    priceNote: 'per 100 photos; any volume',
    badge: 'Most popular',
    features: [
      'Saves 4-6 hours per wedding',
      'Tailored to your culling preferences',
      'Advanced in Lightroom',
      '24-48 hours turnaround',
    ],
  },
  {
    title: 'Retouching',
    description: 'Remove blemishes, smooth skin, and enhance details.',
    price: '$3.50',
    priceNote: 'per photo; RAW or JPEG',
    features: [
      'Works with RAW files & Lightroom catalogs',
      'Free color test before full gallery',
      'Unlimited style revisions on test',
      'Delivered in 3-5 business days',
    ],
  },
] satisfies [PricingCardItem, PricingCardItem, PricingCardItem];

export const pricingCalculatorServices = [
  {
    id: 'culling',
    label: 'Culling',
    rate: 25,
    unit: 'hundred',
  },
  {
    id: 'color-correction',
    label: 'Color correction',
    rate: 0.3,
    unit: 'photo',
  },
  {
    id: 'retouching',
    label: 'Retouching (Basic)',
    rate: 3.5,
    unit: 'photo',
  },
] satisfies [
  PricingCalculatorService,
  PricingCalculatorService,
  PricingCalculatorService,
];

export const pricingFaqItems = [
  {
    question: 'How long does editing take?',
    answer:
      'Standard turnaround is 3-5 business days for color correction, 24-48 hours for culling. Rush delivery (+25%) gets your photos back in 48 hours.',
  },
  {
    question: "What if I don't like the edits?",
    answer:
      'That is what the free color test is for. We edit 15 sample photos first. You can request unlimited style tweaks before we touch your full gallery. Two rounds of revisions are included on the final delivery.',
  },
  {
    question: 'Do you work with RAW files?',
    answer:
      'Yes! We prefer RAW files and Lightroom catalogs. We can also work with JPEGs if that is what you have.',
  },
  {
    question: 'Can you match my editing style?',
    answer:
      'Absolutely. Whether you shoot light & airy, dark & moody, film, or editorial, we will match your aesthetic. Just provide reference photos or presets during the color test phase.',
  },
] satisfies [FaqItem, FaqItem, FaqItem, FaqItem];
