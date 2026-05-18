'use client';

import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Clean data pipelines',
    description: 'Transform raw inputs into reliable analytics-ready datasets with Python, SQL and ETL process discipline.',
  },
  {
    title: 'Report-ready dashboards',
    description: 'Build Power BI and Streamlit dashboards that translate performance into action for business stakeholders.',
  },
  {
    title: 'Insight-driven decisions',
    description: 'Find the signal in the data and frame it as a narrative that supports smarter business outcomes.',
  },
  {
    title: 'Continuous learning',
    description: 'Adapt fast with self-driven learning and hands-on project execution across new analytics tools.',
  },
];

export function ValueSection() {
  return (
    <section id="value" className="py-24">
      <div className="container">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">How I Create Value as a Data Analyst</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">A data-driven problem solver with a practical analytics mindset.</h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            I combine business understanding, data engineering, and visualization to deliver meaningful insights that move teams forward.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {cards.map((card) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
              className="glow-card rounded-[2rem] border border-white/10 p-10"
            >
              <h3 className="text-xl font-semibold text-white">{card.title}</h3>
              <p className="mt-4 text-slate-300">{card.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            { label: 'Data cleaning', value: 'Structured datasets ready for analysis' },
            { label: 'SQL querying', value: 'Fast answers from large datasets' },
            { label: 'Dashboard creation', value: 'Clear visuals for decision support' },
          ].map((item) => (
            <div key={item.label} className="glow-card rounded-[2rem] border border-white/10 p-6 text-slate-300">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{item.label}</p>
              <p className="mt-3 text-base text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
