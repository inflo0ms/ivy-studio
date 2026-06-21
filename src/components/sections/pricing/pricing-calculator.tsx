'use client';

import { useMemo, useState } from 'react';

import { Container } from '@/components/shared/container';
import {
  SectionDescription,
  SectionTitle,
} from '@/components/shared/section-heading';
import { cn } from '@/lib/cn';

export interface PricingCalculatorService {
  id: string;
  label: string;
  rate: number;
  unit: 'photo' | 'hundred';
}

interface PricingCalculatorProps {
  services: [
    PricingCalculatorService,
    PricingCalculatorService,
    PricingCalculatorService,
  ];
}

const MIN_PHOTOS = 100;
const MAX_PHOTOS = 1200;
const STEP = 50;

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}

function calculateServicePrice(
  service: PricingCalculatorService,
  photos: number,
) {
  if (service.unit === 'hundred') {
    return (photos / 100) * service.rate;
  }

  return photos * service.rate;
}

export function PricingCalculator({ services }: PricingCalculatorProps) {
  const [photos, setPhotos] = useState(600);
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'culling',
    'color-correction',
  ]);

  const selectedItems = services.filter((service) =>
    selectedServices.includes(service.id),
  );

  const total = useMemo(
    () =>
      selectedItems.reduce(
        (sum, service) => sum + calculateServicePrice(service, photos),
        0,
      ),
    [photos, selectedItems],
  );

  const sliderProgress =
    ((photos - MIN_PHOTOS) / (MAX_PHOTOS - MIN_PHOTOS)) * 100;

  function toggleService(serviceId: string) {
    setSelectedServices((current) =>
      current.includes(serviceId)
        ? current.filter((id) => id !== serviceId)
        : [...current, serviceId],
    );
  }

  return (
    <section className="bg-[#F9F7F6] py-16 md:py-20">
      <Container>
        <div className="text-center">
          <SectionTitle>
            Estimate your <em className="font-serif italic">order</em>
          </SectionTitle>
          <SectionDescription className="mt-4">
            Drag the sliders to get an instant quote for your next wedding.
          </SectionDescription>
        </div>

        <div className="mt-10 bg-white px-6 py-8 shadow-[0_8px_24px_rgba(35,31,31,0.04)] md:px-10 md:py-9">
          <div className="flex items-center justify-between gap-6">
            <h3 className="text-brand-black font-sans text-xl leading-none font-normal md:text-2xl">
              Number of photos
            </h3>
            <span className="text-brand-black font-sans text-2xl leading-none font-normal">
              {photos}
            </span>
          </div>

          <input
            type="range"
            min={MIN_PHOTOS}
            max={MAX_PHOTOS}
            step={STEP}
            value={photos}
            onChange={(event) => setPhotos(Number(event.target.value))}
            aria-label="Number of photos"
            className="mt-6 h-2 w-full cursor-pointer appearance-none rounded-full bg-transparent accent-brand-red [&::-moz-range-thumb]:size-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-brand-red [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand-red"
            style={{
              background: `linear-gradient(to right, #5E000C 0%, #5E000C ${sliderProgress}%, rgba(35,31,31,0.1) ${sliderProgress}%, rgba(35,31,31,0.1) 100%)`,
            }}
          />

          <div className="mt-9">
            <p className="font-body text-brand-black/70 text-sm leading-none">
              Services needed
            </p>

            <div className="mt-5 flex flex-col gap-3">
              {services.map((service) => (
                <label
                  key={service.id}
                  className="font-body text-brand-black flex w-fit cursor-pointer items-center gap-3 text-sm leading-none"
                >
                  {(() => {
                    const isSelected = selectedServices.includes(service.id);

                    return (
                      <>
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleService(service.id)}
                          className="sr-only"
                        />
                        <span
                          aria-hidden="true"
                          className={cn(
                            'border-brand-black/45 size-4 border bg-white transition-colors',
                            isSelected && 'border-brand-red bg-brand-red',
                          )}
                        />
                      </>
                    );
                  })()}
                  {service.label}
                </label>
              ))}
            </div>
          </div>

          <div className="border-brand-black/10 mt-9 grid gap-6 border-t pt-7 md:grid-cols-[1fr_auto] md:items-start">
            <div>
              <p className="font-body text-brand-black/70 text-sm leading-none">
                Estimated total
              </p>
              <p className="font-body text-brand-black mt-3 text-sm leading-[1.5]">
                {selectedItems.length > 0
                  ? selectedItems
                      .map(
                        (service) =>
                          `${service.label} ${formatCurrency(
                            calculateServicePrice(service, photos),
                          )}`,
                      )
                      .join(' + ')
                  : 'Select at least one service'}
              </p>
              <p className="font-body text-brand-black/70 mt-6 text-sm leading-[1.5]">
                Final price confirmed after free color test. Rush delivery
                (+25%) available for +$25%.
              </p>
            </div>

            <p className="text-brand-black font-sans text-5xl leading-none font-normal md:text-right md:text-[52px]">
              {formatCurrency(total)}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
