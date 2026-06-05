'use client';

import { cn } from '@/lib/cn';
import { useInView } from '@/lib/useInView';

const FOOTER_COLUMNS = [
    {
        heading: 'Contact',
        links: [
            { label: 'hello@backbench.live', href: 'mailto:hello@backbench.live' },
        ],
        cta: { label: 'Start Listening →', href: '#' },
    },
    {
        heading: 'Navigation',
        links: [
            { label: 'Speakers', href: '#speakers' },
            { label: 'Venues', href: '#venues' },
            { label: 'About', href: '#about' },
            { label: 'Episodes', href: '#episodes' },
            { label: 'FAQ', href: '#faq' },
            { label: 'Contact', href: '#contact' },
        ],
    },
    {
        heading: 'Network',
        links: [
            { label: 'LinkedIn', href: '#' },
            { label: 'Twitter / X', href: '#' },
            { label: 'Instagram', href: '#' },
            { label: 'YouTube', href: '#' },
        ],
    },
    {
        heading: 'Shows',
        links: [
            { label: 'Latest Episode', href: '#' },
            { label: 'Most Popular', href: '#' },
            { label: 'Guest Directory', href: '#' },
            { label: 'Clips', href: '#' },
        ],
    },
    {
        heading: 'Topics',
        links: [
            { label: 'AI & Tech', href: '#' },
            { label: 'Startups', href: '#' },
            { label: 'Design', href: '#' },
            { label: 'Culture', href: '#' },
            { label: 'Open Source', href: '#' },
            { label: 'Founder Stories', href: '#' },
        ],
    },
];

const LEGAL_LINKS = [
    { label: 'Sitemap', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Privacy', href: '#' },
];

export default function Footer() {
    // Reveal the brand wordmark and the link columns as each scrolls into view.
    const [textRef, isVisible] = useInView<HTMLHeadingElement>(0.3);
    const [columnsRef, isColVisible] = useInView<HTMLDivElement>(0.1);

    return (
        <footer className="bg-[#050505] border-t border-white/[0.06]">
            {/* Link columns */}
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 pb-12 md:pt-24 md:pb-16">
                <div ref={columnsRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-8">
                    {FOOTER_COLUMNS.map((col, colIdx) => (
                        <div key={col.heading}>
                            <h3
                                className={cn(
                                    'text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-brand-orange mb-6 transition-all duration-700 ease-out',
                                    isColVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                )}
                                style={{ transitionDelay: `${colIdx * 100}ms` }}
                            >
                                {col.heading}
                            </h3>
                            <ul className="space-y-3">
                                {col.links.map((link, linkIdx) => (
                                    <li
                                        key={link.label}
                                        className={cn(
                                            'transition-all duration-700 ease-out',
                                            isColVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                        )}
                                        style={{ transitionDelay: `${colIdx * 100 + (linkIdx + 1) * 75}ms` }}
                                    >
                                        <a
                                            href={link.href}
                                            className="text-sm text-white/50 hover:text-white transition-colors font-normal block"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            {col.cta && (
                                <div
                                    className={cn(
                                        'transition-all duration-700 ease-out',
                                        isColVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                    )}
                                    style={{ transitionDelay: `${colIdx * 100 + (col.links.length + 1) * 75}ms` }}
                                >
                                    <a
                                        href={col.cta.href}
                                        className="inline-block mt-6 px-5 py-2.5 border border-white/20 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-white/70 hover:text-white hover:border-white/40 transition-colors"
                                    >
                                        {col.cta.label}
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom brand bar */}
            <div className="mx-auto px-6 md:px-12 pb-8 md:pb-12">
                <div className="border-t border-white/10 pt-8 md:pt-12">
                    <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
                        {/* Large brand name */}
                        <h2
                            ref={textRef}
                            className={cn(
                                'text-[15vw] sm:text-[14vw] lg:text-[10vw] font-extrabold tracking-tighter leading-[0.8] text-white select-none transition-all duration-1000 ease-out',
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                            )}
                        >
                            BACKBNCH
                            <span className="text-brand-orange">.</span>
                        </h2>

                        {/* Legal links + copyright */}
                        <div
                            className={cn(
                                'flex flex-col items-start lg:items-end gap-3 pb-2 lg:pb-4 shrink-0 transition-all duration-1000 ease-out',
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            )}
                        >
                            <div className="flex items-center gap-4">
                                {LEGAL_LINKS.map((link, i) => (
                                    <span key={link.label} className="flex items-center gap-4">
                                        <a
                                            href={link.href}
                                            className="text-[10px] font-mono uppercase tracking-[0.15em] text-white/30 hover:text-white/60 transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                        {i < LEGAL_LINKS.length - 1 && (
                                            <span className="text-white/10">·</span>
                                        )}
                                    </span>
                                ))}
                            </div>
                            <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-white/20">
                                © {new Date().getFullYear()} Backbench. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
