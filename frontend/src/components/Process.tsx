"use client";

import { motion } from "framer-motion";
import TextReveal from "./TextReveal";

const processSteps = [
  {
    number: "01",
    title: "Business & Website Audit",
    description: "We review your website, funnels, CRM, workflows, and bottlenecks.",
    color: "from-violet-500/20 to-transparent",
    dot: "bg-violet-500",
  },
  {
    number: "02",
    title: "AI Growth Blueprint",
    description: "We map the agents, automations, chatbot flows, and integrations your business needs.",
    color: "from-blue-500/20 to-transparent",
    dot: "bg-blue-500",
  },
  {
    number: "03",
    title: "Build & Integration",
    description: "We build websites, AI systems, CRM automations, and workflows around your existing tools.",
    color: "from-cyan-500/20 to-transparent",
    dot: "bg-cyan-500",
  },
  {
    number: "04",
    title: "Testing & SEO Optimisation",
    description: "We refine performance, conversion, search visibility, and automation reliability.",
    color: "from-pink-500/20 to-transparent",
    dot: "bg-pink-500",
  },
  {
    number: "05",
    title: "Launch & Scale",
    description: "We deploy, monitor, and improve your AI systems as your business grows.",
    color: "from-emerald-500/20 to-transparent",
    dot: "bg-emerald-500",
  },
];

export default function Process() {
  return (
    <section className="relative py-32 px-6 flex flex-col items-center overflow-hidden bg-[#080808]">

      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/[0.05] to-transparent pointer-events-none" />

      {/* Tag */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-tag mb-8 relative z-10"
      >
        <span>005</span>
        <div className="w-1 h-1 rounded-full bg-white/40" />
        HOW WE WORK
      </motion.div>

      <div className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-center relative z-10">
        <TextReveal text="A proven process for" delay={0.1} />
      </div>
      <div className="text-4xl md:text-6xl font-bold tracking-tight mb-24 text-center relative z-10">
        <TextReveal text="rapid implementation." className="text-white/25" delay={0.25} />
      </div>

      {/* Timeline */}
      <div className="relative w-full max-w-4xl mx-auto">

        {/* Center vertical line */}
        <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent md:-translate-x-1/2" />

        {processSteps.map((step, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={step.number}
              className={`relative flex flex-col md:flex-row items-start md:items-center justify-between mb-20 last:mb-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Timeline node */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute left-[24px] md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#0f0f0f] border border-white/10 shadow-xl flex items-center justify-center z-10"
              >
                <div className={`w-4 h-4 rounded-full ${step.dot} shadow-[0_0_12px_var(--tw-shadow-color)]`} />
              </motion.div>

              {/* Card */}
              <motion.div
                initial={{ opacity: 0, y: 30, x: isEven ? -20 : 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className={`w-full md:w-[45%] pl-16 md:pl-0 ${isEven ? 'md:pr-10' : 'md:pl-10'}`}
              >
                <div className={`bg-gradient-to-br ${step.color} border border-white/[0.07] rounded-[2rem] p-8 relative overflow-hidden group hover:border-white/12 transition-colors card-lift`}>
                  {/* Big number watermark */}
                  <div className={`absolute -bottom-8 ${isEven ? '-left-4' : '-right-4'} text-[8rem] font-black text-white/[0.025] pointer-events-none select-none group-hover:text-white/[0.04] transition-colors duration-500`}>
                    {step.number}
                  </div>
                  <div className="relative z-10">
                    <div className="text-xs font-mono text-white/25 mb-2 tracking-widest">{step.number}</div>
                    <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                    <p className="text-white/45 leading-relaxed text-sm">{step.description}</p>
                  </div>
                </div>
              </motion.div>

              {/* Empty spacer */}
              <div className="hidden md:block w-[45%]" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
