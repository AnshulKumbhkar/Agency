"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-between items-center max-w-6xl mx-auto px-6 pointer-events-none">

      {/* Left: Spinning Gear Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="pointer-events-auto w-12 h-12 rounded-full glass-panel flex items-center justify-center shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300 group"
      >
        <svg
          viewBox="0 0 100 100"
          className="w-7 h-7 text-white/60 animate-[spin_10s_linear_infinite] group-hover:text-white transition-colors"
        >
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="6" strokeDasharray="12 12" fill="none" />
          <circle cx="50" cy="50" r="14" fill="currentColor" />
        </svg>
      </motion.div>

      {/* Right: Menu Pill */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="pointer-events-auto"
      >
        <button className="glass-panel text-white/80 font-semibold text-sm px-6 py-3 rounded-full flex items-center gap-3 shadow-lg hover:bg-white/10 hover:text-white hover:scale-105 transition-all duration-300 group">
          <span>Menu</span>
          <div className="flex flex-col gap-[4px] w-4">
            <span className="h-[1.5px] w-full bg-white/60 rounded-full group-hover:bg-white group-hover:translate-x-0.5 transition-all" />
            <span className="h-[1.5px] w-3/4 bg-white/60 rounded-full group-hover:bg-white group-hover:w-full transition-all self-end" />
            <span className="h-[1.5px] w-full bg-white/60 rounded-full group-hover:bg-white group-hover:translate-x-0.5 transition-all" />
          </div>
        </button>
      </motion.div>

    </header>
  );
}
