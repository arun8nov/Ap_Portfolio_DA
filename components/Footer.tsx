'use client';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70 py-10">
      <div className="container grid gap-8 md:grid-cols-[1fr_0.9fr] items-center">
        <div>
          <p className="text-sm text-slate-400">© 2026 Arunprakash B. Data-driven portfolio crafted for analytics roles.</p>
        </div>
        <div className="flex flex-wrap items-center justify-end gap-4 text-sm text-slate-300">
          <a href="https://github.com/arun8nov" target="_blank" rel="noreferrer" className="transition hover:text-white">GitHub</a>
          <a href="https://www.linkedin.com/in/arun8nov" target="_blank" rel="noreferrer" className="transition hover:text-white">LinkedIn</a>
          <a href="/resume.pdf" className="transition hover:text-white">Resume</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
