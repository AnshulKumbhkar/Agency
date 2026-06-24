"use client";

import { motion } from "framer-motion";
import { Sparkles, Rocket, Blocks } from "lucide-react";
import TextReveal from "./TextReveal";

const valueCards = [
  {
    number: "01",
    title: "AI Strategy for Growth",
    description: "We identify where AI can improve operations, sales, support, and customer experience.",
    Icon: Sparkles,
    gradient: "from-violet-600/20 to-purple-600/10",
    glow: "rgba(139,92,246,0.3)",
  },
  {
    number: "02",
    title: "Websites with AI Built In",
    description: "We develop and redesign websites that connect to AI tools, automations, and business systems.",
    Icon: Rocket,
    gradient: "from-pink-600/20 to-rose-600/10",
    glow: "rgba(236,72,153,0.3)",
  },
  {
    number: "03",
    title: "Automation That Actually Works",
    description: "Every workflow is tailored to your tools, team, and growth goals — no generic templates.",
    Icon: Blocks,
    gradient: "from-cyan-600/20 to-blue-600/10",
    glow: "rgba(6,182,212,0.3)",
  },
];

export default function ValueSection() {
  return (
    <section className="relative py-32 px-6 flex flex-col items-center overflow-hidden bg-[#080808]">

      {/* Background orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-900/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Tag */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-tag mb-8"
      >
        <span>002</span>
        <div className="w-1 h-1 rounded-full bg-white/40" />
        VALUE
      </motion.div>

      <div className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-center">
        <TextReveal text="Why Choose Us?" delay={0.1} />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-white/40 text-center max-w-2xl text-lg mb-20 leading-relaxed"
      >
        From website redesigns to AI agents and sales automation, we build practical AI systems that reduce manual work and create faster growth loops.
      </motion.p>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl">
        {valueCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 dark-card p-6 flex flex-col items-center text-center card-lift group"
          >
            {/* Inner icon panel */}
            <div className={`w-full aspect-square bg-gradient-to-br ${card.gradient} rounded-[2rem] p-8 relative flex items-center justify-center mb-8 overflow-hidden border border-white/[0.05]`}>
              {/* Dot grid */}
              <div
                className="absolute inset-0 opacity-30"
                style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '18px 18px' }}
              />

              {/* Glow */}
              <div
                className="absolute w-32 h-32 rounded-full blur-3xl opacity-40 pointer-events-none"
                style={{ background: card.glow }}
              />

              {/* Icon orb */}
              <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center z-10 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                <card.Icon className="w-10 h-10 text-white" />
              </div>

              {/* Number */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm text-white/70 px-3 py-1 rounded-md text-xs font-mono font-bold tracking-widest border border-white/10">
                {card.number}
              </div>
            </div>

            <h3 className="text-xl font-bold mb-3 text-white">{card.title}</h3>
            <p className="text-white/40 leading-relaxed text-sm md:text-base">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
