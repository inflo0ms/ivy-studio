'use client';

import { useCallback, useState } from 'react';

import { ShareIcon } from '@/components/ui/icons';

export function ArticleShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, []);

  return (
    <button
      type="button"
      onClick={handleShare}
      className="font-body text-brand-black/55 hover:text-brand-black inline-flex items-center gap-1.5 text-xs leading-none transition-colors"
    >
      <ShareIcon />
      {copied ? 'Link copied' : 'Share'}
    </button>
  );
}
