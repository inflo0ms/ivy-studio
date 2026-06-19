import Image, { type StaticImageData } from 'next/image';
import type { ReactNode } from 'react';

interface AboutProps {
  eyebrow?: string;
  title: ReactNode;
  description: string;
  imageLeft?: StaticImageData;
  imageRight?: StaticImageData;
}

export function About({
  eyebrow = 'About us',
  title,
  description,
  imageLeft,
  imageRight,
}: AboutProps) {
  return (
    <section className="md:bg-brand-red bg-[#F9F7F6]">
      <div className="grid w-full grid-cols-1 gap-8 py-0 md:grid-cols-[auto_1fr_auto] md:gap-3 md:py-20">
        {/* Left image — fixed size from design, hidden on mobile */}
        {imageLeft && (
          <Image
            src={imageLeft}
            alt=""
            width={406}
            height={548}
            sizes="406px"
            className="hidden h-[548px] w-[406px] object-cover md:block"
          />
        )}

        {/* Card */}
        <div className="flex w-full flex-col items-center justify-center rounded-2xl bg-[#F9F7F6] px-5 py-20 text-center md:px-8 md:py-14">
          <span className="text-brand-black/60 font-body text-xs tracking-[0.2em] uppercase">
            {eyebrow}
          </span>

          <h2 className="text-brand-black mt-4 font-sans text-[28px] leading-[1.2] font-normal md:text-4xl">
            {title}
          </h2>

          <p className="text-brand-black/70 font-body mx-auto mt-5 max-w-md text-[17px] leading-[1.5] md:text-[15px]">
            {description}
          </p>
        </div>

        {/* Right image — fixed size from design */}
        {imageRight && (
          <Image
            src={imageRight}
            alt=""
            width={406}
            height={548}
            sizes="(min-width: 768px) 406px, 100vw"
            className="h-[548px] w-full object-cover md:w-[406px]"
          />
        )}
      </div>
    </section>
  );
}
