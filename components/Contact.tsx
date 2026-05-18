'use client';

import { useState } from 'react';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '', website: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    if (form.website) {
      setError('Spam detected.');
      return;
    }
    if (!form.name || !form.email || !form.message) {
      setError('Please complete all fields.');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });

      if (!response.ok) {
        throw new Error('Unable to submit the form.');
      }

      setStatus('success');
      setForm({ name: '', email: '', message: '', website: '' });
    } catch (err) {
      setError('Submission failed. Please try again.');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Send a message or request my resume.</h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Use the form below to share your project needs, ask about analytics work, or start a conversation about how I can help your team.
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_0.8fr]">
          <form onSubmit={handleSubmit} className="glow-card rounded-[2rem] border border-white/10 p-10">
            <input type="hidden" name="website" value={form.website} />
            <div className="grid gap-6">
              <label className="block">
                <span className="text-sm font-semibold text-slate-300">Name</span>
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-4 text-sm text-white outline-none transition focus:border-glow/50 focus:ring-2 focus:ring-glow/20"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-slate-300">Email</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-4 text-sm text-white outline-none transition focus:border-glow/50 focus:ring-2 focus:ring-glow/20"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-slate-300">Message</span>
                <textarea
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-4 text-sm text-white outline-none transition focus:border-glow/50 focus:ring-2 focus:ring-glow/20"
                />
              </label>
              {error && <p className="text-sm text-rose-300">{error}</p>}
              {status === 'success' && <p className="text-sm text-emerald-300">Your message has been sent successfully.</p>}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="button-glow inline-flex w-full items-center justify-center rounded-full bg-glow px-6 py-4 text-sm font-semibold text-black transition hover:bg-glow/90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
          <div className="glow-card rounded-[2rem] border border-white/10 p-10">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Google Sheets Integration</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">Secure form delivery</h3>
            <p className="mt-4 text-slate-300">
              Form submissions post to a Google Apps Script endpoint and save contact entries directly into Google Sheets. Includes spam protection, field validation, and success feedback.
            </p>
            <div className="mt-8 space-y-5 text-slate-200">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Sheet</p>
                <p className="mt-2">DA Portfolio</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Columns</p>
                <p className="mt-2">Name · Email · Message</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
