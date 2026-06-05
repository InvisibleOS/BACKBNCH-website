import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import { SPEAKERS, type Speaker } from '@/data/content';

/** A single contact/guest card. Static — no hover resize; only the marquee
 *  pauses on hover (handled by the parent). */
function SpeakerCard({ speaker, ep, duplicate = false }: { speaker: Speaker; ep: number; duplicate?: boolean }) {
  return (
    <div
      aria-hidden={duplicate || undefined}
      className="relative mr-6 flex w-[300px] shrink-0 flex-col items-center overflow-hidden rounded-3xl bg-brand-orange p-8 text-center"
    >
      {/* Episode marker */}
      <div className="relative z-10 mb-6 flex w-full items-center justify-between">
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/70">
          EP / {String(ep).padStart(2, '0')}
        </span>
        <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
      </div>

      {/* Avatar: solid black circle to contrast the orange card */}
      <div className="relative z-10 mb-7 rounded-full bg-white/25 p-0.5 shadow-[0_10px_28px_-8px_rgba(0,0,0,0.55)]">
        <div className="relative flex aspect-square w-28 items-center justify-center overflow-hidden rounded-full bg-black">
          {/* Placeholder for avatars */}
          <svg className="relative h-1/2 w-1/2 text-white/90" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
          </svg>
        </div>
      </div>

      <h4 className="relative z-10 text-xl font-bold text-white tracking-tight leading-snug mb-2 [text-shadow:0_1px_8px_rgba(0,0,0,0.25)]">{speaker.name}</h4>
      <p className="relative z-10 text-[11px] font-mono text-white/80 uppercase tracking-widest leading-relaxed">{speaker.title}</p>
      <p className="relative z-10 mt-5 flex-1 text-sm text-white/75 font-light leading-relaxed">{speaker.topic}</p>

      {/* Actions: Read More button above the Watch Episode link */}
      <div className="relative z-10 mt-7 flex w-full flex-col items-center gap-4 border-t border-white/20 pt-5">
        <a
          href="#read"
          className="block w-full rounded-full bg-white py-2.5 text-center text-xs font-semibold uppercase tracking-widest text-[#8a2f08] transition-colors duration-300 hover:bg-white/90"
        >
          Read More
        </a>
        <a href="#listen" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/90 transition-colors hover:text-white">
          Watch Episode
          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}

/** Contacts showcase — an infinite slow leftward marquee that pauses on hover. */
export default function SpeakersSection() {
  // Build two identical halves so the marquee's -50% translate loops seamlessly.
  // Each half repeats the contacts enough to stay wider than the viewport (even
  // ultrawide) before it wraps. EP numbers track each contact's real position.
  const half = [...SPEAKERS, ...SPEAKERS];
  const loop = [...half, ...half];

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

      {/* Looping marquee — scrolls left forever, pauses while hovered
          (see .marquee-* in globals.css). */}
      <div className="marquee-mask relative w-full overflow-hidden py-4">
        <div className="marquee-track flex w-max">
          {loop.map((speaker, i) => (
            <SpeakerCard
              key={i}
              speaker={speaker}
              ep={(i % SPEAKERS.length) + 1}
              duplicate={i >= SPEAKERS.length}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
