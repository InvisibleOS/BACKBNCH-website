import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import { SPEAKERS } from '@/data/content';

/** Speakers showcase — a responsive grid of operator/guest cards. */
export default function SpeakersSection() {
  return (
    <Section className="flex flex-col items-center border-t border-white/[0.02]">
      <div className="w-full max-w-7xl mb-16 text-center">
        <Eyebrow className="mb-4">Operator Perspectives</Eyebrow>
        <h3 className="text-3xl sm:text-5xl font-bold text-white tracking-tighter mb-4">
          The Voice of Machine Visibility.
        </h3>
        <p className="text-lg text-white/30 font-light max-w-xl mx-auto leading-relaxed">
          Hear how leading technical and growth operators are engineering presence and measuring success in the era of synthesized discovery.
        </p>
      </div>

      {/* Card showcase grid */}
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SPEAKERS.map((speaker) => (
          <div key={speaker.name} className="group flex flex-col rounded-3xl bg-gradient-to-b from-brand-orange/6 to-transparent border border-white/[0.04] p-8 transition-transform hover:scale-[1.02]">
            <div className="aspect-square rounded-full border border-brand-orange/10 bg-[#090d16] mb-8 overflow-hidden flex items-center justify-center">
              {/* Placeholder for avatars */}
              <svg className="w-1/2 h-1/2 text-brand-orange/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
              </svg>
            </div>
            <h4 className="text-xl font-bold text-white tracking-tight leading-snug mb-1">{speaker.name}</h4>
            <p className="text-xs font-mono text-white/50 uppercase tracking-widest mb-6 leading-relaxed">{speaker.title}</p>
            <p className="text-sm text-white/40 font-light leading-relaxed mb-8 flex-1">{speaker.topic}</p>

            {/* Action Link */}
            <a href="#listen" className="mt-auto group text-xs font-semibold uppercase tracking-widest text-brand-orange flex items-center gap-2 transition hover:text-white"
               style={{ '--hover-shadow': '0 0 0.5px currentColor, 0 0 0.5px currentColor' } as React.CSSProperties}>
              <span className="transition-all duration-300 group-hover:[text-shadow:var(--hover-shadow)]">
                Watch Episode
              </span>
              <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
