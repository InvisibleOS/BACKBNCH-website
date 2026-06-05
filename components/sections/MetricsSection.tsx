import { METRICS } from '@/data/content';

/** Metrics grid — headline visibility numbers with their deltas. */
export default function MetricsSection() {
  return (
    <section className="flex justify-center px-6 sm:px-12 lg:px-24 py-24 mb-12">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {METRICS.map((item) => (
          <div key={item.title} className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.04] transition-all hover:border-brand-orange/10 flex flex-col justify-between">
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
  );
}
