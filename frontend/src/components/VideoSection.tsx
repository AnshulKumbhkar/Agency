"use client";

import { motion } from "framer-motion";
import TextReveal from "./TextReveal";

export default function VideoSection() {
  return (
    <section className="relative py-32 px-6 flex flex-col items-center overflow-hidden bg-[#080808]">

      {/* Subtle separator line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      {/* Tag */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-tag mb-16"
      >
        <span>001</span>
        <div className="w-1 h-1 rounded-full bg-white/40" />
        WHO WE ARE
      </motion.div>

      {/* Large fading paragraph with roll-up */}
      <div className="text-3xl md:text-5xl lg:text-[56px] text-center max-w-5xl font-medium leading-[1.25] mb-32">
        <TextReveal
          text="Anshul Kumaar & co. helps businesses launch high-converting websites, connect AI into daily operations, and automate sales, support, and growth workflows."
          className="text-white/20 leading-[1.3]"
          stagger={0.025}
          delay={0.1}
        />
      </div>

      {/* Video Container */}
      <div className="relative w-full max-w-6xl flex justify-center items-center overflow-hidden py-8">

        {/* Scrolling ticker text */}
        <div className="absolute inset-x-0 flex select-none pointer-events-none z-0 overflow-hidden">
          <motion.div
            animate={{ x: [0, -900] }}
            transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
            className="flex gap-24 whitespace-nowrap text-[11vw] font-black text-white opacity-[0.025] tracking-tighter uppercase"
          >
            <span>80% Productivity Boost</span>
            <span>✦</span>
            <span>5X Revenue Growth</span>
            <span>✦</span>
            <span>80% Productivity Boost</span>
            <span>✦</span>
            <span>5X Revenue Growth</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.7)] border border-white/[0.06]"
        >
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
            alt="Team meeting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />



          {/* Stats overlay badges */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-3"
          >
            <div className="text-2xl font-bold text-white">500+</div>
            <div className="text-xs text-white/50 font-medium">Projects Delivered</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="absolute bottom-6 right-6 bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-3"
          >
            <div className="text-2xl font-bold text-white">95%</div>
            <div className="text-xs text-white/50 font-medium">Client Satisfaction</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
