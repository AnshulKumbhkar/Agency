"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MessageSquare, Database, User, Zap, Mail, Link } from "lucide-react";
import TextReveal from "./TextReveal";

export default function Services() {
  return (
    <section className="relative py-32 px-6 flex flex-col items-center overflow-hidden bg-[#080808]">

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-violet-900/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Tag */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-tag mb-8 relative z-10"
      >
        <span>003</span>
        <div className="w-1 h-1 rounded-full bg-white/40" />
        CAPABILITIES
      </motion.div>

      <div className="text-4xl md:text-6xl font-bold tracking-tight mb-20 text-center relative z-10">
        <TextReveal text="Services by Anshul Kumaar & co." delay={0.1} />
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-6xl relative z-10">

        {/* Large Left Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-1 md:row-span-2 dark-card p-8 flex flex-col card-lift"
        >
          <h3 className="text-xl font-bold mb-6 text-white">Website development with AI integrations</h3>
          <ul className="space-y-3 mb-10">
            {['Workflow mapping', 'Real-time system integration', 'Validated output'].map((item, i) => (
              <li key={i} className="flex items-center gap-2.5 text-sm text-white/50">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          {/* Animated Workflow Visual */}
          <div className="flex-1 min-h-[280px] bg-[#0d0d0d] rounded-3xl relative flex flex-col items-center justify-center border border-white/[0.05] p-4 overflow-hidden">
            {/* Dot grid */}
            <div
              className="absolute inset-0 opacity-20"
              style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '18px 18px' }}
            />

            {/* Animated center node */}
            <div className="relative w-20 h-20 flex items-center justify-center z-10">
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full bg-violet-500/20 border border-violet-500/20"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
                className="absolute w-24 h-24 rounded-full border border-dashed border-white/10 pointer-events-none"
              />
              <div className="w-14 h-14 rounded-full bg-[#1a1a1a] flex items-center justify-center border border-white/10">
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                >
                  <Zap className="w-5 h-5 text-violet-400" />
                </motion.div>
              </div>
            </div>

            {/* Connector lines */}
            <div className="absolute top-[42%] w-px h-16 bg-white/10" />
            <div className="absolute top-[53%] w-[62%] h-px bg-white/10" />
            <div className="absolute top-[53%] left-[19%] w-px h-10 bg-white/10" />
            <div className="absolute top-[53%] right-[19%] w-px h-10 bg-white/10" />

            {/* Bottom Nodes */}
            <div className="flex justify-between w-full px-4 absolute top-[63%] z-10">
              {[Database, User, Zap].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.15, y: -4 }}
                  className="w-13 h-13 w-12 h-12 bg-gradient-to-br from-violet-900/60 to-purple-900/40 rounded-2xl flex items-center justify-center shadow-xl border border-white/10"
                >
                  <Icon className="w-4 h-4 text-white/70" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Top Middle: AI Agents */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="dark-card p-8 flex flex-col card-lift"
        >
          <h3 className="text-xl font-bold mb-4 text-white">AI agents that help businesses grow faster</h3>

          {/* Mock Chat UI */}
          <div className="mt-6 flex flex-col gap-3">
            <div className="flex items-end gap-2">
              <div className="w-6 h-6 rounded-full bg-blue-500/30 border border-blue-500/20 flex-shrink-0" />
              <div className="bg-white/[0.06] text-white/70 text-xs px-4 py-2.5 rounded-2xl rounded-bl-sm max-w-[80%] border border-white/[0.05]">
                Can you tell me more about pricing?
              </div>
            </div>
            <div className="flex items-end justify-end gap-2">
              <div className="bg-gradient-to-br from-violet-700/40 to-purple-700/40 border border-violet-500/20 text-white/80 text-xs px-4 py-2.5 rounded-2xl rounded-br-sm max-w-[80%]">
                Good day John, how can I help?
              </div>
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka" className="w-6 h-6 rounded-full border border-white/10 flex-shrink-0 bg-white/10" alt="avatar" />
            </div>
            <div className="flex items-end gap-2">
              <div className="w-6 h-6 rounded-full bg-blue-500/30 border border-blue-500/20 flex-shrink-0" />
              <div className="bg-white/[0.06] text-white/70 text-xs px-4 py-2.5 rounded-2xl rounded-bl-sm max-w-[80%] border border-white/[0.05]">
                What's included in the AI package?
              </div>
            </div>
          </div>

          {/* Typing indicator */}
          <div className="mt-3 flex items-center gap-2 ml-8">
            <div className="flex gap-1">
              {[0, 0.2, 0.4].map((d, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8, delay: d }}
                  className="w-1.5 h-1.5 rounded-full bg-violet-400/60"
                />
              ))}
            </div>
            <span className="text-[10px] text-white/30">AI is typing…</span>
          </div>
        </motion.div>

        {/* Top Right: AI Automations */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="dark-card p-8 flex flex-col card-lift"
        >
          <h3 className="text-xl font-bold mb-4 text-white">AI automations and workflow systems</h3>

          {/* Stacked profile cards */}
          <div className="mt-auto pt-8 flex justify-center items-center relative h-36">
            <div className="absolute w-24 h-32 bg-white/[0.03] border border-white/[0.06] rounded-2xl -rotate-6 left-4 opacity-60 blur-[1px]" />
            <div className="absolute w-24 h-32 bg-white/[0.03] border border-white/[0.06] rounded-2xl rotate-6 right-4 opacity-60 blur-[1px]" />
            <div className="relative z-10 w-32 bg-[#141414] border border-white/10 shadow-2xl rounded-2xl p-4 flex flex-col items-center">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" className="w-12 h-12 rounded-full mb-2 bg-indigo-500/20" alt="avatar" />
              <p className="text-xs font-bold mb-1 text-white">Liam Foster</p>
              <div className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Excellent
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Middle: Chatbots */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="dark-card p-8 flex flex-col relative overflow-hidden h-[280px] card-lift"
        >
          <h3 className="text-xl font-bold mb-2 text-white">Chatbots and 24/7 conversational agents</h3>

          {/* Graph */}
          <div className="absolute bottom-0 left-0 right-0 h-28 overflow-hidden">
            <div className="absolute bottom-4 right-5 text-[10px] font-mono text-white/30 z-10">Total Sales: 10K</div>
            <svg viewBox="0 0 400 120" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,120 L0,80 Q50,100 100,60 T200,70 T300,35 T400,80 L400,120 Z" fill="url(#chartGrad)" />
              <path d="M0,80 Q50,100 100,60 T200,70 T300,35 T400,80" stroke="#7c3aed" strokeWidth="2" fill="none" opacity="0.8" />
            </svg>
          </div>
        </motion.div>

        {/* Bottom Right: CRM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="dark-card p-8 flex flex-col relative overflow-hidden h-[280px] card-lift"
        >
          <h3 className="text-xl font-bold mb-2 text-white">CRM and sales automations</h3>

          {/* Concentric rings */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-36 flex justify-center items-end pb-4 overflow-hidden">
            {[240, 180, 120].map((size, i) => (
              <div
                key={i}
                className="border border-white/[0.07] rounded-full absolute"
                style={{ width: size, height: size, bottom: -(size / 2) + 20 }}
              >
                {i === 0 && (
                  <div className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center text-white absolute top-6 -left-3">
                    <Mail className="w-3 h-3" />
                  </div>
                )}
                {i === 1 && (
                  <div className="w-5 h-5 bg-white/15 rounded-full flex items-center justify-center text-white absolute top-4 right-0">
                    <Link className="w-2.5 h-2.5" />
                  </div>
                )}
                {i === 2 && (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                    className="w-9 h-9 bg-gradient-to-br from-violet-700 to-purple-800 rounded-full flex items-center justify-center text-white absolute -top-2 left-1/2 -translate-x-1/2 shadow-[0_0_20px_rgba(124,58,237,0.5)]"
                  >
                    <Zap className="w-4 h-4" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
