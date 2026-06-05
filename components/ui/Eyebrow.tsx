import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

/** Small mono uppercase label rendered above section headings. */
export default function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p className={cn('text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-brand-orange', className)}>
      {children}
    </p>
  );
}
