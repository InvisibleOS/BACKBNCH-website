'use client';

import { useState, useEffect } from 'react';
import { Play, Volume2, SkipForward, SkipBack } from 'lucide-react';

interface MusicCardProps {
  title: string;
  subtitle: string;
  volume: string;
  url: string;
  circleColors: string[];
  onNext?: () => void;
  onPrev?: () => void;
}

export default function MusicCard({ title, subtitle, volume, url, circleColors, onNext, onPrev }: MusicCardProps) {
  const [progress, setProgress] = useState(0); // 0 initial value for SSR safety

  // Randomize initial progress on client-side mount
  useEffect(() => {
    const randomStart = Math.floor(Math.random() * 95) + 15; // Random start between 15s and 110s
    requestAnimationFrame(() => {
      setProgress(randomStart);
    });
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const percentage = (progress / 135) * 100;

  // Artwork colors, with sensible orange fallbacks for SSR / missing data.
  const sideColor = circleColors[0] || '#d4620a';
  const centerColor = circleColors[1] || '#ff7b24';

  return (
    <div className="w-full max-w-[420px] h-(--hero-card-h,680px) rounded-[48px] p-[1.5px] bg-gradient-to-br from-white/15 via-white/5 to-brand-orange/20 shadow-2xl relative overflow-hidden mx-auto select-none">
      <div className="w-full h-full rounded-[47px] bg-black/50 backdrop-blur-3xl flex flex-col justify-between p-6 select-none overflow-hidden text-white relative z-10">
        {/* Subtle Glass Light Sweep & Reflections */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.06] pointer-events-none" />
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-brand-orange/10 rounded-full blur-[80px] pointer-events-none" />
        
        {/* Frosted Glass Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }} />

        {/* Vector Circles Artwork Container */}
        <div className="relative aspect-square w-full rounded-[32px] bg-[#090d16] overflow-hidden flex items-center justify-center mb-2 z-10">
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-[#060c18] to-[#121c32]" />

          {/* Visualizer waves overlay (glowing behind shapes) */}
          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-brand-orange/10 to-transparent pointer-events-none" />

          {/* Left + right orange circles (mirrored offsets) */}
          {['-translate-x-[40%]', 'translate-x-[40%]'].map((shift) => (
            <div
              key={shift}
              className={`absolute w-40 h-40 rounded-full opacity-75 ${shift}`}
              style={{ backgroundColor: sideColor }}
            />
          ))}

          {/* Center bright orange circle */}
          <div
            className="absolute w-44 h-44 rounded-full z-10 flex items-center justify-center"
            style={{
              backgroundColor: centerColor,
              boxShadow: `0 0 50px ${centerColor}66`
            }}
          >
            <Volume2 className="h-12 w-12 text-white opacity-80" />
          </div>
        </div>

        {/* Metadata, Title, and Subtitle Group */}
        <div className="flex flex-col w-full z-10">
          <div className="flex justify-between items-center text-[10px] font-mono text-white/80 uppercase tracking-widest mb-4 px-1">
            <span>Podcast</span>
            <span>{volume}</span>
          </div>
          <h3 className="text-2xl font-semibold text-white tracking-tight leading-none px-1 line-clamp-2 overflow-hidden">
            {title}
          </h3>
          <p className="text-sm font-medium text-white/80 px-1 leading-none mt-2">
            {subtitle}
          </p>
        </div>

        {/* Play Progress Slider */}
        <div className="w-full px-1 mt-4 z-10">
          <div className="h-[3px] w-full bg-white/20 rounded-full overflow-hidden relative">
            <div
              className="h-full bg-white rounded-full transition-all duration-300 ease-linear"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <div className="flex justify-between items-center text-[10px] font-mono text-white/40 mt-2">
            <span>{formatTime(progress)}</span>
            <span>02:15</span>
          </div>
        </div>

        {/* Remodeled Player Controls */}
        <div className="flex items-center justify-center gap-12 w-full px-1 mb-6 z-10">
          {/* Previous Button */}
          <button
            onClick={onPrev}
            className="p-3.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white transition-all duration-300 backdrop-blur-md cursor-pointer flex items-center justify-center shadow-md active:scale-95 hover:scale-[1.05]"
            aria-label="Previous track"
          >
            <SkipBack className="h-4 w-4 fill-white text-white" />
          </button>

          {/* Play/Pause Button */}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4.5 rounded-full bg-white text-black hover:bg-neutral-100 transition-all duration-300 cursor-pointer flex items-center justify-center shadow-lg active:scale-95 hover:scale-[1.05]"
            aria-label="Watch episode"
          >
            <Play className="h-5 w-5 fill-black text-black translate-x-0.5" />
          </a>

          {/* Next Button */}
          <button
            onClick={onNext}
            className="p-3.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white transition-all duration-300 backdrop-blur-md cursor-pointer flex items-center justify-center shadow-md active:scale-95 hover:scale-[1.05]"
            aria-label="Next track"
          >
            <SkipForward className="h-4 w-4 fill-white text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
