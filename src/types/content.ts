import type { StaticImageData } from 'next/image';

export interface ArticleSummary {
  id: string;
  image: StaticImageData;
  title: string;
  description: string;
  date: string;
  readTime: string;
}

export interface BlogArticleSection {
  title: string;
  paragraphs: string[];
}

export interface BlogWorkflowStep {
  title: string;
  description: string;
}

export interface BlogArticleDetail extends ArticleSummary {
  author: string;
  intro: string[];
  sections: BlogArticleSection[];
  quote: {
    text: string;
    author: string;
  };
  gallery: [StaticImageData, StaticImageData];
  workflow: BlogWorkflowStep[];
  proTip: string;
  mistakes: string[];
  restraint: string[];
  conclusion: string[];
  authorNote: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqGroup {
  title: string;
  items: FaqItem[];
}

export interface PricingItem {
  title: string;
  description: string;
  features: string[];
  price: string;
  priceNote: string;
  badge?: string;
}

export interface PricingCalculatorService {
  id: string;
  label: string;
  rate: number;
  unit: 'photo' | 'hundred';
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  duration: string;
  image?: StaticImageData;
}

export interface ServiceItem {
  title: string;
  description: string;
  features: string[];
  image?: StaticImageData;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  avatar: StaticImageData;
}

export interface WorkSlide {
  title: string;
  beforeImage: StaticImageData;
  afterImage: StaticImageData;
}
