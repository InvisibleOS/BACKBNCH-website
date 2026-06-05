'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Returns a ref and a flag that flips to `true` the first time the element
 * scrolls into view, then stops observing (one-shot reveal animations).
 */
export function useInView<T extends Element>(threshold = 0) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}
