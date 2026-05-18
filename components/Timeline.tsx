'use client';

import { motion } from 'framer-motion';
import { timeline } from '@/lib/timeline';

export function Timeline() {
  return (
    <section id="journey" className="py-24">
      <div className="container">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Experience</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Career journey and learning progression.</h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            A timeline that shows how non-IT experience, analytics learning, and hands-on projects combine into a versatile data practice.
          </p>
        </div>
        <div className="relative border-l border-white/10 pl-8">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, delay: index * 0.1 }}
              className="mb-12 last:mb-0"
            >
              <div className="absolute -left-4 mt-1 h-3 w-3 rounded-full bg-glow"></div>
              <span className="text-sm uppercase tracking-[0.3em] text-slate-400">{item.year}</span>
              <h3 className="mt-2 text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.25em] text-slate-400">{item.subtitle}</p>
              <p className="mt-4 max-w-2xl text-slate-300">{item.summary}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
