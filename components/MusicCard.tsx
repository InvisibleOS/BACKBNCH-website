'use client';

import { useState, useEffect } from 'react';
import { Play, Pause, Volume2, SkipForward, SkipBack } from 'lucide-react';

interface MusicCardProps {
  title: string;
  subtitle: string;
  volume: string;
  circleColors: string[];
  onNext?: () => void;
  onPrev?: () => void;
}

export default function MusicCard({ title, subtitle, volume, circleColors, onNext, onPrev }: MusicCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0 initial value for SSR safety

  // Randomize initial progress on client-side mount
  useEffect(() => {
    const randomStart = Math.floor(Math.random() * 95) + 15; // Random start between 15s and 110s
    requestAnimationFrame(() => {
      setProgress(randomStart);
    });
  }, []);

  // Simulate progress playback
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 135 ? 0 : prev + 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

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
    <div className="relative w-full max-w-[420px] h-(--hero-card-h,680px) p-6 rounded-[48px] bg-black/50 backdrop-blur-md text-white shadow-2xl border border-white/10 flex flex-col justify-between mx-auto select-none">
      {/* Vector Circles Artwork Container */}
      <div className="relative aspect-square w-full rounded-[32px] bg-[#090d16] overflow-hidden flex items-center justify-center mb-2">
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
          {/* Pulsing indicator when playing */}
          {isPlaying && (
            <span className="absolute inset-0 rounded-full border-4 border-white/20 animate-ping" />
          )}
          <Volume2 className={`h-12 w-12 text-white ${isPlaying ? 'animate-bounce' : 'opacity-80'}`} />
        </div>
      </div>

      {/* Metadata, Title, and Subtitle Group */}
      <div className="flex flex-col w-full">
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
      <div className="w-full px-1 mt-4">
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
      <div className="flex items-center justify-center gap-12 w-full px-1 mb-6">
        {/* Previous Button */}
        <button
          onClick={onPrev}
          className="p-3.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white transition-all duration-300 backdrop-blur-md cursor-pointer flex items-center justify-center shadow-md active:scale-95 hover:scale-[1.05]"
          aria-label="Previous track"
        >
          <SkipBack className="h-4 w-4 fill-white text-white" />
        </button>

        {/* Play/Pause Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-4.5 rounded-full bg-white text-black hover:bg-neutral-100 transition-all duration-300 cursor-pointer flex items-center justify-center shadow-lg active:scale-95 hover:scale-[1.05]"
          aria-label={isPlaying ? "Pause stream" : "Play stream"}
        >
          {isPlaying ? (
            <Pause className="h-5 w-5 fill-black text-black" />
          ) : (
            <Play className="h-5 w-5 fill-black text-black translate-x-0.5" />
          )}
        </button>

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
  );
}
