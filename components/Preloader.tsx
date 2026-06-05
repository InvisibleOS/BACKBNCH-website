'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/cn';

const VISIBLE_MS = 1900; // how long the loader holds before fading (matches .loadbar)
const FADE_MS = 800; // fade-out duration

// Per-bar delay + duration: out-of-phase and slightly different speeds so the
// bars drift, giving an organic, audio-reactive equalizer feel.
const BARS = [
  { delay: 0.0, dur: 0.9 },
  { delay: 0.2, dur: 1.05 },
  { delay: 0.35, dur: 0.8 },
  { delay: 0.1, dur: 1.0 },
  { delay: 0.45, dur: 0.95 },
  { delay: 0.25, dur: 1.1 },
  { delay: 0.05, dur: 0.85 },
  { delay: 0.3, dur: 1.0 },
  { delay: 0.15, dur: 0.92 },
];

/**
 * Brief intro overlay shown on first load. It veils the page while the hero's
 * WebGL canvas and web fonts warm up, so nothing pops in abruptly, then fades
 * away. Rendered in the SSR HTML, so it covers the page from the first paint.
 */
export default function Preloader() {
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    // Hold scroll locked while the veil is up, then start the fade.
    document.body.style.overflow = 'hidden';

    const fade = setTimeout(() => {
      setLeaving(true);
      document.body.style.overflow = '';
    }, VISIBLE_MS);

    const remove = setTimeout(() => setGone(true), VISIBLE_MS + FADE_MS);

    return () => {
      clearTimeout(fade);
      clearTimeout(remove);
      document.body.style.overflow = '';
    };
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden={leaving}
      className={cn(
        'fixed inset-0 z-[100] flex flex-col items-center justify-center gap-10 bg-[#050505] transition-opacity ease-out',
        leaving ? 'pointer-events-none opacity-0' : 'opacity-100'
      )}
      style={{ transitionDuration: `${FADE_MS}ms` }}
    >
      {/* Ambient brand glow, gently breathing */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[42vw] w-[42vw] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-brand-orange/10 blur-[120px]" />

      {/* Wordmark */}
      <div className="relative z-10 flex items-center gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.jpeg" alt="" className="h-10 w-10 rounded-full" />
        <span className="font-syne text-2xl font-bold tracking-tight text-brand-orange">BACKBNCH</span>
      </div>

      {/* Audio-equalizer waveform */}
      <div className="relative z-10 flex h-12 items-end gap-1.5">
        {BARS.map((bar, i) => (
          <span
            key={i}
            className="wave-bar"
            style={{ animationDelay: `${bar.delay}s`, animationDuration: `${bar.dur}s` }}
          />
        ))}
      </div>

      {/* Load progress + label */}
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="h-px w-44 overflow-hidden rounded-full bg-white/10">
          <div className="loadbar h-full bg-gradient-to-r from-brand-orange to-[#ff7b24]" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">Tuning in…</span>
      </div>
    </div>
  );
}
