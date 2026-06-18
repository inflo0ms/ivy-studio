import Image, { type StaticImageData } from 'next/image';
import type { ReactNode } from 'react';

import { cn } from '@/lib/cn';

interface BackgroundImageProps {
  image?: StaticImageData | string;
  alt?: string;
  priority?: boolean;
  quality?: number;
  // Focal point / responsive object-position (e.g. "object-top md:object-center")
  imageClassName?: string;
  // Override the default darkening overlay (e.g. opacity/color)
  overlayClassName?: string;
  className?: string;
  children: ReactNode;
}

export function BackgroundImage({
  image,
  alt = '',
  priority = false,
  quality = 90,
  imageClassName,
  overlayClassName,
  className,
  children,
}: BackgroundImageProps) {
  return (
    <div
      className={cn(
        'bg-brand-black relative isolate overflow-hidden',
        className,
      )}
    >
      {image && (
        <Image
          src={image}
          alt={alt}
          fill
          priority={priority}
          quality={quality}
          sizes="100vw"
          className={cn('-z-10 object-cover', imageClassName)}
        />
      )}
      <div
        className={cn('absolute inset-0 -z-10 bg-black/10', overlayClassName)}
      />
      {children}
    </div>
  );
}
