import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const SECTIONS = [
  {
    id: "hero",
    label: "Now Streaming",
    title: "Conversations that don't fit in a headline.",
    highlight: "Welcome to BACKBNCH.",
    description:
      "Raw, unscripted conversations with the people actually building the future — founders, misfits, and operators who'd rather ship than speak on panels. No talking points. No sponsors. Just the stuff nobody says on the record.",
    color: "from-[#d4620a]/10 to-transparent",
  },
  {
    id: "problem",
    label: "The Problem",
    title: "Your customers have stopped searching.",
    highlight: "They have started asking.",
    description:
      "They ask ChatGPT. They ask Gemini. They ask Perplexity. And these systems do not return ten blue links. They return one answer. Maybe two. Maybe three. If your business is not in that answer, you do not exist in the fastest-growing discovery channel on the planet.",
    color: "from-[#d4620a]/8 to-transparent",
  },
  {
    id: "solution",
    label: "The Result",
    title: "We build",
    highlight: "AI Presence.",
    description:
      "We make your business understandable, credible, and recommendable to the AI systems that are increasingly deciding which companies people choose.",
    color: "from-[#d4620a]/6 to-transparent",
  },
  {
    id: "methodology",
    label: "The Strategi Methodology",
    title: "Six phases.",
    highlight: "Engineered presence.",
    description:
      "Diagnose. Define. Structure. Build. Reinforce. Monitor. This is how AI Presence is engineered. Every engagement starts with a diagnostic — we query AI systems about your business and category, documenting what AI says, what it misses, and what it gets wrong.",
    color: "from-[#d4620a]/5 to-transparent",
  },
  {
    id: "differentiator",
    label: "How We Think Differently",
    title: "This is not SEO",
    highlight: "with a new name.",
    description:
      "The market is full of companies rebranding yesterday's tactics under today's buzzwords. Strategi was built from the ground up around a single reality: AI systems are becoming the primary discovery mechanism for businesses. Entity, not keywords. Authority, not volume. Systems, not campaigns. Representation, not traffic.",
    color: "from-[#d4620a]/4 to-transparent",
  },
  {
    id: "contact",
    label: "Start a Diagnostic",
    title: "Find out if AI",
    highlight: "recommends you.",
    description:
      "SEO gets you on the list. Strategi gets you in the answer. Visibility is no longer about being found. It is about being chosen. Start with a diagnostic to see what AI says about your business today.",
    color: "from-[#d4620a]/8 to-transparent",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050505]">
      <NavBar />

      {/* Content sections */}
      <main className="relative z-0">
        {SECTIONS.map((section, i) => (
          <section
            key={section.id}
            id={section.id}
            className={`min-h-screen flex justify-center px-6 sm:px-12 lg:px-24 ${i === 0
              ? 'items-start pt-8 pb-12'
              : 'items-center'
              }`}
          >
            <div
              className={`w-full bg-gradient-to-b ${section.color} rounded-3xl p-6 sm:p-16 lg:p-24 border border-white/[0.04]`}
            >
              <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-[#d4620a] mb-8 lg:mb-12">
                {section.label}
              </p>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-2 tracking-tighter leading-[0.9] break-words">
                {section.title}
              </h2>
              {section.highlight && (
                <h2 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#d4620a] mb-10 lg:mb-14 tracking-tighter leading-[0.9] break-words">
                  {section.highlight}
                </h2>
              )}
              <p className="text-lg lg:text-xl text-white/40 leading-relaxed font-light max-w-3xl">
                {section.description}
              </p>
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
}
