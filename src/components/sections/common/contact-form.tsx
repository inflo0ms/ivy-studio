'use client';

import { type FormEvent, useState } from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/cn';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldName = 'name' | 'email' | 'message';

type FieldErrors = Partial<Record<FieldName, string>>;

type FormValues = Record<FieldName, string>;

const initialValues: FormValues = {
  name: '',
  email: '',
  message: '',
};

function validateForm(values: FormValues): FieldErrors {
  const errors: FieldErrors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const message = values.message.trim();

  if (!name) {
    errors.name = 'Name is required';
  }

  if (!email) {
    errors.email = 'Email is required';
  } else if (!emailPattern.test(email)) {
    errors.email = 'Email format incorrect';
  }

  if (!message) {
    errors.message = 'Message is required';
  }

  return errors;
}

const fieldClassName =
  'font-body mt-2 h-12 w-full rounded-full border bg-transparent px-6 text-sm text-white transition-colors outline-none placeholder:text-white/75';

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const updateField = (field: FieldName, value: string) => {
    setValues((current) => {
      const nextValues = { ...current, [field]: value };

      if (hasSubmitted) {
        setErrors(validateForm(nextValues));
      }

      return nextValues;
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHasSubmitted(true);

    const nextErrors = validateForm(values);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="order-2 rounded-lg border border-white/15 bg-black/20 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-md md:order-none md:p-10"
    >
      <div className="flex flex-col gap-5">
        <label className="font-body text-xs leading-none text-white/75">
          Your Name*
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={(event) => updateField('name', event.target.value)}
            placeholder="Your Name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
            className={cn(
              fieldClassName,
              errors.name
                ? 'border-red-400 focus:border-red-400'
                : 'border-white/35 focus:border-white',
            )}
          />
          {errors.name && (
            <span
              id="contact-name-error"
              className="mt-2 block text-xs leading-none text-red-300"
            >
              {errors.name}
            </span>
          )}
        </label>

        <label className="font-body text-xs leading-none text-white/75">
          Email*
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={(event) => updateField('email', event.target.value)}
            placeholder="Email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
            className={cn(
              fieldClassName,
              errors.email
                ? 'border-red-400 focus:border-red-400'
                : 'border-white/35 focus:border-white',
            )}
          />
          {errors.email && (
            <span
              id="contact-email-error"
              className="mt-2 block text-xs leading-none text-red-300"
            >
              {errors.email}
            </span>
          )}
        </label>

        <label className="font-body text-xs leading-none text-white/75">
          Message*
          <input
            type="text"
            name="message"
            value={values.message}
            onChange={(event) => updateField('message', event.target.value)}
            placeholder="Message"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message ? 'contact-message-error' : undefined
            }
            className={cn(
              fieldClassName,
              errors.message
                ? 'border-red-400 focus:border-red-400'
                : 'border-white/35 focus:border-white',
            )}
          />
          {errors.message && (
            <span
              id="contact-message-error"
              className="mt-2 block text-xs leading-none text-red-300"
            >
              {errors.message}
            </span>
          )}
        </label>
      </div>

      <Button
        type="submit"
        variant="white"
        className="mt-9 h-12 w-full rounded-full text-sm"
      >
        Send a message
      </Button>
    </form>
  );
}
