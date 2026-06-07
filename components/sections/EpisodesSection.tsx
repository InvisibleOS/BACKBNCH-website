import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import { EPISODES } from '@/data/episodes';

// Runtimes per episode (parallel to EPISODES order).
const DURATIONS = ['52 min', '47 min', '1h 04m', '38 min', '58 min'];

/** The catalogue — an interactive list of every episode with a rich row hover. */
export default function EpisodesSection() {
  return (
    <Section className="flex flex-col items-center border-t border-white/[0.04]">
      <div className="w-full max-w-6xl">
        {/* Heading row */}
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow className="mb-4">The Catalogue</Eyebrow>
            <h3 className="text-3xl sm:text-5xl font-bold text-white tracking-tighter leading-[0.95]">
              Every conversation,<br className="hidden sm:block" /> on the record.
            </h3>
          </div>
          <a
            href="#all"
            className="group inline-flex items-center gap-2 self-start text-xs font-semibold uppercase tracking-widest text-white/60 transition-colors hover:text-brand-orange sm:self-auto"
          >
            All episodes
            <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Episode list */}
        <ul className="border-t border-white/10">
          {EPISODES.map((ep, i) => (
            <li key={ep.title}>
              <a
                href={ep.url}
                target="_blank"
                rel="noreferrer"
                className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-white/10 py-6 transition-colors duration-300 hover:bg-white/[0.02] sm:gap-8 sm:py-7"
              >
                {/* Left accent bar grows in on hover */}
                <span className="absolute left-0 top-1/2 h-0 w-[2px] -translate-y-1/2 rounded-full bg-brand-orange transition-all duration-300 group-hover:h-3/5" />

                {/* Episode number */}
                <span className="pl-3 font-mono text-2xl font-bold tabular-nums text-white/20 transition-colors duration-300 group-hover:text-brand-orange sm:pl-6 sm:text-4xl">
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Title + guest */}
                <div className="min-w-0 transition-transform duration-300 group-hover:translate-x-1">
                  <h4 className="truncate text-lg font-bold tracking-tight text-white/60 transition-colors duration-300 group-hover:text-white sm:text-2xl">{ep.title}</h4>
                  <p className="mt-1 truncate font-mono text-[11px] uppercase tracking-widest text-white/40 sm:text-xs">
                    {ep.subtitle} · {ep.volume}
                  </p>
                </div>

                {/* Duration + play */}
                <div className="flex items-center gap-4 sm:gap-6">
                  <span className="hidden font-mono text-xs uppercase tracking-widest text-white/40 sm:block">
                    {DURATIONS[i % DURATIONS.length]}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-300 group-hover:border-brand-orange group-hover:bg-brand-orange sm:h-12 sm:w-12">
                    <svg className="h-4 w-4 translate-x-px" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
