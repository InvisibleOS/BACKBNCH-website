import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import { cn } from '@/lib/cn';

// `featured` cards render as a solid brand-orange tile and span two columns.
const PLATFORMS = [
  { name: 'YouTube', tag: 'Watch on', href: '#', featured: true },
  { name: 'Spotify', tag: 'Listen on', href: '#', featured: false },
  { name: 'Apple Podcasts', tag: 'Subscribe on', href: '#', featured: false },
];

const ArrowUpRight = () => (
  <svg
    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H8M17 7V16" />
  </svg>
);

/** "Tune In" — a bento of a newsletter signup + listening-platform tiles. */
export default function ListenSection() {
  return (
    <Section className="flex flex-col items-center border-t border-white/[0.04]">
      <div className="w-full max-w-6xl">
        <div className="mb-12 text-center">
          <Eyebrow className="mb-4">Tune In</Eyebrow>
          <h3 className="text-3xl sm:text-5xl font-bold text-white tracking-tighter">
            Find us wherever you listen.
          </h3>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[210px]">
          {/* Newsletter — large tile */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:col-span-2 lg:row-span-2">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-orange/15 blur-3xl" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-brand-orange">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                The Newsletter
              </span>
              <h4 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Never miss a drop.
              </h4>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/45">
                New episodes, surprise guest drops, and the stuff too unfiltered for the feed — straight to your inbox.
              </p>
            </div>
            <div className="relative mt-8 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="you@email.com"
                className="flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/30 transition-colors focus:border-brand-orange focus:outline-none"
              />
              <button
                type="button"
                className="rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-[#e8731a]"
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Platform tiles */}
          {PLATFORMS.map((p) => (
            <a
              key={p.name}
              href={p.href}
              className={cn(
                'group relative flex flex-col justify-between overflow-hidden rounded-3xl p-7 transition-all duration-300',
                p.featured
                  ? 'bg-brand-orange text-white sm:col-span-2 hover:bg-[#e8731a]'
                  : 'border border-white/10 bg-white/[0.02] text-white hover:border-white/25 hover:bg-white/[0.04]'
              )}
            >
              <div className="flex items-center justify-between">
                <span className={cn('font-mono text-[10px] uppercase tracking-[0.2em]', p.featured ? 'text-white/80' : 'text-white/40')}>
                  {p.tag}
                </span>
                <ArrowUpRight />
              </div>
              <span className="text-2xl font-bold tracking-tight">{p.name}</span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
