export const primaryNavItems = [
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'How it works', href: '/how-it-works' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
];

export const footerNavItems = [
  ...primaryNavItems.filter((item) => item.label !== 'How it works'),
  { label: 'Contact', href: '/contact' },
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
