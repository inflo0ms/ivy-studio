import type { StaticImageData } from 'next/image';
import type { ReactNode } from 'react';

import { ContactForm } from '@/components/sections/common/contact-form';
import { BackgroundImage } from '@/components/shared/background-image';
import { Container } from '@/components/shared/container';
import {
  SectionDescription,
  SectionTitle,
} from '@/components/shared/section-heading';

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
  title?: ReactNode;
  description: string;
  contact: ContactInfo;
}

const contactTitle = (
  <>
    <em className="font-serif italic">Have questions?</em>
    <br />
    <span className="block font-sans text-[28px] leading-[1.3] font-normal tracking-[0.35px] md:text-[48px] md:leading-[48px]">
      Send us a message
    </span>
  </>
);

export function Contact({
  image,
  title = contactTitle,
  description,
  contact,
}: ContactProps) {
  return (
    <section className="bg-white">
      <BackgroundImage
        image={image}
        alt=""
        className="min-h-[620px]"
        imageClassName="object-center"
      >
        <Container className="grid min-h-[473px] gap-10 py-16 md:grid-cols-[1fr_0.9fr] md:py-20">
          <div className="contents text-center text-white md:flex md:h-full md:max-w-[520px] md:flex-col md:justify-between md:text-left">
            <div className="order-1 md:order-none">
              <SectionTitle tone="light" className="text-white">
                {title}
              </SectionTitle>
              <SectionDescription
                tone="light"
                className="mx-auto mt-7 max-w-full text-white/85 md:mx-0 md:max-w-md"
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

          <ContactForm />
        </Container>
      </BackgroundImage>
    </section>
  );
}
