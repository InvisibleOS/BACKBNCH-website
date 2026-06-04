'use client';

import { useState, useEffect, useRef } from 'react';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const SECTIONS = [
  {
    id: "hero",
    label: "Now Streaming",
    title: "Conversations that don't fit in a headline.",
    highlight: "Welcome to BACKBNCH.",
    description:
      "Raw, unscripted conversations with the people actually building the future — founders, misfits, and operators who'd rather ship than speak on panels. No talking points. No sponsors. Just the stuff nobody says on the record.",
    color: "from-[#d4620a]/10 to-transparent",
  },
  {
    id: "problem",
    label: "The Problem",
    title: "Your customers have stopped searching.",
    highlight: "They have started asking.",
    description:
      "They ask ChatGPT. They ask Gemini. They ask Perplexity. And these systems do not return ten blue links. They return one answer. Maybe two. Maybe three. If your business is not in that answer, you do not exist in the fastest-growing discovery channel on the planet.",
    color: "from-[#d4620a]/8 to-transparent",
  },
  {
    id: "solution",
    label: "The Result",
    title: "We build",
    highlight: "AI Presence.",
    description:
      "We make your business understandable, credible, and recommendable to the AI systems that are increasingly deciding which companies people choose.",
    color: "from-[#d4620a]/6 to-transparent",
  },
  {
    id: "methodology",
    label: "The Strategi Methodology",
    title: "Six phases.",
    highlight: "Engineered presence.",
    description:
      "Diagnose. Define. Structure. Build. Reinforce. Monitor. This is how AI Presence is engineered. Every engagement starts with a diagnostic — we query AI systems about your business and category, documenting what AI says, what it misses, and what it gets wrong.",
    color: "from-[#d4620a]/5 to-transparent",
  },
  {
    id: "differentiator",
    label: "How We Think Differently",
    title: "This is not SEO",
    highlight: "with a new name.",
    description:
      "The market is full of companies rebranding yesterday's tactics under today's buzzwords. Strategi was built from the ground up around a single reality: AI systems are becoming the primary discovery mechanism for businesses. Entity, not keywords. Authority, not volume. Systems, not campaigns. Representation, not traffic.",
    color: "from-[#d4620a]/4 to-transparent",
  },
  {
    id: "contact",
    label: "Start a Diagnostic",
    title: "Find out if AI",
    highlight: "recommends you.",
    description:
      "SEO gets you on the list. Strategi gets you in the answer. Visibility is no longer about being found. It is about being chosen. Start with a diagnostic to see what AI says about your business today.",
    color: "from-[#d4620a]/8 to-transparent",
  },
];
const FADE_DURATION = 1000; // in milliseconds

function SectionCard({ section, index }: { section: typeof SECTIONS[number]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={section.id}
      className={`min-h-screen flex justify-center px-6 sm:px-12 lg:px-24 ${index === 0 ? 'items-start pt-8 pb-12' : 'items-center'
        }`}
    >
      <div
        ref={ref}
        className={`w-full bg-gradient-to-b ${section.color} rounded-3xl p-6 sm:p-16 lg:p-24 border border-white/[0.04]`}
      >
        {/* Label - Fade in statically (no movement) */}
        <p
          className={`text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-[#d4620a] mb-8 lg:mb-12 transition-opacity ease-out ${isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          style={{
            transitionDuration: `${FADE_DURATION}ms`,
            transitionDelay: `${Math.round(FADE_DURATION * 0.7)}ms`,
          }}
        >
          {section.label}
        </p>

        {/* Title - Fade in with displacement */}
        <h2
          className={`text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-2 tracking-tighter leading-[0.9] break-words transition-all ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          style={{
            transitionDuration: `${FADE_DURATION}ms`,
            transitionDelay: `${Math.round(FADE_DURATION * 0.2)}ms`,
          }}
        >
          {section.title}
        </h2>

        {/* Highlight - Fade in with displacement */}
        {section.highlight && (
          <h2
            className={`text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#d4620a] mb-10 lg:mb-14 tracking-tighter leading-[0.9] break-words transition-all ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            style={{
              transitionDuration: `${FADE_DURATION}ms`,
              transitionDelay: `${Math.round(FADE_DURATION * 0.4)}ms`,
            }}
          >
            {section.highlight}
          </h2>
        )}

        {/* Description - Fade in statically (no movement) */}
        <p
          className={`text-lg lg:text-xl text-white/40 leading-relaxed font-light max-w-3xl transition-opacity ease-out ${isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          style={{
            transitionDuration: `${FADE_DURATION}ms`,
            transitionDelay: `${Math.round(FADE_DURATION * 0.7)}ms`,
          }}
        >
          {section.description}
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050505]">
      <NavBar />

      {/* Content sections */}
      <main className="relative z-0">
        {SECTIONS.map((section, i) => (
          <SectionCard key={section.id} section={section} index={i} />
        ))}
      </main>

      <Footer />
    </div>
  );
}
