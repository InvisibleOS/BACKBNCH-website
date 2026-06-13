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
        'fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] transition-opacity ease-out',
        leaving ? 'pointer-events-none opacity-0' : 'opacity-100'
      )}
      style={{ transitionDuration: `${FADE_MS}ms` }}
    >
      {/* Inline styles for custom premium animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInLetter {
          0% { opacity: 0; filter: blur(12px); letter-spacing: 0.1em; transform: scale(0.97); }
          100% { opacity: 1; filter: blur(0); letter-spacing: 0.35em; transform: scale(1); }
        }
        @keyframes fadeInUpDelayed {
          0% { opacity: 0; transform: translateY(16px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-letter {
          animation: fadeInLetter 1.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in-delayed {
          opacity: 0;
          animation: fadeInUpDelayed 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.35s forwards;
        }
      `}} />

      {/* Ambient brand glow, gently breathing */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[42vw] w-[42vw] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-brand-orange/10 blur-[120px]" />

      <div className="flex flex-col items-center justify-center gap-16 z-10 text-center w-full">
        {/* Massive Title / Wordmark (reciprocating the Hero page watermark style) */}
        <div className="flex flex-col items-center animate-fade-in-letter w-full">
          <h1 className="font-syne font-bold uppercase leading-none block select-none text-brand-orange/50 text-[6.5vw] md:text-[5vw] mr-[-0.35em] tracking-[0.35em] text-center w-full">
            BACKBNCH
          </h1>
        </div>

        {/* Lower Loading Component */}
        <div className="flex flex-col items-center gap-8 animate-fade-in-delayed">
          {/* Audio-equalizer waveform */}
          <div className="flex h-10 items-end gap-1.5">
            {BARS.map((bar, i) => (
              <span
                key={i}
                className="wave-bar"
                style={{ animationDelay: `${bar.delay}s`, animationDuration: `${bar.dur}s` }}
              />
            ))}
          </div>

          {/* Load progress + label */}
          <div className="flex flex-col items-center gap-3">
            <div className="h-px w-44 overflow-hidden rounded-full bg-white/10">
              <div className="loadbar h-full bg-gradient-to-r from-brand-orange to-[#ff7b24]" />
            </div>
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30">
              Tuning in…
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
