'use client';

import { ReactNode } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface GlassPanelProps {
  children?: ReactNode;
}

export default function GlassPanel({ children }: GlassPanelProps) {
  return (
    <div className="w-full h-(--hero-card-h,680px) rounded-[48px] bg-black/50 backdrop-blur-3xl border border-white/10 shadow-2xl flex flex-col justify-between p-10 lg:p-12 select-none overflow-hidden text-white text-left">
      {children || (
        <>
          {/* Top Row: Badge & Accent */}
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-[0.2em] text-brand-orange font-bold">
              <Sparkles className="h-3.5 w-3.5 text-brand-orange animate-pulse" />
              Podcast & Insights
            </span>
            <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
              EPISODES WEEKLY
            </span>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col justify-center my-8">
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight leading-[1.15] mb-6 font-syne">
              Uncensored conversations with <span className="text-brand-orange">builders & operators</span>.
            </h2>
            <p className="text-sm lg:text-base text-white/60 leading-relaxed font-normal mb-8 max-w-xl">
              We dissect how the fastest-growing discovery channels are shifting from ten blue links to single answers. Tune in to understand how entities, authority, and structured knowledge drive visibility in the age of ChatGPT, Gemini, and Perplexity.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-6 border-t border-white/20 pt-6 max-w-md">
              <div>
                <p className="text-2xl font-bold font-sans text-white">4.9★</p>
                <p className="text-[10px] font-mono uppercase tracking-wider text-white/40">Rating on Spotify</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-sans text-white">50K+</p>
                <p className="text-[10px] font-mono uppercase tracking-wider text-white/40">Active Listeners</p>
              </div>
            </div>
          </div>

          {/* Bottom Row: Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#problem"
              className="px-6 py-4 rounded-full bg-white text-black font-semibold text-sm flex items-center justify-center gap-2 hover:bg-brand-orange hover:text-white transition-all duration-300 shadow-md cursor-pointer"
            >
              Explore More
              <ArrowRight className="h-4 w-4 text-black" />
            </a>
            <a
              href="#problem"
              className="px-6 py-4 rounded-full bg-white text-black font-semibold text-sm flex items-center justify-center gap-2 hover:bg-brand-orange hover:text-white transition-all duration-300 shadow-md cursor-pointer"
            >
              Available on YouTube
              <ArrowRight className="h-4 w-4 text-black" />
            </a>
          </div>
        </>
      )}
    </div>
  );
}
