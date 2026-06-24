"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import TextReveal from "./TextReveal";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Most of our AI integration and website projects take between 4 to 8 weeks, depending on the complexity of the custom agents and CRM workflows.",
  },
  {
    question: "Do you maintain the AI systems after launch?",
    answer: "Yes, we offer ongoing maintenance and optimization packages to ensure your AI agents learn and your automations run smoothly as your business scales.",
  },
  {
    question: "What platforms do you build websites on?",
    answer: "We specialize in modern frameworks like Next.js and React for highly custom web applications, but we also build scalable marketing sites on Webflow and Framer.",
  },
  {
    question: "Can AI really replace our customer support?",
    answer: "AI doesn't replace your team; it supercharges them. Our custom chatbots handle 80% of routine inquiries 24/7, allowing your human agents to focus on complex, high-value conversations.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-32 px-6 flex flex-col items-center bg-[#080808]">

      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-64 bg-violet-900/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Tag */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-tag mb-8 relative z-10"
      >
        <span>007</span>
        <div className="w-1 h-1 rounded-full bg-white/40" />
        FAQ
      </motion.div>

      <div className="text-4xl md:text-6xl font-bold tracking-tight mb-20 text-center relative z-10">
        <TextReveal text="Common Questions" delay={0.1} />
      </div>

      <div className="w-full max-w-3xl space-y-3 relative z-10">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "bg-[#141414] border-white/[0.1] rounded-3xl"
                  : "bg-transparent border-white/[0.06] rounded-full hover:border-white/10"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`text-base md:text-lg font-semibold transition-colors ${isOpen ? "text-white" : "text-white/60"}`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ml-4 transition-all duration-300 ${
                  isOpen ? "bg-violet-500/20 border border-violet-500/30 text-violet-300" : "bg-white/[0.06] border border-white/[0.08] text-white/40"
                }`}>
                  {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-white/40 leading-relaxed text-sm md:text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
