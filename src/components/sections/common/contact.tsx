import type { StaticImageData } from 'next/image';
import type { ReactNode } from 'react';

import { BackgroundImage } from '@/components/shared/background-image';
import { Container } from '@/components/shared/container';
import {
  SectionDescription,
  SectionTitle,
} from '@/components/shared/section-heading';
import { Button } from '@/components/ui/button';

export interface ContactInfo {
  email: string;
  phone: string;
  socials: {
    label: string;
    href: string;
  }[];
}

interface ContactProps {
  image: StaticImageData;
  title: ReactNode;
  description: string;
  contact: ContactInfo;
}

export function Contact({ image, title, description, contact }: ContactProps) {
  return (
    <section className="bg-white">
      <BackgroundImage
        image={image}
        alt=""
        className="min-h-[620px]"
        imageClassName="object-center"
      >
        <Container className="grid min-h-[620px] gap-10 py-16 md:grid-cols-[1fr_0.9fr] md:py-20">
          <div className="contents text-center text-white md:flex md:h-full md:max-w-[520px] md:flex-col md:justify-between md:text-left">
            <div className="order-1 md:order-none">
              <SectionTitle tone="light" className="leading-[1.05]">
                {title}
              </SectionTitle>
              <SectionDescription
                tone="light"
                className="mx-auto mt-7 max-w-md text-white/85 md:mx-0"
              >
                {description}
              </SectionDescription>
            </div>

            <div className="order-3 md:order-none md:mt-0">
              <p className="font-body text-sm leading-none font-semibold">
                Get in touch directly
              </p>
              <div className="font-body mt-4 flex flex-col gap-2 text-sm leading-none text-white/85">
                <a
                  href={`mailto:${contact.email}`}
                  className="transition-colors hover:text-white"
                >
                  {contact.email}
                </a>
                <a
                  href={`tel:${contact.phone.replaceAll(/[\s()-]/g, '')}`}
                  className="transition-colors hover:text-white"
                >
                  {contact.phone}
                </a>
              </div>

              <div className="font-body mt-7 flex flex-wrap justify-center gap-5 text-sm leading-none text-white/85 md:justify-start">
                {contact.socials.map((social) => (
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

          <form className="order-2 rounded-lg border border-white/15 bg-black/20 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-md md:order-none md:p-10">
            <div className="flex flex-col gap-5">
              <label className="font-body text-xs leading-none text-white/75">
                Your Name*
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="font-body mt-2 h-12 w-full rounded-full border border-white/35 bg-transparent px-6 text-sm text-white transition-colors outline-none placeholder:text-white/75 focus:border-white"
                />
              </label>

              <label className="font-body text-xs leading-none text-white/75">
                Email*
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="font-body mt-2 h-12 w-full rounded-full border border-white/35 bg-transparent px-6 text-sm text-white transition-colors outline-none placeholder:text-white/75 focus:border-white"
                />
              </label>

              <label className="font-body text-xs leading-none text-white/75">
                Message
                <input
                  type="text"
                  name="message"
                  placeholder="Message"
                  className="font-body mt-2 h-12 w-full rounded-full border border-white/35 bg-transparent px-6 text-sm text-white transition-colors outline-none placeholder:text-white/75 focus:border-white"
                />
              </label>
            </div>

            <Button
              type="button"
              variant="white"
              className="mt-9 h-12 w-full rounded-full text-sm"
            >
              Send a message
            </Button>
          </form>
        </Container>
      </BackgroundImage>
    </section>
  );
}
