import type { ProcessStep } from '@/types/content';

import heroImage from '@/assets/images/how-it-works.png';
import dashboardImage from '@/assets/images/home-hero.png';

export const howItWorksHero = {
  image: heroImage,
  description:
    'From creating your account to receiving finished galleries, our workflow keeps every order clear, simple, and easy to track.',
};

export const howItWorksSteps = [
  {
    step: '01',
    title: 'Create an Account',
    description:
      'Simply click on the Create an Account button in the header of our website and you will be on our self-registration account creation form. Complete the required fields and you are all set.',
    duration: '5 minutes',
    image: dashboardImage,
  },
  {
    step: '02',
    title: 'Create Order',
    description:
      'Upload the exact properties for this process: quantity, preferences, style refs, and delivery needs. The order details are saved in your account dashboard, then our team starts reviewing your gallery.',
    duration: '24 hours',
  },
  {
    step: '03',
    title: 'Download Final Images and Share Feedback!',
    description:
      'You will receive your edited images, completed Lightroom catalog, or project files. Review the result and send feedback if you want any final adjustments.',
    duration: '3-5 business days',
  },
] satisfies ProcessStep[];
