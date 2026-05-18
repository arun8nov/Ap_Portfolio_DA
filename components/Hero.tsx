'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const heroActions = [
  { label: 'View Projects', href: '#projects' },
  { label: 'Download Resume', href: '/resume.pdf' },
  { label: 'Contact Me', href: '#contact' },
];

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden py-24 sm:py-28">
      <div className="container">
        <div className="hero-background absolute inset-0 opacity-40"></div>
        <div className="relative grid gap-12 lg:grid-cols-[1.15fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 shadow-glow backdrop-blur-xl">
              Data Analyst · Analytics Storytelling · Impact-first Dashboards
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-4xl font-semibold leading-tight text-white sm:text-5xl xl:text-6xl"
            >
              Turning raw data into strategic decisions with premium analytics storytelling.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="max-w-2xl text-lg leading-8 text-slate-300"
            >
              I help leaders uncover business impact from data through actionable dashboards, clean pipelines, and clear narrative-driven insights.
            </motion.p>
            <div className="flex flex-wrap gap-4">
              {heroActions.map((action) => (
                <a
                  key={action.label}
                  href={action.href}
                  className="button-glow inline-flex items-center justify-center rounded-full bg-glow/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-glow/25"
                >
                  {action.label}
                </a>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="glow-card rounded-3xl border border-white/10 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Projects delivered</p>
                <p className="mt-3 text-3xl font-semibold text-white">5+</p>
                <p className="mt-2 text-sm text-slate-300">Business-focused analytics builds with product-level storytelling.</p>
              </div>
              <div className="glow-card rounded-3xl border border-white/10 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Data tools</p>
                <p className="mt-3 text-3xl font-semibold text-white">Power BI · Python · SQL</p>
                <p className="mt-2 text-sm text-slate-300">End-to-end analytics stack for dashboarding and actionable insights.</p>
              </div>
              <div className="glow-card rounded-3xl border border-white/10 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Impact focus</p>
                <p className="mt-3 text-3xl font-semibold text-white">Business outcomes</p>
                <p className="mt-2 text-sm text-slate-300">Insights built to improve decisions, reduce risk, and expose opportunity.</p>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -left-10 -top-8 h-40 w-40 rounded-full bg-glow/10 blur-3xl"></div>
            <div className="glow-card relative overflow-hidden rounded-[2rem] border border-white/10 p-6 shadow-glow">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(71,197,255,0.16),_transparent_28%)]"></div>
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-6">
                <Image
                  src="/images/me.png"
                  alt="Arunprakash profile"
                  width={640}
                  height={720}
                  className="h-full w-full rounded-[1.75rem] object-cover"
                />
              </div>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="glow-card rounded-3xl border border-white/10 p-4 text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Experience</p>
                <p className="mt-3 text-3xl font-semibold text-white">6 yrs</p>
              </div>
              <div className="glow-card rounded-3xl border border-white/10 p-4 text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Career focus</p>
                <p className="mt-3 text-3xl font-semibold text-white">Data Analytics</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
