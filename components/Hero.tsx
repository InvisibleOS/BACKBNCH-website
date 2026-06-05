'use client';

import { useRef, useState, useEffect } from 'react';
import { GrainGradient } from '@paper-design/shaders-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MusicCarousel from './MusicCarousel';
import GlassPanel from './GlassPanel';

export default function Hero() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(1200); // safe initial guess

  useEffect(() => {
    const checkResize = () => setWindowWidth(window.innerWidth);
    checkResize();
    window.addEventListener('resize', checkResize);
    return () => window.removeEventListener('resize', checkResize);
  }, []);

  // Track scroll progress through the tall wrapper (0 → 1)
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start start', 'end end'],
  });

  // ── Animation Transforms (Arrows and Carousel move together) ──

  // 1. Arrow opacity and translation (progress 0.0 → 0.40)
  const arrowOpacity = useTransform(scrollYProgress, [0, 0.40], [1, 0]);

  // 2. Carousel horizontal displacement (progress 0.0 → 0.45)
  const carouselX = useTransform(scrollYProgress, (progress) => {
    const isDesktop = windowWidth >= 1024;
    if (!isDesktop) return 0; // remain centered on mobile via flex layout

    const initialX = windowWidth / 2 - 306;

    if (progress <= 0) return initialX;
    if (progress >= 0.45) return 0;

    // Smooth linear interpolation between 0.0 and 0.45
    const factor = progress / 0.45;
    return initialX * (1 - factor);
  });

  // 3. Glass panel slide-in (progress 0.45 → 0.70)
  const panelX = useTransform(
    scrollYProgress,
    [0, 0.45, 0.70, 1],
    [windowWidth, windowWidth, 0, 0]
  );

  return (
    // Outer wrapper — creates the scroll runway (400vh) for the sticky pinning
    <div ref={wrapperRef} className="relative" style={{ height: '400vh' }}>
      {/* Sticky viewport — pins to top of screen for the full scroll runway */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#050505]">
        {/* Dynamic Grain Gradient WebGL Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <GrainGradient
            width="100%"
            height="100%"
            colors={["#d5630b", "#c05a0c"]}
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
        <div className="relative z-20 h-full w-full flex items-start pt-[104px] px-6 sm:px-12 lg:px-24 lg:gap-16">
          {/* Carousel column (translated from center to left edge) */}
          {/* Explicit lower layer order */}
          <motion.div
            className="w-[420px] shrink-0 flex items-center justify-center relative z-10"
            style={{ x: carouselX }}
          >
            <MusicCarousel arrowOpacity={arrowOpacity} />
          </motion.div>

          {/* Right Spacer / Glass panel column (takes the remaining flex space) */}
          {/* Explicit higher layer order */}
          <motion.div
            className="flex-1 min-w-0 hidden lg:block shrink-0 relative z-20"
            style={{
              x: panelX,
            }}
          >
            <GlassPanel />
          </motion.div>
        </div>
      </div>
    </div>
  );
}