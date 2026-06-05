'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { GrainGradient } from '@paper-design/shaders-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MusicCarousel from './MusicCarousel';
import GlassPanel from './GlassPanel';

// ── Layout constants (kept in sync with the Tailwind classes below) ──
const CARD_WIDTH = 420; // w-[420px] / max-w-[420px]
const LG_PADDING = 96; // lg:px-24 (24 × 4px)
const DESKTOP_MIN = 1024; // Tailwind `lg` breakpoint
// Distance from viewport center to the carousel's resting (left) position:
// half a card + the left page padding. (96px padding + 210px card half-width = 306px)
const CAROUSEL_CENTER_OFFSET = CARD_WIDTH / 2 + LG_PADDING;

const SCROLL_RUNWAY = '400vh'; // tall wrapper that drives the sticky pinning

// ── Scroll-progress keyframes (0 → 1 across the runway) ──
const ARROW_FADE_END = 0.4; // arrows fully faded/slid away
const CAROUSEL_SLIDE_END = 0.45; // carousel settled at the left edge
const PANEL_SLIDE_START = 0.45; // glass panel begins entering
const PANEL_SLIDE_END = 0.7; // glass panel fully in place

// ── Vertical geometry (single source of truth) ──
// The cards (carousel + glass panel) are vertically framed by an equal gap `x`
// above (between navbar and cards) and below (between cards and bottom of viewport).
//   --nav-offset    : VISIBLE navbar bottom. The pill geometric bottom is 88px
//                     (top-4 16px + h-18 72px), but at the top of the hero the pill
//                     is transparent — only the logo (h-12 = 48px, centered) shows,
//                     ending at ~76px. We anchor to that so the top gap visually
//                     matches the bottom gap instead of looking bottom-aligned.
//   --hero-gap      : x — the equal gap above and below the cards (only the floor
//                     value when the card is filling; above the ceiling the gaps
//                     grow symmetrically because the row is vertically centered).
// The row is vertically centered (items-center) in the area below the navbar,
// so whatever height the card resolves to, it always sits in the middle with
// equal space above and below. The clamp just controls that height:
//   --hero-card-ceiling: the card's PREFERRED height. On any window tall enough
//                        it rests here, centered, with generous breathing room.
//                        ◀── TWEAK THIS to taste (keep it ≥ --hero-card-floor).
//   middle term        : when the window is short, the card shrinks to
//                        100vh − navbar − 2× gap so it never crowds the navbar.
//   --hero-card-floor  : the smallest the card may get (its own content — the
//                        square artwork + controls — needs ~600px, so don't go
//                        much lower or the card layout cramps).
const HERO_VARS = {
  '--nav-offset': '76px',
  '--hero-gap': '24px',
  '--hero-card-floor': '600px',
  '--hero-card-ceiling': '660px',
  '--hero-card-h':
    'clamp(var(--hero-card-floor), calc(100vh - var(--nav-offset) - 2 * var(--hero-gap)), var(--hero-card-ceiling))',
} as CSSProperties;

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

// Tracks the viewport width, with an SSR-safe initial guess.
function useWindowWidth(initial = 1200) {
  const [width, setWidth] = useState(initial);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return width;
}

export default function Hero() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const windowWidth = useWindowWidth();

  // Track scroll progress through the tall wrapper (0 → 1)
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start start', 'end end'],
  });

  // ── Animation Transforms (Arrows and Carousel move together) ──

  // 1. Arrow opacity (progress 0.0 → ARROW_FADE_END)
  // Arrows fade and slide inward simultaneously as the card moves left, disappearing fully before the card settles.
  const arrowOpacity = useTransform(scrollYProgress, [0, ARROW_FADE_END], [1, 0]);

  // 2. Carousel horizontal displacement (progress 0.0 → CAROUSEL_SLIDE_END)
  // Maps smoothly from (windowWidth / 2 - CAROUSEL_CENTER_OFFSET) to 0.
  const carouselX = useTransform(scrollYProgress, (progress) => {
    if (windowWidth < DESKTOP_MIN) return 0; // remain centered on mobile via flex layout

    const initialX = windowWidth / 2 - CAROUSEL_CENTER_OFFSET;
    const factor = clamp(progress / CAROUSEL_SLIDE_END, 0, 1); // linear 0 → 1
    return initialX * (1 - factor);
  });

  // 3. Glass panel slide-in (progress PANEL_SLIDE_START → PANEL_SLIDE_END)
  // We translate the panel by the full window width (windowWidth) initially.
  // This guarantees the left edge of the panel starts completely outside the viewport boundary on the right,
  // preventing it from clipping or showing a preview edge before it slides into position.
  const panelX = useTransform(
    scrollYProgress,
    [0, PANEL_SLIDE_START, PANEL_SLIDE_END, 1],
    [windowWidth, windowWidth, 0, 0]
  );

  return (
    // Outer wrapper — creates the scroll runway for the sticky pinning
    <div ref={wrapperRef} className="relative" style={{ height: SCROLL_RUNWAY }}>
      {/* Sticky viewport — pins to top of screen for the full scroll runway */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#050505]">
        {/* Dynamic Grain Gradient WebGL Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <GrainGradient
            width="100%"
            height="100%"
            colors={['#d5630b', '#c05a0c']}
            colorBack="#000a0f"
            softness={0.5}
            intensity={0.3}
            noise={0}
            shape="wave"
            speed={1}
          />
        </div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 z-10 bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]" />

        {/* Giant flat watermark background text */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-10 w-full text-center">
          <span className="text-[14vw] font-syne font-bold uppercase tracking-narrow leading-none block select-none text-white/10">
            BACKBNCH
          </span>
        </div>

        {/* ── Animated content area ── */}
        <div
          className="relative z-20 h-full w-full flex items-center pt-(--nav-offset) px-6 sm:px-12 lg:px-24 lg:gap-16"
          style={HERO_VARS}
        >
          {/* Carousel column (translated from center to left edge) */}
          <motion.div
            className="w-[420px] shrink-0 flex items-center justify-center"
            style={{ x: carouselX }}
          >
            <MusicCarousel arrowOpacity={arrowOpacity} />
          </motion.div>

          {/* Right Spacer / Glass panel column (takes the remaining flex space) */}
          <motion.div
            className="flex-1 min-w-0 hidden lg:block shrink-0"
            style={{ x: panelX }}
          >
            <GlassPanel />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
