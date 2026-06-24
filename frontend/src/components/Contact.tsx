"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Send, Mail } from "lucide-react";
import TextReveal from "./TextReveal";

const GMAIL_ADDRESS = "anshulkumbhkar2005@gmail.com";
const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&to=${GMAIL_ADDRESS}&su=Project+Enquiry`;

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", company: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: `Company: ${formState.company}\n${formState.message}`,
        }),
      });
    } catch {
      // Silently continue even if backend unreachable
    }
    setSubmitted(true);
    setSubmitting(false);
  }

  return (
    <section className="relative pt-32 pb-12 px-6 flex flex-col items-center bg-[#080808] overflow-hidden">

      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-violet-900/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="w-full max-w-6xl relative z-10 mb-32">

        {/* Section headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-6 inline-flex">
            <span>008</span>
            <div className="w-1 h-1 rounded-full bg-white/40" />
            CONTACT
          </span>
          <div className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mt-6">
            <TextReveal text="Your Competitors Are Automating." delay={0.1} />
          </div>
          <div className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mt-1">
            <TextReveal text="Are you?" className="text-white/25" delay={0.35} />
          </div>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left CTA card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 rounded-[3rem] p-10 flex flex-col justify-between text-white relative overflow-hidden min-h-[480px]"
            style={{ background: "linear-gradient(135deg, #0f0f0f 0%, #1a1014 50%, #0f0f0f 100%)" }}
          >
            <div className="absolute inset-0 border border-white/[0.06] rounded-[3rem]" />
            <div className="absolute top-0 right-0 w-72 h-72 bg-violet-600 rounded-full blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-600 rounded-full blur-[100px] opacity-15 -translate-x-1/2 translate-y-1/2" />

            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Ready to grow with AI?</h3>
              <p className="text-white/50 text-lg leading-relaxed mb-10">
                Let's discuss how we can automate your workflows and build a website that converts.
              </p>

              {/* Contact info */}
              <div className="flex flex-col gap-3">
                <a
                  href={GMAIL_COMPOSE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors group"
                >
                  <div className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center group-hover:bg-violet-500/20 group-hover:border-violet-500/30 transition-all flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-medium">{GMAIL_ADDRESS}</span>
                </a>
              </div>
            </div>

            <div className="relative z-10 mt-8 flex items-center gap-4">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" className="w-14 h-14 rounded-full bg-white/10 border border-white/10 p-1" alt="Anshul" />
              <div>
                <p className="font-bold text-lg">Anshul Kumaar</p>
                <p className="text-white/40 text-sm">Founder & Lead Developer</p>
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 glass-panel-dark rounded-[3rem] p-10 md:p-14 relative"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-20 gap-6 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30"
                >
                  <Send className="w-8 h-8 text-emerald-400" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-white/40">We'll get back to you within 24 hours.</p>
                <button
                  onClick={() => { setSubmitted(false); setFormState({ name: "", company: "", email: "", message: "" }); }}
                  className="text-white/30 text-sm hover:text-white/60 transition-colors underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-white/40 text-xs font-semibold ml-4 tracking-wider uppercase">Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                      className="bg-white/[0.04] border border-white/[0.08] text-white rounded-full px-6 py-4 outline-none focus:border-violet-500/50 focus:bg-white/[0.06] transition-all placeholder:text-white/20 text-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-white/40 text-xs font-semibold ml-4 tracking-wider uppercase">Company</label>
                    <input
                      type="text"
                      placeholder="Acme Corp"
                      value={formState.company}
                      onChange={e => setFormState(s => ({ ...s, company: e.target.value }))}
                      className="bg-white/[0.04] border border-white/[0.08] text-white rounded-full px-6 py-4 outline-none focus:border-violet-500/50 focus:bg-white/[0.06] transition-all placeholder:text-white/20 text-sm"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-white/40 text-xs font-semibold ml-4 tracking-wider uppercase">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                    className="bg-white/[0.04] border border-white/[0.08] text-white rounded-full px-6 py-4 outline-none focus:border-violet-500/50 focus:bg-white/[0.06] transition-all placeholder:text-white/20 text-sm"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-white/40 text-xs font-semibold ml-4 tracking-wider uppercase">Project Details</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your goals..."
                    value={formState.message}
                    onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                    className="bg-white/[0.04] border border-white/[0.08] text-white rounded-[2rem] px-6 py-4 outline-none focus:border-violet-500/50 focus:bg-white/[0.06] transition-all placeholder:text-white/20 resize-none text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-white text-black rounded-full px-8 py-5 mt-2 font-bold text-base flex items-center justify-center gap-2 hover:bg-white/90 hover:scale-[1.02] transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending…" : "Submit Request"}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>

      {/* Footer */}
      <footer className="w-full max-w-6xl border-t border-white/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-bold tracking-widest text-sm text-white/50">
          ✦ ANSHUL KUMAAR & CO.
        </div>

        {/* Single email link */}
        <a
          href={GMAIL_COMPOSE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 text-white/40 hover:text-white/80 transition-all duration-200 group"
        >
          <div className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center group-hover:bg-violet-500/20 group-hover:border-violet-500/30 transition-all">
            <Mail className="w-3.5 h-3.5" />
          </div>
          <span className="text-sm font-medium">{GMAIL_ADDRESS}</span>
        </a>

        <div className="text-sm text-white/25 font-medium">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </footer>

    </section>
  );
}
