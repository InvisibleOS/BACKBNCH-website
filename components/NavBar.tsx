'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLenis } from 'lenis/react';
import { cn } from '@/lib/cn';
import GlassSurface from './GlassSurface';

const NAV_ITEMS = [
    { id: 'speakers', label: 'Speakers' },
    { id: 'venues', label: 'Venues' },
    { id: 'about', label: 'About' },
];

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const lenis = useLenis();

    useEffect(() => {
        const frame = requestAnimationFrame(() => {
            setIsMounted(true);
        });
        return () => cancelAnimationFrame(frame);
    }, []);

    useLenis((lenisInstance) => {
        if (typeof window === 'undefined') return;
        const scroll = lenisInstance.scroll;
        const threshold = window.innerWidth >= 1024 ? window.innerHeight * 3 : 10;
        setIsScrolled(scroll > threshold);
    });

    const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (window.location.pathname === '/') {
            e.preventDefault();
            if (lenis) {
                lenis.scrollTo(0);
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    };

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
            lenis?.stop();
        } else {
            document.body.style.overflow = '';
            lenis?.start();
        }
        return () => {
            document.body.style.overflow = '';
            lenis?.start();
        };
    }, [isMobileMenuOpen, lenis]);

    return (
        <>
            {/* ========== DESKTOP NAV (md+) ========== */}
            <nav
                className={cn(
                    'hidden lg:block',
                    'fixed top-4 inset-x-0 z-50',
                    'transition-all duration-500 ease-in-out',
                    isScrolled ? 'mx-32' : 'mx-8',
                    isMounted ? 'translate-y-0' : '-translate-y-[150%]',
                )}
            >
                {/* Outer pill — liquid-glass shell (refraction activates with the scroll morph) */}
                <GlassSurface
                    enabled={isScrolled}
                    height={72}
                    xChannel="R"
                    yChannel="B"
                    className={cn(
                        'transition-all duration-500 ease-in-out',
                        isScrolled
                            ? 'shadow-2xl shadow-black/50 border border-white/10'
                            : 'shadow-none border border-transparent',
                    )}
                >
                    <div className="flex items-center justify-between w-full">
                        {/* Left — Logo */}
                        <Link href="/" onClick={handleLogoClick} className="inline-flex items-center pl-1.5 shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
                            <Image
                                src="/logo.jpeg"
                                alt="BACKBNCH logo"
                                width={48}
                                height={48}
                                priority
                                className="h-12 w-12 rounded-full object-cover"
                            />
                            <h1 className={cn('text-2xl pl-2.5',
                                'font-syne',
                                'font-bold tracking-tight',
                                'transition-colors duration-500 ease-in-out',
                                isScrolled ? 'text-white/90' : 'text-brand-orange'
                            )}>
                                BACKBNCH
                            </h1>
                        </Link>

                        {/* Right group — Nav links pill */}
                        <div className="flex items-center justify-end">
                            {/* Nav links pill */}
                            <div className="flex items-center rounded-full p-2">
                                {NAV_ITEMS.map((item) => (
                                    <button
                                        key={item.id}
                                        className="px-5 py-4 rounded-full bg-white/0 hover:bg-white/10 text-sm font-medium uppercase tracking-wide text-white/75 hover:text-white transition-colors duration-200 cursor-pointer"
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </GlassSurface>
            </nav>

            {/* ========== MOBILE NAV (<md) ========== */}
            <nav
                className={cn(
                    'lg:hidden',
                    'fixed top-4 inset-x-0 z-50',
                    'mx-4',
                    'transition-transform duration-700 ease-in',
                    isMounted ? 'translate-y-0' : '-translate-y-[150%]',
                )}
            >
                <GlassSurface
                    enabled={isScrolled}
                    height={56}
                    xChannel="R"
                    yChannel="B"
                    className={cn(
                        'transition-all duration-500 ease-out',
                        isScrolled
                            ? 'shadow-2xl shadow-black/50 border border-white/10'
                            : 'shadow-none border border-transparent',
                    )}
                >
                    <div className="flex items-center justify-between w-full pr-1">
                        {/* Left — Logo */}
                        <Link href="/" onClick={handleLogoClick} className="inline-flex items-center shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
                            <Image
                                src="/logo.jpeg"
                                alt="Backbnch logo"
                                width={40}
                                height={40}
                                priority
                                className="h-10 w-10 rounded-full object-cover"
                            />
                            <span className="text-xl pl-2 font-sans text-white font-semibold tracking-tight">
                                Backbnch
                            </span>
                        </Link>

                        {/* Right — Hamburger button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-white/75 hover:text-white transition-colors cursor-pointer"
                            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                {isMobileMenuOpen ? (
                                    <>
                                        <path d="M18 6 6 18" />
                                        <path d="M6 6l12 12" />
                                    </>
                                ) : (
                                    <>
                                        <path d="M4 6h16" />
                                        <path d="M4 12h16" />
                                        <path d="M4 18h16" />
                                    </>
                                )}
                            </svg>
                        </button>
                    </div>
                </GlassSurface>
            </nav>

            {/* ========== FULL-PAGE MOBILE MENU OVERLAY ========== */}
            <div
                className={cn(
                    'lg:hidden fixed inset-0 z-40',
                    'bg-[#050505]/95 backdrop-blur-xl',
                    'transition-all duration-400 ease-out',
                    isMobileMenuOpen
                        ? 'opacity-100 pointer-events-auto'
                        : 'opacity-0 pointer-events-none',
                )}
            >
                <div className="flex flex-col justify-between h-full pt-28 pb-12 px-8">
                    {/* Nav links — left-aligned list */}
                    <div className="flex flex-col gap-2">
                        {NAV_ITEMS.map((item, i) => (
                            <button
                                key={item.id}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                    'text-left py-4',
                                    'border-b border-white/[0.06]',
                                    'transition-all duration-300 ease-out',
                                    'cursor-pointer group',
                                    isMobileMenuOpen
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-4',
                                )}
                                style={{
                                    transitionDelay: isMobileMenuOpen ? `${(i + 1) * 80}ms` : '0ms',
                                }}
                            >
                                <span className="text-3xl font-bold tracking-tighter text-white/80 group-hover:text-white transition-colors">
                                    {item.label}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* CTA button — full width */}
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                            'w-full py-4 rounded-full',
                            'bg-white/90 hover:bg-white',
                            'text-slate-900 text-base font-medium tracking-wider',
                            'transition-all duration-300 ease-out',
                            'cursor-pointer',
                            isMobileMenuOpen
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-4',
                        )}
                        style={{
                            transitionDelay: isMobileMenuOpen ? `${(NAV_ITEMS.length + 1) * 80}ms` : '0ms',
                        }}
                    >
                        Learn More
                    </button>
                </div>
            </div>
        </>
    );
}
