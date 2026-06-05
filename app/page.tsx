'use client';

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
    // Core data structures for podcast content
    const speakers = [
        { 
            name: "Sarah Chen", 
            title: "VP of AI Research @ Nexus Corp", 
            topic: "Neural Ranking for Conversational Search", 
            avatar: "/speakers/sarah.jpg" 
        },
        { 
            name: "David Rodriguez", 
            title: "Head of Growth @ Aero Dynamics", 
            topic: "Measuring Machine Learning Search Impact", 
            avatar: "/speakers/david.jpg" 
        },
        { 
            name: "Kenji Tanaka", 
            title: "Principal Architect @ DataOps Global", 
            topic: "The Entity-based Discovery Engine", 
            avatar: "/speakers/kenji.jpg" 
        },
        { 
            name: "Priya Sharma", 
            title: "CIO @ FinShift", 
            topic: "Trust and Authority in AI Recommendations", 
            avatar: "/speakers/priya.jpg" 
        },
    ];

    const optimizers = [
        { title: "GEO Index score", desc: "Visibility metric across major AI models.", metric: "4.9★", change: "+140%" },
        { title: "Engine Citations", desc: "Frequency cited in generated answers.", metric: "50K+", change: "+25%" },
        { title: "Conversation Volume", desc: "Customer queries referencing guests.", metric: "21M", change: "+12%" },
        { title: "Recommendation Rate", desc: "Probability AI chose customer over competitor.", metric: "92%", change: "+5%" },
    ];

    const playbook = [
        "Synthesize brand context into machine-readable knowledge graphs.",
        "Engineering conversational data points for natural dialogue referencing.",
        "Capturing long-form operator expertise to feed neural embeddings.",
        "Mapping technical incompetence signals and fixing visibility gaps.",
    ];

  return (
    <div className="relative min-h-screen bg-[#050505]">
      <NavBar />

      <main className="relative z-0">
        <Hero />
        
        {/* =========================================================================
             RELEVANT PODCAST CONTENT SECTIONS
           ========================================================================= */}

        {/* Speakers Showcase Component Section */}
        <section className="flex flex-col items-center px-6 sm:px-12 lg:px-24 py-24 border-t border-white/[0.02]">
            <div className="w-full max-w-7xl mb-16 text-center">
                <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-brand-orange mb-4">Operator Perspectives</p>
                <h3 className="text-3xl sm:text-5xl font-bold text-white tracking-tighter mb-4">
                    The Voice of Machine Visibility.
                </h3>
                <p className="text-lg text-white/30 font-light max-w-xl mx-auto leading-relaxed">
                    Hear how leading technical and growth operators are engineering presence and measuring success in the era of synthesized discovery.
                </p>
            </div>

            {/* Speakers component: Card showcase grid */}
            <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {speakers.map((speaker, index) => (
                    <div key={index} className="group flex flex-col rounded-3xl bg-gradient-to-b from-brand-orange/6 to-transparent border border-white/[0.04] p-8 transition-transform hover:scale-[1.02]">
                        <div className="aspect-square rounded-full border border-brand-orange/10 bg-[#090d16] mb-8 overflow-hidden flex items-center justify-center">
                            {/* Placeholder for avatars */}
                            <svg className="w-1/2 h-1/2 text-brand-orange/20" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
                            </svg>
                        </div>
                        <h4 className="text-xl font-bold text-white tracking-tight leading-snug mb-1">{speaker.name}</h4>
                        <p className="text-xs font-mono text-white/50 uppercase tracking-widest mb-6 leading-relaxed">{speaker.title}</p>
                        <p className="text-sm text-white/40 font-light leading-relaxed mb-8 flex-1">{speaker.topic}</p>
                        
                        {/* Action Link (Updated to Read More) */}
                        <a href={`#speaker-${index}`} className="mt-auto group/link text-xs font-semibold uppercase tracking-widest text-brand-orange flex items-center gap-2 transition hover:text-white"
                           style={{ '--hover-shadow': '0 0 0.5px currentColor, 0 0 0.5px currentColor' } as React.CSSProperties}>
                            <span className="transition-all duration-300 group-hover/link:[text-shadow:var(--hover-shadow)]">
                                Read More
                            </span>
                            <svg className="w-3 h-3 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </a>
                    </div>
                ))}
            </div>
        </section>

        {/* Optimization Playbook Listicle Section */}
        <section className="flex flex-col items-center px-6 sm:px-12 lg:px-24 py-24 border-t border-white/[0.02]">
            <div className="w-full bg-gradient-to-b from-brand-orange/6 to-transparent rounded-3xl p-6 sm:p-16 lg:p-24 border border-white/[0.04]">
                <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-brand-orange mb-8 lg:mb-12">Execution Model</p>
                
                <h3 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tighter mb-4 leading-[0.9]">
                    Our <span className="text-brand-orange">GEO Playbook.</span>
                </h3>
                
                <p className="text-lg lg:text-xl text-white/40 leading-relaxed font-light max-w-3xl mb-16">
                    A multi-phase protocol engineered to establish pervasive presence inside AI-generated answers.
                </p>

                {/* Listicle component: Stacked insights */}
                <div className="space-y-6 max-w-4xl">
                    {playbook.map((insight, index) => (
                        <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-5 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                            <div className="flex items-start gap-5 flex-1">
                                <span className="text-xl font-mono text-brand-orange/50 pt-0.5">{index + 1}.</span>
                                <p className="text-white/70 font-light text-base leading-relaxed">
                                    {insight}
                                </p>
                            </div>
                            
                            {/* Action Link (Added Read More for Playbook) */}
                            <a href={`#playbook-${index}`} className="group/link text-xs font-semibold uppercase tracking-widest text-brand-orange flex items-center gap-2 transition hover:text-white shrink-0 sm:ml-auto mt-4 sm:mt-0"
                               style={{ '--hover-shadow': '0 0 0.5px currentColor, 0 0 0.5px currentColor' } as React.CSSProperties}>
                                <span className="transition-all duration-300 group-hover/link:[text-shadow:var(--hover-shadow)]">
                                    Read More
                                </span>
                                <svg className="w-3 h-3 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Optimizers Metrics Grid */}
        <section className="flex justify-center px-6 sm:px-12 lg:px-24 py-24 mb-12">
            <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {optimizers.map((item, index) => (
                    <div key={index} className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.04] transition-all hover:border-brand-orange/10 flex flex-col justify-between">
                        <div>
                            <span className="text-xs font-mono uppercase tracking-[0.2em] text-brand-orange mb-4 block">{item.title}</span>
                            <p className="text-sm text-white/30 font-light leading-relaxed mb-12">{item.desc}</p>
                        </div>
                        <div className="flex items-end justify-between gap-4">
                            <p className="text-5xl font-bold text-white tracking-tighter leading-none">{item.metric}</p>
                            <span className="text-sm font-mono text-brand-orange bg-brand-orange/10 px-2 py-0.5 rounded-md">{item.change}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}