import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface SectionProps {
  children: ReactNode;
  className?: string;
}

/** Page section with the shared horizontal padding + vertical rhythm. */
export default function Section({ children, className }: SectionProps) {
  return (
    <section className={cn('px-6 sm:px-12 lg:px-24 py-24', className)}>
      {children}
    </section>
  );
}
