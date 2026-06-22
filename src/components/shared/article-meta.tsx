import { CalendarIcon, ClockIcon } from '@/components/ui/icons';
import { cn } from '@/lib/cn';

interface ArticleMetaProps {
  date: string;
  readTime: string;
  className?: string;
}

export function ArticleMeta({ date, readTime, className }: ArticleMetaProps) {
  return (
    <div
      className={cn(
        'font-body text-brand-black/55 flex flex-wrap items-center gap-x-4 gap-y-2 text-[14px] leading-5 font-normal tracking-[-0.15px]',
        className,
      )}
    >
      <span className="flex items-center gap-1.5">
        <CalendarIcon />
        {date}
      </span>
      <span className="flex items-center gap-1.5">
        <ClockIcon />
        {readTime}
      </span>
    </div>
  );
}
