import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Timeline } from '@/components/Timeline';
import { ValueSection } from '@/components/ValueSection';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <div className="container pt-10">
        <div className="mb-16 flex items-center justify-between gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Premium data portfolio</p>
            <h1 className="mt-3 text-2xl font-semibold text-white">Arunprakash B — Data Analyst</h1>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-slate-200">
            <a href="#about" className="rounded-full border border-white/10 bg-slate-950/80 px-4 py-2 transition hover:bg-slate-900">About</a>
            <a href="#skills" className="rounded-full border border-white/10 bg-slate-950/80 px-4 py-2 transition hover:bg-slate-900">Skills</a>
            <a href="#projects" className="rounded-full border border-white/10 bg-slate-950/80 px-4 py-2 transition hover:bg-slate-900">Projects</a>
          </div>
        </div>
      </div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <ValueSection />
      <Contact />
      <Footer />
    </main>
  );
}
