import Image from 'next/image';
import Link from 'next/link';

import flowerLogo from '@/assets/icons/logo/flowerLogo.svg';
import { Container } from '@/components/shared/container';
import { footerNavItems, siteContact } from '@/data/site';

function IvyLogo() {
  return (
    <Link
      href="/"
      className="inline-flex"
      aria-label="Ivy Studio home"
    >
      <Image src={flowerLogo} alt="" width={76} height={132} />
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-red text-brand-white">
      <Container className="w-full px-4 pt-16 pb-[25px] text-center md:px-20 md:pt-20 md:text-left">
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
