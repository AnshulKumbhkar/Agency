"use client";

import { motion } from "framer-motion";
import TextReveal from "./TextReveal";

const toolsRow1 = [
  "OpenAI", "Anthropic", "Claude", "ChatGPT", "Make.com", "Zapier",
  "OpenAI", "Anthropic", "Claude", "ChatGPT", "Make.com", "Zapier",
];

const toolsRow2 = [
  "HubSpot", "Salesforce", "Notion", "Airtable", "Stripe", "Shopify",
  "HubSpot", "Salesforce", "Notion", "Airtable", "Stripe", "Shopify",
];

const orbitNodes = [
  { label: "OpenAI",     angle: 0,     bg: "from-emerald-700 to-emerald-900",   abbr: "AI" },
  { label: "Zapier",     angle: 51.4,  bg: "from-orange-700 to-red-900",        abbr: "ZP" },
  { label: "Notion",     angle: 102.8, bg: "from-gray-700 to-gray-900",         abbr: "NT" },
  { label: "HubSpot",    angle: 154.2, bg: "from-orange-600 to-orange-900",     abbr: "HS" },
  { label: "Make",       angle: 205.7, bg: "from-violet-700 to-violet-900",     abbr: "MK" },
  { label: "Stripe",     angle: 257.1, bg: "from-indigo-700 to-indigo-900",     abbr: "ST" },
  { label: "Airtable",   angle: 308.5, bg: "from-cyan-700 to-cyan-900",         abbr: "AT" },
];

function OrbitNode({ label, angle, bg, abbr, radius = 148 }: { label: string; angle: number; bg: string; abbr: string; radius?: number }) {
  const rad = (angle * Math.PI) / 180;
  const x = Math.cos(rad) * radius;
  const y = Math.sin(rad) * radius;

  return (
    <motion.div
      className="absolute flex flex-col items-center"
      style={{ left: "50%", top: "50%", transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 + (angle / 800) }}
      whileHover={{ scale: 1.15 }}
    >
      <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${bg} flex items-center justify-center shadow-lg border border-white/10 text-white text-[10px] font-bold tracking-wider`}>
        {abbr}
      </div>
      <span className="text-[9px] font-medium text-white/30 mt-1.5 whitespace-nowrap">{label}</span>
    </motion.div>
  );
}

export default function Integrations() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#080808] flex flex-col items-center">

      {/* Tag */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-tag mb-12"
      >
        <span>006</span>
        <div className="w-1 h-1 rounded-full bg-white/40" />
        INTEGRATIONS
      </motion.div>

      {/* Heading */}
      <div className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-center px-6">
        <TextReveal text="Connect to your tools." delay={0.1} />
      </div>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-white/35 text-lg max-w-xl text-center mb-20 px-6"
      >
        We integrate with 50+ platforms to automate your business workflows seamlessly.
      </motion.p>

      {/* Hub + orbit */}
      <div className="relative w-full flex justify-center items-center mb-16" style={{ height: 420 }}>

        {/* Outer dashed ring (slowly rotating) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
          className="absolute rounded-full border border-dashed border-white/[0.08]"
          style={{ width: 320, height: 320 }}
        />

        {/* Inner solid ring (opposite direction) */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
          className="absolute rounded-full border border-white/[0.05]"
          style={{ width: 210, height: 210 }}
        />

        {/* Spoke lines */}
        <svg
          className="absolute pointer-events-none"
          style={{ width: 320, height: 320, left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
        >
          {orbitNodes.map((node, i) => {
            const rad = (node.angle * Math.PI) / 180;
            const cx = 160, cy = 160;
            return (
              <line
                key={i}
                x1={cx} y1={cy}
                x2={cx + Math.cos(rad) * 148}
                y2={cy + Math.sin(rad) * 148}
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="1"
                strokeDasharray="5 5"
              />
            );
          })}
        </svg>

        {/* Orbit nodes */}
        {orbitNodes.map((node) => (
          <OrbitNode key={node.label} {...node} />
        ))}

        {/* Central CTA */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="absolute w-32 h-32 bg-violet-500/20 rounded-full blur-3xl -inset-4 pointer-events-none" />
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            className="relative bg-white text-black px-8 py-4 rounded-full font-bold text-base flex items-center gap-3 shadow-2xl z-10 whitespace-nowrap hover:bg-white/90 transition-colors"
          >
            Try with Anshul
            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_12px_rgba(74,222,128,1)]" />
          </motion.button>
        </div>
      </div>

      {/* Marquee rows */}
      <div className="relative w-full flex flex-col gap-5 overflow-hidden">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

        {/* Row 1 */}
        <div className="overflow-hidden">
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
            className="flex gap-5 whitespace-nowrap"
          >
            {toolsRow1.map((tool, i) => (
              <div key={i} className="dark-card border border-white/[0.06] rounded-full px-7 py-3.5 text-base font-semibold flex items-center gap-3 flex-shrink-0 text-white/60">
                <div className="w-5 h-5 bg-white/10 rounded-full" />
                {tool}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="overflow-hidden">
          <motion.div
            animate={{ x: [-1200, 0] }}
            transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
            className="flex gap-5 whitespace-nowrap"
          >
            {toolsRow2.map((tool, i) => (
              <div key={i} className="dark-card border border-white/[0.06] rounded-full px-7 py-3.5 text-base font-semibold flex items-center gap-3 flex-shrink-0 text-white/60">
                <div className="w-5 h-5 bg-white/10 rounded-full" />
                {tool}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}
