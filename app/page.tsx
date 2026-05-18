'use client';

import { motion } from 'framer-motion';

const skills = ['Python', 'SQL', 'Power BI', 'Excel', 'Streamlit', 'Git', 'Data Storytelling'];

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl space-y-8 p-6 md:p-12">
      <section className="glass rounded-3xl p-8">
        <h1 className="text-5xl font-bold">Arunprakash B</h1>
        <p className="mt-2 text-sky-300">Data Analyst</p>
        <p className="mt-5 max-w-2xl">Premium, data-driven portfolio with modern storytelling.</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#projects" className="rounded-full bg-sky-400 px-5 py-2 text-black">
            View Projects
          </a>
          <a href="/assets/resumes/data_analyst.tex" className="rounded-full border px-5 py-2">
            Download Resume
          </a>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="glass rounded-3xl p-8">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="mt-4 text-slate-300">
            I bring 6 years of non-IT experience and a strong analytics mindset to solve business
            problems with data.
          </p>
        </div>

        <div className="glass rounded-3xl p-8">
          <img
            src="/assets/images/me.png"
            alt="Arunprakash profile"
            className="mx-auto h-56 w-56 rounded-3xl object-cover"
          />
        </div>
      </section>

      <section className="glass rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-full border px-4 py-2"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </section>

      <section id="projects" className="glass rounded-3xl p-8">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <p className="mt-3 text-slate-300">
          Case-study style project cards ready for GitHub-linked content.
        </p>
      </section>
    </main>
  );
}
