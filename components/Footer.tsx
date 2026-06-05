'use client';

import { cn } from '@/lib/cn';
import { useInView } from '@/lib/useInView';

const COLUMNS = [
    {
        heading: 'Explore',
        links: [
            { label: 'Episodes', href: '#episodes' },
            { label: 'Guests', href: '#guests' },
            { label: 'About', href: '#about' },
            { label: 'Newsletter', href: '#newsletter' },
        ],
    },
    {
        heading: 'Listen',
        links: [
            { label: 'YouTube', href: '#' },
            { label: 'Spotify', href: '#' },
            { label: 'Apple Podcasts', href: '#' },
        ],
    },
    {
        heading: 'Follow',
        links: [
            { label: 'Instagram', href: '#' },
            { label: 'Twitter / X', href: '#' },
            { label: 'LinkedIn', href: '#' },
        ],
    },
];

const LEGAL_LINKS = [
    { label: 'Terms', href: '#' },
    { label: 'Privacy', href: '#' },
];

export default function Footer() {
    // Reveal the CTA band and the giant wordmark as each scrolls into view.
    const [ctaRef, ctaIn] = useInView<HTMLDivElement>(0.2);
    const [markRef, markIn] = useInView<HTMLHeadingElement>(0.15);

    return (
        <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#050505]">
            {/* Ambient brand glow */}
            <div className="pointer-events-none absolute -bottom-48 left-1/2 h-96 w-[85%] -translate-x-1/2 rounded-full bg-brand-orange/10 blur-[150px]" />

            <div className="relative mx-auto max-w-7xl px-6 md:px-12">
                {/* ── CTA band ── */}
                <div
                    ref={ctaRef}
                    className={cn(
                        'flex flex-col gap-10 border-b border-white/10 py-16 transition-all duration-1000 ease-out md:flex-row md:items-end md:justify-between md:py-24',
                        ctaIn ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    )}
                >
                    <div className="max-w-2xl">
                        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-brand-orange">Got a story worth telling?</p>
                        <h2 className="text-4xl font-bold leading-[0.95] tracking-tighter text-white sm:text-6xl">
                            Pull up to the <span className="text-brand-orange">backbnch.</span>
                        </h2>
                        <p className="mt-5 max-w-lg text-base font-light leading-relaxed text-white/40">
                            We save the best seat in the house for unfiltered founders, operators, and characters. Pitch yourself — we&rsquo;re always listening.
                        </p>
                    </div>
                    <a
                        href="#apply"
                        className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-white px-7 py-4 text-sm font-semibold uppercase tracking-widest text-black transition-colors hover:bg-brand-orange hover:text-white"
                    >
                        Apply to be a guest
                        <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>

                {/* ── Link columns ── */}
                <div className="grid grid-cols-2 gap-10 py-16 sm:grid-cols-4">
                    {/* Brand blurb */}
                    <div className="col-span-2 sm:col-span-1">
                        <div className="flex items-center gap-2.5">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/logo.jpeg" alt="" className="h-9 w-9 rounded-full" />
                            <span className="font-syne text-xl font-bold tracking-tight text-brand-orange">BACKBNCH</span>
                        </div>
                        <p className="mt-4 text-sm font-light leading-relaxed text-white/35">
                            Unfiltered conversations with the people building, breaking, and running things.
                        </p>
                    </div>

                    {COLUMNS.map((col) => (
                        <div key={col.heading}>
                            <h3 className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">{col.heading}</h3>
                            <ul className="space-y-3">
                                {col.links.map((link) => (
                                    <li key={link.label}>
                                        <a href={link.href} className="text-sm text-white/55 transition-colors hover:text-white">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* ── Giant wordmark ── */}
                <h2
                    ref={markRef}
                    className={cn(
                        'select-none pt-8 text-center text-[16vw] font-extrabold leading-[0.8] tracking-tighter text-white transition-all duration-1000 ease-out lg:text-[13vw]',
                        markIn ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                    )}
                >
                    BACKBNCH<span className="text-brand-orange">.</span>
                </h2>

                {/* ── Bottom bar ── */}
                <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 sm:flex-row">
                    <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/25">
                        © {new Date().getFullYear()} Backbnch. All rights reserved.
                    </p>
                    <div className="flex items-center gap-5">
                        {LEGAL_LINKS.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/30 transition-colors hover:text-white/60"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
