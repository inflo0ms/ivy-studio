'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import logo from '@/assets/icons/logo/Logo.svg';
import { Container } from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import { primaryNavItems, siteRoutes } from '@/data/site';
import { cn } from '@/lib/cn';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full">
      <div className="bg-brand-black/80 md:bg-transparent">
        <Container className="flex items-center justify-between py-5">
        <Link
          href="/"
          className="inline-flex"
          onClick={() => setIsOpen(false)}
          aria-label="Ivy Studio home"
        >
          <Image src={logo} alt="" width={131} height={32} priority />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-10 md:flex">
          <nav className="flex items-center gap-8">
            {primaryNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-brand-white text-sm transition-opacity hover:opacity-70"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Button
            href={siteRoutes.pricing}
            variant="outline"
            className="rounded-full px-5 py-2 text-sm"
          >
            Make an order
          </Button>
        </div>

        {/* Burger */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="text-brand-white md:hidden"
        >
          {isOpen ? <CloseIcon /> : <BurgerIcon />}
        </button>
        </Container>

        {/* Mobile menu */}
        <div
          className={cn(
            'overflow-hidden transition-all md:hidden',
            isOpen ? 'max-h-96' : 'max-h-0',
          )}
        >
          <Container as="nav" className="flex flex-col gap-4 pb-6">
            {primaryNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-brand-white text-base transition-opacity hover:opacity-70"
              >
                {item.label}
              </Link>
            ))}

            <Button
              href={siteRoutes.pricing}
              variant="outline"
              className="mt-2 w-full rounded-full px-5 py-2.5 text-sm"
              onClick={() => setIsOpen(false)}
            >
              Make an order
            </Button>
          </Container>
        </div>
      </div>
    </header>
  );
}

function BurgerIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
