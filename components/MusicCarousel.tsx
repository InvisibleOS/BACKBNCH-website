'use client';

import { useState } from 'react';
import { motion, AnimatePresence, MotionValue, useTransform, useMotionValue } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MusicCard from './MusicCard';
import { EPISODES, CARD_GRADIENTS } from '@/data/episodes';

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100vw' : '-100vw',
    opacity: 1,
    scale: 1
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: 'spring' as const, stiffness: 110, damping: 17, mass: 0.9 }
    }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100vw' : '-100vw',
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: 'spring' as const, stiffness: 110, damping: 17, mass: 0.9 }
    }
  })
};

interface MusicCarouselProps {
  arrowOpacity?: MotionValue<number>;
}

export default function MusicCarousel({ arrowOpacity: arrowOpacityProp }: MusicCarouselProps) {
  const [[page, direction], setPage] = useState([0, 0]);

  // Default MotionValue of 1 when no prop is provided (always fully visible)
  const defaultOpacity = useMotionValue(1);
  const arrowOpacity = arrowOpacityProp ?? defaultOpacity;

  // Derive pointer-events and horizontal translation from arrowOpacity MotionValue
  const arrowPointerEvents = useTransform(arrowOpacity, (v: number) => (v < 0.1 ? 'none' : 'auto'));
  const leftArrowX = useTransform(arrowOpacity, [1, 0], [0, 120]);
  const rightArrowX = useTransform(arrowOpacity, [1, 0], [0, -120]);

  const paginate = (newDirection: number) => {
    setPage([
      (page + newDirection + EPISODES.length) % EPISODES.length,
      newDirection
    ]);
  };

  return (
    <div className="relative flex items-center justify-center w-full max-w-5xl mx-auto px-4 z-20">
      {/* Main sliding viewport container containing the arrows and cards */}
      <div className="relative w-full max-w-[420px] h-(--hero-card-h,680px) overflow-visible flex items-center justify-center">
        {/* Left Navigation Arrow (closer to card) */}
        <motion.button
          onClick={() => paginate(-1)}
          className="absolute left-2 sm:left-4 md:-left-16 lg:-left-20 p-3 sm:p-4 rounded-full bg-black/50 border border-white/10 hover:bg-black/30 hover:border-white/20 text-white transition-all duration-300 backdrop-blur-md cursor-pointer z-10 flex items-center justify-center shadow-lg active:scale-90"
          aria-label="Previous episode"
          style={{ opacity: arrowOpacity, pointerEvents: arrowPointerEvents, x: leftArrowX }}
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </motion.button>

        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 flex items-center justify-center z-20"
          >
            <MusicCard
              {...EPISODES[page]}
              circleColors={CARD_GRADIENTS[page % CARD_GRADIENTS.length]}
              onNext={() => paginate(1)}
              onPrev={() => paginate(-1)}
            />
          </motion.div>
        </AnimatePresence>

        {/* Right Navigation Arrow (closer to card) */}
        <motion.button
          onClick={() => paginate(1)}
          className="absolute right-2 sm:right-4 md:-right-16 lg:-right-20 p-3 sm:p-4 rounded-full bg-black/50 border border-white/10 hover:bg-black/30 hover:border-white/20 text-white transition-all duration-300 backdrop-blur-md cursor-pointer z-10 flex items-center justify-center shadow-lg active:scale-90"
          aria-label="Next episode"
          style={{ opacity: arrowOpacity, pointerEvents: arrowPointerEvents, x: rightArrowX }}
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </motion.button>
      </div>
    </div>
  );
}
