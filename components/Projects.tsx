'use client';

import { motion } from 'framer-motion';
import { projects } from '@/lib/projects';

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Projects</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Project stories built like product case studies.</h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Each case is designed around the business problem, dataset, methodology, insights, and measurable outcome.
          </p>
        </div>
        <div className="grid gap-8">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
              className="glow-card rounded-[2rem] border border-white/10 p-10"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-400">{project.title}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{project.description}</h3>
                </div>
                <span className="rounded-full border border-white/10 bg-glow/10 px-4 py-2 text-sm text-slate-100">Data product</span>
              </div>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-slate-400">Problem Statement</p>
                    <p className="mt-2 text-slate-200">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Dataset</p>
                    <p className="mt-2 text-slate-200">{project.dataset}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-slate-400">Approach</p>
                    <p className="mt-2 text-slate-200">{project.approach}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Tools & Technologies</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-100"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 grid gap-4">
                <div>
                  <p className="text-sm text-slate-400">Key Insights</p>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-200">
                    {project.insights.map((insight) => (
                      <li key={insight}>{insight}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Business Impact</p>
                  <p className="mt-2 text-slate-200">{project.impact}</p>
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="button-glow inline-flex items-center justify-center rounded-full bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    View GitHub
                  </a>
                  <span className="inline-flex items-center rounded-full border border-white/10 bg-slate-900/80 px-4 py-2 text-xs uppercase tracking-[0.25em] text-slate-400">LinkedIn reference available on request</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
