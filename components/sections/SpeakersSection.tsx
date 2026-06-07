import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import { SPEAKERS, type Speaker } from '@/data/content';

/** A single contact/guest card — a full-bleed portrait with a blurred bottom
 *  strip carrying the name, designation, and a Read More button. Static — only
 *  the marquee pauses on hover (handled by the parent). */
function SpeakerCard({ speaker, duplicate = false }: { speaker: Speaker; duplicate?: boolean }) {
  return (
    <div
      aria-hidden={duplicate || undefined}
      className="relative mr-6 h-[440px] w-[300px] shrink-0 overflow-hidden rounded-3xl"
    >
      {/* Portrait fills the entire card */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={speaker.avatar}
        alt={speaker.name}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />

      {/* Bottom quarter: blurred strip so the text stays readable over the photo */}
      <div className="absolute inset-x-0 bottom-0 flex h-1/4 flex-col justify-center gap-2 border-t-4 border-brand-orange bg-black/25 px-5 backdrop-blur-md">
        <div>
          <h4 className="truncate text-base font-bold leading-tight text-white">{speaker.name}</h4>
          <p className="mt-0.5 truncate text-[10px] font-mono uppercase tracking-widest text-white/70">{speaker.title}</p>
        </div>
        <a
          href="#read"
          className="inline-flex w-fit items-center gap-1 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-black transition-colors duration-300 hover:bg-brand-orange hover:text-white"
        >
          Read More
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
              duplicate={i >= SPEAKERS.length}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
