import Link from 'next/link';

import { Container } from '@/components/shared/container';
import { footerNavItems, siteContact } from '@/data/site';

function IvyLogo() {
  return (
    <Link
      href="/"
      className="inline-flex flex-col items-center gap-3 md:items-start"
    >
      <svg
        width="58"
        height="58"
        viewBox="0 0 58 58"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M28.7 6c7.8 8.3 7.8 16.6 0 24.9C20.9 22.6 20.9 14.3 28.7 6Z"
          fill="currentColor"
        />
        <path
          d="M9 29.3c8.3-7.8 16.6-7.8 24.9 0C25.6 37.1 17.3 37.1 9 29.3Z"
          fill="currentColor"
        />
        <path
          d="M48.4 29.3c-8.3 7.8-16.6 7.8-24.9 0C31.8 21.5 40.1 21.5 48.4 29.3Z"
          fill="currentColor"
        />
        <path
          d="M28.7 52.6c-7.8-8.3-7.8-16.6 0-24.9C36.5 36 36.5 44.3 28.7 52.6Z"
          fill="currentColor"
        />
        <circle cx="28.7" cy="29.3" r="4.7" fill="#5E000C" />
      </svg>
      <span className="font-sans text-xl leading-none tracking-[0.08em]">
        IVY...
      </span>
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-red text-brand-white">
      <Container className="py-14 text-center md:py-16 md:text-left">
        <p className="mx-auto max-w-full font-sans text-3xl leading-[1.15] font-normal md:mx-0 md:max-w-[65%] md:text-[42px]">
          We don&apos;t use automated filters or presets -{' '}
          <em className="font-serif italic">
            just careful, artistic retouching
          </em>{' '}
          that respects your unique style.
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-[1.3fr_1fr_0.45fr_0.65fr] md:gap-12">
          <div>
            <IvyLogo />
          </div>

          <p className="font-body mx-auto max-w-[85%] text-xs leading-[1.45] text-white/75 md:mx-0 md:max-w-[200px]">
            Professional wedding photo retouching for photographers who care
            about quality.
          </p>

          <nav className="font-body flex flex-col gap-2.5 text-xs leading-none text-white/75">
            {footerNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="font-body text-xs leading-none text-white/75">
            <p className="font-semibold text-white">Get in touch</p>
            <div className="mt-4 flex flex-col gap-2.5">
              <a
                href={`mailto:${siteContact.email}`}
                className="transition-colors hover:text-white"
              >
                {siteContact.email}
              </a>
              <a
                href={`tel:${siteContact.phone.replaceAll(/[\s()-]/g, '')}`}
                className="transition-colors hover:text-white"
              >
                {siteContact.phone}
              </a>
            </div>

            <div className="mt-5 flex justify-center gap-4 md:justify-start">
              {siteContact.socials.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  className="transition-colors hover:text-white"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-5 text-center">
          <p className="font-body text-xs leading-none text-white/65">
            © 2026 IVY Retouching. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
