"use client";

import { motion } from "framer-motion";
import { Lock, Key, Shield, Database, ArrowRight } from "lucide-react";
import TextReveal from "./TextReveal";

const securityFeatures = [
  {
    title: "End-to-End Encryption",
    description: "All sensitive client data is encrypted in transit and at rest.",
    Icon: Lock,
    color: "from-violet-500/20 to-purple-500/10",
    glow: "bg-violet-500",
  },
  {
    title: "Secure API Integrations",
    description: "OAuth and encrypted vaults protect all CRM and database credentials.",
    Icon: Key,
    color: "from-blue-500/20 to-cyan-500/10",
    glow: "bg-blue-500",
  },
  {
    title: "Role-Based Access Control",
    description: "Strict isolation of API permissions prevents unauthorized execution.",
    Icon: Shield,
    color: "from-emerald-500/20 to-teal-500/10",
    glow: "bg-emerald-500",
  },
  {
    title: "Data Minimization",
    description: "We only collect the absolute minimum data required for AI workflows.",
    Icon: Database,
    color: "from-pink-500/20 to-rose-500/10",
    glow: "bg-pink-500",
  },
];

export default function Security() {
  return (
    <section className="relative py-24 px-6 flex flex-col items-center bg-[#080808] overflow-hidden">

      {/* Central glow */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-64 bg-gradient-to-r from-violet-900/0 via-violet-900/15 to-violet-900/0 blur-3xl pointer-events-none" />

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">

        {/* Left CTA card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 rounded-[3rem] p-10 flex flex-col justify-between text-white relative overflow-hidden min-h-[460px]"
          style={{ background: "linear-gradient(135deg, #0f0f0f 0%, #1a1014 50%, #0f0f0f 100%)" }}
        >
          <div className="absolute inset-0 border border-white/[0.06] rounded-[3rem]" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-violet-600 rounded-full blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-600 rounded-full blur-[100px] opacity-15 -translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Ready to grow with AI?</h2>
            <p className="text-white/50 text-base leading-relaxed mb-8">
              Book a free strategy session. We'll map where AI will save you hours every single day.
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&to=anshulkumbhkar2005@gmail.com&su=Strategy+Session+Request"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black rounded-full px-6 py-3.5 font-bold text-sm flex items-center gap-2 hover:bg-white/90 hover:scale-105 transition-all group w-fit"
            >
              Book a Strategy Session
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="relative z-10 mt-12 flex items-center gap-4">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" className="w-12 h-12 rounded-full bg-white/10 border border-white/10 p-0.5" alt="Anshul" />
            <div>
              <p className="font-bold text-base">Anshul Kumaar</p>
              <p className="text-white/40 text-xs">Founder & Lead Developer</p>
            </div>
          </div>
        </motion.div>

        {/* Right Security Grid */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 glass-panel-dark rounded-[3rem] p-10 md:p-12 relative flex flex-col justify-center"
        >
          <div className="relative z-10 mb-8">
            <span className="section-tag mb-4 inline-flex">004 · Security</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mt-4">
              Your Data. Protected. Always.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
            {securityFeatures.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`bg-gradient-to-br ${feat.color} border border-white/[0.07] rounded-2xl p-5 flex flex-col hover:border-white/15 transition-all duration-300 group card-lift`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <feat.Icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-sm leading-tight pt-1">{feat.title}</h3>
                </div>
                <p className="text-white/40 text-xs leading-relaxed pl-12">{feat.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
