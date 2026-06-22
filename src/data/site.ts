export const siteRoutes = {
  home: '/',
  portfolio: '/portfolio',
  pricing: '/pricing',
  howItWorks: '/how-it-works',
  blog: '/blog',
  faq: '/faq',
} as const;

export const primaryNavItems = [
  { label: 'Portfolio', href: siteRoutes.portfolio },
  { label: 'Pricing', href: siteRoutes.pricing },
  { label: 'How it works', href: siteRoutes.howItWorks },
  { label: 'Blog', href: siteRoutes.blog },
  { label: 'FAQ', href: siteRoutes.faq },
];

export const footerNavItems = [
  ...primaryNavItems.filter((item) => item.label !== 'How it works'),
  { label: 'Contact', href: siteRoutes.home },
];

export const siteSocials = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Pinterest', href: 'https://pinterest.com' },
];

export const siteContact = {
  email: 'hello@ivyretouching.com',
  phone: '+1 (555) 123-4567',
  socials: siteSocials,
};
