import type { FaqAccordionGroup } from '@/components/sections/faq-accordion-groups';

import heroImage from '@/assets/images/services/colorCorrection.png';

export const faqHero = {
  image: heroImage,
  eyebrow: 'Questions & Answers',
  description:
    "Everything you need to know about our wedding photo retouching services. Can't find what you're looking for? Contact us directly.",
};

export const faqGroups = [
  {
    title: 'Getting Started',
    items: [
      {
        question: 'How do I submit my wedding photos for retouching?',
        answer:
          'Simply click Make an order to access our order form. Select your preferred package, upload your photos via the provided transfer link, and specify any special requirements. We accept RAW files, JPEGs, and most common image formats. Our team will review your order within 24 hours and begin work immediately.',
      },
      {
        question: 'What file formats do you accept?',
        answer:
          'We prefer RAW files and Lightroom catalogs, but we can also work with JPEG, TIFF, and most standard image formats.',
      },
      {
        question: 'Do I need to create an account?',
        answer:
          'No account is required for the first free color test. For ongoing projects, we can set up a simple client workflow for faster delivery.',
      },
    ],
  },
  {
    title: 'Pricing & Packages',
    items: [
      {
        question: "What's included in each retouching package?",
        answer:
          'Each package includes the selected editing service, a free color test, clear delivery timelines, and revision rounds depending on the service.',
      },
      {
        question: 'Do you offer discounts for large wedding galleries?',
        answer:
          'Yes. Larger galleries can qualify for custom package pricing. Send us the expected volume and services needed, and we will quote it clearly.',
      },
      {
        question: 'What payment methods do you accept?',
        answer:
          'We accept standard online payment methods. Final payment details are confirmed after the free color test and project approval.',
      },
    ],
  },
  {
    title: 'Turnaround & Delivery',
    items: [
      {
        question: 'How long does retouching take?',
        answer:
          'Standard turnaround is 3-5 business days for color correction, 24-48 hours for culling, and timeline-based delivery for larger retouching batches.',
      },
      {
        question: 'How will I receive my edited photos?',
        answer:
          'Edited files are delivered via a secure transfer link or Lightroom catalog, depending on your workflow and source files.',
      },
      {
        question: 'Can I request revisions?',
        answer:
          'Yes. Two rounds of revisions are included in final delivery, and the free color test allows unlimited style tweaks before paid work begins.',
      },
    ],
  },
  {
    title: 'Retouching Style & Quality',
    items: [
      {
        question: 'Can you match my specific editing style?',
        answer:
          'Absolutely. Send references, presets, or previous galleries during the color test phase, and we will match your aesthetic as closely as possible.',
      },
      {
        question: 'Do you use automated filters or AI editing?',
        answer:
          'No. We rely on careful hand-editing and professional retouching techniques rather than one-click filters or automated presets.',
      },
      {
        question: 'How do you ensure consistency across all photos?',
        answer:
          'We establish the look during the free color test, then apply the approved direction consistently across the full gallery.',
      },
    ],
  },
  {
    title: 'Technical Questions',
    items: [
      {
        question: 'What is your approach to skin retouching?',
        answer:
          'Our skin retouching is natural and texture-preserving. We remove temporary distractions while keeping skin, expression, and identity intact.',
      },
      {
        question: 'Can you remove unwanted objects or people from photos?',
        answer:
          'Yes, depending on complexity. Small distractions are usually straightforward; larger object removal can be quoted separately.',
      },
      {
        question: 'Do you offer color space conversion?',
        answer:
          'Yes. We can prepare files for web, print, or client delivery according to your preferred color profile.',
      },
    ],
  },
  {
    title: 'Business & Rights',
    items: [
      {
        question: 'Who owns the copyright to edited photos?',
        answer:
          'You retain ownership and copyright of your images. We only provide editing services and do not claim rights to your work.',
      },
      {
        question: 'Can I use edited photos in my portfolio and marketing?',
        answer:
          'Yes. The edited images are yours to deliver, publish, and use according to your client agreements.',
      },
      {
        question: 'Do you offer confidentiality agreements?',
        answer:
          'Yes. We can work under confidentiality agreements for private events, high-profile clients, or studio requirements.',
      },
    ],
  },
] satisfies [
  FaqAccordionGroup,
  FaqAccordionGroup,
  FaqAccordionGroup,
  FaqAccordionGroup,
  FaqAccordionGroup,
  FaqAccordionGroup,
];
