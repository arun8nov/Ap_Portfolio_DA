'use client';

import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="container">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">About Me</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Analytical storytelling built for business impact.</h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            I am a data analyst who turned a 6-year non-IT career into a strength: practical problem solving, domain awareness, and disciplined execution. Today I build clean data workflows, product-quality dashboards, and insight-driven stories that help teams move quickly from questions to decisions.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="grid gap-8 lg:grid-cols-[1fr_0.9fr]"
        >
          <div className="glow-card rounded-[2rem] border border-white/10 p-10">
            <p className="text-lg font-semibold text-white">What I bring to a data team</p>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li>Data cleaning and transformation using Python, SQL, and advanced Excel.</li>
              <li>Dashboard creation and reporting with Power BI, Tableau, and Streamlit.</li>
              <li>Insight generation that connects metrics to business actions.</li>
              <li>Business-first analysis with a practical mindset and strong execution.</li>
            </ul>
          </div>
          <div className="grid gap-6">
            {[
              'Transitioned from manufacturing and IT support into analytics through hands-on projects and to-the-point learning.',
              'Delivered actionable dashboards, predictive models, and automated pipelines that support operational decisions.',
              'Focused on outcome-based analytics, faster insights, and cleaner datasets for reliable reporting.',
            ].map((item) => (
              <div key={item} className="glow-card rounded-[2rem] border border-white/10 p-8">
                <p className="text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
