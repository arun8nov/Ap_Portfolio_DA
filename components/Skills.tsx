'use client';

import { motion } from 'framer-motion';
import { orbitSkills, skillGroups } from '@/lib/skills';

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Skills</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Modern analytics skills with a premium motion feel.</h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            I combine programming, visualization, and business-first analysis in a polished analytics workflow.
          </p>
        </div>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="glow-card rounded-[2rem] border border-white/10 p-10"
          >
            <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/60 p-8">
              <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,_rgba(157,124,255,0.12),_transparent_22%)]" />
              <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_bottom_right,_rgba(71,197,255,0.14),_transparent_20%)]" />
              <div className="relative flex h-full items-center justify-center">
                <div className="relative h-72 w-72 animate-float rounded-full border border-white/10 bg-white/5 shadow-glow">
                  {orbitSkills.map((skill, index) => {
                    const angle = (index / orbitSkills.length) * Math.PI * 2;
                    const x = 120 * Math.cos(angle);
                    const y = 120 * Math.sin(angle);
                    return (
                      <span
                        key={skill}
                        className="absolute inline-flex h-12 min-w-[6rem] items-center justify-center rounded-full border border-white/10 bg-slate-950/80 px-3 text-xs font-semibold text-slate-100 shadow-lg"
                        style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, transform: 'translate(-50%, -50%)' }}
                      >
                        {skill}
                      </span>
                    );
                  })}
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-glow/20 px-5 py-3 text-sm font-semibold text-white shadow-glow">
                    Analytics
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="grid gap-6"
          >
            {skillGroups.map((group) => (
              <div key={group.title} className="glow-card rounded-[2rem] border border-white/10 p-8">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">{group.title}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
