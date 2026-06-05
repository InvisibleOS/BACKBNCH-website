import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import { PLAYBOOK } from '@/data/content';

/** GEO Playbook — a stacked, numbered listicle of execution steps. */
export default function PlaybookSection() {
  return (
    <Section className="flex flex-col items-center border-t border-white/[0.02]">
      <div className="w-full bg-gradient-to-b from-brand-orange/6 to-transparent rounded-3xl p-6 sm:p-16 lg:p-24 border border-white/[0.04]">
        <Eyebrow className="mb-8 lg:mb-12">Execution Model</Eyebrow>

        <h3 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tighter mb-4 leading-[0.9]">
          Our <span className="text-brand-orange">GEO Playbook.</span>
        </h3>

        <p className="text-lg lg:text-xl text-white/40 leading-relaxed font-light max-w-3xl mb-16">
          A multi-phase protocol engineered to establish pervasive presence inside AI-generated answers.
        </p>

        {/* Stacked insights */}
        <div className="space-y-6 max-w-4xl">
          {PLAYBOOK.map((insight, index) => (
            <div key={insight} className="flex items-start gap-5 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
              <span className="text-xl font-mono text-brand-orange/50 pt-0.5">{index + 1}.</span>
              <p className="text-white/70 font-light text-base leading-relaxed flex-1">
                {insight}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
