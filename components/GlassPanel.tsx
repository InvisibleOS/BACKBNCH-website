'use client';

import { ReactNode } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const YoutubeIcon = (props: React.ComponentPropsWithoutRef<'svg'>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

interface GlassPanelProps {
  children?: ReactNode;
}

export default function GlassPanel({ children }: GlassPanelProps) {
  return (
    <div className="w-full h-(--hero-card-h,680px) rounded-[48px] p-[1.5px] bg-gradient-to-br from-white/15 via-white/5 to-brand-orange/20 shadow-2xl relative overflow-hidden">
      <div className="w-full h-full rounded-[47px] bg-black/50 backdrop-blur-3xl flex flex-col justify-between p-10 lg:p-12 select-none overflow-hidden text-white text-left relative z-10">
        {/* Subtle Glass Light Sweep & Reflections */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.06] pointer-events-none" />
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-brand-orange/10 rounded-full blur-[80px] pointer-events-none" />

        {/* Frosted Glass Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }} />

        {children || (
          <>
            {/* Top Row: Badge & Accent */}
            <div className="flex justify-between items-center z-10">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/[0.02] border border-brand-orange/30 text-[9px] font-mono uppercase tracking-[0.2em] text-brand-orange font-semibold">
                {/* <Sparkles className="h-3 w-3 text-brand-orange animate-pulse" /> */}
                Podcast & Insights
              </span>
              <span className="text-[9px] font-mono text-white/40 uppercase tracking-[0.25em]">
                EPISODES WEEKLY
              </span>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col justify-center my-8 z-10">
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight leading-[1.15] mb-5 font-syne text-white/95">
                Uncensored conversations with <span className="text-brand-orange transition-colors duration-500">builders & operators</span>.
              </h2>
              <p className="text-xs lg:text-sm text-white/60 leading-relaxed font-normal mb-8 max-w-lg">
                We dissect how the fastest-growing discovery channels are shifting from ten blue links to single answers. Tune in to understand how entities, authority, and structured knowledge drive visibility in the age of ChatGPT, Gemini, and Perplexity.
              </p>

              {/* Elegant divider */}
              <div className="w-full h-[1px] bg-gradient-to-r from-white/15 via-white/5 to-transparent my-6" />

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-2 gap-8 max-w-md">
                <div>
                  <p className="text-2xl font-bold font-syne text-white/90 tracking-tight flex items-baseline gap-1">
                    4.9<span className="text-xs text-brand-orange">★</span>
                  </p>
                  <p className="text-[9px] font-mono uppercase tracking-wider text-white/40 mt-1">Rating on Spotify</p>
                </div>
                <div>
                  <p className="text-2xl font-bold font-syne text-white/90 tracking-tight">50K+</p>
                  <p className="text-[9px] font-mono uppercase tracking-wider text-white/40 mt-1">Active Listeners</p>
                </div>
              </div>
            </div>

            {/* Bottom Row: Actions */}
            <div className="flex flex-col sm:flex-row gap-4 z-10">
              <a
                href="#episodes"
                className="flex-1 sm:flex-initial px-6 py-3.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-brand-orange hover:text-white transition-all duration-300 shadow-md cursor-pointer group/btn"
              >
                Explore Episodes
                <ArrowRight className="h-3.5 w-3.5 text-current transition-transform duration-300 group-hover/btn:translate-x-1" />
              </a>
              <a
                href="#episodes"
                className="flex-1 sm:flex-initial px-6 py-3.5 rounded-full bg-white/5 text-white border border-white/10 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group/btn2"
              >
                Watch on YouTube
                <YoutubeIcon className="h-3.5 w-3.5 text-white/70 group-hover/btn2:text-red-500 transition-colors duration-300" />
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
